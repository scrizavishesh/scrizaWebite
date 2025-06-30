"use client";

import { useState } from "react";
import {
  DocumentCheckIcon,
  IdentificationIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const apiServices = [
    {
      name: "Bank Account Verification API",
      icon: CreditCardIcon,
      gradient: "from-blue-500 to-teal-500",
      redirectTo: "/bank-account-verification-api",
    },
    {
      name: "UPI Verification API",
      icon: CreditCardIcon,
      gradient: "from-purple-500 to-pink-500",
      redirectTo: "/upi-verification-api",
    },
    {
      name: "Company Verification API",
      icon: BuildingOfficeIcon,
      gradient: "from-green-500 to-emerald-500",
      redirectTo: "/bank-account-verification-api",
    },
    {
      name: "DIN Verification API",
      icon: DocumentCheckIcon,
      gradient: "from-orange-500 to-red-500",
      redirectTo: "/bank-account-verification-api",
    },
    {
      name: "Udyog Aadhaar Verification API",
      icon: DocumentCheckIcon,
      gradient: "from-indigo-500 to-purple-500",
      //  redirectTo: "/bank-account-verification-api",
    },
    {
      name: "Aadhaar Verification API",
      icon: IdentificationIcon,
      gradient: "from-teal-500 to-cyan-500",
      redirectTo: "/aadhaar-validation-api",
    },
    {
      name: "Voter ID Verification API",
      icon: IdentificationIcon,
      gradient: "from-pink-500 to-rose-500",
      redirectTo: "/voter-ID-verification-api",
    },
    {
      name: "PAN Card Validation API",
      icon: DocumentCheckIcon,
      gradient: "from-yellow-500 to-orange-500",
      //  redirectTo: "/bank-account-verification-api",
    },
    {
      name: "Driving Licence Verification API",
      icon: IdentificationIcon,
      gradient: "from-cyan-500 to-blue-500",
      redirectTo: "/driving-licence-verification-api",
    },
    {
      name: "Advanced API for Vehicle RC Verification",
      icon: DocumentCheckIcon,
      gradient: "from-red-500 to-pink-500",
      redirectTo: "/vehicle-rc-verification",
    },
    {
      name: "Aadhaar Validation API",
      icon: IdentificationIcon,
      gradient: "from-green-400 to-teal-400",
      redirectTo: "/aadhaar-validation-api",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-scale">
          <h2 className="text-5xl font-bold text-gray-900 font-space-grotesk mb-6">
            Contact Us - Transform your{" "}
            <span className="gradient-text">recharge business</span>
          </h2>
          <p className="text-2xl text-gray-600 font-medium mb-4">
            So don&apos;t waste time anymore, unlock new growth opportunities in
            the dynamic world of mobile recharge services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Book For Demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile Number*
                </label>
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">---- Select Option ----</option>
                  <option value="recharge-software">Recharge Software</option>
                  <option value="api-integration">API Integration</option>
                  <option value="white-label">White Label Solution</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover-lift animate-glow"
              >
                Submit Request
              </button>

              <p className="text-sm text-gray-500 text-center">
                100% Privacy. We Don&apos;t Share Your Data.
              </p>
            </form>
          </div>

          {/* API Services */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-space-grotesk">
                Our API Services
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {apiServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white p-4 rounded-xl shadow-md border border-gray-100 hover-lift transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {service.name}
                          </h4>
                        </div>
                        {service?.redirectTo && (
                          <Link
                            href={service.redirectTo}
                            className="text-teal-600 hover:text-teal-700 font-semibold text-sm px-4 py-2 border border-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-300"
                          >
                            Try it now
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Aadhaar Validation Highlight */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <IdentificationIcon className="w-12 h-12 text-white" />
                <h4 className="text-2xl font-bold">Try It Now</h4>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Confirm your compliance with the UIDAI norms of Aadhaar
                Validation with our API technology. Talk to our sales team right
                now to access the hassle-free validation solution.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
