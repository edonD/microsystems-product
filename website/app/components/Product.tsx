"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Collect",
    description:
      "Draw a 500 uL water sample directly into the disposable TRACE-1 cartridge. No sample prep, no reagents, no filtration.",
    color: "text-accent-blue",
    borderColor: "border-accent-blue/30",
  },
  {
    number: "02",
    title: "Insert",
    description:
      "Snap the cartridge into the handheld reader. Spring-loaded pogo pins make electrical contact with the chip's electrode pads automatically.",
    color: "text-accent-cyan",
    borderColor: "border-accent-cyan/30",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Microfluidic channels deliver the sample across MIP-functionalized gold electrodes. Electrochemical impedance spectroscopy measures PFAS binding at sub-ppt resolution.",
    color: "text-accent-emerald",
    borderColor: "border-accent-emerald/30",
  },
  {
    number: "04",
    title: "Result",
    description:
      "Quantitative PFOA and PFOS concentrations in under 15 minutes. Data auto-syncs to the Veriflux cloud dashboard via WiFi or Bluetooth.",
    color: "text-accent-amber",
    borderColor: "border-accent-amber/30",
  },
];

export default function Product() {
  return (
    <section id="product" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
            The Product
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            TRACE-1: Lab-quality PFAS detection in your hand.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A portable microfluidic electrochemical analyzer that replaces weeks
            of laboratory turnaround with 15-minute on-site results — at
            sensitivities that meet EPA regulatory limits.
          </p>
        </motion.div>

        {/* How it works steps */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 bg-surface rounded-xl border ${step.borderColor}`}
            >
              <span className={`font-mono text-sm font-bold ${step.color}`}>
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product visual - chip diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 bg-surface rounded-xl border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Chip illustration */}
            <div className="relative aspect-[4/3] bg-background rounded-lg border border-border flex items-center justify-center overflow-hidden">
              <div className="relative w-48 h-32">
                {/* Chip body */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-surface rounded-lg border border-border" />
                {/* Channel paths */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 192 128"
                >
                  {/* Serpentine channel */}
                  <path
                    d="M20 30 H80 V50 H40 V70 H80 V90 H20"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Electrode zones */}
                  <rect
                    x="100"
                    y="20"
                    width="50"
                    height="25"
                    rx="3"
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="1"
                  />
                  <rect
                    x="100"
                    y="52"
                    width="50"
                    height="25"
                    rx="3"
                    fill="rgba(16, 185, 129, 0.2)"
                    stroke="rgba(16, 185, 129, 0.5)"
                    strokeWidth="1"
                  />
                  <rect
                    x="100"
                    y="84"
                    width="50"
                    height="25"
                    rx="3"
                    fill="rgba(245, 158, 11, 0.2)"
                    stroke="rgba(245, 158, 11, 0.5)"
                    strokeWidth="1"
                  />
                  {/* Connection lines */}
                  <line
                    x1="80"
                    y1="40"
                    x2="100"
                    y2="32"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="80"
                    y1="60"
                    x2="100"
                    y2="65"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="80"
                    y1="80"
                    x2="100"
                    y2="97"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="1.5"
                  />
                  {/* Contact pads */}
                  {[20, 40, 60, 80, 100].map((y) => (
                    <rect
                      key={y}
                      x="170"
                      y={y}
                      width="12"
                      height="8"
                      rx="1"
                      fill="rgba(245, 158, 11, 0.4)"
                    />
                  ))}
                </svg>
                {/* Labels */}
                <div className="absolute top-3 right-8 text-[8px] font-mono text-accent-blue">
                  PFOA
                </div>
                <div className="absolute top-[45%] right-8 text-[8px] font-mono text-accent-emerald translate-y-[-50%]">
                  PFOS
                </div>
                <div className="absolute bottom-3 right-8 text-[8px] font-mono text-accent-amber">
                  REF
                </div>
              </div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-muted">
                TRACE-1 Microfluidic Chip — 15mm x 30mm
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Multi-zone microfluidic architecture
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    label: "Serpentine pre-concentration",
                    detail:
                      "Maximizes analyte capture from sub-milliliter samples",
                  },
                  {
                    label: "Dedicated PFOA electrode",
                    detail:
                      "MIP-functionalized gold IDEs tuned for perfluorooctanoic acid",
                  },
                  {
                    label: "Dedicated PFOS electrode",
                    detail:
                      "Separate MIP formulation optimized for perfluorooctane sulfonate",
                  },
                  {
                    label: "Reference electrode",
                    detail:
                      "Non-imprinted polymer control for differential measurement and QC",
                  },
                  {
                    label: "Contact pad array",
                    detail:
                      "Gold pads interface with reader via spring-loaded pogo pins",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                    <div>
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-muted ml-1">
                        — {item.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
