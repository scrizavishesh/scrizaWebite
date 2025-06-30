'use client'

import { useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface FreeTrialPopupProps {
  isPopupOpen: boolean
  setIsPopupOpen: (open: boolean) => void
}

export default function FreeTrialPopup({ isPopupOpen, setIsPopupOpen }: FreeTrialPopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true)
    }, 4000)

    const interval = setInterval(() => {
      setIsPopupOpen(true)
    }, 5 * 1000 + 1)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [setIsPopupOpen])

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  if (!isPopupOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-gray-600" />
        </button>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-6 rounded-t-2xl text-center">
          <h2 className="text-2xl font-bold">Start Free Trial</h2>
        </div>

        <div className="px-8 py-6">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">
            Fill This Form Now
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number*"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            >
              <option value="">---- Select Option ----</option>
              <option value="software-development">Software Development</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="api-services">API Services</option>
              <option value="consultation">Business Consultation</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-green-700 transition-all duration-300"
            >
              📋 Book Free Demo
            </button>
          </form>

          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-teal-600 font-medium">
              100% Privacy. We Don&apos;t Share Your Data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
