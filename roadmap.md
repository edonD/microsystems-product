# Veriflux TRACE-1 — Founder Roadmap

**Complete guide from zero to product for a microfluidic PFAS detection chip.**

Also available as an interactive dashboard at `/admin` on the website.

---

## Timeline Summary (14 months)

```
M0  M1  M2  M3  M4  M5  M6  M7  M8  M9  M10  M11  M12  M13  M14
├───┤───┤───┤───┤───┤───┤───┤───┤───┤───┤────┤────┤────┤────┤────┤
│▓▓▓▓▓▓▓│                                                        │  Validation
│       │▓▓▓▓▓▓▓▓▓▓▓│                                            │  Design
│               │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                                │  Fabrication
│                   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                            │  Testing
│                           │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                    │  Packaging
│                                       │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│        │  Scale-up
│                                           │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │  GTM
│   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │  Regulatory
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┴────┴────┴────┴────┘
```

## Budget Summary

| Category | Estimated Cost | Notes |
|----------|---------------|-------|
| Materials & chemicals | $3,000-5,000 | Wafers, resist, metals, PFAS standards |
| Cleanroom access | $5,000-15,000 | University nanofab, 4-6 weeks |
| Photomasks | $600-1,500 | 3 mask levels |
| Reference lab analysis | $5,000-10,000 | LC-MS/MS validation |
| Reader electronics | $2,000-5,000 | PCB, components, dev kits |
| Cartridge tooling | $5,000-15,000 | Injection mold + 3D print prototypes |
| Software/cloud | $3,000-5,000 | Dashboard MVP, hosting |
| Regulatory (ISO 17025) | $10,000-25,000 | Accreditation |
| Marketing & conferences | $5,000-10,000 | First year |
| **Total pre-revenue** | **$40,000-95,000** | **Conservative estimate** |

---

## Stage 0: Validation (Week 1-8)

### Customer Discovery

**Target: 25+ interviews with water utility operators, lab directors, compliance officers**

Where to find them:
- State rural water associations (NRWA members)
- AWWA (American Water Works Association) conferences and local sections
- State drinking water programs (list at EPA.gov)
- LinkedIn: search "water utility superintendent" or "PFAS compliance"
- Environmental consulting firms: Arcadis, WSP, Tetra Tech, Geosyntec

Key questions:
1. How often do you currently test for PFAS? What does it cost?
2. What is your biggest pain point — cost, turnaround, or logistics?
3. If you could test on-site in 15 minutes for $75, how would your monitoring change?
4. What would make you trust a field sensor over lab results?
5. Who makes the purchasing decision for new monitoring equipment?
6. What budget cycle are you on? How is new equipment procured?

### Competitive Intelligence

Monitor these organizations:
- **FREDsense Technologies** (Calgary) — FRED-PFAS field kit, 3-4 hr results
- **Verralize** (Australia) — nanocarbon sensor array, targeting Q1 2026 launch
- **Grapheal** (France) — graphene Fluorograph sensor
- **Essence Diagnostics** (NJIT spinout) — microfluidic electrochemical
- **PFASense** (Harvard Wyss Institute) — protein-based biosensor
- **UChicago/Argonne** — AI molecular probe transistor sensors
- **PNNL** — Fast PFAS Sensor (government lab)
- **La Trobe University** — portable biosensor

### Technical Feasibility Study

Validate the core MIP electrochemical sensing concept on commercial screen-printed electrodes before committing to chip design.

**Protocol:**
1. Electropolymerize pyrrole on gold screen-printed electrodes (DropSens) with PFOA template
2. Remove template via methanol/acetic acid wash
3. Measure impedance response to PFOA standards (1-100 ppt) via EIS
4. Test specificity vs PFOS, humic acid interferents
5. Test in spiked tap water matrix

**Equipment needed:**
- Potentiostat: PalmSens4 ($5,000) or Metrohm Autolab ($15,000+)
- Screen-printed electrodes: Metrohm DropSens gold SPEs ($5/each)
- PFAS standards: Wellington Laboratories ($150/ampoule)

**Success criteria:** Demonstrate <10 ppt LOD for PFOA on bare SPE in real water.

---

## Stage 1: Chip Design & Simulation (Month 2-4)

### CAD Tools
- **KLayout** (free, open source) — GDS-II photomask layout
- **L-Edit** (Tanner EDA) — if university license available
- **COMSOL Multiphysics** — fluid dynamics + electrochemistry simulation
- **AutoCAD** — channel routing
- **SolidWorks / Fusion 360** — cartridge housing 3D design

### Chip Specifications

