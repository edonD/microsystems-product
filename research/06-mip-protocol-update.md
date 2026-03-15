# Research Update: MIP Protocol — PEDOT-TEMPO Replaces Polypyrrole

## Critical Finding
**Polypyrrole (PPy) MIPs are NOT sufficiently stable in water.** Conductivity degrades over time in aqueous environments. This was identified in recent literature (2024) as a key limitation of conductive MIPs for water sensing.

## Recommended Alternative: PEDOT-TEMPO MIP

### Paper: ES&T Letters 2024
"Novel Conductive and Redox-Active Molecularly Imprinted Polymer for Direct Quantification of Perfluorooctanoic Acid"

### Key Innovation
- Monomer: EDOT-TEMPO (3,4-ethylenedioxythiophene-2,2,6,6-tetramethylpiperidinyloxy)
- Combines conductivity (PEDOT backbone) with redox activity (TEMPO radical)
- Enables DIRECT electrochemical detection of PFOA without external redox probe
- **Reproducibility: 5.1% RSD** across electrodes

### Electropolymerization Protocol (from paper)
1. **Electrolyte**: 0.1 M TBAPF6 in DCM (dichloromethane)
2. **Template**: PFOA added to monomer solution
3. **Electrode**: Glassy carbon electrode (or gold IDE for chip)
4. **Method**: Cyclic voltammetry
5. **Potential range**: 0.0 V to +1.5 V
6. **Scan rate**: 20 mV/s
7. **Number of cycles**: Optimized per application (typically 10-20)
8. **Template removal**: DI water wash (PFOA template removed by simple rinsing)

### Why PEDOT-TEMPO is Better Than Polypyrrole
| Property | Polypyrrole | PEDOT-TEMPO |
|----------|-------------|-------------|
| Water stability | Poor — degrades | Good — stable |
| Conductivity retention | Decreases over time | Maintained |
| Detection mechanism | Indirect (needs redox probe) | Direct (built-in redox mediator) |
| Sensitivity | Good | Excellent |
| Reproducibility | Variable | 5.1% RSD |
| Template removal | MeOH/AcOH | DI water (simpler!) |

### Implications for TRACE-1 Design
1. **Update MIP monomer**: Use EDOT-TEMPO instead of pyrrole
2. **Simplify template removal**: DI water wash instead of organic solvent
3. **Simplify detection**: No need for external redox probe in solution
4. **Non-aqueous electropolymerization**: DCM + TBAPF6 (requires fume hood, but standard chemistry)
5. **Post-polymerization**: Chip can be used in aqueous samples after MIP formation

### Sourcing EDOT-TEMPO
- EDOT: Sigma-Aldrich (readily available, ~$50/5g)
- TEMPO: Sigma-Aldrich (readily available, ~$30/5g)
- EDOT-TEMPO conjugate: May need to be synthesized (1-2 step organic synthesis)
  - Or use o-phenylenediamine (o-PD) as a more accessible alternative monomer
  - o-PD MIPs also show good performance for PFAS and are water-stable

### Alternative: o-Phenylenediamine (o-PD) MIP
- Simpler synthesis (aqueous electropolymerization)
- Used in multiple PFAS sensor papers
- Sub-ppt detection demonstrated
- More accessible for early prototyping
- Can switch to PEDOT-TEMPO for production optimization

## Updated Fabrication Protocol for TRACE-1

### For Prototyping (o-PD based, simpler)
1. Monomer solution: 5 mM o-phenylenediamine + 0.5 mM PFOA in PBS (pH 7.0)
2. Electropolymerization: CV, -0.2 V to +0.8 V, 50 mV/s, 15 cycles
3. Template removal: 0.5 M H2SO4, 10 min (or MeOH:AcOH 9:1)
4. Rinse: DI water, N2 dry

### For Production (PEDOT-TEMPO, higher performance)
1. Monomer solution: EDOT-TEMPO + PFOA in DCM + 0.1 M TBAPF6
2. Electropolymerization: CV, 0.0 V to +1.5 V, 20 mV/s, 15 cycles
3. Template removal: DI water wash
4. Dry and package

## Recommendation
Start prototyping with o-PD (simpler, aqueous, proven). Optimize with PEDOT-TEMPO for production (higher performance, better stability, built-in redox detection).
