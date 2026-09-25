export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  location: {
    address: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    googleMapsEmbedUrl: string;
    googleMapsUrl: string;
  };
  contact: {
    phonePrimary: string;
    phoneSecondary?: string;
    emailPrimary: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    workingHours: string;
  };
  manufacturing: {
    standards: string[];
    capabilities: string[];
    facilityLocation: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: 'Shivaa Engineering Works',
  legalName: 'Shivaa Engineering Works',
  tagline: 'Engineering Smarter Solar & Structural Lighting Solutions',
  establishedYear: 2009,
  location: {
    address: '108/1, Athipalayam Road, Chinnavedampatty, Coimbatore - 641049, Tamil Nadu, India',
    street: '108/1, Athipalayam Road',
    area: 'Chinnavedampatty',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641049',
    country: 'India',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.656247952775!2d76.9745851!3d11.0643195!2m3!1f00!2f00!3f00!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7d9a101b0e5%3A0x868c2d585e13d969!2sChinnavedampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641049!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    googleMapsUrl: 'https://maps.google.com/?q=108/1+Athipalayam+Road+Chinnavedampatty+Coimbatore+Tamil+Nadu+641049',
  },
  contact: {
    phonePrimary: '+91 98422 47372',
    phoneSecondary: '+91 94437 24372',
    emailPrimary: 'info@shivaaengineering.in',
    whatsappNumber: '919842247372',
    whatsappFormatted: '+91 98422 47372',
    workingHours: 'Monday - Saturday: 9:00 AM - 7:00 PM IST',
  },
  manufacturing: {
    standards: [
      'IS 800 Steel Design Code Compliance',
      'Hot-Dip Galvanized Corrosion Protection',
      'Custom Engineering & CAD Structural Analysis',
      'Precision CNC Fabricated Mounting Clamps'
    ],
    capabilities: [
      'Solar Lighting Solutions & Pole Fabrication',
      'Solar Panel Mounting Structures (1kW - 1MW+)',
      'High Mast & Tubular Street Light Poles',
      'On-Grid & Off-Grid Solar Power Infrastructure',
      'Turnkey Structural Design & Installation Support'
    ],
    facilityLocation: 'Coimbatore Industrial Region, Tamil Nadu'
  }
};
