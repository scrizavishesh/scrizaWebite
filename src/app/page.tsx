"use client";

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CpuChipIcon,
  CreditCardIcon,
  StarIcon,
  ChevronRightIcon,
  SparklesIcon,

} from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ChatWidgets from "./components/ChatWidgets";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {

  interface BlogPosts {
  title: string;
  slug: string;
  content: string;
  featureImage: string;
  category?: {
    name: string;
  };
}

const [blogs, setBlogs] = useState<BlogPosts[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.20.156:5000/api/blogs",
          {
            withCredentials: true,
          }
        );

        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero Section - Futuristic Design */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        {/* Futuristic Background */}
        <div className="absolute inset-0">
          {/* Dynamic Mesh Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-cyan-500/5 to-emerald-500/10 animate-pulse"></div>

          {/* Advanced Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse"></div>
          </div>

          {/* Futuristic Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-red-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Animated Line Network */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Scanning Lines */}
            <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-40 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-fly-left"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-60 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-fly-right"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-60 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-fly-left"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent animate-fly-right"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-20 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent animate-fly-left"
              style={{ animationDelay: "5s" }}
            ></div>

            {/* Vertical Data Streams */}
            <div
              className="absolute top-0 left-20 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-fly-up"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-0 left-40 h-full w-px bg-gradient-to-b from-transparent via-orange-400/50 to-transparent animate-fly-down"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-0 right-40 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent animate-fly-up"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute top-0 right-20 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-fly-down"
              style={{ animationDelay: "3.5s" }}
            ></div>
            <div
              className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent animate-fly-up"
              style={{ animationDelay: "4.5s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-fly-down"
              style={{ animationDelay: "5.5s" }}
            ></div>

            {/* Diagonal Energy Lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent transform rotate-12 animate-fly-diagonal"></div>
              <div
                className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transform -rotate-12 animate-fly-diagonal"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transform rotate-12 animate-fly-diagonal"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>

            {/* Pulsing Data Points */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Matrix-style Code Rain */}
            <div
              className="absolute top-0 left-10 text-cyan-400/20 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "1s" }}
            >
              01010101
            </div>
            <div
              className="absolute top-0 left-32 text-orange-400/20 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "2s" }}
            >
              11001100
            </div>
            <div
              className="absolute top-0 right-32 text-emerald-400/20 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "3s" }}
            >
              10101010
            </div>
            <div
              className="absolute top-0 right-10 text-cyan-500/20 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "4s" }}
            >
              00110011
            </div>

            {/* Additional Matrix Rain */}
            <div
              className="absolute top-0 left-1/4 text-cyan-300/15 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "2.5s" }}
            >
              10011010
            </div>
            <div
              className="absolute top-0 right-1/4 text-orange-300/15 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "3.5s" }}
            >
              01100110
            </div>
            <div
              className="absolute top-0 left-3/4 text-emerald-300/15 text-xs font-mono animate-fly-down"
              style={{ animationDelay: "4.5s" }}
            >
              11010011
            </div>

            {/* Glitch Effects */}
            <div className="absolute top-1/2 left-1/4 w-32 h-px bg-cyan-400/30 animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-24 h-px bg-orange-400/30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/2 w-28 h-px bg-emerald-400/30 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Circuit Board Lines */}
            <div className="absolute top-1/4 left-0 w-20 h-px bg-cyan-400/20"></div>
            <div className="absolute top-1/4 left-20 w-px h-20 bg-cyan-400/20"></div>
            <div
              className="absolute top-1/4 left-20 w-20 h-px bg-cyan-400/20"
              style={{ transform: "translateY(20px)" }}
            ></div>

            <div className="absolute bottom-1/4 right-0 w-20 h-px bg-orange-400/20"></div>
            <div className="absolute bottom-1/4 right-20 w-px h-20 bg-orange-400/20"></div>
            <div
              className="absolute bottom-1/4 right-20 w-20 h-px bg-orange-400/20"
              style={{ transform: "translateY(-20px)" }}
            ></div>

            {/* Holographic Elements */}
            <div
              className="absolute top-1/2 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/3 right-10 w-1 h-1 bg-orange-400 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping"
              style={{ animationDelay: "2.5s" }}
            ></div>

            {/* Scanning Beam Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent w-full h-full animate-fly-right opacity-50"
              style={{ animationDelay: "6s", animationDuration: "8s" }}
            ></div>
          </div>

          {/* Professional Code Window */}
          <div
            className="absolute top-20 right-10 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-2xl animate-float max-w-sm hidden lg:block"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-2 font-medium">
                app.tsx
              </span>
            </div>
            <div className="text-sm font-mono space-y-2">
              <div className="text-purple-400">const</div>
              <div className="text-cyan-400 ml-2">
                buildApp = () =&gt; &#123;
              </div>
              <div className="text-gray-300 ml-4">return &lt;Amazing /&gt;</div>
              <div className="text-cyan-400">&#125;</div>
            </div>
          </div>

          {/* Elegant Terminal */}
          <div
            className="absolute bottom-20 left-10 bg-black/95 backdrop-blur-xl border border-orange-500/20 rounded-xl p-6 shadow-2xl animate-float max-w-sm hidden lg:block"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">
                terminal
              </span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-orange-400">$ npm run deploy</div>
              <div className="text-orange-300">✓ Building production...</div>
              <div className="text-green-400">✓ Optimizing assets...</div>
              <div className="text-green-300">✓ Deployed successfully!</div>
              <div className="flex items-center">
                <span className="text-orange-400">$</span>
                <div className="w-2 h-4 bg-orange-400 ml-1 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Modern Dashboard */}
          <div
            className="absolute top-1/2 left-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl animate-float max-w-xs hidden xl:block"
            style={{ animationDelay: "5s" }}
          >
            <div className="text-white text-sm font-semibold mb-4">
              Analytics
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Users</span>
                <span className="text-cyan-400">+24%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-300">Revenue</span>
                <span className="text-green-400">+18%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Soft Spotlight Effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/3 via-transparent to-transparent blur-3xl"></div>

          {/* Futuristic Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 via-transparent to-orange-900/5 pointer-events-none"></div>

          {/* Holographic Scan Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(6,182,212,0.1)_2px,rgba(6,182,212,0.1)_4px)] animate-pulse"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          {/* Professional Header Badge */}
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white/90 text-sm font-medium tracking-wide">
              <SparklesIcon className="w-5 h-5 text-orange-400" />
              <span>Innovative Software Solutions</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
            {/* Enhanced Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-10 tracking-tight">
                <span className="block text-white/95 font-light mb-2">
                  Collaborate
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-emerald-400 to-orange-500 bg-clip-text text-transparent font-black italic mb-2">
                  Innovate.
                </span>
                <span className="block text-white/90 font-medium">Build.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                We provide cutting-edge software development services to help
                businesses stay ahead in today&apos;s fast-paced digital world.
              </p>

              {/* Modern CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-emerald-600 text-white px-10 py-5 rounded-xl font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    Discover More
                    <RocketLaunchIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Enhanced Right Content - Professional Dev Tools */}
            <div className="lg:col-span-5 animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
                {/* Main Terminal Window */}
                <div className="col-span-2 relative group">
                  <div className="bg-gray-900/98 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 shadow-2xl">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-gray-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        scriza-dev
                      </div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm space-y-3">
                      <div className="text-orange-400">$ npm run deploy</div>
                      <div className="text-orange-300">
                        ✓ Building production...
                      </div>
                      <div className="text-emerald-400">
                        ✓ Optimizing assets...
                      </div>
                      <div className="text-emerald-300">
                        ✓ Deployed successfully!
                      </div>
                      <div className="flex items-center">
                        <span className="text-orange-400">$</span>
                        <div className="w-2 h-4 bg-orange-400 ml-1 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Editor Preview */}
                <div className="bg-gray-900/98 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-emerald-400 text-sm font-medium">
                      app.tsx
                    </div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-orange-400">const</span>{" "}
                      <span className="text-emerald-400">App</span> = () =&gt;
                    </div>
                    <div className="ml-2">
                      <span className="text-orange-300">
                        &lt;Component /&gt;
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-emerald-300 mt-3 font-medium">
                    React Development
                  </div>
                </div>

                {/* API Status */}
                <div className="bg-gray-900/98 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-orange-400 text-sm font-medium">
                      API
                    </div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Status</span>
                      <span className="text-emerald-400">Online</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Response</span>
                      <span className="text-orange-400">12ms</span>
                    </div>
                  </div>
                  <div className="text-sm text-orange-300 mt-3 font-medium">
                    API Integration
                  </div>
                </div>

                {/* Performance Dashboard */}
                <div className="col-span-2 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <CpuChipIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-base">
                          Performance
                        </div>
                        <div className="text-gray-400 text-sm">
                          Real-time Metrics
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-8 bg-gradient-to-t from-orange-500 to-emerald-500 rounded"></div>
                      <div className="w-2 h-10 bg-gradient-to-t from-orange-500 to-emerald-500 rounded"></div>
                      <div className="w-2 h-6 bg-gradient-to-t from-orange-500 to-emerald-500 rounded"></div>
                      <div className="w-2 h-9 bg-gradient-to-t from-orange-500 to-emerald-500 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold text-lg">
                        99.9%
                      </div>
                      <div className="text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-lg">
                        &lt;50ms
                      </div>
                      <div className="text-gray-400">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold text-lg">
                        A+
                      </div>
                      <div className="text-gray-400">Grade</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400/10 to-emerald-600/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-emerald-400/10 to-orange-600/10 rounded-full blur-xl"></div>

              {/* Minimal Code Symbols */}
              <div className="absolute top-12 right-4 text-orange-400/40 text-sm font-mono">
                &lt;/&gt;
              </div>
              <div className="absolute bottom-24 left-4 text-emerald-400/40 text-sm font-mono">
                &#123;&#125;
              </div>
              <div className="absolute top-1/2 right-12 text-orange-500/40 text-sm font-mono">
                ( )
              </div>
            </div>
          </div>

          {/* Modern Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Chat Widgets */}
        <ChatWidgets />
      </section>

      {/* What We Do Section - Futuristic Light Green Design */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-green-100 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Futuristic Light Green Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/80 via-green-50/60 to-teal-100/80"></div>

          {/* Glowing Light Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          {/* Futuristic Animated Line Network */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Glowing Lines */}
            <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent animate-fly-right shadow-lg shadow-emerald-500/20"></div>
            <div
              className="absolute top-32 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/80 to-transparent animate-fly-left shadow-lg shadow-green-500/20"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-48 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500/80 to-transparent animate-fly-right shadow-lg shadow-teal-500/20"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-64 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-600/80 to-transparent animate-fly-left shadow-lg shadow-emerald-600/20"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-64 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-600/80 to-transparent animate-fly-right shadow-lg shadow-green-600/20"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-48 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-600/80 to-transparent animate-fly-left shadow-lg shadow-teal-600/20"
              style={{ animationDelay: "5s" }}
            ></div>
            <div
              className="absolute bottom-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent animate-fly-right shadow-lg shadow-emerald-500/20"
              style={{ animationDelay: "6s" }}
            ></div>
            <div
              className="absolute bottom-16 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/80 to-transparent animate-fly-left shadow-lg shadow-green-500/20"
              style={{ animationDelay: "7s" }}
            ></div>

            {/* Vertical Glowing Lines */}
            <div
              className="absolute top-0 left-16 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/70 to-transparent animate-fly-up shadow-lg shadow-emerald-500/20"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-0 left-32 h-full w-0.5 bg-gradient-to-b from-transparent via-green-500/70 to-transparent animate-fly-down shadow-lg shadow-green-500/20"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-0 right-32 h-full w-0.5 bg-gradient-to-b from-transparent via-teal-500/70 to-transparent animate-fly-up shadow-lg shadow-teal-500/20"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute top-0 right-16 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-600/70 to-transparent animate-fly-down shadow-lg shadow-emerald-600/20"
              style={{ animationDelay: "3.5s" }}
            ></div>
            <div
              className="absolute top-0 left-1/3 h-full w-0.5 bg-gradient-to-b from-transparent via-green-600/70 to-transparent animate-fly-up shadow-lg shadow-green-600/20"
              style={{ animationDelay: "4.5s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-0.5 bg-gradient-to-b from-transparent via-teal-600/70 to-transparent animate-fly-down shadow-lg shadow-teal-600/20"
              style={{ animationDelay: "5.5s" }}
            ></div>
            <div
              className="absolute top-0 left-2/3 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/70 to-transparent animate-fly-up shadow-lg shadow-emerald-500/20"
              style={{ animationDelay: "6.5s" }}
            ></div>

            {/* Diagonal Energy Beams */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent transform rotate-12 animate-fly-diagonal shadow-lg shadow-emerald-500/30"></div>
              <div
                className="absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/60 to-transparent transform -rotate-12 animate-fly-diagonal shadow-lg shadow-green-500/30"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent transform rotate-12 animate-fly-diagonal shadow-sm shadow-teal-500/30"
                style={{ animationDelay: "4s" }}
              ></div>
              <div
                className="absolute top-3/4 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-600/60 to-transparent transform -rotate-12 animate-fly-diagonal shadow-lg shadow-emerald-600/30"
                style={{ animationDelay: "6s" }}
              ></div>
            </div>

            {/* Glowing Data Points */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping shadow-lg shadow-emerald-500/50"></div>
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full animate-ping shadow-lg shadow-green-500/50"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-teal-500 rounded-full animate-ping shadow-lg shadow-teal-500/50"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/4 w-3 h-3 bg-emerald-600 rounded-full animate-ping shadow-lg shadow-emerald-600/50"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-green-600 rounded-full animate-ping shadow-lg shadow-green-600/50"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/6 w-3 h-3 bg-teal-600 rounded-full animate-ping shadow-lg shadow-teal-600/50"
              style={{ animationDelay: "5s" }}
            ></div>

            {/* Futuristic Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#059669_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse"></div>
            </div>

            {/* Floating Light Orbs */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-400/30 to-emerald-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Futuristic Circuit Patterns */}
            <div className="absolute top-1/4 left-8 w-20 h-0.5 bg-emerald-500/60 shadow-sm shadow-emerald-500/30"></div>
            <div className="absolute top-1/4 left-8 w-0.5 h-20 bg-emerald-500/60 shadow-sm shadow-emerald-500/30"></div>
            <div className="absolute top-1/4 left-28 w-20 h-0.5 bg-emerald-500/60 shadow-sm shadow-emerald-500/30"></div>
            <div
              className="absolute top-1/4 left-28 w-0.5 h-20 bg-emerald-500/60 shadow-sm shadow-emerald-500/30"
              style={{ transform: "translateY(20px)" }}
            ></div>

            <div className="absolute bottom-1/4 right-8 w-20 h-0.5 bg-teal-500/60 shadow-sm shadow-teal-500/30"></div>
            <div className="absolute bottom-1/4 right-8 w-0.5 h-20 bg-teal-500/60 shadow-sm shadow-teal-500/30"></div>
            <div className="absolute bottom-1/4 right-28 w-20 h-0.5 bg-teal-500/60 shadow-sm shadow-teal-500/30"></div>
            <div
              className="absolute bottom-1/4 right-28 w-0.5 h-20 bg-teal-500/60 shadow-sm shadow-teal-500/30"
              style={{ transform: "translateY(-20px)" }}
            ></div>

            {/* Light Scan Lines */}
            <div className="absolute inset-0 opacity-8">
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(56,133,122,0.1)_4px,rgba(56,133,122,0.1)_8px)] animate-pulse"></div>
            </div>

            {/* Particle Effects */}
            <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-emerald-500 rounded-full animate-ping opacity-60"></div>
            <div
              className="absolute top-1/3 right-1/5 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-teal-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-emerald-600 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "4.5s" }}
            ></div>
          </div>

          {/* Enhanced Interactive Floating Windows */}
          <div
            className="absolute top-12 right-6 bg-white/95 backdrop-blur-md border-l-4 border-[#38857a] rounded-xl shadow-2xl p-5 animate-float max-w-sm hidden lg:block hover:shadow-[#38857a]/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse group-hover:animate-spin"></div>
              <span className="text-gray-700 text-sm font-bold group-hover:text-[#38857a] transition-colors">
                component.jsx
              </span>
              <div className="ml-auto text-xs text-emerald-600 font-semibold">
                ✓ Active
              </div>
            </div>
            <div className="text-sm font-mono text-gray-600 space-y-1 group-hover:text-gray-800 transition-colors">
              <div>
                <span className="text-[#38857a]">import</span> React from
                &apos;react&apos;
              </div>
              <div>
                <span className="text-emerald-600">const</span> App = () =&gt;
                &#123;
              </div>
              <div className="ml-3">
                <span className="text-[#38857a]">return</span>{" "}
                &lt;div&gt;Magic&lt;/div&gt;
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Enhanced Database Window */}
          <div
            className="absolute bottom-16 left-6 bg-gray-800/95 backdrop-blur-md border-l-4 border-emerald-500 rounded-xl shadow-2xl p-5 animate-float max-w-sm hidden xl:block hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "4s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
              <span className="text-emerald-400 text-sm font-bold group-hover:text-emerald-300 transition-colors">
                Database
              </span>
              <div className="ml-auto text-xs text-emerald-400 font-semibold">
                Online
              </div>
            </div>
            <div className="text-sm text-gray-300 space-y-2 group-hover:text-gray-200 transition-colors">
              <div className="font-mono">SELECT * FROM users</div>
              <div className="text-gray-400 text-xs">
                → 1,247 records fetched
              </div>
              <div className="text-emerald-400 text-xs font-semibold">
                ✓ Connected successfully
              </div>
              <div className="text-[#38857a] text-xs">⚡ Response: 0.3ms</div>
            </div>
          </div>

          {/* Enhanced Analytics */}
          <div
            className="absolute top-1/2 right-8 bg-white/95 backdrop-blur-md border-l-4 border-[#38857a] rounded-xl shadow-2xl p-5 animate-float max-w-xs hidden xl:block hover:shadow-[#38857a]/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "6s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse group-hover:animate-bounce"></div>
              <span className="text-gray-700 text-sm font-bold group-hover:text-[#38857a] transition-colors">
                Live Analytics
              </span>
              <div className="ml-auto text-xs text-emerald-600 font-semibold">
                Live
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  Active Users
                </span>
                <span className="text-[#38857a] font-bold text-lg group-hover:text-emerald-600 transition-colors">
                  2,847
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  Conversions
                </span>
                <span className="text-emerald-600 font-bold text-lg group-hover:text-[#38857a] transition-colors">
                  +24%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#38857a] h-2 rounded-full w-3/4 animate-pulse group-hover:bg-emerald-500 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Status Messages */}
          <div
            className="absolute top-1/4 right-12 text-emerald-300 text-sm animate-bounce font-bold bg-emerald-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-400/30 hover:bg-emerald-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "2s" }}
          >
            ✓ Build Success
          </div>
          <div
            className="absolute bottom-1/3 left-12 text-teal-300 text-sm animate-bounce font-bold bg-teal-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-teal-400/30 hover:bg-teal-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "4s" }}
          >
            🚀 Deployed
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-green-300 text-sm animate-bounce font-bold bg-green-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-green-400/30 hover:bg-green-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "6s" }}
          >
            ⭐ 5-Star Review
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Header Section */}
          <div className="text-center mb-20 animate-fade-in-scale">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 mb-8 px-8 py-4 bg-white/95 backdrop-blur-md border border-[#38857a]/20 rounded-xl shadow-lg hover:shadow-[#38857a]/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#38857a] rounded-full"></div>
              <span className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
                What We Offer
              </span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>

            {/* Main Heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
                The best solutions for your business - what we do.
              </h2>
            </div>

            {/* Quote Card */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  &ldquo;30+ Years of Global Expertise in Business & Technology
                  Consulting. Trusted Partner to 5k+ Clients Worldwide.
                  Let&apos;s Create Your Digital Transformation Timeline with
                  Experience & Innovation.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Professional Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Software Development */}
            <div className="group bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#38857a]/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38857a] to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-[#38857a] text-xs font-semibold uppercase tracking-wider">
                    Services
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Software Development
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                We leverage tried and tested methodologies to offer bespoke
                software development solutions. The competitively priced
                technology products are created for both large and small
                enterprises across various industry verticals.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="group bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#38857a]/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38857a] to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-[#38857a] text-xs font-semibold uppercase tracking-wider">
                    Services
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Mobile Application Development
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                With 12+ years of industry experience, we have become
                specialists in sophisticated iOS and Android mobile application
                development. Partner with us and accelerate the growth of your
                enterprises beyond your imagination.
              </p>
            </div>

            {/* Virtual Developer */}
            <div className="group bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-emerald-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">
                    Services
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Virtual Developer
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                Need a developer who focuses on your key business outcomes?
                We&apos;d love to help you streamline your business. Talk to one
                of our specialists and get a trusted and highly experienced
                virtual developer for your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Professional Orange Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF934C]/10 via-orange-200/30 to-amber-200/20"></div>

          {/* Glowing Light Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF934C]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          {/* Flying Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Flying Triangles */}
            <div
              className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-[#FF934C] to-orange-500 transform rotate-45 animate-fly-right opacity-40"
              style={{
                animationDelay: "0s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
            <div
              className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 transform rotate-12 animate-fly-left opacity-50"
              style={{
                animationDelay: "1s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-5 h-5 bg-gradient-to-r from-orange-400 to-amber-500 transform -rotate-45 animate-fly-diagonal opacity-40"
              style={{
                animationDelay: "2s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>

            {/* Flying Hexagons */}
            <div
              className="absolute top-60 left-1/3 w-7 h-7 bg-gradient-to-r from-[#FF934C] to-orange-600 animate-fly-right opacity-50"
              style={{
                animationDelay: "0.5s",
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
            ></div>
            <div
              className="absolute bottom-60 right-1/3 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 animate-fly-left opacity-40"
              style={{
                animationDelay: "1.5s",
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
            ></div>

            {/* Flying Diamonds */}
            <div
              className="absolute top-1/3 right-10 w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-500 transform rotate-45 animate-fly-up opacity-60"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-16 w-5 h-5 bg-gradient-to-r from-[#FF934C] to-orange-500 transform rotate-45 animate-fly-down opacity-50"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Floating Orbs with Trails */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FF934C] rounded-full animate-float opacity-60 shadow-lg shadow-[#FF934C]/30"></div>
            <div
              className="absolute top-1/3 right-1/4 w-4 h-4 bg-orange-400 rounded-full animate-float opacity-50 shadow-lg shadow-orange-400/30"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-70 shadow-lg shadow-amber-400/30"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Energy Beams */}
            <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-[#FF934C]/20 to-transparent animate-pulse"></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-orange-400/20 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-amber-400/20 to-transparent animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Horizontal Energy Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF934C]/30 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-fly-left"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-fly-right"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Particle System */}
            <div className="absolute top-16 left-20 w-1 h-1 bg-[#FF934C] rounded-full animate-ping opacity-40"></div>
            <div
              className="absolute top-32 right-24 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-40 left-32 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-40"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-24 right-40 w-1 h-1 bg-[#FF934C] rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Constellation Lines */}
            <div className="absolute top-1/3 left-1/5 w-20 h-px bg-gradient-to-r from-[#FF934C]/30 to-transparent transform rotate-12"></div>
            <div className="absolute top-1/2 right-1/5 w-16 h-px bg-gradient-to-r from-orange-400/30 to-transparent transform -rotate-12"></div>
            <div className="absolute bottom-1/3 left-1/2 w-24 h-px bg-gradient-to-r from-amber-400/30 to-transparent transform rotate-6"></div>

            {/* Futuristic Grid Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="h-full w-full bg-[linear-gradient(to_right,#FF934C_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse"></div>
            </div>

            {/* Circuit Board Patterns */}
            <div className="absolute top-1/4 left-8 w-20 h-0.5 bg-[#FF934C]/50 shadow-sm shadow-[#FF934C]/30"></div>
            <div className="absolute top-1/4 left-8 w-0.5 h-20 bg-[#FF934C]/50 shadow-sm shadow-[#FF934C]/30"></div>
            <div className="absolute top-1/4 left-28 w-20 h-0.5 bg-[#FF934C]/50 shadow-sm shadow-[#FF934C]/30"></div>
            <div
              className="absolute top-1/4 left-28 w-0.5 h-20 bg-[#FF934C]/50 shadow-sm shadow-[#FF934C]/30"
              style={{ transform: "translateY(20px)" }}
            ></div>

            <div className="absolute bottom-1/4 right-8 w-20 h-0.5 bg-orange-500/50 shadow-sm shadow-orange-500/30"></div>
            <div className="absolute bottom-1/4 right-8 w-0.5 h-20 bg-orange-500/50 shadow-sm shadow-orange-500/30"></div>
            <div className="absolute bottom-1/4 right-28 w-20 h-0.5 bg-orange-500/50 shadow-sm shadow-orange-500/30"></div>
            <div
              className="absolute bottom-1/4 right-28 w-0.5 h-20 bg-orange-500/50 shadow-sm shadow-orange-500/30"
              style={{ transform: "translateY(-20px)" }}
            ></div>

            {/* Light Scan Lines */}
            <div className="absolute inset-0 opacity-8">
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,147,76,0.1)_4px,rgba(255,147,76,0.1)_8px)] animate-pulse"></div>
            </div>

            {/* Particle Effects */}
            <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-[#FF934C] rounded-full animate-ping opacity-60"></div>
            <div
              className="absolute top-1/3 right-1/5 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-amber-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-[#FF934C] rounded-full animate-ping opacity-60"
              style={{ animationDelay: "4.5s" }}
            ></div>
          </div>

          {/* Floating Achievement Badges */}
          <div
            className="absolute top-20 right-8 bg-gradient-to-r from-[#FF934C]/20 to-orange-600/20 backdrop-blur-xl border border-[#FF934C]/30 rounded-2xl p-4 animate-float shadow-2xl shadow-[#FF934C]/20"
            style={{ animationDelay: "2s" }}
          >
            <div className="text-[#FF934C] text-sm font-bold">
              🏆 Excellence Award
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Industry Recognition
            </div>
          </div>

          <div
            className="absolute bottom-20 left-8 bg-gradient-to-r from-orange-500/20 to-amber-600/20 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-4 animate-float shadow-2xl shadow-orange-400/20"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-orange-600 text-sm font-bold">
              ⭐ 5-Star Rating
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Client Satisfaction
            </div>
          </div>

          <div
            className="absolute top-1/2 left-6 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-4 animate-float shadow-2xl shadow-amber-400/20"
            style={{ animationDelay: "6s" }}
          >
            <div className="text-amber-600 text-sm font-bold">
              🚀 Innovation Leader
            </div>
            <div className="text-gray-600 text-xs mt-1">Technology Pioneer</div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Stunning Design */}
          <div className="text-center mb-24">
            {/* Interactive Badge with Morphing Effects */}
            <div className="inline-flex items-center space-x-6 mb-12 px-12 py-6 bg-gradient-to-r from-white via-gray-50 to-white border-t-8 border-[#38857a] rounded-3xl shadow-2xl hover:shadow-[#38857a]/30 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="w-6 h-6 bg-gradient-to-br from-[#38857a] to-emerald-600 rounded-full animate-pulse group-hover:animate-spin transition-all duration-300 shadow-lg"></div>
              <span className="text-gray-800 font-black text-lg tracking-widest uppercase group-hover:text-[#38857a] transition-colors duration-300">
                Who We Are
              </span>
              <div
                className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-pulse group-hover:animate-spin transition-all duration-300 shadow-lg"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Revolutionary Typography Design */}
            <div className="mb-10 relative">
              {/* Background Text Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="text-6xl font-black text-[#38857a] select-none">
                  INNOVATION
                </span>
              </div>

              {/* Main Heading with Advanced Effects */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight tracking-tight">
                  <span className="relative inline-block group cursor-pointer">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Powering{" "}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/0 via-[#38857a]/20 to-[#38857a]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl transform -skew-x-12"></div>
                  </span>
                  <br />
                  <span className="relative inline-block group cursor-pointer">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38857a] via-emerald-600 to-teal-600 animate-gradient-x font-extrabold group-hover:from-emerald-400 group-hover:via-[#38857a] group-hover:to-green-600 transition-all duration-700">
                      Software
                    </span>
                    {/* Dynamic Underline Effect */}
                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#38857a]/30 via-emerald-500/50 to-teal-500/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#38857a] rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </span>
                </h2>

                {/* Subtitle with Interactive Elements */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide leading-tight">
                    <span className="inline-block group cursor-pointer">
                      <span className="group-hover:text-gray-900 transition-colors duration-300">
                        Passionate about{" "}
                      </span>
                    </span>
                    <br className="md:hidden" />
                    <span className="relative inline-block group cursor-pointer">
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient-x italic transform -skew-x-6 inline-block group-hover:skew-x-0 group-hover:from-red-500 group-hover:via-orange-500 group-hover:to-yellow-500 transition-all duration-700">
                        Technology
                      </span>
                      {/* Multi-layer Underline */}
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full"></div>
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                      {/* Spark Effects */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div
                        className="absolute bottom-0 left-0 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </span>
                    <span className="text-orange-500 font-black text-4xl animate-bounce inline-block ml-2 group hover:text-red-500 transition-colors cursor-pointer">
                      .
                    </span>
                  </h3>
                </div>
              </div>

              {/* Floating Code Elements */}
              <div
                className="absolute top-1/4 -left-8 text-[#38857a]/30 text-6xl font-mono animate-float opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                style={{ animationDelay: "1s" }}
              >
                &lt;/&gt;
              </div>
              <div
                className="absolute bottom-1/4 -right-8 text-orange-400/30 text-5xl font-mono animate-float opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                style={{ animationDelay: "2s" }}
              >
                &#123;&#125;
              </div>
              <div
                className="absolute top-1/2 left-1/4 text-emerald-500/30 text-4xl font-mono animate-float opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                style={{ animationDelay: "3s" }}
              >
                ( )
              </div>
            </div>
          </div>

          {/* Enhanced Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {/* Enhanced Main Content Card */}
            <div className="lg:col-span-2 bg-white border-t-8 border-[#38857a] rounded-3xl p-10 shadow-2xl hover:shadow-[#38857a]/20 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#38857a] rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">💡</span>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-10 font-light">
                If you&apos;re looking for a top software development company
                that can be trusted to deliver high-quality, innovative
                solutions at a reasonable price, you&apos;ve come to the right
                place. <span className="font-bold text-[#38857a]">Scriza</span>{" "}
                is the best software development company in the industry.
                We&apos;ve been helping our clients solve their biggest problems
                with Tech.
              </p>

              {/* Enhanced Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="group">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 mb-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CodeBracketIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-800 text-lg">
                          Custom Software Development
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          Enterprise Solutions
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-semibold">
                          Success Rate
                        </span>
                        <span className="text-orange-600 font-black text-lg">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-orange-500 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group ">
                  <div className="bg-gradient-to-r from-[#38857a]/10 to-[#38857a]/20 p-6 rounded-2xl border-l-4 border-[#38857a] mb-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4 h-18">
                      <div className="w-14 h-14 bg-[#38857a] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <DevicePhoneMobileIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-800 text-lg">
                          Application Development
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          Mobile & Web Apps
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-semibold">
                          Delivery Rate
                        </span>
                        <span className="text-[#38857a] font-black text-lg">
                          90%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#38857a] h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-[#38857a] hover:bg-[#2d6b61] text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#38857a]/30">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    Discover More
                    <ChevronRightIcon className="w-6 h-6 ml-3" />
                  </Link>
                </button>
              </div>
            </div>

            {/* Enhanced Experience Card */}
            <div className="bg-white border-t-8 border-orange-500 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-4xl font-black text-orange-500">2+</div>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-3">
                  Years Experience
                </h3>
                <p className="text-gray-600 font-medium">
                  Building Digital Solutions
                </p>
              </div>

              {/* Enhanced Mini Stats */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#38857a]/20 p-6 rounded-2xl border-l-4 border-[#38857a] hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-700 font-bold text-lg">
                        Happy Clients
                      </span>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                        Worldwide
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-[#38857a]">
                        150+
                      </span>
                      <div className="flex justify-end space-x-1 mt-2">
                        <div className="w-2 h-2 bg-[#38857a] rounded-full animate-pulse"></div>
                        <div
                          className="w-2 h-2 bg-[#38857a] rounded-full animate-pulse"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-[#38857a] rounded-full animate-pulse"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-700 font-bold text-lg">
                        Projects Done
                      </span>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                        Completed
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-orange-600">
                        200+
                      </span>
                      <div className="flex justify-end space-x-1 mt-2">
                        <div className="w-2 h-4 bg-orange-500 rounded animate-pulse"></div>
                        <div
                          className="w-2 h-6 bg-orange-400 rounded animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-3 bg-orange-300 rounded animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="mt-8 flex justify-center space-x-3">
                <div className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse opacity-70"></div>
                <div
                  className="w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-70"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse opacity-70"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valued Services Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Futuristic Light Green Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#38857a]/10 via-emerald-100/50 to-green-100/30"></div>

          {/* Glowing Light Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38857a]/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-300/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          {/* Futuristic Animated Line Network */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Glowing Lines */}
            <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#38857a]/60 to-transparent animate-fly-right shadow-sm shadow-[#38857a]/20"></div>
            <div
              className="absolute top-32 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent animate-fly-left shadow-sm shadow-emerald-500/20"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-48 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/60 to-transparent animate-fly-right shadow-sm shadow-green-500/20"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-48 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#38857a]/60 to-transparent animate-fly-left shadow-sm shadow-[#38857a]/20"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent animate-fly-right shadow-sm shadow-emerald-500/20"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-16 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/60 to-transparent animate-fly-left shadow-sm shadow-green-500/20"
              style={{ animationDelay: "5s" }}
            ></div>

            {/* Vertical Glowing Lines */}
            <div
              className="absolute top-0 left-16 h-full w-0.5 bg-gradient-to-b from-transparent via-[#38857a]/50 to-transparent animate-fly-up shadow-sm shadow-[#38857a]/20"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-0 left-32 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-fly-down shadow-sm shadow-emerald-500/20"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-0 right-32 h-full w-0.5 bg-gradient-to-b from-transparent via-green-500/50 to-transparent animate-fly-up shadow-sm shadow-green-500/20"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute top-0 right-16 h-full w-0.5 bg-gradient-to-b from-transparent via-[#38857a]/50 to-transparent animate-fly-down shadow-sm shadow-[#38857a]/20"
              style={{ animationDelay: "3.5s" }}
            ></div>
            <div
              className="absolute top-0 left-1/3 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent animate-fly-up shadow-sm shadow-emerald-500/20"
              style={{ animationDelay: "4.5s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-0.5 bg-gradient-to-b from-transparent via-green-500/50 to-transparent animate-fly-down shadow-sm shadow-green-500/20"
              style={{ animationDelay: "5.5s" }}
            ></div>

            {/* Diagonal Energy Beams */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#38857a]/40 to-transparent transform rotate-12 animate-fly-diagonal shadow-sm shadow-[#38857a]/30"></div>
              <div
                className="absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transform -rotate-12 animate-fly-diagonal shadow-sm shadow-emerald-500/30"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent transform rotate-12 animate-fly-diagonal shadow-sm shadow-teal-500/30"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>

            {/* Glowing Data Points */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#38857a] rounded-full animate-ping shadow-lg shadow-[#38857a]/50"></div>
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-ping shadow-lg shadow-emerald-500/50"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping shadow-lg shadow-green-500/50"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#38857a] rounded-full animate-ping shadow-lg shadow-[#38857a]/50"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-ping shadow-lg shadow-emerald-500/50"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Futuristic Grid Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="h-full w-full bg-[linear-gradient(to_right,#38857a_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse"></div>
            </div>

            {/* Circuit Board Patterns */}
            <div className="absolute top-1/4 left-8 w-20 h-0.5 bg-[#38857a]/50 shadow-sm shadow-[#38857a]/30"></div>
            <div className="absolute top-1/4 left-8 w-0.5 h-20 bg-[#38857a]/50 shadow-sm shadow-[#38857a]/30"></div>
            <div className="absolute top-1/4 left-28 w-20 h-0.5 bg-[#38857a]/50 shadow-sm shadow-[#38857a]/30"></div>
            <div
              className="absolute top-1/4 left-28 w-0.5 h-20 bg-[#38857a]/50 shadow-sm shadow-[#38857a]/30"
              style={{ transform: "translateY(20px)" }}
            ></div>

            <div className="absolute bottom-1/4 right-8 w-20 h-0.5 bg-emerald-500/50 shadow-sm shadow-emerald-500/30"></div>
            <div className="absolute bottom-1/4 right-8 w-0.5 h-20 bg-emerald-500/50 shadow-sm shadow-emerald-500/30"></div>
            <div className="absolute bottom-1/4 right-28 w-20 h-0.5 bg-emerald-500/50 shadow-sm shadow-emerald-500/30"></div>
            <div
              className="absolute bottom-1/4 right-28 w-0.5 h-20 bg-emerald-500/50 shadow-sm shadow-emerald-500/30"
              style={{ transform: "translateY(-20px)" }}
            ></div>

            {/* Light Scan Lines */}
            <div className="absolute inset-0 opacity-8">
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(56,133,122,0.1)_4px,rgba(56,133,122,0.1)_8px)] animate-pulse"></div>
            </div>

            {/* Particle Effects */}
            <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-[#38857a] rounded-full animate-ping opacity-60"></div>
            <div
              className="absolute top-1/3 right-1/5 w-1 h-1 bg-emerald-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-[#38857a] rounded-full animate-ping opacity-60"
              style={{ animationDelay: "4.5s" }}
            ></div>
          </div>

          {/* Enhanced Interactive Floating Windows */}
          <div
            className="absolute top-12 right-6 bg-white/95 backdrop-blur-md border-l-4 border-[#38857a] rounded-xl shadow-2xl p-5 animate-float max-w-sm hidden lg:block hover:shadow-[#38857a]/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse group-hover:animate-spin"></div>
              <span className="text-gray-700 text-sm font-bold group-hover:text-[#38857a] transition-colors">
                component.jsx
              </span>
              <div className="ml-auto text-xs text-emerald-600 font-semibold">
                ✓ Active
              </div>
            </div>
            <div className="text-sm font-mono text-gray-600 space-y-1 group-hover:text-gray-800 transition-colors">
              <div>
                <span className="text-[#38857a]">import</span> React from
                &apos;react&apos;
              </div>
              <div>
                <span className="text-emerald-600">const</span> App = () =&gt;
                &#123;
              </div>
              <div className="ml-3">
                <span className="text-[#38857a]">return</span>{" "}
                &lt;div&gt;Magic&lt;/div&gt;
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Enhanced Database Window */}
          <div
            className="absolute bottom-16 left-6 bg-gray-800/95 backdrop-blur-md border-l-4 border-emerald-500 rounded-xl shadow-2xl p-5 animate-float max-w-sm hidden xl:block hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "4s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
              <span className="text-emerald-400 text-sm font-bold group-hover:text-emerald-300 transition-colors">
                Database
              </span>
              <div className="ml-auto text-xs text-emerald-400 font-semibold">
                Online
              </div>
            </div>
            <div className="text-sm text-gray-300 space-y-2 group-hover:text-gray-200 transition-colors">
              <div className="font-mono">SELECT * FROM users</div>
              <div className="text-gray-400 text-xs">
                → 1,247 records fetched
              </div>
              <div className="text-emerald-400 text-xs font-semibold">
                ✓ Connected successfully
              </div>
              <div className="text-[#38857a] text-xs">⚡ Response: 0.3ms</div>
            </div>
          </div>

          {/* Enhanced Analytics */}
          <div
            className="absolute top-1/2 right-8 bg-white/95 backdrop-blur-md border-l-4 border-[#38857a] rounded-xl shadow-2xl p-5 animate-float max-w-xs hidden xl:block hover:shadow-[#38857a]/30 transition-all duration-300 cursor-pointer group"
            style={{ animationDelay: "6s" }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-[#38857a] rounded-full animate-pulse group-hover:animate-bounce"></div>
              <span className="text-gray-700 text-sm font-bold group-hover:text-[#38857a] transition-colors">
                Live Analytics
              </span>
              <div className="ml-auto text-xs text-emerald-600 font-semibold">
                Live
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  Active Users
                </span>
                <span className="text-[#38857a] font-bold text-lg group-hover:text-emerald-600 transition-colors">
                  2,847
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  Conversions
                </span>
                <span className="text-emerald-600 font-bold text-lg group-hover:text-[#38857a] transition-colors">
                  +24%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#38857a] h-2 rounded-full w-3/4 animate-pulse group-hover:bg-emerald-500 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Status Messages */}
          <div
            className="absolute top-1/4 right-12 text-emerald-300 text-sm animate-bounce font-bold bg-emerald-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-400/30 hover:bg-emerald-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "2s" }}
          >
            ✓ Build Success
          </div>
          <div
            className="absolute bottom-1/3 left-12 text-teal-300 text-sm animate-bounce font-bold bg-teal-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-teal-400/30 hover:bg-teal-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "4s" }}
          >
            🚀 Deployed
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-green-300 text-sm animate-bounce font-bold bg-green-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-green-400/30 hover:bg-green-800/40 transition-colors cursor-pointer"
            style={{ animationDelay: "6s" }}
          >
            ⭐ 5-Star Review
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <div className="text-center mb-24 animate-fade-in-scale">
            <div className="inline-flex items-center space-x-4 mb-8 px-10 py-5 bg-white border-l-4 border-[#38857a] rounded-xl shadow-xl">
              <div className="w-5 h-5 bg-[#38857a] rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-black text-base tracking-widest uppercase">
                Valued Services
              </span>
              <div
                className="w-5 h-5 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 leading-tight tracking-tight">
                Expert{" "}
                <span className="relative inline-block">
                  <span className="text-[#38857a] font-extrabold italic transform -skew-x-6 inline-block">
                    Software Development
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#38857a] rounded-full"></div>
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 tracking-wide">
                Services{" "}
                <span className="font-black text-orange-500 relative italic transform -skew-x-3">
                  Tailored to Your Business Needs
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
                </span>
              </h3>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fintech Software Development */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <CreditCardIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Fintech Software Development
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 h-22 leading-relaxed text-sm">
                Our expertise in fintech software development can help you build
                an app that will make your business run more efficiently and
                effectively.
              </p>
              <Link href="custom-software-development" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>

            {/* Travel Software Development */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Travel Software Development
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                We develop, implement and maintain travel software applications
                for online booking, inventory management, and reservation
                functionality for the travel industry.
              </p>

              <Link href="air-booking-api" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>

            {/* Recharge Portal Development */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Recharge Portal Development
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 h-24 leading-relaxed text-sm">
                We develop recharge portals that allow you to boost your
                business and take it to new heights!
              </p>

              <Link href="/recharge-api-provider" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>

            {/* Hotel Management Software */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Hotel Management Software
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                We have the expertise to develop an online hotel booking
                software that&apos;s easy to use and integrated with your
                existing back-end systems.
              </p>

              <Link href="/hotel-management-software" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>

            {/* School Management Software */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    School Management Software
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                We&apos;re the best in the business at developing school
                software. We can create a custom management system for your
                school.
              </p>

              <Link href="/school-management-software" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>

            {/* API Integration */}
            <div className="group bg-white border-l-8 border-[#38857a] rounded-2xl p-6 shadow-xl hover:shadow-[#38857a]/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#38857a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    API Integration
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Seamless API integration services to connect your applications
                with third-party services and enhance functionality.
              </p>

              <Link href="/aeps-api" passHref>
                <button className="w-full cursor-pointer bg-[#38857a]/10 hover:bg-[#38857a]/20 text-[#38857a] font-semibold py-3 px-4 rounded-lg transition-colors border border-[#38857a]/30">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-32 bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Professional Orange Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF934C]/10 via-orange-200/30 to-amber-200/20"></div>

          {/* Flying Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Flying Triangles */}
            <div
              className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-fly-right opacity-60"
              style={{
                animationDelay: "0s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
            <div
              className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 transform rotate-12 animate-fly-left opacity-70"
              style={{
                animationDelay: "1s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-500 transform -rotate-45 animate-fly-diagonal opacity-60"
              style={{
                animationDelay: "2s",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>

            {/* Flying Hexagons */}
            <div
              className="absolute top-60 left-1/3 w-7 h-7 bg-gradient-to-r from-orange-400 to-red-500 animate-fly-right opacity-70"
              style={{
                animationDelay: "0.5s",
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
            ></div>
            <div
              className="absolute bottom-60 right-1/3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 animate-fly-left opacity-60"
              style={{
                animationDelay: "1.5s",
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
            ></div>

            {/* Flying Diamonds */}
            <div
              className="absolute top-1/3 right-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 transform rotate-45 animate-fly-up opacity-80"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-16 w-5 h-5 bg-gradient-to-r from-indigo-400 to-blue-500 transform rotate-45 animate-fly-down opacity-70"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Floating Orbs with Trails */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-80 shadow-lg shadow-cyan-400/50"></div>
            <div
              className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-70 shadow-lg shadow-purple-400/50"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-90 shadow-lg shadow-emerald-400/50"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Energy Beams */}
            <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Horizontal Energy Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-fly-left"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent animate-fly-right"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Particle System */}
            <div className="absolute top-16 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
            <div
              className="absolute top-32 right-24 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-70"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-24 right-40 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-80"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Constellation Lines */}
            <div className="absolute top-1/3 left-1/5 w-20 h-px bg-gradient-to-r from-cyan-400/50 to-transparent transform rotate-12"></div>
            <div className="absolute top-1/2 right-1/5 w-16 h-px bg-gradient-to-r from-purple-400/50 to-transparent transform -rotate-12"></div>
            <div className="absolute bottom-1/3 left-1/2 w-24 h-px bg-gradient-to-r from-emerald-400/50 to-transparent transform rotate-6"></div>
          </div>

          {/* Floating Achievement Badges */}
          <div
            className="absolute top-20 right-8 bg-gradient-to-r from-[#FF934C]/20 to-orange-600/20 backdrop-blur-xl border border-[#FF934C]/30 rounded-2xl p-4 animate-float shadow-2xl shadow-[#FF934C]/20"
            style={{ animationDelay: "2s" }}
          >
            <div className="text-[#FF934C] text-sm font-bold">
              🏆 Excellence Award
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Industry Recognition
            </div>
          </div>

          <div
            className="absolute bottom-20 left-8 bg-gradient-to-r from-orange-500/20 to-amber-600/20 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-4 animate-float shadow-2xl shadow-orange-400/20"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-orange-600 text-sm font-bold">
              ⭐ 5-Star Rating
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Client Satisfaction
            </div>
          </div>

          <div
            className="absolute top-1/2 left-6 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-4 animate-float shadow-2xl shadow-amber-400/20"
            style={{ animationDelay: "6s" }}
          >
            <div className="text-amber-600 text-sm font-bold">
              🚀 Innovation Leader
            </div>
            <div className="text-gray-600 text-xs mt-1">Technology Pioneer</div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Futuristic Header */}
          <div className="text-center mb-24 animate-fade-in-scale">
            <div className="inline-flex items-center space-x-4 mb-8 px-12 py-6 bg-white/80 backdrop-blur-xl border border-[#FF934C]/20 rounded-3xl shadow-2xl">
              <div className="w-6 h-6 bg-gradient-to-r from-[#FF934C] to-orange-600 rounded-full animate-pulse shadow-lg shadow-[#FF934C]/50"></div>
              <span className="text-gray-800 font-black text-lg tracking-widest uppercase">
                Achievement
              </span>
              <div
                className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse shadow-lg shadow-amber-500/50"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 leading-tight tracking-tight">
                See our{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF934C] via-orange-600 to-amber-600 font-extrabold italic transform -skew-x-6 inline-block">
                    success
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF934C]/50 via-orange-600/50 to-amber-600/50 rounded-full"></div>
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide">
                in our{" "}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-[#FF934C] to-amber-600 relative italic transform -skew-x-3">
                  numbers
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600/50 via-[#FF934C]/50 to-amber-600/50 rounded-full"></div>
                </span>
                .
              </h3>
            </div>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We have come a long way in the last few years, building trust and
              delivering excellence across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-green-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Continuous Flying Lines with Small Squares */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Flying Lines */}
            <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent animate-fly-right"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute top-36 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-fly-left"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-52 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-200/40 to-transparent animate-fly-left"
              style={{ animationDelay: "1.8s" }}
            ></div>
            <div
              className="absolute bottom-36 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fly-right"
              style={{ animationDelay: "2.4s" }}
            ></div>
            <div
              className="absolute bottom-20 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200/35 to-transparent animate-fly-left"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Vertical Flying Lines */}
            <div
              className="absolute top-0 left-16 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent animate-fly-up"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute top-0 left-32 h-full w-px bg-gradient-to-b from-transparent via-green-200/40 to-transparent animate-fly-up"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-0 right-28 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-fly-down"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute top-0 right-44 h-full w-px bg-gradient-to-b from-transparent via-orange-200/35 to-transparent animate-fly-down"
              style={{ animationDelay: "2.2s" }}
            ></div>
            <div
              className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent animate-fly-up"
              style={{ animationDelay: "2.8s" }}
            ></div>

            {/* Flying Small Squares */}
            <div
              className="absolute top-12 left-24 w-1 h-1 bg-white/50 opacity-70 animate-fly-right"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute top-28 right-36 w-1 h-1 bg-orange-200 opacity-60 animate-fly-left"
              style={{ animationDelay: "1.1s" }}
            ></div>
            <div
              className="absolute top-44 left-48 w-1 h-1 bg-white/60 opacity-70 animate-fly-right"
              style={{ animationDelay: "1.9s" }}
            ></div>
            <div
              className="absolute bottom-32 right-28 w-1 h-1 bg-green-200 opacity-65 animate-fly-left"
              style={{ animationDelay: "2.7s" }}
            ></div>
            <div
              className="absolute top-60 left-20 w-1 h-1 bg-white/55 opacity-60 animate-fly-diagonal"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-28 right-52 w-1 h-1 bg-orange-200 opacity-70 animate-fly-diagonal"
              style={{ animationDelay: "2.3s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="text-white font-bold text-sm tracking-widest uppercase">
                TESTIMONIAL
              </div>
            </div>
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover-lift">
                <div className="w-full h-64 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-20 h-20 text-white/70" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JS</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg tracking-wide">
                      John Smith
                    </div>
                    <div className="text-white/70 font-light tracking-wider">
                      CEO, TechCorp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white animate-slide-in-right">
              <div className="text-8xl text-white/20 mb-6 font-serif">
                &ldquo;
              </div>
              <blockquote className="text-2xl mb-8 leading-relaxed font-light tracking-wide">
                &ldquo;Working with SCRIZA has been a game-changer for our
                business. Their team delivered exactly what we needed, on time
                and within budget. The quality of their work is exceptional and
                their support is outstanding.&rdquo;
              </blockquote>

              <div className="flex items-center space-x-6 mb-8">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-green-400/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Continuous Flying Lines with Small Squares */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Flying Lines */}
            <div className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-28 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-fly-right"
              style={{ animationDelay: "0.7s" }}
            ></div>
            <div
              className="absolute top-44 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-300/40 to-transparent animate-fly-left"
              style={{ animationDelay: "1.4s" }}
            ></div>
            <div
              className="absolute top-60 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/35 to-transparent animate-fly-left"
              style={{ animationDelay: "2.1s" }}
            ></div>
            <div
              className="absolute bottom-44 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent animate-fly-right"
              style={{ animationDelay: "2.8s" }}
            ></div>
            <div
              className="absolute bottom-28 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-fly-left"
              style={{ animationDelay: "3.5s" }}
            ></div>
            <div
              className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-fly-right"
              style={{ animationDelay: "4.2s" }}
            ></div>

            {/* Vertical Flying Lines */}
            <div
              className="absolute top-0 left-12 h-full w-px bg-gradient-to-b from-transparent via-orange-300/35 to-transparent animate-fly-up"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-0 left-28 h-full w-px bg-gradient-to-b from-transparent via-gray-300/30 to-transparent animate-fly-up"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-0 right-24 h-full w-px bg-gradient-to-b from-transparent via-green-300/40 to-transparent animate-fly-down"
              style={{ animationDelay: "1.9s" }}
            ></div>
            <div
              className="absolute top-0 right-40 h-full w-px bg-gradient-to-b from-transparent via-gray-400/30 to-transparent animate-fly-down"
              style={{ animationDelay: "2.6s" }}
            ></div>
            <div
              className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-orange-400/35 to-transparent animate-fly-up"
              style={{ animationDelay: "3.3s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-green-400/35 to-transparent animate-fly-down"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Flying Small Squares */}
            <div
              className="absolute top-16 left-32 w-1 h-1 bg-orange-400 opacity-50 animate-fly-right"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute top-32 right-40 w-1 h-1 bg-gray-500 opacity-40 animate-fly-left"
              style={{ animationDelay: "1.3s" }}
            ></div>
            <div
              className="absolute top-48 left-56 w-1 h-1 bg-green-400 opacity-55 animate-fly-right"
              style={{ animationDelay: "2.2s" }}
            ></div>
            <div
              className="absolute bottom-40 right-32 w-1 h-1 bg-orange-500 opacity-50 animate-fly-left"
              style={{ animationDelay: "3.1s" }}
            ></div>
            <div
              className="absolute top-64 left-24 w-1 h-1 bg-gray-400 opacity-45 animate-fly-diagonal"
              style={{ animationDelay: "1.7s" }}
            ></div>
            <div
              className="absolute bottom-32 right-48 w-1 h-1 bg-green-500 opacity-60 animate-fly-diagonal"
              style={{ animationDelay: "2.9s" }}
            ></div>
            <div
              className="absolute top-80 right-56 w-1 h-1 bg-orange-400 opacity-50 animate-fly-diagonal"
              style={{ animationDelay: "3.8s" }}
            ></div>
          </div>
        </div>

        <div
          id="blogs"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <LightBulbIcon className="w-10 h-10 text-orange-500 animate-bounce" />
              <h2 className="text-5xl font-black text-gray-900 tracking-tight">
                Latest blog posts
              </h2>
            </div>
            <p className="text-2xl text-gray-600 font-light tracking-wide">
              Stay updated with our insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs &&
              blogs?.map((post:BlogPosts, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover-lift animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`h-48 bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center relative overflow-hidden`}
                  >
                    <Image
                      src={`http://192.168.20.156:5000/${post?.featureImage}`}
                      alt={post?.title || "Blog image"}
                      width={400}
                      height={100}
                      className="rounded-xl object-cover"
                    />

                    <div className="absolute inset-0 shimmer"></div>
                  </div>
                  <div className="p-6 h-55">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-3 tracking-wider uppercase">
                      {post?.category?.name}
                    </div>
                    <h3 className="text-xl h-14  font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors tracking-wide">
                      {post?.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed font-light">
                      {post?.content.slice(0, 120)}...
                    </p>
                  </div>
                  <Link
                    href={`/blogDetails/${post.slug}`}
                    className="group/btn p-6 cursor-pointer flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors tracking-wide"
                  >
                    Read More
                    <ChevronRightIcon className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-orange-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Continuous Flying Lines with Small Squares */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal Flying Lines */}
            <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-fly-right"></div>
            <div
              className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fly-right"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute top-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-fly-left"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute top-48 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent animate-fly-left"
              style={{ animationDelay: "2.4s" }}
            ></div>
            <div
              className="absolute bottom-48 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/35 to-transparent animate-fly-right"
              style={{ animationDelay: "3.2s" }}
            ></div>
            <div
              className="absolute bottom-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/45 to-transparent animate-fly-left"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-fly-right"
              style={{ animationDelay: "4.8s" }}
            ></div>

            {/* Vertical Flying Lines */}
            <div
              className="absolute top-0 left-14 h-full w-px bg-gradient-to-b from-transparent via-orange-400/45 to-transparent animate-fly-up"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute top-0 left-30 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-fly-up"
              style={{ animationDelay: "1.4s" }}
            ></div>
            <div
              className="absolute top-0 right-26 h-full w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent animate-fly-down"
              style={{ animationDelay: "2.2s" }}
            ></div>
            <div
              className="absolute top-0 right-42 h-full w-px bg-gradient-to-b from-transparent via-orange-300/40 to-transparent animate-fly-down"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/35 to-transparent animate-fly-up"
              style={{ animationDelay: "3.8s" }}
            ></div>
            <div
              className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-green-500/45 to-transparent animate-fly-down"
              style={{ animationDelay: "4.6s" }}
            ></div>

            {/* Flying Small Squares */}
            <div
              className="absolute top-12 left-28 w-1 h-1 bg-orange-400 opacity-70 animate-fly-right"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-24 right-38 w-1 h-1 bg-white opacity-60 animate-fly-left"
              style={{ animationDelay: "1.3s" }}
            ></div>
            <div
              className="absolute top-40 left-52 w-1 h-1 bg-green-400 opacity-75 animate-fly-right"
              style={{ animationDelay: "2.1s" }}
            ></div>
            <div
              className="absolute bottom-44 right-30 w-1 h-1 bg-orange-500 opacity-65 animate-fly-left"
              style={{ animationDelay: "2.9s" }}
            ></div>
            <div
              className="absolute top-56 left-22 w-1 h-1 bg-white opacity-55 animate-fly-diagonal"
              style={{ animationDelay: "1.7s" }}
            ></div>
            <div
              className="absolute bottom-36 right-46 w-1 h-1 bg-green-500 opacity-70 animate-fly-diagonal"
              style={{ animationDelay: "2.5s" }}
            ></div>
            <div
              className="absolute top-68 right-58 w-1 h-1 bg-orange-400 opacity-65 animate-fly-diagonal"
              style={{ animationDelay: "3.3s" }}
            ></div>
            <div
              className="absolute bottom-24 left-44 w-1 h-1 bg-white opacity-60 animate-fly-diagonal"
              style={{ animationDelay: "4.1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <RocketLaunchIcon className="w-12 h-12 text-orange-400 animate-bounce" />
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">
              Don&apos;t wait another{" "}
              <span className="gradient-text">minute!</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Call us today to schedule a free consultation with one of our
              experts and transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-orange-400 hover:to-green-500 transition-all duration-300 hover-lift animate-glow tracking-wide">
                <Link href="/contact" className="flex items-center cursor-pointer">
                  Get Started Now
                  <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </button>

              <button className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover-lift backdrop-blur-sm tracking-wide">
              <Link href={`tel:${"9116011899"}`} className="flex items-center">
  Schedule Call
  <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
</Link>

              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />
    </div>
  );
}
