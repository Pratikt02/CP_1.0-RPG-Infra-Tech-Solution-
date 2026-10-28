import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICES, BUDGET_RANGES } from '../constants/companyData';

export const InquirySection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    budget: '',
    details: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setInquiryId(data.inquiryId);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          service: '',
          location: '',
          budget: '',
          details: ''
        });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white dark:bg-[#0c1220] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column - Contact Details Sidebar */}
          <div className="lg:col-span-5 order-2 lg:order-1" data-reveal>
            <div className="section-subtitle">Connect With Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-8">
              Let's Build Something Great Together.
            </h2>
            <p className="text-secondary-text dark:text-white/80 text-lg mb-10 leading-relaxed">
              Tell us about your construction or infrastructure project. Our team of experts will review your requirements and get in touch with a customized solution and quotation.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-light-gray dark:bg-white/10 flex items-center justify-center text-primary-navy dark:text-white group-hover:bg-primary-navy group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-sm uppercase tracking-wider">Email Us</h4>
                  <p className="text-secondary-text dark:text-white/80 text-base group-hover:text-construction-orange transition-colors">{COMPANY_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-gray dark:bg-white/10 flex items-center justify-center text-primary-navy dark:text-white shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-sm uppercase tracking-wider">Call Us</h4>
                  {COMPANY_INFO.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="block text-secondary-text dark:text-white/80 text-base hover:text-construction-orange transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-gray dark:bg-white/10 flex items-center justify-center text-primary-navy dark:text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-sm uppercase tracking-wider">Office Location</h4>
                  <p className="text-secondary-text dark:text-white/80 text-base">{COMPANY_INFO.location}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-950 flex items-center justify-center text-green-600 dark:text-green-300 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-sm uppercase tracking-wider">WhatsApp Chat</h4>
                  <p className="text-secondary-text dark:text-white/80 text-base group-hover:text-green-400 transition-colors">Chat directly with our director</p>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 dark:border-white/10">
              <div className="p-6 bg-primary-navy rounded-2xl text-white">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-construction-orange" />
                  Your Privacy Matters
                </h4>
                <p className="text-white/80 text-sm">
                  The information shared will only be used to contact you regarding your project inquiry. We respect your confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-7 order-1 lg:order-2" data-reveal data-reveal-delay="140">
            <div className="bg-light-gray dark:bg-[#141d30] rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-white/10">

              {status === 'success' ? (
                <div className="text-center py-10 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-3">Thank You!</h3>
                  <p className="text-secondary-text dark:text-white/80 text-lg mb-4">{message}</p>
                  <div className="bg-white dark:bg-[#0b1220] p-4 rounded-xl inline-block border border-green-200 dark:border-green-800">
                    <span className="text-xs text-secondary-text dark:text-white/70 uppercase block mb-1">Inquiry Ref Number</span>
                    <span className="text-xl font-mono font-bold text-primary-navy dark:text-white">{inquiryId}</span>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="block mx-auto mt-8 text-construction-orange font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 p-4 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="form-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="form-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Service Required *</label>
                      <select
                        id="service-select"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="form-field"
                      >
                        <option value="">Select Service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Project Location *</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Bandra West, Mumbai"
                        className="form-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-field"
                      >
                        <option value="">Select Range</option>
                        {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider ml-1">Project Details *</label>
                    <textarea
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements, project scope, and any specific timelines..."
                      rows="5"
                      className="form-field"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Processing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// Re-using the same icons internally
const ShieldCheck = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