| Parameter | Value |
|-----------|-------|
| Substrate | 4" borosilicate glass, 500 um, DSP |
| Chip size | 15 mm x 30 mm |
| Electrode material | Cr/Au (5nm/100nm) |
| Electrode type | Interdigitated, 10 um fingers, 10 um gap |
| Channel width | 200 um |
| Channel depth | 50 um (SU-8) |
| Pre-concentration path | ~50mm serpentine |
| Zones | PFOA MIP, PFOS MIP, Reference (NIP) |
| Contact pads | 10 pads, 500 um pitch |

### Simulation Plan (COMSOL)

1. **Laminar flow**: Channel flow at 10-50 uL/min, verify uniform distribution
2. **Mass transport**: PFOA diffusion/convection, optimize pre-concentration
3. **Electrochemical**: IDE impedance modeling, optimize finger geometry
4. **Thermal**: Temperature distribution, verify uniform sensing zone

### Photomask Procurement

3 mask levels needed:
| Mask | Purpose | Min. Feature | Recommended Supplier |
|------|---------|-------------|---------------------|
| 1 | Electrode pattern | 10 um | Front Range Photomask ($300) |
| 2 | Passivation openings | 50 um | CAD/Art Services ($75 film) |
| 3 | Channel walls | 200 um | CAD/Art Services ($75 film) |

---

## Stage 2: Fabrication (Month 4-7)

### Recommended University Cleanrooms

| Facility | Location | Hourly Rate | Notes |
|----------|----------|-------------|-------|
| Cornell CNF | Ithaca, NY | $100-150/hr | Open access, excellent support |
| Georgia Tech IEN | Atlanta, GA | $50-100/hr | Affordable, good MEMS tools |
| CMU Nanofab | Pittsburgh, PA | $75-125/hr | Startup-friendly |
| U Michigan LNF | Ann Arbor, MI | $75-150/hr | Strong MEMS focus |
| Stanford SNF | Palo Alto, CA | $150-300/hr | World-class, expensive |
| MIT MTL | Cambridge, MA | $100-200/hr | Excellent, competitive access |

### Step-by-Step Fabrication Process

#### Step 1: Substrate Preparation
- Piranha clean: H₂SO₄:H₂O₂ (3:1), 80°C, 15 min
- DI water rinse (10 min cascade)
- N₂ dry
- Dehydration bake: 200°C hotplate, 5 min

#### Step 2: Electrode Patterning (Lift-off)
- Spin LOR 3A: 3000 rpm, 45s → bake 170°C, 5 min
- Spin AZ5214E: 4000 rpm, 30s → bake 90°C, 60s
- Exposure: MA6 aligner, 50 mJ/cm², hard contact
- Image reversal bake: 120°C, 2 min → flood expose 200 mJ/cm²
- Develop: AZ400K (1:4), 60s
- E-beam evaporate: 5 nm Cr + 100 nm Au
- Lift-off: Remover PG, 70°C, 2+ hours
- **Expected yield: 80-90%**

#### Step 3: SU-8 Channel Walls (50 um)
- O₂ plasma descum: 100W, 1 min
- Spin SU-8 2050: 3000 rpm, 30s (target 50 um)
- Soft bake: 65°C 3 min → 95°C 7 min (ramp at 5°C/min)
- Expose: 200-250 mJ/cm², i-line, with UV filter
- PEB: 65°C 2 min → 95°C 6 min (ramp)
- Develop: SU-8 developer, 5-6 min
- Hard bake: 150°C, 15 min

**Common failure modes:**
- Delamination → ensure plasma treatment + dehydration bake
- T-topping → use UV filter (>350 nm)
- Cracking → always ramp temperatures
- Residue → extend development time

#### Step 4: Dicing
- DAD3220 dicing saw or manual scribe-and-break
- ~40-60 chips per 4" wafer

#### Step 5: MIP Electropolymerization (per chip)
- Solution: 0.1M pyrrole + 1mM PFOA (or PFOS) in PBS pH 7.4
- CV: -0.2V to +0.8V vs Ag/AgCl, 50 mV/s, 15-20 cycles
- Template removal: MeOH:AcOH (9:1), 30 min
- Reference: same process without template (NIP)

#### Step 6: PDMS Lid
- SU-8 master mold on Si (reuse Mask 3)
- PDMS 10:1, degas, cure 65°C 4 hr
- Punch ports: 1mm biopsy punch
- O₂ plasma bond: 30W, 30s → align → bake 65°C 1 hr

---

## Stage 3: Testing & Characterization (Month 5-8)

