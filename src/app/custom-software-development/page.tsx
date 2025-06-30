import { 
  CodeBracketIcon, 
  ShieldCheckIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  CloudIcon,
  CogIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  CheckCircleIcon,
  PhoneIcon,
  SparklesIcon,
  BoltIcon,
  TrophyIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Certifications from '../components/Certifications'
import ChatWidgets from '../components/ChatWidgets'
import Link from 'next/link'

export default function CustomSoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <span className="text-teal-600">Custom software development solutions</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 overflow-hidden py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-6">
                <SparklesIcon className="w-6 h-6 text-teal-600 animate-bounce" />
                <p className="text-teal-600 font-semibold text-sm tracking-wide uppercase font-space-grotesk">
                  CUSTOM SOFTWARE DEVELOPMENT SOLUTIONS
                </p>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 font-space-grotesk">
                <span className="gradient-text">Custom Software Development</span><br />
                <span className="text-gray-900">for 50% higher revenue growth</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                <strong>Workflow efficiency, productivity, customer satisfaction and whatnot!</strong>
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The custom software development services by Scriza can boost your business to the next level of efficiency.
                Invest in our bespoke software and tailor-made technology solutions. These are designed to fulfil the unique requirements of your business.
              </p>
              
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 border border-teal-100">
                <p className="text-gray-700 leading-relaxed italic">
                  Scriza is a bespoke solution provider that drives results. So get in touch with our technology experts and enjoy 50% higher revenue from now onwards.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href='/contact' className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover-lift animate-glow">
                  <span className="flex items-center">
                    Contact Us
                    <PhoneIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href='/about' className="group border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover-lift">
                  <span className="flex items-center">
                    About
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl hover-lift">
                  <div className="w-full h-96 rounded-2xl overflow-hidden relative bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                    <CodeBracketIcon className="w-32 h-32 text-teal-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-lg animate-bounce">
                    <div className="flex items-center space-x-2">
                      <TrophyIcon className="w-5 h-5" />
                      <span className="font-semibold">50% Growth</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-80 animate-float blur-sm"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl opacity-80 animate-float blur-sm" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Custom Application Development Makes Business Efficient */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-6">
                <BoltIcon className="w-8 h-8 text-teal-600 animate-bounce" />
                <h2 className="text-4xl font-bold text-gray-900 font-space-grotesk">
                  How do custom application development services make your business 50% more efficient?
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every business has unique software needs. Off-the-shelf solutions often fall short in completing such specific requirements. 
                Our custom software development ensures that every feature is designed to fit your business processes.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: CheckCircleIcon, title: "100% Customization", desc: "Get software that works exactly the way you want." },
                  { icon: ArrowTrendingUpIcon, title: "Scalability", desc: "Software solutions that can expand to match your business growth." },
                  { icon: CogIcon, title: "Flexibility", desc: "Ready to roll software features with changing business needs." },
                  { icon: RocketLaunchIcon, title: "Automate Processes", desc: "Reduce manual work by automating routine tasks." },
                  { icon: ChartBarIcon, title: "Improve Workflow", desc: "Enhanced coordination and workflow management." },
                  { icon: CloudIcon, title: "Real-time Info Access", desc: "Get real-time data analysis for your business operations." }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-space-grotesk">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover-lift">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
                    <CpuChipIcon className="w-24 h-24 text-teal-600" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover-lift">
                  <div className="w-full h-80 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center">
                    <ShieldCheckIcon className="w-24 h-24 text-teal-600" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-80 animate-float"></div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="flex items-center space-x-2 mb-6">
                <StarIcon className="w-8 h-8 text-teal-600 animate-bounce" />
                <span className="text-teal-600 font-bold text-sm tracking-wide uppercase font-space-grotesk">SECURITY</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-space-grotesk">
                #1 Custom Software Company offering <span className="gradient-text">Enhanced Security</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Protect your business data with custom software solutions that offer enhanced security features. 
                Our custom software company ensures your data is secure from breaches and unauthorized access.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: LockClosedIcon, title: "Data Encryption", desc: "Keep sensitive information secure." },
                  { icon: UserGroupIcon, title: "Access Control", desc: "Restrict access to critical data." },
                  { icon: ShieldCheckIcon, title: "Regular Updates", desc: "Keep customer data safe with security features." }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-space-grotesk">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-space-grotesk">Cost-Effective Custom business software</h3>
                <p className="text-gray-700 mb-4">
                  Investing in custom software seem costly upfront to small sized business. Though your investment pays off in the long run. 
                  Our custom software development services are designed to provide maximum return on investment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span><strong>Reduce Operational Costs:</strong> Streamline processes to save money.</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span><strong>Increase Revenue:</strong> Improved efficiency leads to better business performance.</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-teal-600 mr-2" />
                    <span><strong>Long-Term Savings:</strong> Fewer issues and updates compared to off-the-shelf software.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialization Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Our specialization: <span className="gradient-text">Custom Software Development Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We create custom software for businesses that aligns with your specific goals. 
              Our solutions are crafted to improve your business processes and bring in growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-up">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">ERP Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We have successfully implemented ERP systems in the retail, manufacturing, healthcare and finance sector. 
                We provided bespoke software with features for handling sales, production, inventory and supply chain.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">CRM Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Our custom CRM systems are packed with features that make them way better than the off-the-shelf options. 
                Features include advanced customer segmentation, automated follow-ups, customizable dashboards, and seamless integration.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">Supply Chain Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Our custom software for supply chain management has been a game-changer for various industries. 
                Enhanced inventory management, supplier coordination, parts procurement, and compliance solutions.
              </p>
            </div>
          </div>

          {/* Custom Development Services */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 font-space-grotesk">Custom Development Services</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-teal-600" />
                    <span className="text-lg font-semibold text-gray-800">Mobile Apps: iOS, Android, and cross-platform solutions.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-teal-600" />
                    <span className="text-lg font-semibold text-gray-800">Web Applications: Custom web apps for various business functions.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-teal-600" />
                    <span className="text-lg font-semibold text-gray-800">Desktop Applications: Reliable and high performing desktop software.</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We sit down with to chat about your needs. We then whip up custom software that perfectly suits your business. 
                  Our team handles everything from the initial brainstorming to the final rollout. And the best part? We are always here for software support.
                </p>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <RocketLaunchIcon className="w-20 h-20 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Best Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <h2 className="text-5xl font-bold mb-6 font-space-grotesk">
              What makes us the best custom development company?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-slide-in-up">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">Expertise and Experience</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Proven Track Record: Over 100 positive customisation projects.</li>
                <li>• Industry Experts: Skilled developers with domain expertise.</li>
                <li>• Customer Satisfaction: High customer satisfaction rate.</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">Next-gen Solutions</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Modern Technologies: AI, Machine Learning, Blockchain and more.</li>
                <li>• Creative Approaches: Unique solutions to complex problems.</li>
                <li>• Future-Ready Solutions: Scalable and adaptable software.</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">Customer-Centric Approach</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Custom Solutions: We create services specifically designed for your business.</li>
                <li>• Clear Communication: Enjoy weekly project updates throughout the process.</li>
                <li>• Post-Deployment Support: Ongoing support to ensure smooth operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-space-grotesk">
                Result driven custom software for your business
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Custom software development can reduce manual errors, and you can increase profitability with automation features. 
                Here are some key benefits:
              </p>

              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-semibold text-lg flex items-center">
                      <ArrowTrendingUpIcon className="w-5 h-5 mr-2 text-teal-600" />
                      50% Increase in Productivity
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">Custom software streamlines operations, leading to significant productivity gains.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-semibold text-lg flex items-center">
                      <ChartBarIcon className="w-5 h-5 mr-2 text-teal-600" />
                      30% Reduction in Costs
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">Automating tasks can help you cut down business process costs.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse" style={{width: '30%'}}></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-semibold text-lg flex items-center">
                      <StarIcon className="w-5 h-5 mr-2 text-teal-600" />
                      40% Improvement in Customer Satisfaction
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">Better customer service with personalized solutions.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white hover-lift shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 font-space-grotesk">Begin with the best custom software developer today!</h3>
                  <p className="text-white/90 leading-relaxed">
                    Thousands of businesses in your industry are getting help from the best custom software development companies to the next level? 
                    What is ceasing you from growing your productivity levels by 50%?
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-6">
                  <div className="w-full h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                    <RocketLaunchIcon className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                <p className="text-white/90 text-center">
                  Contact us today to get into your custom software development needs. Our team is here to create software that drives success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-scale">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">What do we offer?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              So far, we have successfully delivered over 750 software development projects and helped big and small enterprises achieve their business targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CogIcon, title: "Bespoke solutions", desc: "We deliver tailor-made solutions best suited to your business requirements.", gradient: "from-teal-400 to-blue-500" },
              { icon: UserGroupIcon, title: "Experienced Developers", desc: "Our skilled team has worked for 500+ from various industries.", gradient: "from-blue-400 to-purple-500" },
              { icon: CpuChipIcon, title: "High-end tools", desc: "We use a broad range of high-end software development", gradient: "from-purple-400 to-pink-500" },
              { icon: RocketLaunchIcon, title: "Well-timed delivery", desc: "Our motivated team gives their best to launch the product within the agreed timeline.", gradient: "from-green-400 to-teal-500" },
              { icon: DocumentCheckIcon, title: "Affordable packages", desc: "We can adapt to what you expect and keep the price range budget and friendly.", gradient: "from-orange-400 to-red-500" },
              { icon: ShieldCheckIcon, title: "Constant tech support", desc: "We never stop working; constant maintenance and post-release support are assured.", gradient: "from-cyan-400 to-blue-500" }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover-lift animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`h-32 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 shimmer"></div>
                  <service.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-space-grotesk">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
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
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <h2 className="text-5xl font-bold mb-6 font-space-grotesk">Contact now</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Scriza boasts a passionate team of individuals who have access to the most powerful development technology. 
              Leverage our proficiency and get bespoke software development solutions suitable for your business requirements. 
              Schedule a discovery call right now!
            </p>
            
            <button className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-teal-500 hover:to-blue-500 transition-all duration-300 hover-lift animate-glow">
              <Link href='/contact' className="flex items-center">
                Get Started
                <RocketLaunchIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      <Footer />
      
      {/* Enhanced Chat Widgets */}
      <ChatWidgets />
    </div>
  );
} 