export const company = {
  name: "Renson Electronics",
  tagline: "Precision · Durability · Excellence",
  since: 1986,
  blurb:
    "Excellence in industrial surface finishing and power electronics. Delivering precision-engineered solutions with absolute durability since 1986.",
  email: "rensonelectronics@gmail.com",
  phone: "+91 98434 67376",
  phoneHref: "+919843467376",
  whatsapp: "919843467376",
  gst: "33ACAPD5541P1ZO",
  udyam: "TN-03-0038459",
  constitution: "Proprietary",
  location: "Coimbatore, Tamil Nadu",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 38, suffix: "+", label: "Years of industry excellence", unit: "Since 1986" },
  { value: 2, suffix: "", label: "Purpose-built units", unit: "15,000 sq ft" },
  { value: 250, suffix: "", label: "Stabilizers per month", unit: "0.2 – 10 KVA" },
  { value: 500, suffix: "+", label: "Monthly production capacity", unit: "Units / month" },
  { value: 15, suffix: " ft", label: "Max component length", unit: "Oversized coating" },
];

export const capabilities = [
  {
    index: "01",
    title: "Powder Coating",
    kicker: "Surface Finishing",
    description:
      "Industrial-grade electrostatic powder coating for MS cabinets, panel boards, aluminium motor bodies, textile frames and motor castings. A 7-tank pre-treatment ensures superior adhesion and corrosion resistance.",
    specs: ["MS Cabinets", "Motor Bodies", "Panel Boards", "Textile Frames"],
    image: "/images/powder-coating.jpg",
    href: "/services#powder-coating",
  },
  {
    index: "02",
    title: "Voltage Stabilizers",
    kicker: "Electronic Division",
    description:
      "Single-phase and three-phase voltage stabilizers ranging from 0.2 KVA to 10 KVA, engineered to operate across a wide input range of 140V to 270V. Monthly production capacity of up to 250 units.",
    specs: ["0.2 – 10 KVA", "140V – 270V Input", "Single & 3 Phase", "In-house Testing"],
    image: "/images/voltage-stabilizers.jpg",
    href: "/services#voltage-stabilizers",
  },
  {
    index: "03",
    title: "Battery Chargers",
    kicker: "Electronic Division",
    description:
      "Precision-manufactured battery chargers backed by a dedicated after-sales service team. Consistent quality, reliable performance and responsive support — around 100 units produced every month.",
    specs: ["100 Units / Month", "Custom Orders", "Tested Quality", "After-Sales Support"],
    image: "/images/battery-chargers.jpg",
    href: "/services#battery-chargers",
  },
];

export const process = [
  { step: "01", name: "Inward & Inspection", detail: "Material segregation, labelling and logging against delivery challan." },
  { step: "02", name: "Checking", detail: "Quantity and quality verification against order specifications." },
  { step: "03", name: "De-greasing", detail: "Chemical solution removes oils and surface contaminants." },
  { step: "04", name: "De-rusting", detail: "Rust and oxidation removal for a clean, uniform substrate." },
  { step: "05", name: "Phosphating", detail: "Chemical treatment creates a bonding layer for corrosion resistance." },
  { step: "06", name: "Hot Air Drying", detail: "Eliminates residual moisture before the coating stage." },
  { step: "07", name: "Electrostatic Coating", detail: "ITW Gema spray application in booth, per client specification." },
  { step: "08", name: "Baking 205°C – 215°C", detail: "Tightly controlled cure for maximum powder fusion and durability." },
  { step: "09", name: "Quality Check", detail: "Stringent inspection of thickness, consistency and appearance." },
  { step: "10", name: "Dispatch", detail: "Securely packed and delivered within 48 hours of clearance." },
];

export const units = [
  {
    tag: "Unit I",
    name: "Main Manufacturing Centre",
    address: "98, 8th Street, Nehru Nagar West, Kalapatti Road, Coimbatore – 641 014",
    phone: "+91 98434 67376",
    rows: [
      ["Covered area", "5,000 sq ft"],
      ["Plot", "20,000 sq ft"],
      ["Pre-treatment", "Manual 5-tank (Aluminium & M.S.)"],
      ["Spray booths", "3 units, varying sizes"],
      ["Main oven", "10 ft × 5 ft × 8 ft"],
      ["Secondary oven", "6 ft × 4 ft × 4 ft"],
      ["Equipment", "3 × ITW Gema Easy Tronic"],
      ["Power backup", "40 KVA generator"],
    ],
    map: "https://maps.google.com/?q=Renson+Electronics+Kalapatti+Road+Nehru+Nagar+West+Coimbatore",
  },
  {
    tag: "Unit II",
    name: "Heavy Component Division",
    address: "SF No. 471/1, Near Press Colony, Serayampalayam Village, Vellanapatti, Coimbatore – 641 048",
    phone: "+91 98433 44520",
    rows: [
      ["Covered area", "10,000 sq ft"],
      ["Plot", "60,000 sq ft"],
      ["Pre-treatment", "Automated monorail 7-tank"],
      ["Spray booths", "2 units"],
      ["Main oven", "15 ft × 6 ft × 8 ft"],
      ["Secondary oven", "7 ft × 5 ft × 5 ft"],
      ["Equipment", "2 × ITW Gema Easy Tronic"],
      ["Max load", "15 ft component length"],
    ],
    map: "https://maps.google.com/?q=Serayampalayam+Vellanapatti+Coimbatore+641048",
  },
];

export const differentiators = [
  {
    index: "01",
    title: "7-Tank Pre-Treatment",
    detail:
      "Automated overhead monorail at Unit II ensures degreasing, de-rusting, phosphating and passivation with zero manual error.",
  },
  {
    index: "02",
    title: "ITW Gema Electrostatic Guns",
    detail:
      "Precision spray technology for uniform powder adhesion, delivering flawless finish consistency across every batch.",
  },
  {
    index: "03",
    title: "Oversized Component Capability",
    detail:
      "A 12 ft × 12 ft baking oven handles large industrial components most coaters simply cannot accommodate.",
  },
  {
    index: "04",
    title: "48-Hour Dispatch Commitment",
    detail:
      "Every finished order is securely packed and dispatched within 48 hours of quality approval.",
  },
];

export const finishes = [
  "Matte", "High Gloss", "Smooth", "Sand Texture", "UV Resistant",
  "Chemical Resistant", "Any RAL Colour", "Wrinkle", "Metallic",
];

export const timeline = [
  { year: "1986", title: "Foundation", detail: "The journey begins in Coimbatore with a focus on voltage regulation products." },
  { year: "1989", title: "MSME Registration", detail: "Formally established. Unit I set up with 5,000 sq ft of manufacturing space." },
  { year: "2001", title: "Strategic Expansion", detail: "Powder Coating Division launched to meet evolving industrial demand." },
  { year: "2025", title: "Unit II Scalability", detail: "10,000 sq ft facility with automated 7-tank systems and oversized ovens." },
];
