import { 
  CheckIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  HeartIcon, 
  SparklesIcon, 
  TrophyIcon,
  RocketLaunchIcon,
  BoltIcon,
  EyeIcon,
  TagIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import Certifications from '../components/Certifications'
import ChatWidgets from '../components/ChatWidgets'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We at Scriza are experts in software development, starting from scratch and building it from the ground up. We understand that not all projects are the same.',
  openGraph: {
    title: 'About SCRIZA - We Core Your Future',
    description: 'We build software that works like the world around you. Expert software development from scratch.',
    url: '/about',
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          
          <div className="text-center animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <RocketLaunchIcon className="w-12 h-12 text-teal-400 animate-bounce" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 font-space-grotesk leading-tight">
              We Core Your <span className="gradient-text">Future</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300 mb-12 font-medium">
              We build software that works like the world around you.
            </h2>
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                We at Scriza are experts in software development, starting from scratch and building it from the ground up. 
                We understand that not all projects are the same, and that&apos;s why we take the time to get to know you and your project before we begin.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We&apos;ve seen it all—horror stories about projects that went south because of poor communication, inadequate planning, 
                or simply not enough time. That&apos;s why we&apos;re here: to make sure that doesn&apos;t happen to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-teal-400/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <TagIcon className="w-10 h-10 text-teal-600 animate-bounce" />
                <span className="text-teal-600 font-bold text-sm tracking-wide uppercase font-space-grotesk">OUR MISSION</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 font-space-grotesk leading-tight">
                Creating <span className="gradient-text">Great Software</span> for Impact
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our mission at Scriza is to create great software that helps people to do better and faster with impact.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BoltIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Faster Solutions</p>
                  <p className="text-gray-600 text-sm">With maximum impact</p>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift">
                <div className="w-full h-96 rounded-2xl overflow-hidden relative bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center animate-float">
                      <LightBulbIcon className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">Mission & Innovation</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-400 rounded-3xl opacity-80 animate-float blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-80 animate-float blur-sm" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift">
                <div className="w-full h-96 rounded-2xl overflow-hidden relative bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float">
                      <EyeIcon className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">Vision & Future</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-80 animate-float blur-sm"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl opacity-80 animate-float blur-sm" style={{animationDelay: '2s'}}></div>
            </div>
            <div className="animate-slide-in-right">
              <div className="flex items-center space-x-3 mb-6">
                <EyeIcon className="w-10 h-10 text-purple-600 animate-bounce" />
                <span className="text-purple-600 font-bold text-sm tracking-wide uppercase font-space-grotesk">OUR VISION</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 font-space-grotesk leading-tight">
                Every Business Has <span className="gradient-text">Potential</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Scriza Software, we believe that every business has the potential to be successful. 
                Our vision is to help you make it happen with software that transforms your operations and accelerates growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Transform & Scale</p>
                    <p className="text-gray-600 text-sm">Unlock your business potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <h2 className="text-5xl font-bold text-gray-900 font-space-grotesk">Our Values</h2>
            </div>
            <p className="text-2xl text-gray-600 font-medium">Our values define who we are and guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UserGroupIcon, title: "Collaboration", desc: "We believe in the power of purposeful collaboration.", gradient: "from-teal-500 to-blue-500", delay: "0s" },
              { icon: SparklesIcon, title: "Embracing Uniqueness", desc: "We believe in the importance of being different.", gradient: "from-blue-500 to-purple-500", delay: "0.2s" },
              { icon: LightBulbIcon, title: "Growth Mindset", desc: "We believe in being open to change and growth—and knowing that those things are not always easy or fun.", gradient: "from-green-500 to-teal-500", delay: "0.4s" },
              { icon: TrophyIcon, title: "We Challenge Our Potential", desc: "We're not afraid to try new things because that's how you grow as a company—and as individuals!", gradient: "from-purple-500 to-pink-500", delay: "0.6s" },
              { icon: HeartIcon, title: "Customer Centricity", desc: "And lastly… we believe in YOU!", gradient: "from-red-500 to-orange-500", delay: "0.8s" }
            ].map((value, index) => (
              <div key={index} className={`group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-up text-center ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`} style={{animationDelay: value.delay}}>
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Scriza Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <TrophyIcon className="w-10 h-10 text-teal-600 animate-bounce" />
              <h2 className="text-5xl font-bold text-gray-900 font-space-grotesk">Why Choose Scriza?</h2>
            </div>
            <p className="text-2xl text-gray-600 mb-8 font-medium">We&apos;re not just a software company. We&apos;re the solution to your problem.</p>
            <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                We know you have a lot of options when it comes to choosing a software development company. 
                That&apos;s why we&apos;re excited to share the six reasons why Scriza is your best option:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "We're committed to providing the highest quality products and services possible",
              "We use agile development methods to make sure our clients' needs come first",
              "We pride ourselves on being flexible, so you can rely on us to roll with the punches (and keep rolling)",
              "Our team works hard to ensure that every member of your team is well-versed in the project and invested in its success",
              "We're focused on delivering results—so you won't have to worry about whether or not we'll get things done",
              "You won't want to leave once it's done: We treat every client like family, so there's no doubt that we'll be working with each other again in the future!"
            ].map((reason, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <RocketLaunchIcon className="w-12 h-12 text-teal-400 animate-bounce" />
            </div>
            <h2 className="text-6xl font-bold mb-6 font-space-grotesk">
              Don&apos;t wait another <span className="gradient-text">minute!</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Call us today to schedule a free consultation with one of our experts and let&apos;s core your future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href='/contact' className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-teal-500 hover:to-blue-500 transition-all duration-300 hover-lift animate-glow">
                <span  className="flex items-center">
                  Get Started Now
                  <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href='/' className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover-lift backdrop-blur-sm">
                <span  className="flex items-center">
                  Learn More
                  <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />

      {/* Enhanced Chat Widgets */}
      <ChatWidgets />
    </div>
  )
} 