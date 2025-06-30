"use client";

import {
  ChevronRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  WifiIcon,
  SignalIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  PhoneIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  UsersIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  CogIcon,
  ComputerDesktopIcon,
  BoltIcon,
  LockClosedIcon,
  GlobeAltIcon,
  LanguageIcon,
  CurrencyDollarIcon,
  EyeIcon,
  ScaleIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  TagIcon,
  BellIcon,
  MapPinIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  CalculatorIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  IdentificationIcon,
  ExclamationTriangleIcon,
  TruckIcon,
  UserIcon,
  DocumentCheckIcon,
  TrophyIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import Header from "./Header";
import Footer from "./Footer";
import Certifications from "./Certifications";
import Breadcrumbs from "./Breadcrumbs";
import ChatWidgets from "./ChatWidgets";
import ContactForm from "./ContactForm";
import { PageContent } from "../data/pages-content";
import FreeTrialPopup from "./FreeTrialPopup";
import { useState } from "react";
import Link from "next/link";

interface PageLayoutProps {
  pageContent: PageContent;
}

export default function PageLayout({ pageContent }: PageLayoutProps) {
  const { hero, mainContent } = pageContent;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    PhoneIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    CreditCardIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ClockIcon,
    StarIcon,
    UsersIcon,
    BanknotesIcon,
    BuildingOfficeIcon,
    CogIcon,
    ComputerDesktopIcon,
    BoltIcon,
    LockClosedIcon,
    RocketLaunchIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    LanguageIcon,
    CurrencyDollarIcon,
    EyeIcon,
    ScaleIcon,
    DocumentTextIcon,
    PaintBrushIcon,
    TagIcon,
    BellIcon,
    MapPinIcon,
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
    PresentationChartLineIcon,
    ClipboardDocumentListIcon,
    ChatBubbleLeftRightIcon,
    CalculatorIcon,
    DocumentMagnifyingGlassIcon,
    AcademicCapIcon,
    WifiIcon,
    SignalIcon,
    IdentificationIcon,
    ExclamationTriangleIcon,
    TruckIcon,
    UserIcon,
    DocumentCheckIcon,
    TrophyIcon,
    CloudArrowUpIcon,
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - New Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-green-900 overflow-hidden py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 w-16 h-16 text-white/20 animate-float">
            <PhoneIcon className="w-full h-full" />
          </div>
          <div
            className="absolute top-40 right-32 w-20 h-20 text-white/20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <DevicePhoneMobileIcon className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-40 left-32 w-18 h-18 text-white/20 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <CpuChipIcon className="w-full h-full" />
          </div>
          <div
            className="absolute bottom-20 right-20 w-14 h-14 text-white/20 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <WifiIcon className="w-full h-full" />
          </div>
          <div
            className="absolute top-60 left-1/2 w-16 h-16 text-white/20 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <SignalIcon className="w-full h-full" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Top Badge */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <SparklesIcon className="w-8 h-8 text-teal-400 animate-bounce" />
              <p className="text-teal-400 font-bold text-lg tracking-wide uppercase font-space-grotesk">
                {hero.subtitle}
              </p>
              <SparklesIcon className="w-8 h-8 text-teal-400 animate-bounce" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8 font-space-grotesk text-white">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              {hero.description}
            </p>

            {/* Recharge Software Icons Grid - Only for recharge software page */}
            {pageContent.slug === "recharge-software-application" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover-lift border border-white/20">
                  <PhoneIcon className="w-12 h-12 text-teal-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Mobile Recharge</p>
                </div>
                <div
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover-lift border border-white/20"
                  style={{ animationDelay: "0.2s" }}
                >
                  <DevicePhoneMobileIcon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">DTH Recharge</p>
                </div>
                <div
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover-lift border border-white/20"
                  style={{ animationDelay: "0.4s" }}
                >
                  <BanknotesIcon className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Bill Payments</p>
                </div>
                <div
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover-lift border border-white/20"
                  style={{ animationDelay: "0.6s" }}
                >
                  <ShieldCheckIcon className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Secure API</p>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-teal-400 hover:to-blue-400 transition-all duration-300 hover-lift animate-glow shadow-2xl"
              >
                <span className="flex items-center">
                  {hero.ctaText}
                  <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              {hero.ctaSecondary && (
                <button className="group border-3 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover-lift backdrop-blur-sm">
                  <span className="flex items-center">
                    {hero.ctaSecondary}
                    <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              )}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>

        <ChatWidgets />
      </section>

      {/* Main Content Sections */}
      {mainContent.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 relative overflow-hidden ${
            sectionIndex % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-br from-gray-50 to-blue-50"
          }`}
        >
          <div className="absolute inset-0">
            {sectionIndex % 2 === 1 && (
              <>
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full animate-float"></div>
                <div
                  className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </>
            )}
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-scale">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space-grotesk mb-4">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-xl text-gray-600 font-medium">
                  {section.subtitle}
                </p>
              )}
              {section.description && (
                <div className="max-w-4xl mx-auto mt-6 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    &ldquo;{section.description}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items.map((item, itemIndex) => {
  const iconKey = item.icon as keyof typeof iconMap;
  const IconComponent = iconMap[iconKey] ?? UserIcon;

  return (
    <div
      key={itemIndex}
      className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover-lift animate-slide-in-up hover:shadow-2xl transition-all duration-300"
      style={{ animationDelay: `${itemIndex * 0.2}s` }}
    >
      <div
        className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <IconComponent className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk group-hover:text-teal-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
        {item.description}
      </p>
    </div>
  );
})}

            </div>
          </div>
        </section>
      ))}

      {/* Contact Form Section - Only for recharge software page */}
      {pageContent.slug === "recharge-software-application" && <ContactForm />}

      {/* Contact Form Section - Only for money transfer software page */}
      {pageContent.slug === "money-transfer-software" && <ContactForm />}

      {/* Contact Form Section - Only for hotel management software page */}
      {pageContent.slug === "hotel-management-software" && <ContactForm />}

      {/* Contact Form Section - Only for CRM page */}
      {pageContent.slug === "crm" && <ContactForm />}

      {/* Contact Form Section - Only for HRMS software page */}
      {pageContent.slug === "hrms-software" && <ContactForm />}

      {/* Contact Form Section - Only for school management software page */}
      {pageContent.slug === "school-management-software" && <ContactForm />}

      {/* Contact Form Section - Only for AePS API page */}
      {pageContent.slug === "aeps-api" && <ContactForm />}

      {/* Contact Form Section - Only for Micro ATM Machine API Providers page */}
      {pageContent.slug === "micro-atm-machine-providers" && <ContactForm />}

      {/* Contact Form Section - Only for PAN Card API page */}
      {pageContent.slug === "pancard-api" && <ContactForm />}

      {/* Contact Form Section - Only for Payout API page */}
      {pageContent.slug === "payout-api-service" && <ContactForm />}

      {/* Contact Form Section - Only for Pay-in Service page */}
      {pageContent.slug === "pay-in-service" && <ContactForm />}

      {/* Contact Form Section - Only for UPI Collection API page */}
      {pageContent.slug === "upi-collection-api" && <ContactForm />}

      {/* Contact Form Section - Only for Credit Card Bill Pay API page */}
      {pageContent.slug === "credit-card-billpay-api" && <ContactForm />}

      {/* Contact Form Section - Only for Recharge API Provider page */}
      {pageContent.slug === "recharge-api-provider" && <ContactForm />}

      {/* Contact Form Section - Only for BBPS API page */}
      {pageContent.slug === "bbps-api" && <ContactForm />}

      {/* Contact Form Section - Only for LIC Premium API page */}
      {pageContent.slug === "lic-premium-api" && <ContactForm />}

      {/* Contact Form Section - Only for Verification API page */}
      {pageContent.slug === "verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for SMS API page */}
      {pageContent.slug === "sms-api" && <ContactForm />}

      {/* Contact Form Section - Only for WhatsApp API page */}
      {pageContent.slug === "whatsapp-api" && <ContactForm />}

      {/* Contact Form Section - Only for Bus Booking API page */}
      {pageContent.slug === "bus-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Hotel Booking API page */}
      {pageContent.slug === "hotel-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Air Booking API page */}
      {pageContent.slug === "air-booking-api" && <ContactForm />}

      {/* Contact Form Section - Only for Bank Account Verification API page */}
      {pageContent.slug === "bank-account-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for UPI Verification API page */}
      {pageContent.slug === "upi-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for Aadhaar Validation API page */}
      {pageContent.slug === "aadhaar-validation-api" && <ContactForm />}

      {/* Contact Form Section - Only for Voter ID Verification API page */}
      {pageContent.slug === "voter-ID-verification-api" && <ContactForm />}

      {/* Contact Form Section - Only for Driving Licence Verification API page */}
      {pageContent.slug === "driving-licence-verification-api" && (
        <ContactForm />
      )}

      {/* Contact Form Section - Only for Vehicle RC Verification API page */}
      {pageContent.slug === "vehicle-rc-verification" && <ContactForm />}

      {/* Contact Form Section - Only for Website Design Service page */}
      {pageContent.slug === "website-design-service" && <ContactForm />}

      {/* Contact Form Section - Only for Software Development Service page */}
      {pageContent.slug === "software-development-service" && <ContactForm />}

      {/* Contact Form Section - Only for Application Development Service page */}
      {pageContent.slug === "application-development-service" && (
        <ContactForm />
      )}

      {/* Contact Form Section - Only for Digital Marketing Service page */}
      {pageContent.slug === "digital-marketing-service" && <ContactForm />}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <RocketLaunchIcon className="w-16 h-16 text-teal-400 animate-bounce mx-auto mb-6" />
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk">
              Ready to get <span className="gradient-text">started?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your project and see how we can help
              transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/about"
                className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-teal-500 hover:to-blue-500 transition-all duration-300 hover-lift animate-glow shadow-2xl"
              >
                <span className="flex items-center">
                  About Us
                  <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group border-3 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover-lift backdrop-blur-sm"
              >
                <span className="flex items-center">
                  Contact Us
                  <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />
      <FreeTrialPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
      <Footer />
    </div>
  );
}