### Test Protocol
1. **EIS baseline**: 0.1 Hz - 100 kHz, 10 mV AC amplitude
2. **Calibration**: PFOA/PFOS standards at 0.5, 1, 2, 4, 10, 50, 100, 1000 ppt
3. **LOD calculation**: 3σ/slope method, 10+ blanks
4. **Specificity**: Cross-reactivity with PFOS, humic acid, chloride, sulfate
5. **Reproducibility**: 10+ chips, target CV <15%
6. **Real water**: Spiked tap, ground, and treated water matrices

### MVP Performance Requirements
| Metric | Target | Stretch |
|--------|--------|---------|
| PFOA LOD | ≤4 ppt | ≤2 ppt |
| PFOS LOD | ≤4 ppt | ≤2 ppt |
| Time to result | ≤15 min | ≤10 min |
| Recovery (real water) | 80-120% | 90-110% |
| Chip-to-chip CV | ≤20% | ≤15% |
| Shelf life | ≥6 months | ≥12 months |

### Reference Labs for Validation
- Eurofins TestAmerica: $300/sample, 15 days
- SGS AXYS: $350/sample, PFAS specialists
- ALS Environmental: $275/sample
- Pace Analytical: $250/sample

---

## Stage 4: Packaging & Integration (Month 7-10)

### Reader Electronics
- **Potentiostat IC**: AD5940 (Analog Devices) — integrated EIS
- **MCU**: STM32L4 (ARM Cortex-M4, low power)
- **Connectivity**: ESP32-C3 (WiFi + BLE)
- **Display**: 2.4" IPS TFT (ST7789)
- **Battery**: 3.7V 2500mAh LiPo, USB-C charging
- **Interface**: 10-pin pogo pin connector (Mill-Max 0906)

### Firmware Stack
- FreeRTOS on STM32
- AD5940 EIS measurement engine
- Calibration lookup + temperature compensation
- BLE + WiFi data sync
- OTA firmware updates

### Cloud Dashboard (MVP)
- REST API for result ingestion
- Map view of test locations
- Trend charts over time
- Threshold alerts (email/SMS)
- Compliance report generation

---

## Stage 5: Regulatory & Compliance (Parallel)

**This is NOT a medical device. NO FDA approval needed.**

| Regulatory Path | Timeline | Cost | Priority |
|-----------------|----------|------|----------|
| EPA method equivalency | 12-18 months | $10K-20K | HIGH |
| ISO 17025 accreditation | 6-12 months | $10K-25K | HIGH |
| State drinking water approval | 3-6 months per state | $2K-5K/state | MEDIUM |
| CE marking (EU) | 3-6 months | $10K-20K | LOW (later) |
| ISO 9001 QMS | Ongoing | $5K-10K/year | HIGH |

---

## Stage 6: Manufacturing Scale-up (Month 10-13)

### Recommended Contract Manufacturers
| Manufacturer | Specialty | Location | MOQ | Cost |
|-------------|-----------|----------|-----|------|
| Micronit | Glass microfluidics | Netherlands | 100 chips | $10-30/chip |
| Dolomite | Custom chips | UK | 50 chips | $15-40/chip |
| Teledyne DALSA | MEMS foundry | Canada | 25 wafers | $500-2K/wafer |
| IMT AG | Precision glass | Switzerland | 25 wafers | Custom |

### Cost Reduction Roadmap
| Stage | Volume | COGS/cartridge |
|-------|--------|---------------|
| Prototype | 10s | ~$50 |
| Pilot | 100s | ~$25 |
| Production | 1,000s | ~$15 |
| Scale | 10,000+ | ~$8 |

---

## Stage 7: Go-to-Market (Month 11-14)

### Pricing
| Package | Contents | Price |
|---------|----------|-------|
| Starter | 1 reader + 20 cartridges + 3mo cloud | $4,500 |
| Professional | 2 readers + 100 cartridges + 12mo cloud | $12,000 |
| Enterprise | 5+ readers + custom volume + dedicated support | Custom |

### First 10 Customers
1-3: Small community water systems (via state rural water associations)
4-5: Environmental consulting firms (via ASTM E50 / EBC conferences)
6-7: DoD environmental offices (via SERDP/ESTCP contacts)
8-9: State environmental agencies (validation partners)
10: Large water utility (anchor / credibility customer)

### Key Conferences
- **AWWA ACE** (Annual) — 10,000+ water utility professionals
- **PFAS Summit** (Multiple/year) — targeted PFAS audience
- **Pittcon** — analytical chemistry community
- **WEFTEC** — wastewater professionals
- **SERDP/ESTCP Symposium** — defense environmental
