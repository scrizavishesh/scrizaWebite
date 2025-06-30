"use client"

import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FreeTrialPopup from "./FreeTrialPopup";

export default function Header() {
   const [isPopupOpen, setIsPopupOpen] = useState(false)


  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a  href="https://mail.google.com/"  target="_blank"
                rel="noopener noreferrer" className="flex items-center cursor-pointer transform transition-transform hover:scale-110">
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                <span>sales@scriza.in</span>
              </a>
              <a href={`tel:${"9116011899"}`} className="flex items-center cursor-pointer transform transition-transform hover:scale-105">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <span>+91 911 6011 899</span>
              </a>
            </div>
            <div className="flex space-x-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/company/scriza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/linkdin1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                {" "}
                <Image
                  src="/faceBook1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/Insta1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>

              <a
                href="https://www.youtube.com/@scrizaprivatelimited2215"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform"
              >
                <Image
                  src="/youtube1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Scriza (1).svg"
                  alt="Scriza Logo"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                About Us
              </Link>
              <div className="relative group">
                <div className="text-gray-700 hover:text-teal-600 font-medium flex items-center cursor-pointer">
                  Our Products
                  <span className="ml-1 text-xs">+</span>
                </div>
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-5 gap-6">
                      {/* Products Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Products
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/recharge-software-application"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Recharge Software
                          </Link>
                          <Link
                            href="/money-transfer-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Money Transfer Software
                          </Link>
                          <Link
                            href="/hotel-management-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Hotel Management Software
                          </Link>
                          <Link
                            href="/crm"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            CRM Software
                          </Link>
                          <Link
                            href="/hrms-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            HRMS Software
                          </Link>
                          <Link
                            href="/custom-software-development"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Custom Software Development
                          </Link>
                          <Link
                            href="/school-management-software"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            School Software Development
                          </Link>
                        </div>
                      </div>

                      {/* Banking Services Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Banking Services
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/aeps-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            AEPS Api
                          </Link>
                          <Link
                            href="/micro-atm-machine-providers"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            MATM-POSM Api
                          </Link>
                          <Link
                            href="/pancard-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Pan Card Api
                          </Link>
                          <Link
                            href="/payout-api-service"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Payout Api
                          </Link>
                          <Link
                            href="/pay-in-service"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Pay In Service
                          </Link>
                          <Link
                            href="/upi-collection-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            UPI Collection API
                          </Link>
                          <Link
                            href="/credit-card-billpay-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Credit Card BillPay Api
                          </Link>
                        </div>
                      </div>

                      {/* Other Services Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Other Services
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/recharge-api-provider"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Recharge Api
                          </Link>
                          <Link
                            href="/bbps-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            BBPS Api
                          </Link>
                          <Link
                            href="/lic-premium-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            LIC Premium Pay Api
                          </Link>
                          <Link
                            href="/verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Validation API
                          </Link>
                          <Link
                            href="/sms-api"
                            className="block text-teal-600 hover:text-teal-700 transition-colors text-xs py-1 font-medium"
                          >
                            SMS API
                          </Link>
                          <Link
                            href="/whatsapp-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            WhatsApp API
                          </Link>
                        </div>
                      </div>

                      {/* Travel Api Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Travel Api
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/bus-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Bus Booking API
                          </Link>
                          <Link
                            href="/hotel-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Hotel Booking API
                          </Link>
                          <Link
                            href="/air-booking-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Air Booking API
                          </Link>
                        </div>
                      </div>

                      {/* Verification Api Column */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 font-space-grotesk text-teal-600">
                          Verification Api
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/bank-account-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Bank Ac Verification API
                          </Link>
                          <Link
                            href="/upi-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            UPI ID Verification API
                          </Link>
                          <Link
                            href="/aadhaar-validation-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Aadhaar Verification API
                          </Link>
                          <Link
                            href="/voter-ID-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Voter Id Verification API
                          </Link>
                          <Link
                            href="/driving-licence-verification-api"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Driving License Verification
                          </Link>
                          <Link
                            href="/vehicle-rc-verification"
                            className="block text-gray-600 hover:text-teal-600 transition-colors text-xs py-1"
                          >
                            Vehicle RC Verification API
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="text-gray-700 hover:text-teal-600 font-medium flex items-center cursor-pointer">
                  Core Services
                  <span className="ml-1 text-xs">+</span>
                </div>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    <Link
                      href="/custom-software-development"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Custom Software Development
                    </Link>
                    <Link
                      href="/website-design-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Website Design
                    </Link>
                    <Link
                      href="/software-development-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Software Development
                    </Link>
                    <Link
                      href="/application-development-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Application Development
                    </Link>
                    <Link
                      href="/digital-marketing-service"
                      className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-sm font-medium"
                    >
                      Digital Marketing
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Contact Us
              </Link>

              <button  onClick={() => setIsPopupOpen(true)} className="bg-white border-2 cursor-pointer border-teal-600 text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-teal-600 hover:text-white transition-colors">
                Get A Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4 ">
              <button className="bg-white border-2  border-teal-600 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
                Get A Demo
              </button>
              <button className="p-2">
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>
<FreeTrialPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </div>
  );
}
