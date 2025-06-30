import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  BuildingOfficeIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import Certifications from '../components/Certifications'
import ChatWidgets from '../components/ChatWidgets'
import Link from 'next/link'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with SCRIZA for your software development needs. We're here to help your business move forward."
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900/90 to-blue-900/90 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-space-grotesk">
              Have questions - <span className="gradient-text">Contact Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-teal-400/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Map Section */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover-lift">
                <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.3123456789!3d28.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLogix%20Park%2C%20Sector%2016%2C%20Noida!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-3xl"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-space-grotesk">Find Us Here</h3>
                      <p className="text-gray-600 text-sm">Ground Floor, Logix Park</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover-lift">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <ChatBubbleLeftRightIcon className="w-8 h-8 text-teal-600 animate-bounce" />
                    <h2 className="text-4xl font-bold text-gray-900 font-space-grotesk">
                      Let us help your business to move <span className="gradient-text">forward.</span>
                    </h2>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <UserIcon className="w-4 h-4 mr-2 text-teal-600" />
                        Name*
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="flex items-center text-gray-700 font-semibold mb-2">
                        <EnvelopeIcon className="w-4 h-4 mr-2 text-teal-600" />
                        Email*
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="flex items-center text-gray-700 font-semibold mb-2">
                      <DevicePhoneMobileIcon className="w-4 h-4 mr-2 text-teal-600" />
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="flex items-center text-gray-700 font-semibold mb-2">
                      <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2 text-teal-600" />
                      Your message Here
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:border-teal-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover-lift animate-glow"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Head Office */}
            <Link  href="https://www.google.com/maps/search/?api=1&query=A-4-5,+A+Block,+Sector+16,+Noida"
            target="_blank"
            rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover-lift animate-slide-in-up text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BuildingOfficeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">Head office</h3>
              <p className="text-gray-600 leading-relaxed">
                Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
              </p>
            </Link>
            
            {/* Email */}
            <Link href='https://mail.google.com/' className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover-lift animate-slide-in-up text-center" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <EnvelopeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">Email us</h3>
              <a href="mailto:sales@scriza.in" className="text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors">
                sales@scriza.in
              </a>
            </Link>
            
            {/* Call */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover-lift animate-slide-in-up text-center" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">Call us</h3>
              <p className="text-gray-600 mb-2">Sales:</p>
              <a href="tel:+919116011899" className="text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors">
                +91-9116011899
              </a>
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