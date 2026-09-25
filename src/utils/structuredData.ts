import { COMPANY_CONFIG } from '../config/company';
import type { Product } from '../types/product';

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY_CONFIG.name,
    'legalName': COMPANY_CONFIG.legalName,
    'description': COMPANY_CONFIG.tagline,
    'url': 'https://www.shivaaengineering.in',
    'telephone': COMPANY_CONFIG.contact.phonePrimary,
    'email': COMPANY_CONFIG.contact.emailPrimary,
    'foundingDate': '2009',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': COMPANY_CONFIG.location.street,
      'addressLocality': COMPANY_CONFIG.location.area,
      'addressRegion': COMPANY_CONFIG.location.state,
      'postalCode': COMPANY_CONFIG.location.pincode,
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '11.0643',
      'longitude': '76.9745'
    },
    'knowsAbout': [
      'Solar Lighting Solutions',
      'Solar Panel Mounting Structures',
      'Street Light Poles',
      'High Mast Poles',
      'On Grid Solar Power Systems'
    ]
  };
};

export const getProductSchema = (product: Product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': product.images,
    'description': product.shortDescription,
    'category': product.categoryName,
    'brand': {
      '@type': 'Brand',
      'name': COMPANY_CONFIG.name
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': COMPANY_CONFIG.name
      }
    }
  };
};

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://www.shivaaengineering.in${item.url}`
    }))
  };
};
