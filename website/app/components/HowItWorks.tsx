"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Collect Sample",
    time: "30 seconds",
    description:
      "Draw 500 uL of water directly into the TRACE-1 cartridge using the integrated sample port. No syringes, pipettes, or reagents needed.",
    detail: "Works with tap water, groundwater, or treated water. No filtration or pre-treatment required.",
    color: "#3b82f6",
  },
  {
    number: "2",
    title: "Insert Cartridge",
    time: "5 seconds",
    description:
      "Snap the disposable cartridge into the reader. Spring-loaded pogo pins automatically connect to the chip's gold contact pads.",
    detail: "Audible click confirms proper seating. Reader auto-detects cartridge lot and loads calibration data.",
    color: "#06b6d4",
  },
  {
    number: "3",
    title: "Automated Analysis",
    time: "12 minutes",
    description:
      "Microfluidic channels deliver the sample across MIP-functionalized electrodes. The reader performs electrochemical impedance spectroscopy at multiple frequencies.",
    detail:
      "On-chip reference electrode provides real-time quality control. Temperature compensation via integrated thermistor.",
    color: "#10b981",
  },
  {
    number: "4",
    title: "Quantitative Result",
    time: "Instant",
    description:
      "PFOA and PFOS concentrations displayed in parts per trillion. Color-coded against EPA MCL thresholds. Data auto-syncs to cloud dashboard.",
    detail:
      "Green: <4 ppt (compliant). Yellow: 4-10 ppt (action needed). Red: >10 ppt (immediate action).",
    color: "#f59e0b",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-accent-amber uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Sample to result in four steps.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            No training, no calibration, no sample prep. TRACE-1 reduces PFAS
            testing from a multi-week laboratory process to a 15-minute
            point-of-use workflow.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical connection line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-emerald to-accent-amber hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number circle */}
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold font-mono shrink-0 relative z-10"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `2px solid ${step.color}40`,
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${step.color}15`,
                        color: step.color,
                      }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted/70 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total time callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4 p-4 bg-surface rounded-lg border border-border"
        >
          <span className="text-sm text-muted">Total workflow time:</span>
          <span className="text-xl font-bold font-mono text-accent-emerald">
            ~13 minutes
          </span>
          <span className="text-sm text-muted">
            vs. 2-4 weeks for laboratory analysis
          </span>
        </motion.div>
      </div>
    </section>
  );
}
