import {
  Stethoscope,
  HeartPulse,
  Hospital,
  ChefHat,
  Bath,
  Layers,
  Home,
  Hammer,
  Award,
  Sparkles,
  Ruler,
  Leaf,
} from "lucide-react";

export const COMPANY = {
  name: "Haven M Construction, LLC",
  tagline: "Building Exceptional Animal Hospitals That Inspire Trust",
  subtagline:
    "Designing and constructing state-of-the-art veterinary hospitals with precision, craftsmanship, and uncompromising quality.",
  address: "1 Claridge Dr, Unit 321, Verona, NJ 07044",
  phone: "(201) 264-3506",
  phoneRaw: "+12012643506",
  email: "info@havenconstruction.com",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM",
};

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Sectors", href: "#sectors" },
  { label: "Press", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO_VIDEO = "/hero.mp4";

export const HERO_POSTER =
  "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=2400&q=80";

export const HERO_STATS = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const MARQUEE_ITEMS = [
  "Animal Hospital Construction",
  "Veterinary Clinic Builds",
  "Medical Facility Renovation",
  "Design-Build",
  "Luxury Residential",
  "OSH A Compliant",
  "Licensed & Insured",
  "Tri-State Coverage",
];

export const PHILOSOPHY = [
  {
    number: "01",
    title: "Vision",
    body: "Every project begins with listening. We translate your clinical workflows, patient needs, and design aspirations into a clear architectural vision.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Craft",
    body: "From structural steel to surgical-grade finishes, we obsess over details others overlook. Precision is non-negotiable.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Stewardship",
    body: "We build as if the work were our own—respecting your timeline, your budget, and the trust you've placed in our team.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Legacy",
    body: "Our buildings are designed to perform for decades. We choose materials, systems, and partners that stand the test of time.",
    icon: Award,
  },
];

export const SERVICES = [
  {
    icon: Hospital,
    title: "Animal Hospital Construction",
    description:
      "Ground-up construction of modern, full-service veterinary hospitals engineered for clinical excellence.",
    image:
      "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1400&q=80",
    badge: "Signature Specialty",
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: Stethoscope,
    title: "Veterinary Clinic Construction",
    description:
      "Boutique clinics and wellness centers designed for efficiency and warmth.",
    image:
      "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    title: "Medical Facility Renovations",
    description:
      "Phased remodels that elevate medical spaces with minimal disruption.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Bespoke kitchen transformations with premium stone and chef-grade appliances.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description:
      "Spa-inspired retreats with custom tilework and refined fixtures.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Layers,
    title: "Basement Finishing",
    description:
      "Bespoke lower-level conversions—home theaters, wellness suites, guest retreats.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Home,
    title: "Whole Home Renovations",
    description:
      "Comprehensive transformations balancing architecture, light, and luxury.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Hammer,
    title: "Home Additions",
    description:
      "Seamless expansions that add square footage and architectural harmony.",
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We meet to understand your vision, operations, and the people your facility serves.",
  },
  {
    step: "02",
    title: "Programming",
    description:
      "Detailed feasibility analysis, schematic planning, and budget alignment.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Architectural drawings, material selections, and 3D renderings bring the space to life.",
  },
  {
    step: "04",
    title: "Preconstruction",
    description:
      "Transparent line-item pricing, permitting, and trade partner coordination.",
  },
  {
    step: "05",
    title: "Build",
    description:
      "Our skilled craftsmen execute with precision, safety, and rigorous quality control.",
  },
  {
    step: "06",
    title: "Handover",
    description:
      "A white-glove walkthrough, post-occupancy support, and ongoing partnership.",
  },
];

export const SECTORS = [
  {
    number: "01",
    title: "Animal Hospitals",
    description: "Full-service veterinary hospitals engineered around patient comfort and clinical flow.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "02",
    title: "Veterinary Clinics",
    description: "Boutique clinics balancing efficiency with a warm, inviting atmosphere.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "03",
    title: "Emergency Animal Centers",
    description: "Critical-care facilities with redundant power, advanced HVAC, and surgical suites.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "04",
    title: "Pet Wellness Clinics",
    description: "Calm, modern spaces that put pets and owners at ease from the first step inside.",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "05",
    title: "Specialty Veterinary Centers",
    description: "Diagnostic imaging, oncology, and specialty care environments built to specification.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "06",
    title: "Residential Estates",
    description: "Luxury renovations, additions, and bespoke homes for discerning clients.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  },
];

export const PROJECTS = [
  {
    title: "Cedar Park Animal Hospital",
    category: "Animal Hospitals",
    location: "Verona, NJ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1600&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Summit Veterinary Clinic",
    category: "Renovations",
    location: "Summit, NJ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maple Avenue Kitchen",
    category: "Residential",
    location: "Montclair, NJ",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Northstar Emergency Center",
    category: "Animal Hospitals",
    location: "Ridgewood, NJ",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lakeside Spa Bathroom",
    category: "Residential",
    location: "Caldwell, NJ",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Whole Home",
    category: "Residential",
    location: "West Orange, NJ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Verona Wellness Clinic",
    category: "Renovations",
    location: "Verona, NJ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ridgewood Commercial Build",
    category: "Commercial",
    location: "Ridgewood, NJ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
];

export const PROJECT_FILTERS = [
  "All Work",
  "Animal Hospitals",
  "Renovations",
  "Residential",
  "Commercial",
];

export const TESTIMONIALS = [
  {
    name: "Dr. Elena Martinez",
    role: "Owner, Cedar Park Animal Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    quote:
      "Haven Construction turned our vision into a stunning, fully functional animal hospital. Their attention to clinical workflow and patient comfort is unmatched.",
    rating: 5,
  },
  {
    name: "James Whitaker",
    role: "CEO, Northstar Veterinary Group",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    quote:
      "From design to handover, the Haven team was professional, on time, and on budget. We couldn't be happier with our new facility.",
    rating: 5,
  },
  {
    name: "Sophia Reyes",
    role: "Homeowner, Verona NJ",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote:
      "Our kitchen and bath remodel was flawless. The craftsmanship felt truly bespoke—worth every penny.",
    rating: 5,
  },
  {
    name: "Dr. Aaron Liang",
    role: "Director, Summit Vet Specialists",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    quote:
      "Haven's team understood the precision required for specialty veterinary spaces. The result is a world-class facility.",
    rating: 5,
  },
];

export const COMPANY_STATS = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 35, suffix: "+", label: "Team Members" },
];

export const FAQS = [
  {
    question: "Do you specialize in animal hospital construction?",
    answer:
      "Animal hospital construction is our primary specialty. We've built and renovated dozens of veterinary hospitals, emergency centers, and specialty clinics across the region.",
  },
  {
    question: "How long does a typical veterinary hospital build take?",
    answer:
      "Ground-up veterinary hospitals typically take 8–14 months from groundbreaking to final handover. Renovations range from 3–8 months. Detailed schedules are provided during planning.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Haven Construction, LLC is fully licensed with comprehensive general liability and workers' compensation coverage. We are OSHA compliant on every job site.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes—we offer design-build services, managing architectural design, engineering, and construction under one roof. This streamlines communication and accelerates delivery.",
  },
  {
    question: "Can you renovate an animal hospital without closing it?",
    answer:
      "Absolutely. We routinely perform phased renovations on operating veterinary facilities using careful scheduling, dust containment, and noise mitigation.",
  },
  {
    question: "What types of residential work do you do?",
    answer:
      "We provide luxury kitchen and bathroom remodels, basement finishing, whole-home renovations, and home additions—all with our signature craftsmanship.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer complimentary initial consultations to discuss your project, scope, timeline, and budget with no obligation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Verona, New Jersey and serve clients throughout NJ, NY, and the greater Tri-State area. Larger commercial projects travel nationally.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Transparent, line-item proposals. You'll see exactly where every dollar is allocated—from materials and labor to permits and finishes. No hidden fees.",
  },
  {
    question: "Do you provide a warranty on your work?",
    answer:
      "Yes. All projects include a comprehensive workmanship warranty, plus all manufacturer warranties on materials and equipment.",
  },
];