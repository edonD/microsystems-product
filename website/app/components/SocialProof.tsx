"use client";

import { motion } from "framer-motion";

const badges = [
  "Designed for Water Utilities",
  "EPA MCL Compliant",
  "MEMS-Fabricated",
  "ISO 17025 Ready",
  "Cloud Connected",
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-muted uppercase tracking-wider font-medium">
            Built for
          </span>
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-sm text-muted/80 font-mono px-3 py-1 border border-border rounded"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
