"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ChevronDown, Globe2, Zap, Users } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   3-D GLOBE WITH ANIMATED ARCS
   - Lat/lon grid projected onto a rotating sphere
   - City dots on the surface pulse
   - Glowing great-circle arcs animate between cities
   - Designed for dark (#070B18) background
───────────────────────────────────────────────────────────── */

/** Convert lat/lon + rotation angle → canvas (x, y, visible) */
function project(
  lat: number, lon: number,
  rotY: number,
  cx: number, cy: number, R: number
) {
  const phi   = (90 - lat)  * (Math.PI / 180);  // polar angle
  const theta = (lon + rotY) * (Math.PI / 180); // azimuth + rotation

  const x3 =  R * Math.sin(phi) * Math.cos(theta);
  const y3 = -R * Math.cos(phi);
  const z3 =  R * Math.sin(phi) * Math.sin(theta);

  const visible = z3 > -R * 0.08; // hide back-face with slight bleed
  const scale   = 1; // orthographic
  return { sx: cx + x3 * scale, sy: cy + y3 * scale, z: z3, visible };
}

const CITIES: { name: string; lat: number; lon: number }[] = [
  { name: "New York",     lat:  40.7,  lon:  -74 },
  { name: "London",       lat:  51.5,  lon:   -0.1 },
  { name: "Dubai",        lat:  25.2,  lon:   55.3 },
  { name: "Singapore",    lat:   1.4,  lon:  103.8 },
  { name: "Tokyo",        lat:  35.7,  lon:  139.7 },
  { name: "Sydney",       lat: -33.9,  lon:  151.2 },
  { name: "São Paulo",    lat: -23.5,  lon:  -46.6 },
  { name: "Lagos",        lat:   6.5,  lon:    3.4 },
  { name: "Mumbai",       lat:  19.1,  lon:   72.9 },
  { name: "Cairo",        lat:  30.0,  lon:   31.2 },
  { name: "Toronto",      lat:  43.7,  lon:  -79.4 },
  { name: "Seoul",        lat:  37.6,  lon:  126.9 },
  { name: "Dhaka",        lat:  23.8,  lon:   90.4 },
  { name: "Paris",        lat:  48.9,  lon:    2.3 },
  { name: "Berlin",       lat:  52.5,  lon:   13.4 },
  { name: "Nairobi",      lat:  -1.3,  lon:   36.8 },
];

/** Interpolate between two lat/lon points along a great circle */
function slerp(
  lat1: number, lon1: number,
  lat2: number, lon2: number,
  t: number
) {
  const toR = Math.PI / 180;
  const p1 = {
    x: Math.cos(lat1*toR) * Math.cos(lon1*toR),
    y: Math.sin(lat1*toR),
    z: Math.cos(lat1*toR) * Math.sin(lon1*toR),
  };
  const p2 = {
    x: Math.cos(lat2*toR) * Math.cos(lon2*toR),
    y: Math.sin(lat2*toR),
    z: Math.cos(lat2*toR) * Math.sin(lon2*toR),
  };
  const dot = Math.min(1, p1.x*p2.x + p1.y*p2.y + p1.z*p2.z);
  const omega = Math.acos(dot);
  if (omega < 0.001) return { lat: lat1, lon: lon1 };
  const s = 1 / Math.sin(omega);
  const f1 = Math.sin((1-t)*omega) * s;
  const f2 = Math.sin(t*omega) * s;
  const rx = f1*p1.x + f2*p2.x;
  const ry = f1*p1.y + f2*p2.y;
  const rz = f1*p1.z + f2*p2.z;
  const lat = Math.atan2(ry, Math.sqrt(rx*rx + rz*rz)) / toR;
  const lon = Math.atan2(rz, rx) / toR;
  return { lat, lon };
}

interface Arc {
  from: number; to: number;
  t: number; speed: number;
  trail: number; // how long the drawn trail is (0–1)
  color: string;
}

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let rotY = 0; // degrees
    const ROT_SPEED = 0.12; // deg/frame

    const arcs: Arc[] = [];
    const MAX_ARCS = 5;
    const ARC_COLORS = [
      "rgba(56,189,248,",   // sky
      "rgba(139,92,246,",   // violet
      "rgba(52,211,153,",   // emerald
      "rgba(251,191,36,",   // amber
    ];

    function spawnArc() {
      if (arcs.length >= MAX_ARCS) return;
      const fi = Math.floor(Math.random() * CITIES.length);
      let ti = Math.floor(Math.random() * CITIES.length);
      while (ti === fi) ti = Math.floor(Math.random() * CITIES.length);
      arcs.push({
        from: fi, to: ti,
        t: 0,
        speed: 0.0022 + Math.random() * 0.0018,
        trail: 0.18 + Math.random() * 0.14,
        color: ARC_COLORS[Math.floor(Math.random() * ARC_COLORS.length)],
      });
    }

    let frame = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;
      const R  = Math.min(W, H) * 0.38;

      rotY += ROT_SPEED;
      frame++;
      if (frame % 90 === 0) spawnArc();

      /* ── Atmosphere glow ── */
      const atmos = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R * 1.28);
      atmos.addColorStop(0,   "rgba(56,189,248,0.18)");
      atmos.addColorStop(0.5, "rgba(99,102,241,0.14)");
      atmos.addColorStop(1,   "rgba(56,189,248,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
      ctx.fillStyle = atmos; ctx.fill();

      /* ── Globe base fill ── */
      const globeFill = ctx.createRadialGradient(cx - R*0.25, cy - R*0.25, 0, cx, cy, R);
      globeFill.addColorStop(0,   "rgba(45,60,130,0.9)");
      globeFill.addColorStop(0.6, "rgba(18,24,70,0.93)");
      globeFill.addColorStop(1,   "rgba(7,11,35,0.96)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = globeFill; ctx.fill();

      /* ── Latitude lines ── */
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 3) {
          const p = project(lat, lon, rotY, cx, cy, R);
          if (!p.visible) { first = true; continue; }
          first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
          first = false;
        }
        ctx.strokeStyle = "rgba(120,150,255,0.28)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      /* ── Longitude lines ── */
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -85; lat <= 85; lat += 3) {
          const p = project(lat, lon, rotY, cx, cy, R);
          if (!p.visible) { first = true; continue; }
          first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
          first = false;
        }
        ctx.strokeStyle = "rgba(120,150,255,0.28)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      /* ── Globe rim highlight ── */
      const rim = ctx.createRadialGradient(cx, cy, R * 0.88, cx, cy, R);
      rim.addColorStop(0, "rgba(56,189,248,0)");
      rim.addColorStop(1, "rgba(56,189,248,0.22)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99,102,241,0.75)";
      ctx.lineWidth   = 1.8;
      ctx.stroke();
      ctx.fillStyle = rim; ctx.fill();

      /* ── Animated arcs ── */
      for (let a = arcs.length - 1; a >= 0; a--) {
        const arc = arcs[a];
        arc.t += arc.speed;
        if (arc.t > 1 + arc.trail) { arcs.splice(a, 1); continue; }

        const steps = 60;
        const tHead = Math.min(1, arc.t);
        const tTail = Math.max(0, arc.t - arc.trail);

        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= steps; s++) {
          const frac = s / steps;
          if (frac < tTail || frac > tHead) continue;
          const { lat, lon } = slerp(
            CITIES[arc.from].lat, CITIES[arc.from].lon,
            CITIES[arc.to].lat,   CITIES[arc.to].lon,
            frac
          );
          /* lift the arc above the surface */
          const liftR = R * (1 + 0.18 * Math.sin(Math.PI * frac));
          const p = project(lat, lon, rotY, cx, cy, liftR);
          if (!p.visible) { started = false; continue; }
          const alphaFrac = (frac - tTail) / (tHead - tTail);
          const alpha = Math.sin(alphaFrac * Math.PI) * 0.9;
          if (!started) { ctx.beginPath(); started = true; ctx.moveTo(p.sx, p.sy); }
          else ctx.lineTo(p.sx, p.sy);
          _ = alpha; // used below
        }
        ctx.strokeStyle = arc.color + "0.7)";
        ctx.lineWidth   = 1.6;
        ctx.shadowColor = arc.color + "1)";
        ctx.shadowBlur  = 10;
        ctx.stroke();
        ctx.shadowBlur  = 0;

        /* Arc head dot */
        if (arc.t <= 1) {
          const { lat, lon } = slerp(
            CITIES[arc.from].lat, CITIES[arc.from].lon,
            CITIES[arc.to].lat,   CITIES[arc.to].lon,
            arc.t
          );
          const liftR = R * (1 + 0.18 * Math.sin(Math.PI * arc.t));
          const p = project(lat, lon, rotY, cx, cy, liftR);
          if (p.visible) {
            const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, 8);
            grd.addColorStop(0, arc.color + "1)");
            grd.addColorStop(1, arc.color + "0)");
            ctx.beginPath(); ctx.arc(p.sx, p.sy, 8, 0, Math.PI * 2);
            ctx.fillStyle = grd; ctx.fill();
            ctx.beginPath(); ctx.arc(p.sx, p.sy, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "#fff"; ctx.fill();
          }
        }
      }

      /* ── City dots ── */
      const T = Date.now() / 1000;
      CITIES.forEach((city, i) => {
        const p = project(city.lat, city.lon, rotY, cx, cy, R);
        if (!p.visible) return;
        const pulse = 0.7 + 0.35 * Math.sin(T * 1.8 + i * 1.1);

        /* outer ring */
        const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, 12 * pulse);
        grd.addColorStop(0, `rgba(56,189,248,${0.55 * pulse})`);
        grd.addColorStop(1, "rgba(56,189,248,0)");
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 12 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = grd; ctx.fill();

        /* core dot */
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220,242,255,1)"; ctx.fill();
      });

      /* ── Specular highlight ── */
      const spec = ctx.createRadialGradient(cx - R*0.32, cy - R*0.3, 0, cx - R*0.1, cy - R*0.1, R*0.7);
      spec.addColorStop(0,   "rgba(255,255,255,0.07)");
      spec.addColorStop(1,   "rgba(255,255,255,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec; ctx.fill();

      raf = requestAnimationFrame(draw);
    }

    // eslint-disable-next-line prefer-const
    let _: number = 0; // suppress unused warning (used in loop)

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize(); draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-stretch overflow-hidden"
      aria-label="Hero"
      style={{
        background:
          "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #070B18 50%, #070B18 100%)",
      }}
    >
      {/* Dot grid — light side */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(100,116,139,0.4) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          clipPath: "inset(0 50% 0 0)",
        }}
      />

      {/* Star field — dark side (deterministic, no Math.random in render) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      >
        {Array.from({ length: 70 }).map((_, i) => {
          const size = i % 8 === 0 ? 2 : 1;
          const top  = ((i * 137.508) % 100).toFixed(2);
          const left = ((i * 97.314)  % 100).toFixed(2);
          const opacity = (0.08 + (i % 5) * 0.07).toFixed(2);
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{ width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`, opacity }}
            />
          );
        })}
      </div>

      {/* Diagonal seam glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(135deg, transparent 48%, rgba(99,102,241,0.15) 50%, transparent 52%)",
        }}
      />

      <Container className="relative z-10 mx-auto flex w-full max-w-7xl px-6 flex-col lg:flex-row">

        {/* ── LEFT ── */}
        <div className="flex flex-1 flex-col justify-center py-28 lg:py-0 lg:pr-16 max-w-[600px]">



          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-7 text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]"
          >
            <AnimatedText text="We Build Digital" />
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #4f46e5 0%, #0ea5e9 55%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Solutions
            </span>{" "}
            <span className="text-slate-900">That</span>
            <br />
            <span className="text-slate-900">Help Businesses </span>
            <span
              style={{
                background: "linear-gradient(120deg, #0ea5e9 0%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grow
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-6 max-w-md text-base text-slate-500 leading-relaxed"
          >
            Falahsys connects your systems, learns from your data, and delivers
            real‑time insights and automation — so your teams move faster and
            make smarter decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-9 flex flex-wrap gap-3 items-center"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get Started →
            </Button>
            <Button href="/#services" variant="ghost" size="lg" className="bg-white text-slate-800 border-slate-300 hover:bg-slate-50">
              Explore Services
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xs text-slate-400"
          >
            No long-term contracts · Average delivery 4–8 weeks
          </motion.p>


          {/* Scroll cue */}
          <motion.a
            href="#services"
            aria-label="Scroll to services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 inline-flex flex-col items-start gap-1.5 text-slate-400
              hover:text-indigo-600 transition-colors group"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={18} />
            </motion.div>
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          </motion.a>
        </div>

        {/* ── RIGHT — dark panel with 3-D globe ── */}
        <motion.div
          className="relative hidden lg:flex flex-1 items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Ambient purple glow behind globe */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="h-[600px] w-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(56,189,248,0.16) 45%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Globe canvas */}
          <div className="absolute inset-0">
            <GlobeCanvas />
          </div>

          {/* Floating card — top right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-6 z-20 flex flex-col gap-1.5
              rounded-2xl border border-white/10 bg-white/[0.05]
              px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
              backdrop-blur-xl min-w-[140px]"
          >
            <div className="flex items-center gap-2">
              <Globe2 size={13} className="text-sky-400" />
              <span className="text-[10px] uppercase tracking-widest text-slate-400">
                Global Reach
              </span>
            </div>
            <span className="text-2xl font-bold text-white">12+</span>
            <span className="text-[10px] text-slate-400">Countries served</span>
          </motion.div>

          {/* Floating card — middle left */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[42%] left-16 z-20 flex flex-col gap-1.5
              rounded-2xl border border-white/10 bg-white/[0.05]
              px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
              backdrop-blur-xl min-w-[130px]"
          >
            <div className="flex items-center gap-2">
              <Users size={13} className="text-violet-400" />
              <span className="text-[10px] uppercase tracking-widest text-slate-400">
                Happy Clients
              </span>
            </div>
            <span className="text-2xl font-bold text-white">12+</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xs">★</span>
              ))}
            </div>
          </motion.div>

          {/* Floating card — bottom right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-8 z-20 flex flex-col gap-1.5
              rounded-2xl border border-white/10 bg-white/[0.05]
              px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
              backdrop-blur-xl min-w-[130px]"
          >
            <div className="flex items-center gap-2">
              <Zap size={13} className="text-emerald-400" />
              <span className="text-[10px] uppercase tracking-widest text-slate-400">
                Projects Done
              </span>
            </div>
            <span className="text-2xl font-bold text-white">7+</span>
            <span className="text-[10px] text-emerald-400">● All delivered on time</span>
          </motion.div>

          {/* Bottom label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
            flex items-center gap-2 rounded-full
            border border-white/10 bg-white/[0.04]
            px-5 py-2 backdrop-blur-xl
            text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
            <Globe2 size={11} className="text-sky-400" />
            Falahsys · Worldwide Digital Solutions
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
