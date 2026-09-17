export interface EngineeringService {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  targetAudience: string[];
}

export const SERVICES: EngineeringService[] = [
  {
    id: 'serv-structure',
    slug: 'solar-structure-service',
    name: 'Solar Structure Fabrication & Service',
    tagline: 'Custom Fabrication, Structural Analysis & Site Erection',
    shortDescription: 'End-to-end custom fabrication, structural drafting, site anchoring, and retrofitting for solar module mounting structures.',
    fullDescription: 'Shivaa Engineering Works provides comprehensive engineering services for solar panel mounting structures across industrial, commercial, and utility projects. From 3D CAD modeling and wind shear calculations to precision CNC metal fabrication, hot-dip galvanizing, and site erection.',
    image: '/images/mounting-structure-gi.jpg',
    iconName: 'Layers',
    features: [
      'IS 800 steel structural code compliance auditing',
      'Hot-dip galvanizing quality testing (>80 micron guarantee)',
      'Custom clamp & leg tilt angle manufacturing for optimal solar yield',
      'On-site structural installation and torque auditing'
    ],
    deliverables: [
      'Detailed Structural CAD Drawings & Load Calculation Reports',
      'Fabricated Galvanized Steel Members & Stainless Steel Clamps',
      'On-site Foundation Anchor Bolting & Structural Erection'
    ],
    targetAudience: [
      'Solar EPC Contractors',
      'Industrial Factory Owners',
      'Commercial Property Developers'
    ]
  },
  {
    id: 'serv-pump',
    slug: 'solar-pump-service',
    name: 'Solar Pump System & Installation Service',
    tagline: 'Agricultural & Industrial Solar Pumping Solutions',
    shortDescription: 'Installation, maintenance, structure mounting, and drive optimization for agricultural and industrial solar water pumping systems.',
    fullDescription: 'We provide complete structural mounting, solar drive alignment, and technical maintenance services for surface and submersible solar water pumps. Ideal for agricultural irrigation in Tamil Nadu and industrial water management.',
    image: '/images/solar-water-pump-3hp.jpg',
    iconName: 'Droplets',
    features: [
      'Heavy-duty tracking and fixed ground mount pump structures',
      'MPPT solar pump controller housing and surge protection',
      'Preventative maintenance and annual inspection service',
      'Submersible motor & solar panel health diagnostics'
    ],
    deliverables: [
      'Solar Pump Structural Stand Fabrication',
      'Controller Enclosure & Wiring Setup',
      'System Performance Testing & Water Output Verification'
    ],
    targetAudience: [
      'Agricultural Farmers & Farm Owners',
      'Industrial Water Treatment Facilities',
      'Rural Community Water Supply Schemes'
    ]
  },
  {
    id: 'serv-design',
    slug: 'solar-system-design-service',
    name: 'Solar System Design & Engineering Consultation',
    tagline: 'Technical Layout Drafting, Shadow Analysis & System Sizing',
    shortDescription: 'Professional engineering consultation, solar irradiation assessment, shadow path modeling, and single-line electrical diagram (SLD) creation.',
    fullDescription: 'Leveraging years of solar manufacturing experience in Coimbatore, our engineering design service assists clients in optimizing solar plant layouts, selecting structural configurations, and ensuring maximum return on solar investment.',
    image: '/images/on-grid-solar-system.jpg',
    iconName: 'Compass',
    features: [
      '3D Solar roof shadow path simulation & azimuth optimization',
      'Structural wind load simulation (up to 180 km/h)',
      'BoM (Bill of Materials) estimation & cost optimization',
      'Regulatory compliance guidance for grid connectivity'
    ],
    deliverables: [
      'Shadow Analysis & System Layout Blueprint',
      'Single Line Diagram (SLD) & Cable Routing Plan',
      'Complete Bill of Materials (BoM) with Engineering Tolerances'
    ],
    targetAudience: [
      'Industrial Enterprises planning captive solar plants',
      'Solar Integrators requiring specialized structural engineering',
      'Architects and Building Engineering Consultants'
    ]
  }
];
