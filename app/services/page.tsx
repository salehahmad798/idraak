import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Star, Heart, Trophy, Users, Sparkles, Wand2, MessageCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'astrology',
      title: 'Astrology Consultation',
      description: 'Based on your birth chart and astrological factors, receive personalized guidance on life events, personality insights, and future trends.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80',
      alt: 'Astrology star map',
    },
    {
      id: 'numerology',
      title: 'Numerology Consultation',
      description: 'Explore the power of numbers and their influence on your life. We analyze your name and birth numbers to reveal hidden insights.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=800&q=80',
      alt: 'Numerology numbers',
    },
    {
      id: 'palmistry',
      title: 'Palmistry Reading',
      description: 'Through detailed palm line analysis, we interpret your personality traits, life patterns, and potential life events.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1554774853-6a56f62c6451?w=800&q=80',
      alt: 'Palm reading',
    },
    {
      id: 'relationship',
      title: 'Relationship Consultation',
      description: 'Seek guidance on love, marriage, compatibility, and family matters. Get insights into relationship dynamics and solutions.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
      alt: 'Relationship guidance',
    },
    {
      id: 'career',
      title: 'Career Consultation',
      description: 'Receive direction on career choices, business ventures, education paths, and professional growth opportunities.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      alt: 'Career guidance',
    },
    {
      id: 'gemstones',
      title: 'Gem Therapy Guidance',
      description: 'Learn about the right gemstones for your astrological profile and how to use them for maximum benefit.',
      icon: Wand2,
      image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80',
      alt: 'Gemstones therapy',
    },
    {
      id: 'spiritual',
      title: 'Spiritual Counseling',
      description: 'Consulting sessions for spiritual awakening, personal development, and understanding your life\'s purpose.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      alt: 'Spiritual counseling',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
              Our Professional <span className="text-[#C9A962]">Services</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              Comprehensive spiritual and astrological guidance tailored to your unique needs
            </p>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {services.map((service, idx) => {
                const Icon = service.icon
                const isEven = idx % 2 === 0
                return (
                  <div key={service.id} id={service.id} className="scroll-mt-32">
                    <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:[direction:rtl]'}`}>
                      <div className={`${isEven ? '' : 'md:[direction:ltr]'}`}>
                        <div className="mb-4 p-4 bg-[#C9A962]/10 rounded-lg w-fit">
                          <Icon className="text-[#C9A962]" size={36} />
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                          {service.title}
                        </h2>
                        <p className="text-[#BDC3C7] text-lg leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <a
                          href="https://wa.me/92"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
                        >
                          <MessageCircle size={20} />
                          Inquire Now
                        </a>
                      </div>
                      <div className={`rounded-2xl overflow-hidden border border-[#C9A962]/20 hover:border-[#C9A962]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 min-h-80 ${isEven ? '' : 'md:[direction:ltr]'}`}>
                        <Image
                          src={service.image}
                          alt={service.alt}
                          width={800}
                          height={500}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Consultation Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Consultation <span className="text-[#C9A962]">Options</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <MessageCircle className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-3">
                  WhatsApp Consultation
                </h3>
                <p className="text-[#BDC3C7] mb-6 leading-relaxed">
                  Quick and convenient consultations directly via WhatsApp. Share your details and receive personalized guidance.
                </p>
                <a
                  href="https://wa.me/92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#DDB86F] transition-colors font-semibold"
                >
                  Book on WhatsApp <ArrowRight size={18} />
                </a>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Sparkles className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-3">
                  Online Payment Option
                </h3>
                <p className="text-[#BDC3C7] mb-6 leading-relaxed">
                  Secure online payment method available for your convenience. Get consultations with flexible scheduling.
                </p>
                <p className="text-[#C9A962] font-semibold">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              How Our Service Works
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Initial Contact', description: 'Reach out through WhatsApp or contact form to discuss your concerns.' },
                { step: 2, title: 'Detailed Discussion', description: 'Share your birth details and specific areas you need guidance on.' },
                { step: 3, title: 'Analysis', description: 'We analyze your astrological profile and prepare personalized insights.' },
                { step: 4, title: 'Consultation', description: 'Receive comprehensive guidance and recommendations tailored to your situation.' },
                { step: 5, title: 'Ongoing Support', description: 'Follow-up support and clarifications available as needed.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A962]/20 border border-[#C9A962]/50 rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-[#C9A962] text-lg">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-xl font-bold text-[#FFFFFF] mb-2">{item.title}</h3>
                    <p className="text-[#BDC3C7]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Choose Your Service Today
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Take the first step towards clarity and spiritual transformation with our expert consultations.
            </p>
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              <MessageCircle size={20} />
              Book Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
