'use client'

import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
              Get in <span className="text-[#C9A962]">Touch</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              Connect with us for consultations, inquiries, or to share your feedback
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Phone className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-2">Phone</h3>
                <a
                  href="tel:+923001769159"
                  className="text-[#C9A962] hover:text-[#DDB86F] transition-colors font-semibold"
                >
                  +92 300 176 9159
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Mail className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-2">Email</h3>
                <a
                  href="mailto:idraak.official136@gmail.com"
                  className="text-[#C9A962] hover:text-[#DDB86F] transition-colors font-semibold"
                >
                  idraak.official136@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <MapPin className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-2">Location</h3>
                <p className="text-[#BDC3C7] font-semibold">Lahore, Kasur</p>
                <p className="text-[#BDC3C7] text-sm">Pakistan</p>
              </div>

              {/* Hours */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Clock className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-2">Hours</h3>
                <p className="text-[#BDC3C7] text-sm">Mon - Sun</p>
                <p className="text-[#C9A962] font-semibold">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp & Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* WhatsApp CTA */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-4 bg-[#C9A962]/10 rounded-lg w-fit">
                  <MessageCircle className="text-[#C9A962]" size={32} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-[#FFFFFF] mb-3">Send us a Message</h3>
                <p className="text-[#BDC3C7] mb-6">
                  Connect with us instantly via WhatsApp for immediate assistance, quick consultations, and personalized guidance.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/923001769159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 w-full justify-center"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <div className="pt-4 border-t border-[#C9A962]/20">
                    <p className="text-[#BDC3C7] text-sm font-semibold mb-2">Direct Contact:</p>
                    <a href="tel:+923001769159" className="text-[#C9A962] hover:text-[#DDB86F] transition-colors font-semibold block mb-2">
                      +92 300 176 9159
                    </a>
                    <a href="mailto:idraak.official136@gmail.com" className="text-[#C9A962] hover:text-[#DDB86F] transition-colors font-semibold">
                      idraak.official136@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8">
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-4">Service Area</h3>
                <div className="w-full h-64 bg-[#0B0C10] rounded-lg border border-[#C9A962]/20 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 'none', borderRadius: '0.5rem' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.7869319849946!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e6c3e26b%3A0xbeef38c7e65ea8ce!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-[#BDC3C7] text-sm mt-4">
                  IDRAAK Spiritual Guidance – Serving Lahore and Kasur regions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Frequently Asked <span className="text-[#C9A962]">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I book a consultation?',
                  a: 'You can book through WhatsApp, contact form, or call us directly. We offer flexible scheduling based on your convenience.',
                },
                {
                  q: 'What information do I need to provide?',
                  a: 'For accurate readings, please provide your full birth date, time, and place. This helps us create your natal chart.',
                },
                {
                  q: 'How long does a consultation last?',
                  a: 'Sessions typically range from 45 minutes to 1.5 hours depending on the type of consultation and complexity of your situation.',
                },
                {
                  q: 'Can I get a consultation online?',
                  a: 'Yes, we offer online consultations via WhatsApp and other platforms for your convenience.',
                },
                {
                  q: 'Are consultations confidential?',
                  a: 'Absolutely. We maintain strict confidentiality and professionalism in all our consultations.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1F2833]/60 backdrop-blur-md rounded-lg border border-[#C9A962]/20 p-6 hover:border-[#C9A962]/50 transition-all duration-300"
                >
                  <h3 className="font-heading text-lg font-semibold text-[#FFFFFF] mb-3">
                    {item.q}
                  </h3>
                  <p className="text-[#BDC3C7]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Take the first step towards clarity, guidance, and spiritual transformation.
            </p>
            <a
              href="https://wa.me/923001769159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              <MessageCircle size={20} />
              Start Your Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
