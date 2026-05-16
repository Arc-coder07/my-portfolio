"use client";

import { motion } from "framer-motion";

export function GeometricWireframes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Wireframe Circle 1 */}
      <motion.div
        className="absolute top-[15%] left-[2%] w-64 h-64 rounded-full border border-border-subtle opacity-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Wireframe Circle 2 (nested) */}
      <motion.div
        className="absolute top-[17%] left-[4%] w-48 h-48 rounded-full border border-border opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ borderStyle: 'dashed' }}
      />

      {/* Wireframe Square */}
      <motion.div
        className="absolute bottom-[20%] right-[5%] w-72 h-72 border border-border-subtle opacity-30"
        initial={{ rotate: 15, opacity: 0 }}
        animate={{ rotate: [15, -5, 15], opacity: 0.3 }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />


      {/* Floating Plus markers */}
      <motion.div
        className="absolute top-[30%] right-[25%] opacity-30 text-text-secondary text-sm font-mono"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        +
      </motion.div>
      <motion.div
        className="absolute bottom-[40%] left-[30%] opacity-30 text-text-secondary text-sm font-mono"
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        +
      </motion.div>
    </div>
  );
}
