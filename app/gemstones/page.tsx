import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import { Sparkles, Heart, Shield, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react'

export default function Gemstones() {
  const gemstones = [
    {
      name: 'Ruby',
      planet: 'Sun',
      benefits: 'Confidence, leadership, prosperity',
      color: 'Deep red',
      planetEmoji: '☀️',
    },
    {
      name: 'Pearl',
      planet: 'Moon',
      benefits: 'Peace, emotional balance, intuition',
      color: 'White/Cream',
      planetEmoji: '🌙',
    },
    {
      name: 'Emerald',
      planet: 'Mercury',
      benefits: 'Communication, intellect, business acumen',
      color: 'Green',
      planetEmoji: '☿️',
    },
    {
      name: 'Yellow Sapphire',
      planet: 'Jupiter',
      benefits: 'Wisdom, prosperity, knowledge',
      color: 'Golden yellow',
      planetEmoji: '♃',
    },
    {
      name: 'Diamond',
      planet: 'Venus',
      benefits: 'Love, luxury, vitality',
      color: 'Clear/White',
      planetEmoji: '♀️',
    },
    {
      name: 'Blue Sapphire',
      planet: 'Saturn',
      benefits: 'Discipline, longevity, protection',
      color: 'Deep blue',
      planetEmoji: '♄',
    },
    {
      name: 'Hessonite',
      planet: 'Rahu',
      benefits: 'Focus, clarity, prosperity',
      color: 'Golden brown',
      planetEmoji: '🌀',
    },
    {
      name: "Cat's Eye",
      planet: 'Ketu',
      benefits: 'Spiritual growth, protection, clarity',
      color: 'Greenish-brown',
      planetEmoji: '✦',
    },
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: 'Astrological Alignment',
      description: 'Gemstones aligned with your birth chart and planetary positions enhance their beneficial effects.',
    },
    {
      icon: Heart,
      title: 'Emotional Balance',
      description: 'Promote emotional healing, stability, and well-being through their vibrational properties.',
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'Serve as protective talismans, shielding against negative energies and influences.',
    },
    {
      icon: TrendingUp,
      title: 'Personal Growth',
      description: 'Support personal development, confidence, and achievement of life goals.',
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
              Gem Therapy <span className="text-[#C9A962]">Guidance</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              Harness the power of natural gemstones for healing and spiritual transformation
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#C9A962] mb-6 text-center">
                Understanding Gem Therapy
              </h2>
              <p className="text-[#BDC3C7] text-lg leading-relaxed mb-6">
                Gemstone therapy is an ancient practice rooted in Vedic astrology that uses natural gemstones to promote healing, balance, and prosperity. Each gemstone is associated with a specific planet and carries unique vibrational frequencies that can influence different aspects of our lives.
              </p>
              <p className="text-[#BDC3C7] text-lg leading-relaxed">
                Our expert guidance helps you select the right gemstone based on your birth chart, planetary positions, and life circumstances. We provide comprehensive information about selection, authenticity verification, and proper usage to maximize benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Recommended Gemstones */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Recommended <span className="text-[#C9A962]">Gemstones</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gemstones.map((gem, idx) => (
                <div
                  key={idx}
                  className="group bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-6 hover:border-[#C9A962]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/10"
                >
                  <div className="text-4xl mb-3 text-center">{gem.planetEmoji}</div>
                  <h3 className="font-heading text-xl font-semibold text-[#FFFFFF] mb-2 text-center">
                    {gem.name}
                  </h3>
                  <p className="text-[#C9A962] font-semibold text-sm text-center mb-3">
                    {gem.planet}
                  </p>
                  <div className="mb-3 pb-3 border-b border-[#C9A962]/20">
                    <p className="text-[#BDC3C7] text-xs text-center">
                      <span className="font-semibold">Color:</span> {gem.color}
                    </p>
                  </div>
                  <p className="text-[#BDC3C7] text-sm text-center">
                    {gem.benefits}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Benefits of Gem <span className="text-[#C9A962]">Therapy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={idx}
                    className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8"
                  >
                    <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                      <Icon className="text-[#C9A962]" size={28} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#BDC3C7] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Original vs Fake */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Original vs Fake <span className="text-[#C9A962]">Identification</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <Sparkles className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-6">
                  Authentic Gemstones
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✓</span>
                    <span className="text-[#BDC3C7]">Natural formation with visible inclusions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✓</span>
                    <span className="text-[#BDC3C7]">Proper certification from recognized labs</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✓</span>
                    <span className="text-[#BDC3C7]">Consistent color variations</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✓</span>
                    <span className="text-[#BDC3C7]">Weight and size proportionate to quality</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✓</span>
                    <span className="text-[#BDC3C7]">Higher price reflecting quality</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <div className="mb-4 p-3 bg-[#C9A962]/10 rounded-lg w-fit">
                  <AlertCircle className="text-[#C9A962]" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-6">
                  Fake/Imitation Gemstones
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✗</span>
                    <span className="text-[#BDC3C7]">Too perfect or uniformly colored</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✗</span>
                    <span className="text-[#BDC3C7]">No authentic lab certification</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✗</span>
                    <span className="text-[#BDC3C7]">Artificial shine or coating</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✗</span>
                    <span className="text-[#BDC3C7]">Extremely low price</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#C9A962] mt-1">✗</span>
                    <span className="text-[#BDC3C7]">Seller unable to provide documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              How to Use <span className="text-[#C9A962]">Gemstones</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Selection',
                  description: 'Choose a gemstone that aligns with your astrological profile and specific needs. Consult an expert for personalized recommendations.',
                  icon: Lightbulb,
                },
                {
                  title: 'Authentication',
                  description: 'Ensure the gemstone is authentic by obtaining proper certification from recognized gemological laboratories.',
                  icon: Shield,
                },
                {
                  title: 'Preparation',
                  description: 'Purify the gemstone through cleansing rituals and energize it through proper mantras before wearing.',
                  icon: Sparkles,
                },
                {
                  title: 'Wearing',
                  description: 'Wear the gemstone as a ring, pendant, or bracelet on the specific day and finger recommended for maximum effect.',
                  icon: Heart,
                },
                {
                  title: 'Maintenance',
                  description: 'Keep the gemstone clean and regularly re-energize it to maintain its effectiveness and potency.',
                  icon: TrendingUp,
                },
              ].map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="flex gap-6 items-start bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-6">
                    <div className="flex-shrink-0 p-3 bg-[#C9A962]/10 rounded-lg">
                      <Icon className="text-[#C9A962]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#FFFFFF] mb-2">{step.title}</h3>
                      <p className="text-[#BDC3C7]">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Find Your Perfect Gemstone
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Let us guide you in selecting the right gemstone based on your birth chart and personal needs.
            </p>
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              Get Recommendations
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
