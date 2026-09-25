import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { COMPANY_CONFIG } from '../config/company';
import { useSEO } from '../utils/seo';
import { MapPin, PhoneCall, Mail, Clock, Send, CheckCircle2, AlertCircle, User, Phone } from 'lucide-react';
import { submitContactFormRequest } from '../services/enquiryService';

export const Contact: React.FC = () => {
  useSEO({
    title: 'Contact Us | Shivaa Engineering Works Coimbatore',
    description: 'Get in touch with Shivaa Engineering Works in Coimbatore, Tamil Nadu. Address: 108/1 Athipalayam Road, Chinnavedampatty. Phone: +91 98422 47372.',
    keywords: 'Contact Shivaa Engineering Works, Coimbatore Solar Factory Address, Solar Street Pole Quotation',
  });

  const breadcrumbs = [{ label: 'Contact Us' }];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    city: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await submitContactFormRequest({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        companyName: formData.companyName,
        city: formData.city,
        message: formData.message || 'Direct contact page inquiry',
      });
      setSuccessResponse(res.message);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        companyName: '',
        city: '',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        title="Contact Our Engineering Office"
        subtitle="Reach out directly to our sales and technical team in Chinnavedampatty, Coimbatore."
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Factory & Office Address</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_CONFIG.location.address}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Direct Phone Numbers</h3>
              <div className="text-xs text-slate-700 space-y-1">
                <a href={`tel:${COMPANY_CONFIG.contact.phonePrimary.replace(/\s+/g, '')}`} className="block font-bold hover:text-amber-600">
                  {COMPANY_CONFIG.contact.phonePrimary}
                </a>
                {COMPANY_CONFIG.contact.phoneSecondary && (
                  <a href={`tel:${COMPANY_CONFIG.contact.phoneSecondary.replace(/\s+/g, '')}`} className="block hover:text-amber-600">
                    {COMPANY_CONFIG.contact.phoneSecondary}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Email Correspondence</h3>
              <a href={`mailto:${COMPANY_CONFIG.contact.emailPrimary}`} className="text-xs text-amber-600 font-semibold hover:underline block">
                {COMPANY_CONFIG.contact.emailPrimary}
              </a>
              <span className="text-[11px] text-slate-500 block">Fast technical response within 24h</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit border border-amber-200">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_CONFIG.contact.workingHours}</p>
              <span className="text-[11px] text-emerald-600 font-semibold">Sunday Closed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Direct Form Inquiry
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Send Your Project Requirements
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your details below and our sales engineering team in Coimbatore will get back to you immediately.
                </p>
              </div>

              {successResponse ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900">Message Received</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{successResponse}</p>
                  <button
                    onClick={() => setSuccessResponse(null)}
                    className="px-4 py-2 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-fullName" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          id="c-fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          required
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-phone" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          id="c-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          required
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="c-company" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="c-company"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-city" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      City / State
                    </label>
                    <input
                      type="text"
                      id="c-city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Coimbatore, Tamil Nadu"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Project Requirement Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your solar light pole count, mounting structure requirements, or site specifications..."
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 text-sm mb-3">Location Map</h3>
                <div className="flex-1 rounded-2xl overflow-hidden min-h-[350px] border border-slate-200 relative bg-slate-100">
                  <iframe
                    title="Shivaa Engineering Works Coimbatore Map"
                    src={COMPANY_CONFIG.location.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '350px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
