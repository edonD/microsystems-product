"use client";

import { motion } from "framer-motion";

export default function Technology() {
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
          <p className="text-sm font-mono text-accent-blue uppercase tracking-wider mb-4">
            The Science
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Molecularly imprinted polymers meet microfluidics.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            TRACE-1 combines two proven technologies — synthetic molecular
            recognition and miniaturized electrochemistry — into a single
            MEMS-fabricated chip.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* MIP explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-surface rounded-xl border border-border"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent-cyan">
              Molecularly Imprinted Polymers (MIPs)
            </h3>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                MIPs are synthetic antibody mimics. They are created by
                polymerizing a conducting polymer (polypyrrole) around a target
                molecule — in this case, PFOA or PFOS.
              </p>
              <p>
                When the target template is removed, the polymer retains
                nanoscale cavities that are complementary in size, shape, and
                chemical functionality to the original molecule. These cavities
                selectively rebind the target from complex water samples.
              </p>

              {/* MIP process visualization */}
              <div className="flex items-center justify-between gap-2 py-4">
                {[
                  {
                    label: "Template",
                    desc: "PFAS molecule",
                    icon: (
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center text-[10px] font-mono text-accent-blue">
                        PFOA
                      </div>
                    ),
                  },
                  {
                    label: "Polymerize",
                    desc: "Form around template",
                    icon: (
                      <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    label: "Remove",
                    desc: "Wash out template",
                    icon: (
                      <div className="w-10 h-10 rounded-lg bg-accent-amber/20 border border-accent-amber/40 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    label: "Rebind",
                    desc: "Selective capture",
                    icon: (
                      <div className="w-10 h-10 rounded-lg bg-accent-emerald/20 border border-accent-emerald/40 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    ),
                  },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    {step.icon}
                    <span className="text-[10px] font-medium text-foreground mt-2">
                      {step.label}
                    </span>
                    <span className="text-[9px] text-muted">{step.desc}</span>
                  </div>
                ))}
              </div>

              <p>
                Unlike biological antibodies, MIPs are thermally stable,
                chemically robust, and reproducibly fabricated via
                electropolymerization — making them ideal for field-deployable
                sensors.
              </p>
            </div>
          </motion.div>

          {/* EIS explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-surface rounded-xl border border-border"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent-emerald">
              Electrochemical Impedance Spectroscopy (EIS)
            </h3>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                When PFAS molecules bind to the MIP cavities on the electrode
                surface, they block ion transport at the electrode-solution
                interface. This increases the charge transfer resistance
                (R<sub>ct</sub>), which is measured by applying a small AC
                voltage across a range of frequencies.
              </p>
              <p>
                The change in R<sub>ct</sub> is directly proportional to the
                concentration of PFAS bound to the surface, enabling
                quantitative detection down to sub-parts-per-trillion levels.
              </p>

              {/* Impedance change visualization */}
              <div className="p-4 bg-background rounded-lg border border-border/50">
                <div className="text-[10px] font-mono text-muted mb-2">
                  Nyquist Plot — Impedance Response
                </div>
                <svg viewBox="0 0 300 150" className="w-full">
                  {/* Axes */}
                  <line x1="40" y1="130" x2="280" y2="130" stroke="#374151" strokeWidth="1" />
                  <line x1="40" y1="130" x2="40" y2="10" stroke="#374151" strokeWidth="1" />
                  <text x="160" y="148" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace">
                    Z&apos; (real)
                  </text>
                  <text x="12" y="70" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" transform="rotate(-90, 12, 70)">
                    -Z&apos;&apos; (imag)
                  </text>

                  {/* Baseline curve (no PFAS) */}
                  <path
                    d="M 60 130 Q 80 80 120 60 Q 160 40 200 50 Q 230 58 250 70"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <text x="252" y="75" fill="#6b7280" fontSize="8" fontFamily="monospace">
                    Blank
                  </text>

                  {/* PFAS-bound curve (larger semicircle) */}
                  <path
                    d="M 60 130 Q 90 60 140 35 Q 190 10 240 30 Q 265 42 275 55"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <text x="270" y="48" fill="#10b981" fontSize="8" fontFamily="monospace">
                    4 ppt
                  </text>

                  {/* Delta Rct arrow */}
                  <line x1="120" y1="105" x2="140" y2="105" stroke="#f59e0b" strokeWidth="1" markerEnd="url(#arrow)" />
                  <line x1="140" y1="105" x2="120" y2="105" stroke="#f59e0b" strokeWidth="1" markerStart="url(#arrow)" />
                  <text x="130" y="118" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">
                    ΔRct
                  </text>
                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
                      <path d="M0,0 L6,2 L0,4" fill="#f59e0b" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <p>
                The miniaturized potentiostat in the reader (based on the Analog
                Devices AD5940) performs the entire EIS measurement automatically,
                extracting R<sub>ct</sub> via equivalent circuit fitting.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why MEMS matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 bg-surface rounded-xl border border-border"
        >
          <h3 className="text-lg font-semibold mb-4">
            Why microsystems engineering matters
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Precision at scale",
                description:
                  "Photolithographic patterning produces electrode features with sub-micron precision across an entire wafer. 40-60 identical chips per 4-inch wafer, each with the same geometry and performance.",
              },
              {
                title: "Microfluidic advantage",
                description:
                  "At the microscale, surface-to-volume ratios are 1000x larger than benchtop systems. This means faster analyte transport to the sensor surface, enabling detection in minutes instead of hours.",
              },
              {
                title: "Integration barrier",
                description:
                  "Combining microfluidics, electrode patterning, surface chemistry, and electrochemical sensing on a single chip requires cleanroom fabrication expertise — a genuine barrier to entry for competitors.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
