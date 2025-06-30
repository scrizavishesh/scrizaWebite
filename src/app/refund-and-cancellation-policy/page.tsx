import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Certifications from '../components/Certifications'

export const metadata = {
  title: 'Refund & Cancellation Policy - <strong> Scriza Private Limited</strong>',
  description: 'Refund & Cancellation Policy for <strong> Scriza Private Limited</strong>. Learn about our refund process and policies.',
}

export default function RefundCancellationPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Refund & Cancellation Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Refund & Cancellation Policy</h1>
          
          <div className="text-black leading-relaxed">
            <p className="mb-6 text-black">
              At <strong> Scriza Private Limited</strong>, we strive to provide the best possible experience for our valued customers. We understand that there may be instances where you need to request a refund for a product or service you have purchased from us. Please take a moment to review our refund policy outlined below:
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Eligibility for Refund</h2>
            <p className="mb-6 text-black">
              We offer refunds for eligible purchases within 7 to 10 days from the date of purchase. After this period, we may not be able to process your refund.
            </p>

            <p className="mb-6 text-black">
              To be eligible for a refund, the following conditions must be met:
            </p>

            <ul className="mb-6 text-black list-disc pl-6 space-y-2">
              <li>You must have a valid proof of purchase (receipt or order number).</li>
              <li>The product or service in question must be in its original condition.</li>
              <li>The product or service must not have been used, altered, or damaged in any way</li>
              <li>Digital products, software licenses, and downloadable items are generally non-refundable unless stated otherwise</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How to Request a Refund</h2>
            <p className="mb-6 text-black">
              If you believe you meet the eligibility criteria for a refund, please follow these steps to initiate the refund process:
            </p>

            <ul className="mb-6 text-black list-disc pl-6 space-y-2">
              <li>Contact our customer support team at <strong> sales@scriza.in</strong> or call us <strong> 9599287096</strong></li>
              <li>Provide your proof of purchase (receipt or order number) and a detailed explanation of why you are requesting a refund.</li>
              <li>Our customer support team will review your request and may request additional information if needed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Refund Approval</h2>
            <p className="mb-6 text-black">
              Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund.
            </p>

            <p className="mb-6 text-black">
              If your refund is approved, we will process the refund within 7–10 business days using the same payment method you used for the original purchase. It may take additional time for the refund to appear in your account, depending on your financial institution.
            </p>

            <p className="mb-6 text-black">
              If your refund is rejected, we will provide you with a clear explanation of the reasons for the rejection.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Exceptions</h2>
            <p className="mb-6 text-black">
              Certain products or services may have specific refund policies or conditions stated at the time of purchase. Please review these terms carefully before completing your purchase.
            </p>

            <p className="mb-6 text-black">
              Subscription-based services may have different refund policies. Please refer to the terms and conditions associated with your subscription for more information.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-6 text-black">
              If you have any questions or concerns about our refund policy, please feel free to contact our customer support team at <strong> sales@scriza.in</strong> or Phone <strong> 9599287096</strong>.
            </p>

            <p className="mb-6 text-black">
              We value your business and strive to ensure your satisfaction with our products and services. Thank you for choosing <strong> Scriza Private Limited</strong>.
            </p>
          </div>
        </div>
      </div>

      <Certifications />
      <Footer />
    </div>
  )
} 