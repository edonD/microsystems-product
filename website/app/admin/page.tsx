"use client";

import RoadmapStage from "./components/RoadmapStage";
import Timeline from "./components/Timeline";

const stages = [
  {
    number: 0,
    title: "Validation",
    timeline: "Week 1-8",
    color: "#3b82f6",
    defaultOpen: true,
    tasks: [
      {
        title: "Customer discovery — Water utilities",
        details:
          "Interview 25+ water utility operators, lab directors, and compliance officers.\n\nWho to talk to:\n- Small community water systems (CWS) operators — feel regulatory pain most acutely\n- State drinking water program staff — understand compliance landscape\n- AWWA (American Water Works Association) conference attendees\n- Utility lab directors who currently manage PFAS testing contracts\n\nWhat to ask:\n- How often do you currently test for PFAS? Cost per test?\n- What is your biggest pain point with current testing (cost, turnaround, logistics)?\n- If you could test daily/weekly at $75/test, how would that change your operations?\n- What would make you trust a field sensor over lab results?\n- Who makes the purchasing decision for new monitoring equipment?",
        tools: ["LinkedIn Sales Navigator", "AWWA membership directory", "State PWS databases"],
        duration: "3-4 weeks",
      },
      {
        title: "Customer discovery — Environmental consultants & DoD",
        details:
          "Interview 10+ environmental consulting firms and 5+ DoD site managers.\n\nTarget firms:\n- Arcadis, WSP, Tetra Tech, Geosyntec, Wood PLC (large firms doing PFAS site assessments)\n- Smaller regional firms doing Phase II ESAs\n- NAVFAC (Naval Facilities Engineering Systems Command) contacts\n- Army Corps of Engineers environmental division\n\nKey questions:\n- How many PFAS samples per site assessment? Cost and timeline?\n- Would field screening change your sampling strategy?\n- What data format/reporting do regulators require?\n- Budget authority and procurement process?",
        tools: ["LinkedIn", "SERDP/ESTCP conference contacts", "EPA CLU-IN"],
        duration: "2-3 weeks",
      },
      {
        title: "Competitive intelligence deep dive",
        details:
          "Monitor and analyze every competitor and academic group working on portable PFAS sensing.\n\nCompanies to monitor:\n- FREDsense Technologies (Calgary) — FRED-PFAS field kit\n- Verralize (Australia) — nanocarbon sensor array\n- Grapheal (France) — graphene fluorograph sensor\n- Essence Diagnostics (NJIT spinout) — microfluidic electrochemical\n- Cyclopure — PFAS capture/remediation (adjacent)\n\nAcademic groups:\n- Harvard Wyss Institute — PFASense (protein-based)\n- UChicago/Argonne — AI molecular probe transistor sensors\n- NJIT (Basuray lab) — microfluidic PFAS chips\n- MITRE — MIP electrochemical sensors\n- La Trobe University — portable biosensor\n\nTrack: patents filed, funding raised, publications, regulatory submissions, partnerships.",
        tools: ["Google Scholar alerts", "Crunchbase", "USPTO Patent Full-Text", "SEC EDGAR"],
        duration: "Ongoing",
      },
      {
        title: "Technical feasibility — MIP electrode proof of concept",
        details:
          "Validate core sensing mechanism in a university lab before committing to chip design.\n\nProtocol:\n1. Electropolymerize pyrrole/o-PD on commercial gold screen-printed electrodes (SPEs) with PFOA template\n2. Remove template via methanol/acetic acid wash\n3. Measure impedance response to PFOA standards (1-100 ppt) via EIS\n4. Assess specificity vs PFOS, GenX, humic acid interferents\n5. Test in spiked tap water matrix\n\nEquipment needed: Potentiostat (Metrohm Autolab or PalmSens), SPEs (Metrohm DropSens), PFAS standards (Wellington Laboratories), EIS software\n\nSuccess criteria: Demonstrate <10 ppt LOD for PFOA on bare SPE. Validate signal-to-noise in real water.",
        tools: ["PalmSens4 potentiostat", "DropSens SPEs", "PSTrace software"],
        cost: "$2,000-5,000 for materials and standards",
        duration: "3-4 weeks",
      },
      {
        title: "Key assumptions to validate",
        details:
          "1. MIP electrodes can detect PFOA/PFOS at <4 ppt in real water (not just buffer)\n2. Water utilities will pay $75/test for on-site screening even if lab confirmation still required\n3. MIP-to-MIP reproducibility is achievable with electropolymerization (CV <15%)\n4. Signal is stable over 15-minute measurement window\n5. Shelf life of MIP cartridges exceeds 6 months\n6. Regulatory pathway exists for field screening data to support compliance\n\nKill criteria: If assumptions 1 or 2 fail, pivot. If 3-6 fail, iterate.",
        duration: "Throughout validation phase",
      },
    ],
  },
  {
    number: 1,
    title: "Chip Design & Simulation",
    timeline: "Month 2-4",
    color: "#06b6d4",
    tasks: [
      {
        title: "CAD design of microfluidic chip",
        details:
          "Design the TRACE-1 microfluidic chip layout with multi-zone architecture.\n\nDesign tools:\n- KLayout (open source, GDS-II editor) — primary layout tool for photomask design\n- L-Edit (Tanner EDA) — alternative if university license available\n- AutoCAD — for microfluidic channel routing\n\nChip layout:\n- Substrate: 15mm x 30mm borosilicate glass\n- Layer 1: Cr/Au electrodes (5nm/100nm) — interdigitated, 10 um finger width, 10 um gap\n- Layer 2: SU-8 channel walls (50 um height, 200 um width)\n- Layer 3: PDMS lid with inlet/outlet ports\n\nZone architecture:\n- Zone A: Serpentine pre-concentration channel (total length ~50mm, 200 um wide)\n- Zone B: PFOA MIP electrode array (4 interdigitated electrode pairs)\n- Zone C: PFOS MIP electrode array (4 interdigitated electrode pairs)\n- Zone D: Reference (non-imprinted polymer) electrode pair\n- Zone E: Contact pad array (10 pads, 500 um pitch)\n\nDesign rules:\n- Minimum feature: 10 um (electrode fingers)\n- Channel aspect ratio: <2:1 for reliable SU-8 patterning\n- Electrode-to-channel alignment: ±5 um",
        tools: ["KLayout", "AutoCAD", "Inkscape (for quick mockups)"],
        cost: "$0 (open source tools) or $2,000-5,000 (licensed CAD)",
        duration: "2-3 weeks",
      },
      {
        title: "COMSOL multiphysics simulation",
        details:
          "Simulate fluid flow, mass transport, and electrochemical response in the chip.\n\nSimulation plan:\n\n1. Microfluidic flow simulation (Laminar Flow module)\n   - Model: Serpentine channel flow at 10-50 uL/min\n   - Verify: Uniform flow distribution across electrode zones\n   - Check: Pressure drop < 10 kPa (compatible with passive capillary fill)\n   - Optimize: Channel geometry for maximum residence time over electrodes\n\n2. Mass transport simulation (Transport of Diluted Species)\n   - Model: PFOA/PFOS diffusion and convection to electrode surface\n   - Input: D_PFOA ≈ 5.4 × 10⁻⁶ cm²/s\n   - Optimize: Pre-concentration zone geometry\n   - Target: >80% analyte capture efficiency\n\n3. Electrochemical impedance simulation (AC/DC module)\n   - Model: IDE geometry, double-layer capacitance, charge transfer\n   - Validate: Expected impedance change for PFAS binding\n   - Optimize: IDE finger width/gap ratio for maximum sensitivity\n\nAcceptance criteria:\n- Flow uniformity: <5% velocity variation across electrode zone\n- Pre-concentration factor: >10x\n- Impedance change: >5% for 4 ppt PFOA concentration",
        tools: ["COMSOL Multiphysics 6.x", "COMSOL Microfluidics Module", "COMSOL AC/DC Module"],
        cost: "$5,000-8,000/year (academic license) or via university",
        duration: "3-4 weeks",
      },
      {
        title: "Process flow design",
        details:
          "Define the complete microfabrication process flow.\n\nProcess sequence (8 mask levels):\n\n1. SUBSTRATE PREPARATION\n   - Start: 4-inch borosilicate glass wafer (500 um thick)\n   - Piranha clean (H₂SO₄:H₂O₂ 3:1, 80°C, 15 min)\n   - DI water rinse, N₂ dry\n   - Dehydration bake (200°C, 30 min)\n\n2. ELECTRODE PATTERNING (Mask 1 — Lift-off)\n   - Spin LOR 3A (3000 rpm, 45s) → bake 170°C 5 min\n   - Spin AZ5214E (4000 rpm, 30s) → bake 90°C 1 min\n   - Expose (MA6 mask aligner, 50 mJ/cm²)\n   - Image reversal bake (120°C, 2 min) → flood expose\n   - Develop AZ400K (1:4, 60s)\n   - E-beam evaporate: 5nm Cr + 100nm Au\n   - Lift-off in Remover PG (70°C, 2 hr)\n\n3. PASSIVATION (Mask 2)\n   - Spin SU-8 2002 (3000 rpm) → 2 um thick\n   - Expose to open electrode areas and contact pads\n   - Develop, hard bake 150°C\n\n4. CHANNEL WALLS (Mask 3)\n   - Spin SU-8 2050 (1500 rpm) → 50 um thick\n   - Soft bake: 65°C 6 min + 95°C 9 min\n   - Expose (250 mJ/cm²)\n   - PEB: 65°C 1 min + 95°C 5 min\n   - Develop SU-8 developer (6 min)\n   - Hard bake 150°C 15 min\n\n5. MIP ELECTROPOLYMERIZATION (Post-fab, per chip)\n   - Dicing: DAD3220 dicing saw\n   - Mount chip on test jig\n   - Electropolymerize: 0.1M pyrrole + 1mM PFOA in PBS\n   - CV: -0.2V to +0.8V, 20 cycles, 50 mV/s\n   - Template removal: MeOH:AcOH (9:1), 30 min\n   - Rinse DI water, N₂ dry\n\n6. PDMS LID FABRICATION\n   - SU-8 master mold on Si wafer (same channel geometry, Mask 3 reuse)\n   - Mix PDMS 10:1, degas, pour, cure 65°C 4 hr\n   - Peel, punch inlet/outlet ports (1mm biopsy punch)\n\n7. BONDING\n   - O₂ plasma: 30W, 30s, both chip and PDMS\n   - Align and bond immediately\n   - Bake 65°C 1 hr\n\n8. DICING & PACKAGING\n   - Dice into individual chips\n   - Wire bond or attach flex PCB to contact pads\n   - Package in sealed cartridge housing",
        tools: ["Process design spreadsheet", "Foundry PDK documentation"],
        duration: "1-2 weeks",
      },
      {
        title: "Material selection and sourcing",
        details:
          "Substrate: Borosilicate glass wafers, 4-inch, 500um, double-side polished\n- Source: UniversityWafer, $15-25/wafer\n\nPhotoresists:\n- LOR 3A (MicroChem): $200/500mL\n- AZ5214E (Merck): $150/500mL\n- SU-8 2002 & 2050 (Kayaku): $300-400/500mL each\n\nMetals:\n- Cr pellets (99.99%): $50/25g\n- Au pellets (99.99%): $1,500-2,000/25g (gold price dependent)\n\nChemicals:\n- Pyrrole (Sigma-Aldrich, 99%): $30/100mL\n- PFOA standard (Wellington Labs, 50 ug/mL): $150/ampoule\n- PFOS standard (Wellington Labs, 50 ug/mL): $150/ampoule\n\nPDMS:\n- Sylgard 184 (Dow): $80/kit\n\nTotal materials cost per wafer run: ~$500-800\nChips per 4-inch wafer: ~40-60 (15x30mm chips)",
        cost: "$500-800 per wafer run (materials only)",
        duration: "1 week to source",
      },
      {
        title: "Photomask procurement",
        details:
          "Order chrome-on-glass photomasks for contact lithography.\n\n3 mask levels needed:\n- Mask 1: Electrode pattern (10 um minimum feature)\n- Mask 2: Passivation openings\n- Mask 3: Channel walls (200 um minimum feature)\n\nMask suppliers:\n- Front Range Photomask (US): $200-400/mask for 5-inch soda lime\n- Compugraphics (EU): $300-500/mask, higher resolution\n- Photo Sciences (US): $250-450/mask\n- Advanced Reproductions (US): $200-350/mask\n\nFor prototyping, consider:\n- Laser-written masks (Heidelberg DWL): Available at university cleanrooms\n- Film masks (CAD/Art Services): $50-100/mask, 10 um resolution, good for channels\n\nLead time: 1-2 weeks (film) or 2-4 weeks (chrome)",
        cost: "$600-1,500 for 3 chrome masks; $150-300 for 3 film masks",
        duration: "2-4 weeks lead time",
      },
    ],
  },
  {
    number: 2,
    title: "Fabrication",
    timeline: "Month 4-7",
    color: "#10b981",
    tasks: [
      {
        title: "University cleanroom fabrication (prototype)",
        details:
          "Fabricate first prototype chips in a university MEMS cleanroom.\n\nRecommended university cleanrooms with MEMS capability:\n\nUS:\n- Stanford Nanofabrication Facility (SNF) — world-class, expensive ($150-300/hr)\n- MIT Microsystems Technology Laboratories (MTL) — excellent, $100-200/hr\n- Cornell NanoScale Science and Technology Facility (CNF) — open access, $100-150/hr\n- Georgia Tech IEN — affordable, $50-100/hr\n- University of Michigan LNF — strong MEMS focus\n- UC Berkeley Marvell Nanolab — Bay Area access\n- CMU Nanofab — good for startups\n\nEurope:\n- EPFL CMi (Switzerland) — world-class\n- TU Delft Else Kooi Laboratory — strong microfluidics\n- Tyndall National Institute (Ireland) — MEMS foundry services\n\nAccess: Most offer external user programs. Apply 2-4 weeks in advance.\nTraining: Expect 1-2 weeks of equipment training/certification.\n\nFirst run target: 5 wafers × 40 chips = 200 prototype chips",
        tools: ["Mask aligner (MA6/MJB4)", "E-beam evaporator", "Spin coater", "Plasma cleaner"],
        cost: "$5,000-15,000 for first prototype run (cleanroom time + materials)",
        duration: "4-6 weeks (including training)",
      },
      {
        title: "Step-by-step electrode fabrication",
        details:
          "Detailed process for Cr/Au interdigitated electrode patterning:\n\n1. Wafer prep:\n   - Solvent clean: Acetone 5 min → IPA 5 min → DI rinse → N₂ dry\n   - Dehydration bake: 200°C hotplate, 5 min\n   - HMDS vapor prime (optional, improves resist adhesion)\n\n2. Lift-off resist stack:\n   - Spin LOR 3A: 3000 rpm, 45 sec → 170°C, 5 min\n   - Spin AZ5214E: 4000 rpm, 30 sec → 90°C, 60 sec\n   - Edge bead removal if needed\n\n3. Exposure:\n   - Contact lithography (MA6 mask aligner)\n   - Hard contact mode, 50 mJ/cm² dose\n   - Image reversal: 120°C, 2 min → flood expose 200 mJ/cm²\n\n4. Development:\n   - AZ400K developer (1:4 dilution), 60 sec\n   - DI rinse, N₂ dry\n   - Inspect under microscope: verify clean undercut in LOR\n\n5. Metal deposition:\n   - E-beam evaporator (Temescal, CHA, or similar)\n   - Base pressure: <5×10⁻⁶ Torr\n   - Deposit: 5 nm Cr (adhesion) at 0.5 A/s\n   - Deposit: 100 nm Au at 1.0 A/s\n   - Tooling factor calibration: use crystal monitor\n\n6. Lift-off:\n   - Soak in Remover PG (NMP): 70°C, 2+ hours\n   - Gentle ultrasonic agitation (30 sec bursts)\n   - IPA rinse, DI rinse, N₂ dry\n   - Inspect: verify clean lift-off, no metal bridging\n\nExpected yield: 80-90% for 10 um features on glass",
        tools: ["Spin coater", "MA6 mask aligner", "E-beam evaporator", "Optical microscope"],
        duration: "1-2 days per wafer",
      },
      {
        title: "SU-8 microfluidic channel fabrication",
        details:
          "Process for 50 um tall SU-8 channel walls:\n\n1. Substrate prep:\n   - Ensure electrodes are complete and clean\n   - O₂ plasma descum: 100W, 1 min (improve SU-8 adhesion)\n\n2. SU-8 spin coating:\n   - SU-8 2050, target 50 um:\n   - Spread: 500 rpm, 10 sec, 100 rpm/s\n   - Spin: 3000 rpm, 30 sec, 300 rpm/s\n   - Rest 5 min (relax coating stresses)\n\n3. Soft bake (CRITICAL — use ramped bake):\n   - 65°C, 3 min (ramp from RT at 5°C/min)\n   - 95°C, 7 min (ramp from 65°C at 5°C/min)\n   - Cool slowly to RT on hotplate (do NOT remove abruptly)\n\n4. Exposure:\n   - i-line (365 nm), 200-250 mJ/cm²\n   - Use long-pass filter to block <350 nm (reduces T-topping)\n   - Contact lithography, soft contact mode\n\n5. Post-exposure bake:\n   - 65°C, 2 min (ramp)\n   - 95°C, 6 min (ramp)\n   - Cool slowly\n\n6. Development:\n   - SU-8 Developer (PGMEA), 5-6 min with agitation\n   - IPA rinse (if white residue appears, development incomplete)\n   - N₂ dry gently\n\n7. Hard bake:\n   - 150°C, 15 min (ramp at 5°C/min)\n   - Improves chemical resistance and mechanical strength\n\nCommon failure modes:\n- Delamination: Poor adhesion — ensure plasma treatment and dehydration\n- T-topping: Over-exposure at short wavelengths — use UV filter\n- Cracking: Thermal shock — always ramp temperatures slowly\n- Residue: Under-development — extend development time",
        tools: ["Spin coater", "Hotplate (programmable)", "Mask aligner", "SU-8 developer"],
        duration: "1 day per wafer",
      },
      {
        title: "MIP electropolymerization",
        details:
          "Deposit molecularly imprinted polymer on electrodes after dicing:\n\n1. Prepare monomer solution:\n   - 0.1 M pyrrole in 0.1 M PBS (pH 7.4)\n   - Add 1 mM PFOA (template) for PFOA-MIP electrodes\n   - Add 1 mM PFOS (template) for PFOS-MIP electrodes\n   - For reference: same solution without template (NIP)\n   - Degas with N₂ for 10 min\n\n2. Electropolymerization:\n   - Three-electrode setup: chip WE, Ag/AgCl RE, Pt wire CE\n   - Cyclic voltammetry: -0.2V to +0.8V vs Ag/AgCl\n   - Scan rate: 50 mV/s\n   - Number of cycles: 15-20 (controls film thickness)\n   - Monitor: Current should decrease with each cycle (polymer growth)\n\n3. Template removal:\n   - Immerse in MeOH:AcOH (9:1 v/v) for 30 min\n   - Alternatively: 0.5 M H₂SO₄, 10 min\n   - Rinse with DI water, N₂ dry\n   - Verify removal: EIS should show decreased impedance vs before removal\n\n4. Quality control:\n   - EIS baseline measurement in clean PBS\n   - Incubate with 100 ppt PFOA standard for 10 min\n   - EIS measurement: expect >10% impedance change\n   - Rebinding efficiency should be >80%\n\nCritical parameters:\n- Film thickness: controlled by number of CV cycles (50-200 nm target)\n- Template:monomer ratio affects cavity density\n- Polymerization scan rate affects polymer morphology",
        tools: ["Potentiostat (PalmSens4 or Autolab)", "Ag/AgCl reference electrode", "Faraday cage"],
        cost: "$200-500 per batch of 50 chips",
        duration: "2-3 days per batch",
      },
      {
        title: "PDMS lid fabrication and bonding",
        details:
          "Fabricate PDMS microfluidic lid and bond to glass chip:\n\n1. SU-8 master mold:\n   - Use same channel mask (Mask 3) on Si wafer\n   - Spin SU-8 2050 at 50 um\n   - Standard SU-8 process\n   - Silanize: FDTS vapor, 1 hr (prevents PDMS sticking)\n\n2. PDMS casting:\n   - Mix Sylgard 184: 10:1 base:curing agent (by weight)\n   - Degas in vacuum desiccator until bubble-free (30-45 min)\n   - Pour over master mold (~3-4 mm thick)\n   - Cure: 65°C, 4 hours (or 80°C, 2 hours)\n\n3. Port punching:\n   - Peel PDMS from mold\n   - Punch inlet/outlet holes: 1 mm biopsy punch\n   - Clean with tape to remove debris\n\n4. Bonding:\n   - O₂ plasma treatment: 30W, 30 sec (both glass chip and PDMS)\n   - Align PDMS to chip under stereomicroscope\n   - Press gently, ensure conformal contact\n   - Bake: 65°C, 1 hr (strengthens bond)\n\n5. Testing:\n   - Flow test: inject colored DI water, check for leaks\n   - Pressure test: 50 kPa, hold 5 min, no leaks\n\nFor production: Replace PDMS with COC (cyclic olefin copolymer) via injection molding",
        tools: ["PDMS mixing station", "Vacuum desiccator", "O₂ plasma cleaner", "Stereomicroscope"],
        cost: "$100-200 per batch",
        duration: "1-2 days",
      },
      {
        title: "Commercial foundry options (for scale)",
        details:
          "When transitioning beyond university prototyping:\n\nMEMS Foundries:\n- MEMSCAP (France/US): Multi-user MEMS processes, MUMPs program\n  Cost: $5,000-15,000 per MPW run, 4-6 month lead time\n- X-FAB (Germany): MEMS + CMOS integration\n  Cost: $10,000-30,000 per lot\n- Silex Microsystems (Sweden): Custom MEMS, high volume\n  MOQ: 25 wafers, $500-2,000/wafer\n- STMicroelectronics (various): High-volume MEMS\n  MOQ: 100+ wafers for custom\n- Teledyne DALSA (Canada): MEMS foundry services\n  Cost: $8,000-20,000 per prototype lot\n\nMicrofluidics-specific:\n- Micralyne (Canada): Microfluidic chip fabrication\n- Dolomite Microfluidics (UK): Custom chip manufacturing\n- Micronit (Netherlands): Glass microfluidic specialists\n  Cost: $3,000-8,000 per design, $10-50/chip at volume\n- IMT Masken und Teilungen (Switzerland): Precision glass processing\n\nMulti-project wafer (MPW) programs:\n- MEMS-Exchange (US): Access to multiple foundries\n- Europractice (EU): Subsidized MEMS runs\n- CMC Microsystems (Canada): Academic access program\n\nRecommendation: Start with Micronit or Dolomite for glass microfluidic chips, add electrodes via university cleanroom or X-FAB.",
        cost: "Varies: $3,000-30,000 per prototype lot",
        duration: "4-12 weeks depending on foundry",
      },
    ],
  },
  {
    number: 3,
    title: "Testing & Characterization",
    timeline: "Month 5-8",
    color: "#f59e0b",
    tasks: [
      {
        title: "Electrochemical characterization protocol",
        details:
          "Systematic characterization of MIP sensor performance:\n\n1. Baseline EIS measurement:\n   - Frequency range: 0.1 Hz to 100 kHz\n   - AC amplitude: 10 mV\n   - DC bias: open circuit potential\n   - Measure in clean PBS, record Nyquist plot\n\n2. Calibration curve:\n   - PFOA standards: 0.5, 1, 2, 4, 10, 50, 100, 1000 ppt\n   - PFOS standards: same concentration series\n   - Incubation: 10 min per concentration\n   - EIS after each incubation\n   - Plot: delta Rct vs. [PFAS] (charge transfer resistance change)\n\n3. Limit of detection:\n   - LOD = 3σ/slope (σ = standard deviation of blank)\n   - Target: <2 ppt for both PFOA and PFOS\n   - Measure 10+ blanks for robust σ estimation\n\n4. Specificity:\n   - Test cross-reactivity with: PFOS (on PFOA sensor), PFOA (on PFOS sensor)\n   - Common interferents: humic acid (10 mg/L), chloride (200 mg/L), sulfate (250 mg/L)\n   - Target: <10% cross-reactivity\n\n5. Reproducibility:\n   - Test 10+ chips from same wafer batch\n   - Calculate CV for sensitivity (slope of cal curve)\n   - Target: CV <15%\n\n6. Stability:\n   - Store chips at RT, 4°C, and 37°C\n   - Test weekly for 3 months\n   - Track baseline drift and sensitivity decay",
        tools: ["PalmSens4 or Autolab PGSTAT", "PSTrace/NOVA software", "Wellington Labs PFAS standards"],
        cost: "$3,000-5,000 for standards and consumables",
        duration: "4-6 weeks",
      },
      {
        title: "Real water matrix validation",
        details:
          "Test in actual water samples from target customers:\n\nSample types:\n1. Finished drinking water (post-treatment, multiple utilities)\n2. Raw source water (river, reservoir, groundwater)\n3. Groundwater from known PFAS-contaminated site\n4. Treated effluent from PFAS treatment system (GAC, IX)\n\nProtocol:\n- Spike known PFAS concentrations into real water matrices\n- Compare TRACE-1 results to LC-MS/MS reference (send splits to certified lab)\n- Recovery study: calculate % recovery at 4 ppt, 10 ppt, 100 ppt\n- Target recovery: 80-120% (typical for EPA water methods)\n\nCertified labs for reference analysis:\n- Eurofins TestAmerica: $300/sample, 15-day turnaround\n- SGS AXYS Analytical: $350/sample, specialized in PFAS\n- ALS Environmental: $275/sample\n- Pace Analytical: $250/sample\n\nMatrix effects to characterize:\n- Dissolved organic carbon (DOC)\n- pH range: 6.0-8.5\n- Hardness / total dissolved solids\n- Residual chlorine",
        cost: "$5,000-10,000 for reference lab analysis",
        duration: "4-6 weeks (including lab turnaround)",
      },
      {
        title: "Performance benchmarks — MVP criteria",
        details:
          "Minimum viable product performance requirements:\n\n✓ PFOA LOD: ≤4 ppt (at minimum, EPA MCL; stretch goal: ≤2 ppt)\n✓ PFOS LOD: ≤4 ppt (at minimum; stretch goal: ≤2 ppt)\n✓ Time to result: ≤15 minutes from sample loading\n✓ Sample volume: ≤1 mL\n✓ Recovery in real water: 80-120%\n✓ Chip-to-chip CV: ≤20% (stretch: ≤15%)\n✓ Shelf life: ≥6 months at room temperature\n✓ Operating temperature: 10-35°C\n✓ No false positives in clean water (specificity >95%)\n✓ Reader battery: ≥4 hours continuous operation\n\nIf LOD is not met:\n- Increase pre-concentration channel length\n- Optimize MIP film thickness (more cycles)\n- Try alternative monomers (o-phenylenediamine, aniline)\n- Add AC electrothermal enhancement\n- Consider signal amplification (enzyme-linked, redox probe)",
        duration: "Continuous evaluation",
      },
    ],
  },
  {
    number: 4,
    title: "Packaging & Integration",
    timeline: "Month 7-10",
    color: "#ef4444",
    tasks: [
      {
        title: "Cartridge housing design",
        details:
          "Design injection-molded cartridge that holds the microfluidic chip:\n\nRequirements:\n- Protect chip during shipping and handling\n- Provide sample inlet port accessible to user\n- Expose contact pads for reader interface\n- Include dessicant cavity for moisture control\n- Tamper-evident seal\n- Lot number / QR code for traceability\n\nMaterial: ABS or polycarbonate injection molding\nDimensions: ~60mm x 35mm x 8mm (credit card width)\n\nDesign tools:\n- SolidWorks or Fusion 360 for 3D modeling\n- 3D print prototypes (Formlabs SLA for fine features)\n- Injection molding tooling: Protolabs or Xometry for low-volume\n\nCartridge includes:\n- Chip seated in cavity with adhesive\n- Silicone gasket for fluid seal\n- Sample port with hydrophilic coating\n- Spring-loaded chip alignment features\n- Contact pad window with gold-plated leaf springs",
        tools: ["SolidWorks", "Formlabs Form 3", "Protolabs (injection molding)"],
        cost: "$5,000-15,000 for injection mold tooling",
        duration: "3-4 weeks",
      },
      {
        title: "Reader electronics design",
        details:
          "Design the handheld reader PCB and electronics:\n\nCore components:\n- Potentiostat IC: AD5940 (Analog Devices) — integrated EIS engine\n  - Built-in impedance measurement, DFT, waveform generator\n  - SPI interface to MCU\n  - Ultra-low power: <50 uA in measurement mode\n\n- Microcontroller: STM32L4 series (ARM Cortex-M4)\n  - Low power, floating point for signal processing\n  - USB, SPI, I2C interfaces\n  - 256KB+ Flash for firmware + calibration data\n\n- Connectivity: ESP32-C3 (WiFi + BLE)\n  - Cloud data upload\n  - Firmware OTA updates\n  - Smartphone app connection\n\n- Display: 2.4-inch IPS TFT (320x240)\n  - ST7789 driver, SPI interface\n  - Readable in direct sunlight\n\n- Power: 3.7V 2500mAh LiPo\n  - USB-C charging (5V/2A)\n  - 8+ hours battery life (est. 100 measurements)\n\n- Cartridge interface:\n  - 10-pin pogo pin connector (Mill-Max 0906-series)\n  - Spring-loaded, self-aligning\n  - Gold-plated tips for reliable contact\n\nPCB design tools:\n- KiCad (open source) or Altium Designer\n- 4-layer PCB, 1.0mm thickness\n- Low-noise analog layout for potentiostat section\n- Digital/analog ground separation",
        tools: ["KiCad or Altium", "AD5940 eval board", "STM32CubeIDE", "ESP-IDF"],
        cost: "$2,000-5,000 for BOM + PCB prototyping",
        duration: "4-6 weeks",
      },
      {
        title: "Firmware development",
        details:
          "Develop embedded firmware for the reader:\n\n1. EIS measurement engine:\n   - Configure AD5940 for impedance sweep (0.1 Hz - 100 kHz)\n   - DFT processing for Z magnitude and phase\n   - Nyquist plot construction\n   - Rct extraction via equivalent circuit fitting\n\n2. PFAS quantification algorithm:\n   - Calibration curve lookup (stored per cartridge lot)\n   - Delta-Rct to concentration conversion\n   - Temperature compensation (on-chip thermistor)\n   - Quality control checks (reference electrode validation)\n\n3. User interface:\n   - Simple flow: Insert → Wait → Result\n   - Traffic light display: Green (<4 ppt), Yellow (4-10 ppt), Red (>10 ppt)\n   - Detailed view: numeric concentrations, confidence interval\n\n4. Data management:\n   - Local storage: SD card, last 1000 results\n   - Cloud upload: JSON over HTTPS to Veriflux API\n   - Bluetooth: sync to mobile app\n   - GPS tagging for sampling location\n\n5. OTA updates:\n   - Firmware updates via WiFi\n   - Calibration data updates per cartridge lot",
        tools: ["STM32CubeIDE", "FreeRTOS", "ESP-IDF", "Python (testing scripts)"],
        cost: "$1,000-2,000 for dev kits and tools",
        duration: "6-8 weeks",
      },
      {
        title: "Cloud dashboard development",
        details:
          "Build the Veriflux cloud platform for data management:\n\nFeatures:\n- Real-time test result ingestion via REST API\n- Dashboard: map view of all test locations, trend charts\n- Threshold alerts: email/SMS when PFAS exceeds limits\n- Compliance reporting: auto-generate reports for state regulators\n- User management: multi-site, role-based access\n- Cartridge inventory tracking\n- Device fleet management\n\nTech stack:\n- Backend: Node.js or Python FastAPI\n- Database: PostgreSQL + TimescaleDB (time-series)\n- Frontend: React or Next.js dashboard\n- Hosting: AWS (IoT Core for device communication)\n- Auth: Auth0 or AWS Cognito\n\nPriority: Build minimum viable dashboard (map + trends) first. Compliance reporting is a strong differentiator.",
        tools: ["AWS IoT Core", "PostgreSQL", "React/Next.js", "Mapbox"],
        cost: "$500-1,000/month hosting",
        duration: "6-8 weeks for MVP",
      },
    ],
  },
  {
    number: 5,
    title: "Regulatory & Compliance",
    timeline: "Parallel — Month 2 onwards",
    color: "#9ca3af",
    tasks: [
      {
        title: "Regulatory pathway analysis",
        details:
          "PFAS testing devices are environmental monitoring instruments — NOT medical devices.\n\nKey regulatory frameworks:\n\n1. EPA Method Equivalency:\n   - Goal: Get TRACE-1 recognized as equivalent to EPA 533/537.1 for PFAS screening\n   - Process: Demonstrate correlation with reference methods via paired testing\n   - Timeline: 12-18 months of validation data collection\n   - Not required for sale, but massively increases adoption\n\n2. ISO 17025 Accreditation:\n   - Accreditation for the test method, not the device\n   - Requires: documented procedures, measurement uncertainty analysis, proficiency testing\n   - Accreditation bodies: A2LA, ANAB, NVLAP\n   - Cost: $10,000-25,000 for initial accreditation\n   - Timeline: 6-12 months\n\n3. State Drinking Water Program Approval:\n   - Each state approves monitoring methods independently\n   - Start with 2-3 progressive states (California, New Jersey, Michigan)\n   - Engage state labs for collaborative validation\n\n4. CE Marking (EU):\n   - Required for European market\n   - EMC (electromagnetic compatibility) testing\n   - Low voltage directive compliance\n   - Cost: $10,000-20,000\n   - Timeline: 3-6 months\n\nNO FDA approval needed (not a medical device).\nNO CLIA waiver needed (not a clinical diagnostic).",
        cost: "$10,000-50,000 total regulatory costs",
        duration: "12-18 months (parallel track)",
      },
      {
        title: "Quality management system",
        details:
          "Implement ISO 9001 QMS from the start:\n\n- Document control system\n- Design and development procedures\n- Supplier quality management\n- Calibration and measurement traceability\n- Corrective and preventive actions (CAPA)\n- Management review process\n\nTools: Greenlight Guru or Qualio for QMS software\nCost: $300-500/month for QMS platform\n\nAlso consider:\n- ISO 13485 if pursuing any clinical/POC applications later\n- ISO 14001 for environmental management (good for brand)\n- GLP (Good Laboratory Practice) for validation studies",
        tools: ["Greenlight Guru", "Qualio", "MasterControl"],
        cost: "$5,000-10,000/year",
        duration: "Ongoing",
      },
    ],
  },
  {
    number: 6,
    title: "Manufacturing Scale-up",
    timeline: "Month 10-13",
    color: "#8b5cf6",
    tasks: [
      {
        title: "Manufacturing partner selection",
        details:
          "Transition from university prototyping to contract manufacturing:\n\nChip manufacturing:\n- Micronit (Netherlands): Specialist in glass microfluidics\n  Capabilities: Glass etching, bonding, metallization\n  MOQ: 100 chips, $10-30/chip at volume\n  Lead time: 6-8 weeks\n\n- Dolomite Microfluidics (UK): Custom microfluidic chips\n  Capabilities: Glass, polymer, hybrid chips\n  MOQ: 50 chips\n  Lead time: 4-6 weeks\n\n- IMT AG (Switzerland): Precision glass MEMS\n  Capabilities: High-precision photolithography on glass\n  MOQ: 25 wafers\n\nCartridge assembly:\n- Jabil, Flex, or Benchmark (US contract manufacturers)\n- Key steps: chip mounting, gasket placement, QC testing, packaging\n- Target: <$15 COGS per cartridge at 10,000 units\n\nReader assembly:\n- PCB assembly: JLCPCB, PCBWay, or US-based CM\n- Final assembly: Contract manufacturer with ISO 13485\n- Target: <$700 COGS per reader at 1,000 units",
        cost: "Tooling: $20,000-50,000; Production: variable",
        duration: "8-12 weeks for first production run",
      },
      {
        title: "Quality control plan",
        details:
          "Incoming QC:\n- Chip visual inspection (microscope): 100% inspection\n- Electrode continuity test: automated, 100%\n- Channel integrity test (flow test): 100%\n\nIn-process QC:\n- MIP electropolymerization: CV curve shape verification\n- Template removal: EIS baseline check\n- Bonding: leak test at 50 kPa\n\nFinal QC (per cartridge):\n- EIS baseline measurement: must be within ±20% of reference\n- Positive control test: 10 ppt PFOA spike, must show >5% impedance change\n- Shelf-life sample: retain 5% of each lot for stability testing\n\nReader QC:\n- Electrical safety test\n- Calibration verification with reference impedance\n- BLE/WiFi connectivity test\n- Display and UI functional test\n\nAcceptable yield target: >85% (chip fab) × >95% (assembly) = >80% overall",
        duration: "Define during manufacturing setup",
      },
      {
        title: "Cost optimization targets",
        details:
          "Cartridge cost reduction roadmap:\n\nPrototype (today): ~$50/cartridge\n- University cleanroom time dominates cost\n- Manual MIP deposition\n- Low yield\n\nPilot (100-unit lots): ~$25/cartridge\n- Foundry fabrication\n- Semi-automated MIP deposition\n- 80% yield\n\nProduction (1,000+ units): ~$15/cartridge\n- Optimized foundry process\n- Batch MIP electropolymerization (multi-chip jig)\n- 90% yield\n- Injection-molded cartridge housing\n\nScale (10,000+ units): ~$8/cartridge\n- Roll-to-roll electrode printing (screen-printed electrodes)\n- Wafer-level MIP deposition\n- COC microfluidics (injection molding, not PDMS)\n- 95% yield\n\nKey cost drivers:\n1. Gold electrode material (~$2/chip at 100nm)\n2. Cleanroom processing time\n3. MIP deposition labor\n4. Cartridge housing ($1-3 at volume)\n5. QC testing time",
        cost: "Target: $8-15 COGS at production scale",
      },
      {
        title: "Supply chain for key materials",
        details:
          "Critical materials and suppliers:\n\n1. Glass wafers:\n   - Primary: UniversityWafer (US)\n   - Backup: Plan Optik (Germany)\n   - Lead time: 2-4 weeks, $15-25/wafer\n\n2. Gold sputtering targets:\n   - Primary: Kurt J. Lesker\n   - Backup: Plasmaterials Inc.\n   - Lead time: 1-2 weeks, price tracks gold market\n\n3. Photoresists:\n   - SU-8: Kayaku Advanced Materials (sole source)\n   - AZ resists: Merck (broad availability)\n   - Lead time: 1-2 weeks from distributor\n\n4. PFAS standards (for QC):\n   - Wellington Laboratories (sole source for certified standards)\n   - Lead time: 1-2 weeks\n   - Cost: $100-200 per ampoule\n\n5. Pyrrole monomer:\n   - Sigma-Aldrich (commodity chemical)\n   - Lead time: 1 week\n\n6. AD5940 potentiostat IC:\n   - Analog Devices (sole source)\n   - Lead time: 8-16 weeks (semiconductor supply chain)\n   - CRITICAL: order early, maintain 6-month buffer stock\n\n7. PDMS / COC:\n   - Sylgard 184 (Dow): widely available\n   - COC (TOPAS): requires tooling for injection molding",
      },
    ],
  },
  {
    number: 7,
    title: "Go-to-Market",
    timeline: "Month 11-14",
    color: "#ec4899",
    tasks: [
      {
        title: "Pricing strategy",
        details:
          "Three-tier pricing model:\n\n1. TRACE-1 Starter\n   - 1 Reader + 20 cartridges + 3 months cloud\n   - Price: $4,500\n   - Target: Small utilities, environmental consultants evaluating\n\n2. TRACE-1 Professional\n   - 2 Readers + 100 cartridges + 12 months cloud\n   - Price: $12,000\n   - Target: Mid-size utilities, DoD site managers\n\n3. TRACE-1 Enterprise\n   - 5+ Readers + custom cartridge volume + dedicated support\n   - Price: Custom (est. $25,000-50,000/year)\n   - Target: Large utilities, multi-site operators\n\nRecurring revenue:\n- Cartridge reorders: $75/cartridge, $750/10-pack\n- Cloud subscription: $300/month after included period\n- Annual calibration service: $500/reader\n\nValue proposition math:\n- Current: 50 lab tests/year × $400 avg = $20,000/year\n- TRACE-1: $4,500 year 1 + 50 cartridges ($3,750) = $8,250/year\n- Savings: $11,750/year (59% reduction)\n- Plus: real-time data, faster results, more testing",
      },
      {
        title: "First 10 customers — who and how",
        details:
          "Target customer profiles for beta/early adopter phase:\n\n1-3: Small community water systems (1,000-10,000 population)\n   - Feel cost pressure most acutely\n   - Faster decision-making than large utilities\n   - Find via: State rural water associations, AWWA small systems committee\n\n4-5: Environmental consulting firms\n   - Need field screening to triage lab samples\n   - High test volume per project\n   - Find via: ASTM E50 committee contacts, LinkedIn, EBC conferences\n\n6-7: DoD environmental offices\n   - Massive PFAS remediation budget\n   - Need continuous monitoring at treatment systems\n   - Find via: SERDP/ESTCP program managers, NAVFAC contacts\n\n8-9: State environmental agencies\n   - Validation partners (legitimizes the technology)\n   - Find via: ECOS (Environmental Council of the States), direct outreach\n\n10: Large water utility (anchor customer)\n   - Credibility signal for the market\n   - Find via: AWWA ACE conference, Water Research Foundation connections\n\nSales approach:\n- Direct sales (founder-led) for first 20 customers\n- Technical demo + pilot program (30-60 days)\n- White glove onboarding\n- Joint publication of validation data (builds credibility)",
      },
      {
        title: "Marketing approach for deep-tech hardware",
        details:
          "Content marketing (primary channel):\n- Publish validation data as application notes and white papers\n- Present at AWWA ACE, PFAS Summit, Pittcon, SETAC conferences\n- LinkedIn thought leadership on PFAS testing innovation\n- Technical blog: real data, real comparisons, no fluff\n\nTrade publications:\n- Water & Wastes Digest\n- Environmental Science & Technology (ES&T)\n- WaterWorld\n- AWWA Journal\n\nIndustry conferences (attend and present):\n- AWWA Annual Conference & Exposition (ACE) — 10,000+ attendees\n- PFAS Summit (multiple per year) — targeted audience\n- Pittcon — analytical chemistry community\n- WEFTEC — wastewater focus\n- SERDP/ESTCP Symposium — defense environmental\n\nDigital:\n- SEO-optimized website (already building)\n- Google Ads targeting \"PFAS testing\" keywords\n- LinkedIn ads targeting water utility operators\n\nBudget: $20,000-50,000/year for marketing (bootstrapped phase)",
      },
    ],
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-accent-blue flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-semibold text-sm">Veriflux</span>
            <span className="text-xs font-mono text-muted bg-surface px-2 py-0.5 rounded border border-border">
              ADMIN
            </span>
          </div>
          <a href="/" className="text-xs text-muted hover:text-foreground transition-colors">
            Back to site
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Founder Roadmap: TRACE-1
          </h1>
          <p className="text-muted">
            Complete guide from zero to product. Microfluidic PFAS detection
            chip — design, fabrication, testing, and go-to-market.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="mb-8">
          <Timeline />
        </div>

        {/* Budget summary */}
        <div className="mb-8 p-6 bg-surface rounded-xl border border-border">
          <h3 className="text-sm font-semibold mb-4">Estimated Budget Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Prototype Dev", value: "$25K-50K", sub: "Month 1-8" },
              { label: "Equipment & Tools", value: "$10K-20K", sub: "Reader + software" },
              { label: "Regulatory", value: "$15K-50K", sub: "ISO + EPA equiv." },
              { label: "First Year Total", value: "$80K-180K", sub: "Pre-revenue" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-lg font-bold font-mono text-accent-emerald">
                  {item.value}
                </div>
                <div className="text-xs font-medium mt-0.5">{item.label}</div>
                <div className="text-[10px] text-muted">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-4">
          {stages.map((stage) => (
            <RoadmapStage key={stage.number} {...stage} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-4 bg-surface/50 rounded-lg border border-border/50 text-center">
          <p className="text-xs text-muted">
            This roadmap is a living document. Update as you validate assumptions and learn from customers.
            <br />
            Last updated: March 2026
          </p>
        </div>
      </div>
    </div>
  );
}
