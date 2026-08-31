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
  hours: "09:00 — 18:30, Monday to Saturday",
};

export const heroSlides = [
  {
    lines: ["Built", "to last"] as [string, string],
    sub: "Industrial powder coating and precision-engineered power electronics — manufactured, tested and warranted in-house across two purpose-built facilities in Coimbatore.",
  },
  {
    lines: ["Precision", "in every coat"] as [string, string],
    sub: "A seven-stage pre-treatment and ITW Gema electrostatic application behind every finish, cured to a controlled 205–215°C.",
  },
  {
    lines: ["Two units.", "One standard."] as [string, string],
    sub: "15,000 sq ft of covered production across 80,000 sq ft of company-owned land — the same standard applied to a single panel board or a 15 ft fabrication.",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
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
    slug: "powder-coating",
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
    slug: "voltage-stabilizers",
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
    slug: "battery-chargers",
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
    scope: "Standard components",
    address: "98, 8th Street, Nehru Nagar West, Kalapatti Road, Coimbatore – 641 014",
    phone: "+91 98434 67376",
    office: "98434 67376",
    production: "98438 38496",
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
    features: [
      "3 spray booths of varying sizes",
      "2 baking ovens",
      "3 ITW Gema spray guns",
      "40 KVA generator backup",
      "Near Electronic Industrial Estate",
    ],
    map: "https://maps.google.com/?q=Renson+Electronics+Kalapatti+Road+Nehru+Nagar+West+Coimbatore",
    embed:
      "https://www.google.com/maps?q=Nehru+Nagar+West,+Kalapatti+Road,+Coimbatore+641014&output=embed",
  },
  {
    tag: "Unit II",
    name: "Heavy Component Division",
    scope: "Large components, up to 15 ft",
    address: "SF No. 471/1, Near Press Colony, Serayampalayam Village, Vellanapatti, Coimbatore – 641 048",
    phone: "+91 98433 44520",
    office: "84894 84240",
    production: "98433 44520",
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
    features: [
      "7-tank automated pre-treatment",
      "15 ft × 8 ft baking oven",
      "Components up to 15 ft in length",
      "Dedicated storage & logistics",
      "Near COINDIA Foundry Division",
    ],
    map: "https://maps.google.com/?q=Serayampalayam+Vellanapatti+Coimbatore+641048",
    embed:
      "https://www.google.com/maps?q=Serayampalayam,+Vellanapatti,+Coimbatore+641048&output=embed",
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

export const components = [
  "MS Cabinets", "Panel Boards", "Textile Frames", "Aluminium Bodies",
  "Motor Castings", "Sheet Metal Parts", "Industrial Enclosures",
  "Electrical Housings", "Structural Fabrications", "Custom Components",
];

export const timeline = [
  { year: "1986", title: "Foundation", detail: "The journey begins in Coimbatore with a focus on voltage regulation products." },
  { year: "1989", title: "MSME Registration", detail: "Formally established in December. Unit I set up with 5,000 sq ft of manufacturing space." },
  { year: "2001", title: "Strategic Expansion", detail: "The Powder Coating Division is launched to meet evolving industrial demand." },
  { year: "2025", title: "Unit II Scalability", detail: "A 10,000 sq ft facility with automated 7-tank systems and oversized ovens." },
  { year: "Today", title: "38+ Years Strong", detail: "Over 500 units produced monthly across two fully integrated facilities." },
];

export const leadership = [
  {
    initials: "JS",
    name: "J. Sunder Singh",
    suffix: "(Late)",
    role: "Founder",
    experience: "40 Yrs",
    domain: "Civil Engineering",
    bio: "A distinguished Chartered Civil Engineer and member of the Institution of Engineers (India), remembered for his invaluable contributions to infrastructure planning and project management, and for driving operational excellence across the company.",
    credentials: [
      "Chartered Civil Engineer",
      "Member — Institution of Engineers (India)",
      "Former Civil Manager, PSG Institutions",
    ],
  },
  {
    initials: "AD",
    name: "S. Allwin Daniel",
    suffix: "",
    role: "Proprietor",
    experience: "30+ Yrs",
    domain: "Electrical & Electronics",
    bio: "The technical backbone of Renson. Drives design innovation and execution quality across both the electronic and powder coating divisions, holding every batch to the same standard.",
    credentials: ["Electrical & Electronics Engineer", "Innovation Strategy Head"],
  },
];

export const testimonials = [
  {
    name: "Renita Katherine",
    role: "Manager",
    photo: "/images/Team/renita.jpg",
    quote:
      "What stands out to me is that quality here isn't assumed — it's checked. Every order is measured and signed off before dispatch, whether it's a single panel board or a fifteen-foot fabrication, and that consistency is what keeps our clients coming back year after year.",
  },
];

export const divisions = [
  {
    index: "01",
    title: "Electronic Division",
    detail:
      "Managed by qualified EEE and mechanical engineers with a responsive sales team, ensuring complete customer satisfaction on every order.",
  },
  {
    index: "02",
    title: "Powder Coating Division",
    detail:
      "Staffed by precision-driven specialists committed to consistent surface quality and oversized component coating.",
  },
  {
    index: "03",
    title: "After-Sales Service",
    detail:
      "A dedicated assistance team ready to uphold Renson Electronics' long-standing reputation for reliability.",
  },
];

export const principles = [
  { index: "01", title: "Quality that lasts", detail: "Every finish is specified, measured and signed off — never assumed." },
  { index: "02", title: "Delivery you can plan around", detail: "Dispatch within 48 hours of quality clearance, consistently." },
  { index: "03", title: "Capability at scale", detail: "From a single panel board to 15 ft structural fabrications." },
  { index: "04", title: "Support after the sale", detail: "Warranty backing and technical troubleshooting from our own engineers." },
];

/* ── Services ─────────────────────────────────────────────── */

export const stabilizerSpecs = [
  { label: "Range", value: "0.2 – 10 KVA" },
  { label: "Input", value: "140V – 270V" },
  { label: "Phases", value: "Single / Three" },
  { label: "Capacity", value: "250 Units/Mo" },
];

export const stabilizerAdvantages = [
  "Wide input range (140V – 270V) solutions",
  "Custom industrial three-phase models",
  "Precision coil winding for durability",
  "Rigorous in-house dimmer testing",
  "Direct technical warranty support",
];

export const electronicsEquipment = [
  ["Coil winding machines", "6 units"],
  ["Testing dimmers", "5 units"],
  ["Single-phase dimmers", "4 units"],
  ["Three-phase dimmer", "1 unit"],
  ["Heavy duty geared machine", "1 unit"],
  ["Core assembly", "2 lines"],
];

export const chargerFeatures = [
  {
    index: "01",
    kicker: "Production capacity",
    title: "100 Units / Month",
    detail: "Reliable, on-schedule production with the ability to scale for bulk orders.",
  },
  {
    index: "02",
    kicker: "Pre-dispatch protocol",
    title: "Tested Quality",
    detail: "Every unit undergoes electrical testing using precision voltage equipment.",
  },
  {
    index: "03",
    kicker: "Dedicated after-sales",
    title: "Support Force",
    detail: "Prompt assistance, warranty support and technical troubleshooting.",
  },
  {
    index: "04",
    kicker: "Built to specification",
    title: "Custom Config",
    detail: "Special capacities and enclosure types available on request.",
  },
  {
    index: "05",
    kicker: "End-to-end control",
    title: "In-House Tech",
    detail: "Manufactured entirely in-house for full traceability and consistency.",
  },
  {
    index: "06",
    kicker: "Since 1986",
    title: "Legacy Trust",
    detail: "Nearly four decades of proven reliability serving industrial clients.",
  },
];

/* ── Projects ─────────────────────────────────────────────── */

export const projects = [
  {
    index: "01",
    kicker: "Surface Finishing",
    title: "Industrial Powder Coating",
    detail:
      "Precision electrostatic powder coating for panel boards and industrial components, ensuring superior corrosion resistance and a finish specified to the client's exact shade.",
    image: "/images/powder-coating.jpg",
    facts: [
      ["Substrates", "MS, aluminium, sheet metal"],
      ["Pre-treatment", "5-tank & 7-tank"],
      ["Max length", "15 ft"],
      ["Turnaround", "48 hours from clearance"],
    ],
    href: "/services#powder-coating",
  },
  {
    index: "02",
    kicker: "Electronic Division",
    title: "Voltage Stabilizers",
    detail:
      "High-performance voltage regulation systems built for industrial applications, protecting sensitive equipment from the power fluctuations common across the region.",
    image: "/images/voltage-stabilizers.jpg",
    facts: [
      ["Range", "0.2 – 10 KVA"],
      ["Input window", "140V – 270V"],
      ["Configuration", "Single & three phase"],
      ["Output", "250 units / month"],
    ],
    href: "/services#voltage-stabilizers",
  },
  {
    index: "03",
    kicker: "Electronic Division",
    title: "Advanced Battery Chargers",
    detail:
      "Intelligent charging solutions for industrial batteries, designed for durability and optimal performance in demanding environments, and tested before every dispatch.",
    image: "/images/battery-chargers.jpg",
    facts: [
      ["Output", "100 units / month"],
      ["Testing", "100% pre-dispatch"],
      ["Configuration", "Custom capacities"],
      ["Support", "Dedicated after-sales"],
    ],
    href: "/services#battery-chargers",
  },
];

export const sectors = [
  "Textile machinery",
  "Electrical panel builders",
  "Motor manufacturers",
  "Sheet metal fabricators",
  "Foundries & castings",
  "Pump & valve industry",
  "Furniture & fixtures",
  "General engineering",
];

export const gallery = [
  { src: "/images/finishes.jpg", caption: "Colour range — any RAL shade on request", span: "md:col-span-7" },
  { src: "/images/machined-parts.jpg", caption: "Machined components staged for coating", span: "md:col-span-5" },
  { src: "/images/coil-rings.jpg", caption: "Coil assemblies, electronic division", span: "md:col-span-5" },
  { src: "/images/workshop.jpg", caption: "Fabrication and finishing floor", span: "md:col-span-7" },
];

/* ── Contact ──────────────────────────────────────────────── */

export const serviceCategories = [
  "Powder Coating",
  "Voltage Stabilizers",
  "Battery Chargers",
  "Bulk / OEM Order",
  "After-Sales Support",
  "Other Enquiry",
];
