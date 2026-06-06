import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, Heart, Shield, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Confidentiality & Respect',
      description: 'We maintain the highest standards of privacy and respect in all consultations.',
    },
    {
      icon: Heart,
      title: 'Professional Approach',
      description: 'Every session is conducted with professionalism and integrity.',
    },
    {
      icon: Sparkles,
      title: 'Personal Transformation',
      description: 'We guide individuals toward meaningful personal and spiritual growth.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Over 12 years of certified experience in astrological consultation.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
              About <span className="text-[#C9A962]">IDRAAK</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              A trusted destination for astrological guidance and spiritual consultancy
            </p>
          </div>
        </section>

        {/* Meet Raees Khan */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Introducing <span className="text-[#C9A962]">Raees Khan</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12 hover:border-[#C9A962]/50 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20">
                <h3 className="font-heading text-3xl font-bold text-[#C9A962] mb-4">
                  Certified Astrologist & Gem Therapist
                </h3>
                <p className="text-[#BDC3C7] text-lg leading-relaxed mb-6">
                  Raees Khan is a seasoned Astrologer, Spiritual Consultant, and Gem Therapist with over 12 years of professional experience in the field of astrological guidance and spiritual consultancy. With a deep commitment to helping individuals discover their true potential, Raees Khan has dedicated his career to providing personalized and meaningful consultation services.
                </p>
                <p className="text-[#BDC3C7] text-lg leading-relaxed">
                  Through his expertise in Astrology, Palmistry, Numerology, and Gemstone Consultation, he has helped hundreds of clients navigate life&apos;s challenges with confidence and clarity.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C9A962]/20 hover:border-[#C9A962]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 h-full min-h-96">
                <Image
                  src="/khan.jpeg"
                  alt="Raees Khan"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-8">Our Vision</h2>
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12 hover:border-[#C9A962]/50 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20">
              <p className="text-[#BDC3C7] text-lg leading-relaxed mb-6">
                To become a leading and trusted destination for Astrology, Spiritual Guidance, and Gemstone Consultation, empowering individuals to discover their true potential and navigate life&apos;s opportunities with confidence.
              </p>

            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div
                    key={idx}
                    className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8 hover:border-[#C9A962]/60 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 hover:-translate-y-1"
                  >
                    <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                      <Icon className="text-[#C9A962]" size={28} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#FFFFFF] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#BDC3C7] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12 hover:border-[#C9A962]/50 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20">
              <p className="text-center text-[#BDC3C7] text-lg leading-relaxed">
                <span className="font-semibold text-[#C9A962]">IDRAAK considers confidentiality, respect, and professional conduct as the foundation of our services.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Experience Highlight */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-8">Experience & Expertise</h2>
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12">
              <p className="text-[#C9A962] font-semibold text-xl mb-4">
                گزشتہ 12 سال کے دوران ہم نے مختلف افراد کو ذاتی مشاورت اور رہنمائی فراہم کی ہے۔
              </p>
              <p className="text-[#BDC3C7] text-lg leading-relaxed mb-6">
                Over the past 12 years, we have provided personalized consultation and guidance to hundreds of individuals from diverse backgrounds, helping them gain clarity on life&apos;s important decisions and spiritual matters.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-[#0B0C10]/50 rounded-lg p-4">
                  <p className="text-3xl font-heading font-bold text-[#C9A962] mb-1">12+</p>
                  <p className="text-[#BDC3C7] text-sm">Years Experience</p>
                </div>
                <div className="bg-[#0B0C10]/50 rounded-lg p-4">
                  <p className="text-3xl font-heading font-bold text-[#C9A962] mb-1">500+</p>
                  <p className="text-[#BDC3C7] text-sm">Satisfied Clients</p>
                </div>
                <div className="bg-[#0B0C10]/50 rounded-lg p-4">
                  <p className="text-3xl font-heading font-bold text-[#C9A962] mb-1">7</p>
                  <p className="text-[#BDC3C7] text-sm">Service Types</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Start Your Spiritual Journey Today
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Connect with us to experience personalized astrological guidance and spiritual transformation.
            </p>
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              Book a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
