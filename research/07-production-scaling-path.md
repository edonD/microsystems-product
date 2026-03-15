# Research: Production Scaling Path — SPEs + AD5940

## Screen-Printed Electrodes for Production Scale

### Key Finding
Screen-printed electrodes (SPEs) with molecularly imprinted polymers allow mass-producible sensors at low cost. Recent research (2025) demonstrated MIP-modified SPEs for PFOA detection using EIS — exactly our approach.

### Production Transition Path
| Phase | Electrode Type | Cost/chip | Volume |
|-------|---------------|-----------|--------|
| Prototype | Cleanroom-fabricated Au IDE on glass | ~$50 | 10s |
| Pilot | Commercial SPEs (DropSens/Zensor) | ~$5-10 | 100s |
| Production | Custom screen-printed Au IDE | ~$1-3 | 1000s |
| Scale | Roll-to-roll printed electrodes | ~$0.20-0.50 | 10,000+ |

### SPE Suppliers for Pilot Phase
- **Metrohm DropSens** (Switzerland): Gold SPEs, $4-8/electrode
  - DRP-220AT: Gold working electrode, $5.50/each (bulk)
  - DRP-G-IDEAU5: Gold interdigitated, $8/each
  - Custom designs available at $3-5/each for 500+ units
- **Zensor R&D** (Taiwan): Gold IDE SPEs, competitive pricing
  - SE-G: Gold SPE, ~$3/each in bulk
  - Custom interdigitated patterns available
- **BVT Technologies** (Czech Republic): Custom SPEs
- **Zimmer & Peacock** (UK/Norway): Custom electrochemical sensors, $1-5/each at volume
  - Specifically markets to sensor companies needing custom SPEs
  - Offers full design-to-production service

### Custom Screen Printing
For 10,000+ units, commission custom SPE production:
- Ink: Gold conductive ink (Heraeus, DuPont)
- Substrate: PET or ceramic
- Screen printing: Standard thick-film process
- Resolution: ~50 um minimum feature (sufficient for IDEs)
- Cost at scale: $0.50-2.00 per electrode

## AD5940 Reader Design Details

### Why AD5940
- Single-chip potentiostat + EIS engine
- Two potentiostat loops: LB (0-200 Hz) and HB (0-200 kHz)
- Built-in DFT for impedance calculation
- SPI interface to any MCU
- Ultra-low power: <50 uA measurement mode
- DigiKey price: ~$8-12 per IC (qty 100+)
- Eval board: EVAL-AD5940BIOZ ($150)

### Reader BOM Estimate (100-unit production)
| Component | Part | Unit Cost |
|-----------|------|-----------|
| Potentiostat AFE | AD5940 | $10 |
| MCU | STM32L476 | $6 |
| WiFi/BLE | ESP32-C3 | $3 |
| Display | 2.4" IPS TFT | $8 |
| Battery | 3.7V 2500mAh LiPo | $5 |
| USB-C charger | BQ25895 | $3 |
| PCB (4-layer) | Custom | $5 |
| Pogo connector | Mill-Max 0906 (10-pin) | $4 |
| Enclosure | Custom injection mold | $8 |
| Misc (passives, etc.) | Various | $10 |
| Assembly | Contract manufacturing | $15 |
| **Total reader COGS** | | **~$77** |

At $3,500 selling price → **95.8% gross margin on reader hardware**
(Note: R&D amortization and overhead not included)

### Cartridge BOM Estimate (1000-unit production)
| Component | Unit Cost |
|-----------|-----------|
| SPE with gold IDEs | $3-5 |
| PDMS/COC microfluidic lid | $1-2 |
| Injection-molded housing | $1-2 |
| MIP electropolymerization | $0.50 (labor/chemicals) |
| QC testing | $0.50 |
| Packaging + desiccant | $0.50 |
| **Total cartridge COGS** | **~$7-11** |

At $75 selling price → **85-91% gross margin on cartridges**

## Extraordinary Performance Data
A 2025 study demonstrated MIP on gold interdigitated microelectrode chip achieving:
- **LOD: 5 × 10⁻⁷ ppt** (sub-femtomolar) for PFOS
- **Detection time: 10 seconds**
- **Dynamic range: 5 × 10⁻⁷ to 5 × 10⁻⁴ ppt**

This is orders of magnitude better than the EPA MCL requirement of 4 ppt. Even with real-world performance degradation, there is massive headroom.

## Updated Cost Reduction Roadmap
| Milestone | Cartridge COGS | Selling Price | Margin |
|-----------|---------------|---------------|--------|
| Prototype (lab) | $50 | N/A (internal) | N/A |
| Beta (commercial SPEs) | $15-20 | $100 | 80-85% |
| Launch (custom SPEs) | $8-12 | $75 | 84-89% |
| Scale (roll-to-roll) | $3-5 | $75 (or reduce) | 93-96% |
