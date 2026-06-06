'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById('gt-script')) return

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,ur', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'gt-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      id="google_translate_element"
      className="[&_.goog-te-gadget]:!text-xs [&_.goog-te-gadget_select]:!text-xs [&_.goog-te-gadget_select]:!bg-transparent [&_.goog-te-gadget_select]:!text-[#C9A962] [&_.goog-te-gadget_select]:!border-[#C9A962]/40 [&_.goog-te-gadget_select]:!rounded [&_.goog-te-gadget_select]:!py-0.5 [&_.goog-te-gadget_select]:!px-1 [&_.goog-te-gadget_span]:!hidden"
    />
  )
}
