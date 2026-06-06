import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import { Star, Heart, Trophy, Users, Sparkles, Compass, TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const expertise = [
    { icon: Star, title: 'Astrology Analysis', description: 'Birth chart reading and astrological predictions' },
    { icon: Trophy, title: 'Numerology Reports', description: 'Name and number analysis for insights' },
    { icon: Users, title: 'Palmistry Consultation', description: 'Palm line reading and interpretation' },
    { icon: Heart, title: 'Relationship Guidance', description: 'Love and marriage compatibility analysis' },
    { icon: TrendingUp, title: 'Career Consultation', description: 'Professional growth and business guidance' },
    { icon: Sparkles, title: 'Spiritual Counseling', description: 'Personal development and awakening' },
    { icon: Compass, title: 'Gemstone Recommendations', description: 'Gem therapy guidance and selection' },
  ]

  const stats = [
    { number: '12+', label: 'Years of Experience', color: 'from-[#C9A962]' },
    { number: '500+', label: 'Satisfied Clients', color: 'from-[#C9A962]' },
    { number: '7', label: 'Service Types', color: 'from-[#C9A962]' },
    { number: '2', label: 'Languages', color: 'from-[#C9A962]' },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
              Experience & <span className="text-[#C9A962]">Expertise</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              Over a decade of professional astrological consultation and spiritual guidance
            </p>
          </div>
        </section>

        {/* Experience Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-4">
              12 Years of Professional Excellence
            </h2>
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12 mb-8">
              <p className="text-[#BDC3C7] text-lg leading-relaxed text-center">
                Throughout the past 12 years, we have dedicated ourselves to providing personalized consultation and guidance to individuals from diverse backgrounds, cultures, and life situations. Our experience spans across various aspects of human life, from personal relationships and career decisions to spiritual growth and wellness.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-6 text-center hover:border-[#C9A962]/50 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 hover:-translate-y-1"
                >
                  <p className="font-heading text-4xl md:text-5xl font-bold text-[#C9A962] mb-2">
                    {stat.number}
                  </p>
                  <p className="text-[#BDC3C7] text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Areas of <span className="text-[#C9A962]">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="group bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8 hover:border-[#C9A962]/60 hover:bg-[#1F2833]/80 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A962]/30 hover:-translate-y-1"
                  >
                    <div className="mb-4 p-4 bg-[#C9A962]/10 rounded-lg w-fit group-hover:bg-[#C9A962]/20 transition-colors">
                      <Icon className="text-[#C9A962]" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#FFFFFF] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#BDC3C7]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Consultation Specialties */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Consultation <span className="text-[#C9A962]">Specialties</span>
            </h2>
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">Personal Life Guidance</h3>
                  <p className="text-[#BDC3C7] leading-relaxed">
                    Help individuals understand their life path, discover their true potential, and make informed decisions about major life events and transitions.
                  </p>
                </div>
                <div className="h-px bg-[#C9A962]/20"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">Relationship & Family Matters</h3>
                  <p className="text-[#BDC3C7] leading-relaxed">
                    Provide insight into romantic relationships, marriage compatibility, family dynamics, and solutions for interpersonal challenges.
                  </p>
                </div>
                <div className="h-px bg-[#C9A962]/20"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">Career & Business Consultation</h3>
                  <p className="text-[#BDC3C7] leading-relaxed">
                    Guide individuals in career selection, business ventures, entrepreneurship, and professional growth opportunities.
                  </p>
                </div>
                <div className="h-px bg-[#C9A962]/20"></div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">Wellness & Spiritual Growth</h3>
                  <p className="text-[#BDC3C7] leading-relaxed">
                    Support individuals on their spiritual journey, personal development, health considerations, and overall well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Our <span className="text-[#C9A962]">Approach</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Sparkles className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-4">Personalized</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Every consultation is tailored to the individual&apos;s unique situation, circumstances, and specific needs. We take time to understand your concerns deeply.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Compass className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-4">Practical Guidance</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Beyond theoretical insights, we provide actionable recommendations and practical guidance that can be applied in daily life.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Heart className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-4">Compassionate Listening</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  We listen carefully to your concerns and challenges, ensuring your voice is heard and your questions are thoroughly addressed.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Trophy className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-4">Professional Excellence</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  With 12+ years of certified experience, we maintain the highest standards of professionalism and expertise in all our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Experience Expert Guidance
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Benefit from over a decade of professional expertise and personal attention to your unique situation.
            </p>
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
