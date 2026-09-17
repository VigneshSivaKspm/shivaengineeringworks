import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-ss01',
    slug: 'solar-street-light-ss01-single-arm',
    name: 'Solar Street Light - SS01 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Industrial single arm solar street lighting system engineered for rural roads, campus pathways, and industrial premises.',
    fullDescription: 'The SS01 Single Arm Solar Street Light by Shivaa Engineering Works features a robust hot-dip galvanized steel pole with integrated solar panel mounting bracket and high-lumen LED luminaire. Designed for heavy outdoor usage and weather exposure in Indian climate conditions.',
    images: [
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS01-SA',
    armType: 'Single Arm',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Mild Steel / Hot-Dip Galvanized', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Single Arm Extension', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'High Efficiency LED', group: 'Electrical' },
      { label: 'Height', value: '5 Meters - 7 Meters (Customizable)', group: 'Physical' },
      { label: 'IP Rating', value: 'IP65 Weatherproof', group: 'Compliance' },
      { label: 'Bearable Wind Speed', value: 'Up to 140 km/h', group: 'Mechanical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Usage / Application', value: 'Street Lighting / Industrial Campus', group: 'General' },
      { label: 'Country of Origin', value: 'India (Coimbatore, Tamil Nadu)', group: 'General' }
    ],
    applications: [
      'Village Roads & Panchayat Highway Stretch',
      'Factory Campuses & Warehousing Complexes',
      'Gated Real Estate Communities & Public Parks',
      'Institutional Walkways & Parking Lots'
    ],
    features: [
      'Hot-dip galvanization coating over 80 microns for anti-corrosion endurance',
      'Heavy-duty base plate design for anchor bolt securing',
      'Optimal inclination panel mounting bracket for maximum solar absorption',
      'Pre-wired interior conduits for seamless electrical installation'
    ]
  },
  {
    id: 'prod-ss03',
    slug: 'solar-street-light-ss03-single-arm',
    name: 'Solar Street Light - SS03 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Heavy-duty tubular single arm solar street lighting assembly built for highway service roads and commercial parks.',
    fullDescription: 'Model SS03 is a specialized single arm solar lighting structure built with high-grade steel sections, featuring reinforced overhang arm brackets, integrated battery housing, and corrosion-resistant fasteners.',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS03-SA',
    armType: 'Single Arm',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'High Grade Steel Tubular / Octagonal', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Single Arm Overhang', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'Solar LED Luminaire', group: 'Electrical' },
      { label: 'Height', value: '6 Meters', group: 'Physical' },
      { label: 'Thickness', value: '3mm to 4mm Nominal', group: 'Physical' },
      { label: 'IP Rating', value: 'IP65 / IP66 Enclosure', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Commercial IT Parks & Industrial Estates',
      'State Highway Service Lanes',
      'Township Internal Main Roads'
    ],
    features: [
      'Precision welded base plate with gusset stiffeners',
      'Integrated battery box mounting bracket on pole shaft',
      'Vandalism and weather resilient exterior finish'
    ]
  },
  {
    id: 'prod-ss05',
    slug: 'solar-street-light-ss05-single-arm',
    name: 'Solar Street Light - SS05 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Precision engineered single arm octagonal solar street pole with aerodynamic curve arm bracket.',
    fullDescription: 'The SS05 Single Arm Solar Street Light structure offers modern octagonal aesthetics combined with structural strength. Ideal for smart city lighting projects and high-visibility corporate avenues.',
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS05-SA',
    armType: 'Single Arm',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Octagonal Galvanized Iron / Mild Steel', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'LED Outdoor Light', group: 'Electrical' },
      { label: 'Height', value: '6 Meters to 9 Meters', group: 'Physical' },
      { label: 'Thickness', value: '3mm / 4mm', group: 'Physical' },
      { label: 'Bearable Wind Speed', value: 'Up to 150 km/h', group: 'Mechanical' },
      { label: 'IP Rating', value: 'IP65', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Smart City Road Networks',
      'Industrial Campus Radial Drives',
      'Airport Perimeter Roads & Logistics Hubs'
    ],
    features: [
      'Tapered octagonal column profile for high structural rigidity',
      'Smooth curved single arm extension for wide light distribution',
      'Top-mounted solar PV frame adjustable for regional solar azimuth angles'
    ]
  },
  {
    id: 'prod-ss06',
    slug: 'solar-street-light-ss06-double-arm',
    name: 'Solar Street Light - SS06 Double Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Dual arm solar lighting structure for central verge and dual carriageway road illumination.',
    fullDescription: 'Shivaa Engineering Works SS06 Double Arm Solar Street Light is tailored for median installations where dual direction illumination is required. Houses two opposing luminaires fed by a centralized top-mounted solar array structure.',
    images: [
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS06-DA',
    armType: 'Double Arm',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Galvanized Steel / MS', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Double Arm Dual Facing', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'Dual High-Lumen LED Luminaires', group: 'Electrical' },
      { label: 'Height', value: '7 Meters to 9 Meters', group: 'Physical' },
      { label: 'Bearable Wind Speed', value: '145 km/h', group: 'Mechanical' },
      { label: 'IP Rating', value: 'IP65 Waterproof', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Divided Four-Lane Industrial Roads',
      'Central Avenue Medians in Residential Townships',
      'Double-sided Car Parking Facilities'
    ],
    features: [
      'Symmetrical double arm cantilever design',
      'Dual fixture wiring channel with rain-drip seals',
      'High load capacity solar panel framing header'
    ]
  },
  {
    id: 'prod-ss07',
    slug: 'solar-street-light-ss07-single-arm',
    name: 'Solar Street Light - SS07 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Streamlined single arm solar pole designed for aesthetic urban lighting and commercial complexes.',
    fullDescription: 'Model SS07 single arm solar street light combines aesthetic architecture with durable structural design. Customized height options available to meet municipal lighting standards.',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS07-SA',
    armType: 'Single Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Mild Steel / Hot Galvanized Iron', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Single Arm Arc Design', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'LED Light System', group: 'Electrical' },
      { label: 'Height', value: '6 Meters', group: 'Physical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Urban Public Spaces',
      'Hospital & Educational Campus Walkways',
      'Resorts & Commercial Corridors'
    ],
    features: [
      'Arc style arm contour',
      'Anti-corrosive primer and polyurethane finish',
      'Easy access inspection door near base plate'
    ]
  },
  {
    id: 'prod-ss08',
    slug: 'solar-street-light-ss08-double-arm',
    name: 'Solar Street Light - SS08 Double Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Industrial grade double arm solar street pole engineered for heavy-duty outdoor median installations.',
    fullDescription: 'The SS08 Double Arm model is built with double side extension arms mounted at 180 degrees. Designed to illuminate broad road cross-sections with single solar infrastructure support.',
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS08-DA',
    armType: 'Double Arm',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Hot-Dip Galvanized Mild Steel', group: 'Mechanical' },
      { label: 'Arm Configuration', value: '180-Degree Double Arm', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'Dual LED Street Lights', group: 'Electrical' },
      { label: 'Height', value: '8 Meters', group: 'Physical' },
      { label: 'Thickness', value: '4mm', group: 'Physical' },
      { label: 'IP Rating', value: 'IP65 Outdoor Rated', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India (Coimbatore)', group: 'General' }
    ],
    applications: [
      'Industrial Zone Primary Arterials',
      'Highway Median Lighting',
      'Container Terminal Corridors'
    ],
    features: [
      'Balanced dual cantilever arm stress distribution',
      'High wind load structural safety factor',
      'Modular solar panel rack fitting'
    ]
  },
  {
    id: 'prod-ss09',
    slug: 'solar-street-light-ss09-double-arm',
    name: 'Solar Street Light - SS09 Double Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Octagonal double arm solar street light pole with heavy-duty structural base flange.',
    fullDescription: 'SS09 is an octagonal dual-arm solar lighting structure manufactured with high tensile steel sheets bent into precise tapered octagonal sections.',
    images: [
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS09-DA',
    armType: 'Double Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Octagonal Galvanized Steel', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Double Arm', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'High Brightness LED', group: 'Electrical' },
      { label: 'Height', value: '8 Meters - 10 Meters', group: 'Physical' },
      { label: 'IP Rating', value: 'IP65', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Municipal Arterial Roads',
      'Factory Complex Main Entrances',
      'Port & Rail Freight Yards'
    ],
    features: [
      'Hot-dip galvanized conforming to IS 2629 standards',
      'Double arm fixture supports up to 100W LED heads',
      'Integrated lockable access door'
    ]
  },
  {
    id: 'prod-ss10',
    slug: 'solar-street-light-ss10-double-arm',
    name: 'Solar Street Light - SS10 Double Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Premium double arm solar pole assembly designed for maximum coverage and longevity.',
    fullDescription: 'The SS10 Double Arm model represents Shivaa Engineering Works heavy-series solar street light design with reinforced gusset plates and elevated solar panel structure.',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS10-DA',
    armType: 'Double Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Structural Mild Steel / Galvanized', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Double Arm symmetrical', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'Dual Outdoor LED', group: 'Electrical' },
      { label: 'Height', value: '9 Meters', group: 'Physical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Commercial Park Main Drives',
      'Public Transit Hub Terminals'
    ],
    features: [
      'Sturdy 9m shaft with uniform taper',
      'Double arm rigid fixture mount',
      'Pre-drilled anchor flange plate'
    ]
  },
  {
    id: 'prod-high-mast',
    slug: 'high-mast-street-light-pole',
    name: 'High Mast Street Light Pole',
    categorySlug: 'street-light-poles',
    categoryName: 'Street Light Poles & High Masts',
    shortDescription: 'High mast steel lighting tower (12m - 30m) with polygonal shaft and lantern ring mechanism for wide area coverage.',
    fullDescription: 'Shivaa Engineering Works manufactures heavy-duty High Mast Lighting Poles for expansive industrial spaces, traffic junctions, and sports grounds. Features continuous polygonal tapered steel sections hot-dip galvanized for extreme durability.',
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'HM-POLE-SERIES',
    armType: 'High Mast',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'High Tensile Structural Steel (BS EN 10025 / IS 2062)', group: 'Mechanical' },
      { label: 'Section Type', value: 'Polygonal (12-sided / 20-sided) Tapered', group: 'Mechanical' },
      { label: 'Height Range', value: '12 Meters to 30 Meters', group: 'Physical' },
      { label: 'Galvanization', value: 'Hot-Dip Galvanized to IS 4759 / BS EN ISO 1461', group: 'Compliance' },
      { label: 'Wind Design Speed', value: 'Up to 180 km/h (IS 875 Part 3 compliant)', group: 'Mechanical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India (Coimbatore)', group: 'General' }
    ],
    applications: [
      'Major Highway Interchanges & Toll Plazas',
      'Industrial Stockyards & Freight Terminals',
      'Sports Stadiums & Outdoor Exhibition Grounds',
      'Airport Aprons & Seaport Terminals'
    ],
    features: [
      'Motorized or manual winch raising and lowering lantern ring system',
      'Multi-sided polygonal section for superior aerodynamic stability',
      'Internal cable guide wire mechanism and trailing cable setup',
      'Heavy base flange welded with continuous structural welds'
    ]
  },
  {
    id: 'prod-ss12',
    slug: 'solar-street-light-ss12-double-arm',
    name: 'Solar Street Light - SS12 Double Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Dual arm solar light structure engineered for rural infrastructure and Panchayat roadway projects.',
    fullDescription: 'The SS12 Double Arm is optimized for robust cost-effective rural road illumination. Built with weather-treated tubular steel section and dual mounting brackets.',
    images: [
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS12-DA',
    armType: 'Double Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Galvanized Mild Steel', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Double Arm', group: 'Mechanical' },
      { label: 'Lighting Type', value: 'LED', group: 'Electrical' },
      { label: 'Height', value: '7 Meters', group: 'Physical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Gram Panchayat Road Projects',
      'Agricultural Processing Facility Drives'
    ],
    features: [
      'Hot-dip galvanized pole',
      'Durable dual arm brackets',
      'Base anchor plate setup'
    ]
  },
  {
    id: 'prod-ss13',
    slug: 'solar-street-light-ss13-single-arm',
    name: 'Solar Street Light - SS13 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Compact single arm solar street pole for residential layouts and private industrial roadways.',
    fullDescription: 'Model SS13 Single Arm solar light is designed for efficient 5m to 6m mounting height requirement with easy assembly and maintenance.',
    images: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS13-SA',
    armType: 'Single Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Steel Tubular / Octagonal', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Single Arm', group: 'Mechanical' },
      { label: 'Height', value: '5 Meters / 6 Meters', group: 'Physical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Gated Residential Enclaves',
      'College & School Campuses'
    ],
    features: [
      'Galvanized finish',
      'Integrated solar PV arm bracket',
      'Pre-drilled anchor layout'
    ]
  },
  {
    id: 'prod-ss15',
    slug: 'solar-street-light-ss15-single-arm',
    name: 'Solar Street Light - SS15 Single Arm',
    categorySlug: 'solar-lighting-solutions',
    categoryName: 'Solar Lighting Solutions',
    shortDescription: 'Heavy single arm solar pole configuration for industrial perimeter security and warehouse lighting.',
    fullDescription: 'The SS15 model provides high elevation single arm solar light mounting for perimeter security fences, factory boundary walls, and logistics yards.',
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SS15-SA',
    armType: 'Single Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Galvanized Structural Steel', group: 'Mechanical' },
      { label: 'Arm Configuration', value: 'Single Arm', group: 'Mechanical' },
      { label: 'Height', value: '7 Meters - 8 Meters', group: 'Physical' },
      { label: 'IP Rating', value: 'IP65', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Industrial Boundary Walls & Perimeters',
      'Warehousing Truck Bay Lighting'
    ],
    features: [
      'Heavy duty base plate',
      'Weather tight enclosure fittings',
      'Standardized solar array clamp mounts'
    ]
  },
  {
    id: 'prod-street-light-pole',
    slug: 'street-light-pole',
    name: 'Street Light Pole (Tubular & Octagonal)',
    categorySlug: 'street-light-poles',
    categoryName: 'Street Light Poles & High Masts',
    shortDescription: 'Custom manufactured swaged tubular and tapered octagonal steel street light poles.',
    fullDescription: 'Shivaa Engineering Works supplies high quality non-solar and solar-ready galvanized steel street light poles in heights from 3m to 12m, custom fabricated according to IS specifications.',
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SEW-SLP-STD',
    armType: 'Single Arm',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Body Material', value: 'Mild Steel / Galvanized Iron Pipe (IS 2713 / IS 875)', group: 'Mechanical' },
      { label: 'Type', value: 'Swaged Tubular / Octagonal Tapered', group: 'Mechanical' },
      { label: 'Height', value: '3 Meters to 12 Meters', group: 'Physical' },
      { label: 'Galvanization', value: 'Hot-Dip Galvanized (>80 Microns)', group: 'Compliance' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India (Coimbatore)', group: 'General' }
    ],
    applications: [
      'Municipal Road Networks',
      'Real Estate Township Infrastructure',
      'Industrial Park Internal Roads'
    ],
    features: [
      'Uniform galvanization preventing inner and outer rust',
      'Customized single/double/triple arm bracket attachments',
      'Includes base plate, J-bolts, and inspection door template'
    ]
  },
  {
    id: 'prod-rooftop-structure',
    slug: 'rooftop-solar-mounting-structure',
    name: 'Solar Panel Mounting Structure (Rooftop 1kW - 1MW)',
    categorySlug: 'solar-panel-mounting-structure',
    categoryName: 'Solar Panel Mounting Structure',
    shortDescription: 'IS 800 code compliant galvanized rooftop mounting structure engineered for metal tile, RCC, and trapezoidal roofs.',
    fullDescription: 'Shivaa Engineering Works specializes in custom designing and fabricating solar module mounting structures for industrial rooftops. Manufactured with high yield steel profiles, hot-dip galvanized to ensure 25+ years structural service life.',
    images: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SEW-RMS-100',
    armType: 'N/A',
    featured: true,
    brochureAvailable: true,
    specifications: [
      { label: 'Material', value: 'Hot-Dip Galvanized Steel (IS 2062 / IS 800)', group: 'Mechanical' },
      { label: 'Coating Thickness', value: 'Minimum 80 Microns Zinc Coating', group: 'Compliance' },
      { label: 'Tilt Angle', value: '10 to 30 Degrees (Customizable as per Latitude)', group: 'Physical' },
      { label: 'Wind Resistance', value: 'Designed for speeds up to 150 km/h (IS 875)', group: 'Mechanical' },
      { label: 'Roof Suitability', value: 'RCC Roofs, Metal Trapezoidal Sheets, Asbestos Roofs', group: 'General' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India (Coimbatore)', group: 'General' }
    ],
    applications: [
      'Textile Mills & Industrial Factory Roofs in Coimbatore Region',
      'Commercial Warehouses & Logistics Parks',
      'Institutional & Hospital Roof Solar Projects'
    ],
    features: [
      '3D CAD structural stress analysis for wind & dead load calculations',
      'Non-penetrative standing seam clamp solutions available',
      'Standardized stainless steel SS304 / SS316 hardware',
      'Fast modular assembly reducing installation time'
    ]
  },
  {
    id: 'prod-ground-mounted-structure',
    slug: 'ground-mounted-solar-structure',
    name: 'Ground Mounted Solar Module Structure',
    categorySlug: 'solar-panel-mounting-structure',
    categoryName: 'Solar Panel Mounting Structure',
    shortDescription: 'Heavy ground-mounted fixed-tilt solar structural framing for megawatt solar power plants.',
    fullDescription: 'Engineered for utility-scale solar farms and commercial captive solar power plants. Built with heavy cold-formed galvanized C & Z purlins, columns, and rafter beams.',
    images: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SEW-GMS-MW',
    armType: 'N/A',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'Material', value: 'High Tensile Galvanized Steel / PosMAC / Cold Formed Sections', group: 'Mechanical' },
      { label: 'Foundation Type', value: 'Concrete Pile / Ground Screw / Ballasted', group: 'Physical' },
      { label: 'Wind Speed Resistance', value: 'Up to 160 km/h', group: 'Mechanical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Utility-Scale Solar Farms',
      'Captive Solar Power Generation Plants',
      'Agricultural Solar Arrays'
    ],
    features: [
      'Optimized weight-to-strength ratio reducing civil foundation costs',
      'Pre-punched purlin holes for rapid module mounting',
      'Designed in accordance with IS 800 standards'
    ]
  },
  {
    id: 'prod-on-grid-system',
    slug: 'on-grid-solar-power-system',
    name: 'On Grid Solar Power System (10kW - 500kW)',
    categorySlug: 'on-grid-solar-power-systems',
    categoryName: 'On Grid Solar Power Systems',
    shortDescription: 'Turnkey commercial and industrial grid-tied solar photovoltaic energy system.',
    fullDescription: 'Complete on-grid solar plant engineering by Shivaa Engineering Works, including tier-1 solar PV modules, grid tie inverters, net metering protection panels, and heavy-duty structural mountings.',
    images: [
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80'
    ],
    priceLabel: 'Price on Request',
    modelCode: 'SEW-OGS-SERIES',
    armType: 'N/A',
    featured: false,
    brochureAvailable: true,
    specifications: [
      { label: 'System Capacity Range', value: '10 kW to 500+ kW', group: 'Electrical' },
      { label: 'Inverter Type', value: 'Three Phase On-Grid String Inverter', group: 'Electrical' },
      { label: 'Grid Synchronization', value: 'Bi-directional Net Metering Compliant', group: 'Electrical' },
      { label: 'Structure Material', value: 'Hot-Dip Galvanized Iron (IS 800)', group: 'Mechanical' },
      { label: 'Brand', value: 'Shivaa Engineering Works', group: 'General' },
      { label: 'Country of Origin', value: 'India', group: 'General' }
    ],
    applications: [
      'Textile & Manufacturing Plants',
      'Commercial Malls & Office Towers',
      'Educational Campus Facilities'
    ],
    features: [
      'Drastic reduction in monthly electricity tariff expenses',
      'Remote cloud monitoring of live daily solar energy generation',
      'Complete structural and electrical protection equipment'
    ]
  }
];
