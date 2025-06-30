"use client";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const { status } = await axios.post(
      "http://192.168.20.156:5000/api/subscribe",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (status === 201) {
      toast.success("Thanks for subscribing us. Kindly stay with us, we'll update you soon!");
      setEmail("");
    }
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    console.error("Subscription failed:", err);
    toast.error(err.response?.data?.message || "Something went wrong");
  }
};



  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(120)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-transparent to-blue-600/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/Scriza (1).svg"
                alt="Scriza Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              We at Scriza are experts in software development, starting from
              scratch and building it from the ground up. We understand that not
              all projects are the same, and that&apos;s why we take the time to
              get to know you and your project before we begin.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/scriza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/linkdin1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
        </Link>
              <Link
             href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/insta1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
        </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/faceBook1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
        </Link>
              <Link
                               href="https://www.youtube.com/@scrizaprivatelimited2215"

                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/youtube1.svg"
                  alt="Scriza Logo"
                  width={10}
                  height={10}
                  className="h-3 w-10"
                  priority
                />
        </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#blogs"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/custom-software-development"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Custom Software Development
          </Link>
              </li>
              <li>
                <Link
                  href="/website-design-service"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Website Designing
          </Link>
              </li>
              <li>
                <Link
                  href="/software-development-service"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Software Development
          </Link>
              </li>
              <li>
                <Link
                  href="/application-development-service"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Application Development
          </Link>
              </li>
              <li>
                <Link
                  href="/digital-marketing-service"
                  className="hover:text-teal-400 transition-colors hover:translate-x-1 transform inline-block"
                >
                  Digital Marketing
          </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-400">
                Contact Info
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start group ">
                  <MapPinIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-teal-400 group-hover:scale-110 transition-transform" />
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=A-4-5,+A+Block,+Sector+16,+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm cursor-pointer"
                  >
                    Ground Floor, Logix Park (Supreme Work), A-4-5, A Block,
                    Sector 16, Noida, Uttar Pradesh 201301
            </Link>
                </div>
                <Link href={`tel:${"9116011899"}`} className="flex items-center group">
                  <PhoneIcon className="w-5 h-5 mr-3 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span>+919116011899</span>
          </Link>
                <div className="flex items-center group">
                  <EnvelopeIcon className="w-5 h-5 mr-3 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span>sales@scriza.in</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-teal-400">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
           <form
  onSubmit={(e)=>handleSubmit(e)}
  className="flex"
>
  <input
    type="email"
    required
    value={email}
    name="email"
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:border-teal-400 text-white"
  />
  <button
    type="submit"
    className="px-6 py-2 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 rounded-r-md text-white font-medium hover:from-teal-600 hover:to-blue-600 transition-all"
  >
    Subscribe
  </button>
</form>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-wrap justify-center space-x-6 mb-6">
            <Link
              href="/privacy-policy"
              className="hover:text-teal-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/term-conditions"
              className="hover:text-teal-400 transition-colors text-sm"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/refund-and-cancellation-policy"
              className="hover:text-teal-400 transition-colors text-sm"
            >
              Refund & Cancellation Policy
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-teal-400 transition-colors text-sm"
            >
              Sitemap
            </Link>
          </div>
          <p className="text-sm">&copy; 2024 SCRIZA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
