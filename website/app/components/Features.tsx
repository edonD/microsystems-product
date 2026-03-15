"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Sub-Regulatory Sensitivity",
    description:
      "Detects PFOA and PFOS below the EPA's 4 ppt maximum contaminant level. Molecularly imprinted polymer electrodes achieve <2 ppt limit of detection, validated against LC-MS/MS reference methods.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    title: "15-Minute Results",
    description:
      "From sample to quantitative result in under 15 minutes. No sample preparation, no reagent mixing, no calibration. Just insert the cartridge and read. Eliminates 2-4 weeks of laboratory turnaround.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
  },
  {
    title: "Cloud-Connected Intelligence",
    description:
      "Every test result auto-syncs to the Veriflux dashboard. Track contamination trends over time, set threshold alerts, generate compliance reports, and share data with regulators — all from one platform.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    color: "text-accent-emerald",
    bgColor: "bg-accent-emerald/10",
  },
  {
    title: "Robust in Real Water",
    description:
      "Unlike biological sensors that degrade with temperature and pH variation, MIP-based recognition elements are thermally stable (5-45 C), chemically robust, and have 12+ month shelf life. No cold chain required.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
  },
];

export default function Features() {
  return (
    <section id="technology" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-emerald uppercase tracking-wider mb-4">
            Key Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Engineered for the field, validated for the lab.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Every component of TRACE-1 — from the microfluidic chip geometry to
            the electrode surface chemistry — is designed for reliable
            quantitative detection in real-world water matrices.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-surface rounded-xl border border-border group hover:border-border/80 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-lg ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
