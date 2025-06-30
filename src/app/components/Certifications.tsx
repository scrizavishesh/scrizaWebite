import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* First Certification */}
            <div className="text-center animate-slide-in-up">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20 hover-lift">
                <div className="text-center">
                  <div className="text-white text-xs font-bold mb-1">CERTIFIED</div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white text-xs font-bold">ISO</div>
                  <div className="text-white text-xs">9001:2015</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Certification Number</h3>
              <p className="text-teal-400 font-semibold text-lg">QMS220756</p>
            </div>

            {/* Trust Seal */}
            <div className="text-center animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center border-4 border-white/20 hover-lift">
                <div className="text-center text-white">
                  <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xs font-bold">TRUST</div>
                  <div className="text-xs font-bold">SEAL</div>
                  <div className="text-xs mt-1 bg-white/20 px-2 py-1 rounded">indiamart</div>
                </div>
              </div>
            </div>

            {/* Second Certification */}
            <div className="text-center animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20 hover-lift">
                <div className="text-center">
                  <div className="text-white text-xs font-bold mb-1">CERTIFIED</div>
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <LockClosedIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white text-xs font-bold">ISO</div>
                  <div className="text-white text-xs">27001:2013</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Certification Number</h3>
              <p className="text-teal-400 font-semibold text-lg">ISMS220754</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 