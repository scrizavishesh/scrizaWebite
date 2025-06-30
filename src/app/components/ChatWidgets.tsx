export default function ChatWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4 animate-slide-in-up cursor-pointer">
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 shadow-lg  hover:scale-110 transition-transform animate-bounce">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-green-500 text-lg font-bold">💬</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-lg max-w-xs hover-lift">
        <div className="text-white">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="font-semibold text-sm">We&apos;re Online!</p>
          </div>
          <p className="text-xs opacity-90">How may I help you today?</p>
        </div>
      </div>
    </div>
  );
}
