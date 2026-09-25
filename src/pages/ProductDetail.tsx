import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { PageHero } from '../components/common/PageHero';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductSpecifications } from '../components/products/ProductSpecifications';
import { ProductCard } from '../components/products/ProductCard';
import { useSEO } from '../utils/seo';
import { getProductSchema } from '../utils/structuredData';
import { useModals } from '../components/layout/AppLayout';
import { NotFound } from './NotFound';
import { Send, PhoneCall, ShieldCheck, Download, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = PRODUCTS.find((p) => p.slug === slug);

  useSEO({
    title: product ? `${product.name} | Shivaa Engineering Works` : 'Product Detail',
    description: product ? product.shortDescription : 'Product specification and quote details.',
    keywords: product ? `${product.name}, ${product.categoryName}, Shivaa Engineering Works` : undefined,
  });

  const { openQuoteModal, openCallbackModal } = useModals();

  if (!product) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { label: 'Products', path: '/products' },
    { label: product.categoryName, path: `/products/${product.categorySlug}` },
    { label: product.name },
  ];

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  const productSchema = getProductSchema(product);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHero
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbItems={breadcrumbs}
        badge={product.categoryName}
      />

      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <ProductGallery images={product.images} productName={product.name} />

              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Factory Manufacturing Guarantee</span>
                </div>
                <p className="text-slate-600">
                  Fabricated in Coimbatore with hot-dip galvanizing exceeding 80 microns for tropical weather endurance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {product.categoryName}
                  </span>
                  {product.armType && product.armType !== 'N/A' && (
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {product.armType}
                    </span>
                  )}
                  {product.modelCode && (
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Model: {product.modelCode}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-800 font-semibold block">Commercial Price</span>
                  <span className="text-xl font-extrabold text-amber-900">
                    {product.priceLabel || 'Price on Request'}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium">FOB Coimbatore / Site Erection</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {product.fullDescription}
              </p>

              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Manufacturing Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-slate-100">
                <button
                  onClick={() => openQuoteModal(product.name, product.slug)}
                  className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Best Quote</span>
                </button>

                <button
                  onClick={() => openCallbackModal(product.name)}
                  className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Request Call Back</span>
                </button>

                {product.brochureAvailable && product.brochureUrl && (
                  <a
                    href={product.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-4 h-4 text-slate-600" />
                    <span>Brochure</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ProductSpecifications specifications={product.specifications} />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Recommended Applications
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
                <h4 className="font-bold text-lg text-amber-400">Custom Engineering Support</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Require structural CAD drawings, custom base plate hole pitch, or specialized wind loading calculations for {product.name}?
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => openQuoteModal(product.name, product.slug)}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    Consult Engineering Team
                  </button>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Related Products in {product.categoryName}
                </h3>
                <Link
                  to={`/products/${product.categorySlug}`}
                  className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
                >
                  <span>View All Category Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
