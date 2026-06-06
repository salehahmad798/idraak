'use client'

import Navigation from '@/components/nav'
import Footer from '@/components/footer'
import { useState } from 'react'
import { Star } from 'lucide-react'

export default function Horoscope() {
  const [activeTab, setActiveTab] = useState('daily')

  const zodiacSigns = [
    {
      name: 'Aries',
      dates: 'Mar 21 - Apr 19',
      symbol: '♈',
      traits: 'Courageous, Determined, Confident',
      element: 'Fire',
    },
    {
      name: 'Taurus',
      dates: 'Apr 20 - May 20',
      symbol: '♉',
      traits: 'Reliable, Patient, Practical',
      element: 'Earth',
    },
    {
      name: 'Gemini',
      dates: 'May 21 - Jun 20',
      symbol: '♊',
      traits: 'Curious, Communicative, Witty',
      element: 'Air',
    },
    {
      name: 'Cancer',
      dates: 'Jun 21 - Jul 22',
      symbol: '♋',
      traits: 'Emotional, Nurturing, Protective',
      element: 'Water',
    },
    {
      name: 'Leo',
      dates: 'Jul 23 - Aug 22',
      symbol: '♌',
      traits: 'Creative, Generous, Bold',
      element: 'Fire',
    },
    {
      name: 'Virgo',
      dates: 'Aug 23 - Sep 22',
      symbol: '♍',
      traits: 'Analytical, Detail-oriented, Helpful',
      element: 'Earth',
    },
    {
      name: 'Libra',
      dates: 'Sep 23 - Oct 22',
      symbol: '♎',
      traits: 'Diplomatic, Fair-minded, Artistic',
      element: 'Air',
    },
    {
      name: 'Scorpio',
      dates: 'Oct 23 - Nov 21',
      symbol: '♏',
      traits: 'Passionate, Determined, Secretive',
      element: 'Water',
    },
    {
      name: 'Sagittarius',
      dates: 'Nov 22 - Dec 21',
      symbol: '♐',
      traits: 'Optimistic, Adventurous, Honest',
      element: 'Fire',
    },
    {
      name: 'Capricorn',
      dates: 'Dec 22 - Jan 19',
      symbol: '♑',
      traits: 'Disciplined, Ambitious, Responsible',
      element: 'Earth',
    },
    {
      name: 'Aquarius',
      dates: 'Jan 20 - Feb 18',
      symbol: '♒',
      traits: 'Innovative, Independent, Humanitarian',
      element: 'Air',
    },
    {
      name: 'Pisces',
      dates: 'Feb 19 - Mar 20',
      symbol: '♓',
      traits: 'Compassionate, Artistic, Intuitive',
      element: 'Water',
    },
  ]

  const horoscopeContent = {
    daily: 'Today brings positive planetary alignments in your favor. This is an excellent time to focus on personal projects and relationships. The moon is waxing, indicating a period of growth and new beginnings. Trust your intuition and take calculated risks in matters that matter to you.',
    weekly: 'This week marks a significant shift in your astrological chart. Mercury is in a favorable position, enhancing your communication skills and intellectual pursuits. Midweek, expect some surprises that could lead to exciting opportunities. By weekend, you will find clarity on decisions that have been pending. Use this period for strategic planning.',
    monthly: 'This month is crucial for your personal and professional development. The planetary movements suggest this is an ideal time for new initiatives, important conversations, and relationship building. Financial growth is indicated, especially if you have been patient. Take this opportunity to invest in your future, whether through education, business, or personal wellness. The latter half of the month brings stability and rewards.',
  }

  const tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[#0B0C10] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-6">
              Your <span className="text-[#C9A962]">Horoscope</span>
            </h1>
            <p className="text-xl text-[#BDC3C7] leading-relaxed">
              Daily, weekly, and monthly astrological predictions and guidance
            </p>
          </div>
        </section>

        {/* Horoscope Tabs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-4xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex gap-4 mb-8 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#C9A962] text-[#0B0C10]'
                      : 'bg-[#1F2833]/60 text-[#BDC3C7] hover:bg-[#1F2833]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-2xl border border-[#C9A962]/20 p-8 md:p-12">
              <p className="text-[#BDC3C7] text-lg leading-relaxed">
                {horoscopeContent[activeTab as keyof typeof horoscopeContent]}
              </p>
              <div className="mt-8 pt-8 border-t border-[#C9A962]/20">
                <p className="text-[#C9A962] font-semibold text-sm">
                  Note: These are general horoscope readings. For more personalized predictions based on your birth chart, book a consultation with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 Zodiac Signs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              The 12 <span className="text-[#C9A962]">Zodiac Signs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="group bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8 hover:border-[#C9A962]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#FFFFFF]">
                        {sign.name}
                      </h3>
                      <p className="text-[#BDC3C7] text-sm">{sign.dates}</p>
                    </div>
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {sign.symbol}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[#C9A962] font-semibold text-xs uppercase tracking-wide mb-1">
                        Element
                      </p>
                      <p className="text-[#BDC3C7]">{sign.element}</p>
                    </div>
                    <div>
                      <p className="text-[#C9A962] font-semibold text-xs uppercase tracking-wide mb-1">
                        Traits
                      </p>
                      <p className="text-[#BDC3C7]">{sign.traits}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elements Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1F2833]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-12">
              Understanding <span className="text-[#C9A962]">Elements</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">
                  Fire Signs ♈ ♌ ♐
                </h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Passionate, energetic, and courageous. Fire signs are natural leaders, full of enthusiasm and drive. They are action-oriented and inspire others with their dynamic energy.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">
                  Earth Signs ♉ ♍ ♑
                </h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Practical, reliable, and grounded. Earth signs are known for their stability and dependability. They value hard work and tend to be pragmatic in their approach to life.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">
                  Air Signs ♊ ♎ ♒
                </h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Intellectual, communicative, and analytical. Air signs are thinkers and communicators, driven by curiosity and a desire to understand the world around them.
                </p>
              </div>
              <div className="bg-[#1F2833]/60 backdrop-blur-md rounded-xl border border-[#C9A962]/20 p-8">
                <h3 className="font-heading text-2xl font-bold text-[#C9A962] mb-4">
                  Water Signs ♋ ♏ ♓
                </h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  Emotional, intuitive, and compassionate. Water signs are deeply feeling and intuitive, known for their empathy and emotional intelligence in relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Get Your Personalized Horoscope
            </h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Book a consultation for detailed astrological predictions based on your complete birth chart.
            </p>
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              <Star size={20} />
              Book Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
