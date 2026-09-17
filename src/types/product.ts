export interface ProductSpecification {
  label: string;
  value: string;
  group?: 'General' | 'Electrical' | 'Mechanical' | 'Physical' | 'Compliance';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  priceLabel?: string; // e.g. "Price on Request" or "₹5,500 / Piece"
  priceNumeric?: number;
  specifications: ProductSpecification[];
  applications: string[];
  features: string[];
  brochureAvailable?: boolean;
  brochureUrl?: string;
  featured?: boolean;
  modelCode?: string;
  armType?: 'Single Arm' | 'Double Arm' | 'High Mast' | 'N/A';
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  itemCount: number;
  featured?: boolean;
}
