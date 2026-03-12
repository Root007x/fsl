"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          >
            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-foreground rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                <h2 id="modal-title" className="text-2xl font-bold tracking-tight">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto overscroll-contain">
                {children}
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-muted/30 border-t border-gray-100 flex justify-end shrink-0">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-foreground text-white font-medium hover:bg-foreground/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
