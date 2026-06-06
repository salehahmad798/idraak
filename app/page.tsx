import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import { Star, Heart, Trophy, Users, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Astrology Consultation',
      description: 'Personalized guidance based on birth charts and astrological factors.',
      icon: Star,
    },
    {
      title: 'Numerology Consultation',
      description: 'Study of different aspects through analysis of numbers and names.',
      icon: Heart,
    },
    {
      title: 'Palmistry Reading',
      description: 'Interpretation of personality and trends through palm line analysis.',
      icon: Users,
    },
    {
      title: 'Relationship Consultation',
      description: 'Expert guidance on love, marriage, and family matters.',
      icon: Heart,
    },
    {
      title: 'Career Consultation',
      description: 'Direction and support for employment, education, and business.',
      icon: Trophy,
    },
    {
      title: 'Gem Therapy Guidance',
      description: 'Information on selecting and using appropriate gemstones.',
      icon: Star,
    },
  ]

  // Testimonials are placeholders – replace with real client reviews later
  const testimonials = [
    { text: 'Received very professional and detailed guidance.' },
    { text: 'Got clear direction in important life decisions.' },
    { text: 'The consultation session was helpful and informative.' },
    { text: 'Found the approach and behavior extremely professional.' },
  ]

  const whyChooseUs = [
    { text: '12+ Years of Professional Experience', icon: Trophy },
    { text: 'Certified Gemstone Therapist', icon: Star },
    { text: 'Personalized & Confidential Guidance', icon: Heart },
    { text: 'Trusted by Hundreds of Clients', icon: Users },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10]">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden">
          {/* Hero background image */}
          <img
            src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1600&q=80"
            alt="Starry night sky"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/60 via-[#0B0C10]/40 to-[#0B0C10]" />

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-6 leading-tight">
              Your Stars Know <span className="text-[#C9A962]">The Truth</span>
            </h1>
            <p className="text-lg md:text-xl text-[#BDC3C7] mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover Clarity, Purpose, and Direction with IDRAAK&apos;s Astrological Guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/92"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Book a Consultation
              </a>
              <Link
                href="/services"
                className="px-8 py-4 border border-[#C9A962] text-[#C9A962] font-semibold rounded-lg hover:bg-[#C9A962]/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* About Snapshot */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0C10] to-[#1F2833]/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12 hover:border-[#C9A962]/50 hover:shadow-lg hover:shadow-[#C9A962]/20 transition-all duration-300">
              <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[#C9A962] mb-6">
                About Raees Khan - Certified Astrologist & Gem Therapist
              </h2>
              <p className="text-center text-[#BDC3C7] text-lg leading-relaxed">
                Raees Khan has over 12 years of experience in Astrology, Palmistry, Numerology, and Gemstone Consultation. With a deep commitment to spiritual guidance and personal transformation, Raees Khan provides personalized consultations tailored to each individual&apos;s unique needs and circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">Our Mission</h2>
            <p className="text-[#BDC3C7] text-lg leading-relaxed">
              To provide individuals with better understanding, self-awareness, and positive direction in life through our comprehensive astrological and spiritual guidance services.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-4">Our Professional Services</h2>
            <p className="text-center text-[#BDC3C7] text-lg mb-12 max-w-2xl mx-auto">
              Comprehensive spiritual and astrological guidance tailored to your unique needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="group bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8 hover:border-[#C9A962]/60 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A962]/30 hover:-translate-y-1"
                  >
                    <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit group-hover:bg-[#C9A962]/20 transition-colors">
                      <Icon className="text-[#C9A962]" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#BDC3C7] text-sm mb-4">{service.description}</p>
                    <a
                      href="https://wa.me/92"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#DDB86F] transition-colors text-sm font-semibold"
                    >
                      Inquire Now <ArrowRight size={16} />
                    </a>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
              >
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">Why Choose IDRAAK?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex gap-4 items-start group p-4 rounded-lg hover:bg-[#1F2833]/40 transition-all duration-300">
                    <div className="flex-shrink-0 p-3 bg-[#C9A962]/10 rounded-lg group-hover:bg-[#C9A962]/20 transition-colors">
                      <Icon className="text-[#C9A962]" size={24} />
                    </div>
                    <div>
                      <p className="text-[#FFFFFF] font-semibold text-lg group-hover:text-[#C9A962] transition-colors">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8 hover:border-[#C9A962]/50 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 hover:-translate-y-1"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#C9A962] text-[#C9A962]" />
                    ))}
                  </div>
                  <p className="text-[#BDC3C7] italic text-lg mb-4">"{testimonial.text}"</p>
                  <p className="text-[#C9A962] font-semibold">Valued Client</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#BDC3C7] mt-8 italic">
              Note: Testimonials are placeholders. They will be replaced with real client reviews.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Connect with us today to book your personalized consultation and start your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/92"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[#C9A962] text-[#C9A962] font-semibold rounded-lg hover:bg-[#C9A962]/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Contact Form <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
