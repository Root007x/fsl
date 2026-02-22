import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are Falahsys — a team obsessed with craft. Learn about our mission, values, process, and people.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
