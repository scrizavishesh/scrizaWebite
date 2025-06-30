import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Certifications from "../components/Certifications";

export const metadata = {
  title: "Privacy Policy - Scriza Private Limited",
  description:
    "Privacy Policy for Scriza Private Limited. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="text-black leading-relaxed">
            <p className="mb-6 text-black">
              The terms &quot;We&quot; , &quot;Us&quot; , &quot;Our&quot; and
              &quot;Company&quot; individually and collectively refer to Scriza
              Private Limited and the terms &quot;You&quot; ,&quot;Your&quot;
              and &quot;Yourself&quot; refer to the users. This Privacy Policy
              is an electronic record in the form of an electronic contract
              formed under the information Technology Act, 2000 and the rules
              made thereunder and the amended provisions pertaining to
              electronic documents / records in various statutes as amended by
              the information Technology Act,2000. This Privacy Policy does not
              require any physical, electronic or digital signature.
            </p>

            <p className="mb-6 text-black">
              This Privacy Policy is a legally binding document between you and
              the Company (both the terms defined above). The terms of this
              Privacy Policy will be effective upon your acceptance of the same
              (directly or indirectly in electronic form, by clicking on the I
              accept tab or by use of the website or by other means) and will
              govern the relationship between you and the Company for your use
              of the website &quot;<strong>www.scriza.in</strong>&quot;
              (referred to as &quot;website&quot; or &quot;site&quot; in this
              document)
            </p>

            <p className="mb-6 text-black">
              This document is published and shall be construed in accordance
              with the provisions of the Information Technology (reasonable
              security practices and procedures and sensitive personal data of
              information) rules, 2011 under Information Technology Act, 2000;
              that require publishing of the Privacy Policy for collection, use,
              storage and transfer of sensitive personal data or information.
            </p>

            <p className="mb-6 text-black">
              Please read this Privacy Policy carefully by using the Website,
              you indicate that you understand, agree and consent to this
              Privacy Policy. If you do not agree with the terms of this Privacy
              Policy, please do not use this Website.
            </p>

            <p className="mb-6 text-black">
              By providing us your Information or by making use of the
              facilities provided by the Website, You hereby consent to the
              collection, storage, processing and transfer of any or all of Your
              Personal Information and Non-Personal Information by us as
              specified under this Privacy Policy. You further agree that such
              collection, use, storage and transfer of Your Information shall
              not cause any loss or wrongful gain to you or any other person.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              User Information
            </h2>
            <p className="mb-6 text-black">
              To avail certain services on our Websites, users are required to
              provide certain information for the registration process namely:
              <br />
              <br /> a) your name, <br /> b) email address, <br /> c) sex,{" "}
              <br /> d) age, <br /> e) PIN code, <br /> f) credit card or debit
              card details <br /> g) medical records and history <br /> h)
              sexual orientation, <br /> i) biometric information, <br /> j)
              password etc., <br /> and / or your occupation, interests, and the
              like. The Information as supplied by the users enables us to
              improve our sites and provide you the most user-friendly
              experience.
            </p>

            <p className="mb-6 text-black">
              All required information is service dependent and we may use the
              above said user information to, maintain, protect, and improve its
              services (including advertising services) and for developing new
              services
            </p>

            <p className="mb-6 text-black">
              Such information will not be considered as sensitive if it is
              freely available and accessible in the public domain or is
              furnished under the Right to Information Act, 2005 or any other
              law for the time being in force.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Cookies</h2>
            <p className="mb-6 text-black">
              To improve the responsiveness of the sites for our users, we may
              use &quot;cookies&quot;, or similar electronic tools to collect
              information to assign each visitor a unique, random number as a
              User Identification (User ID) to understand the user&apos;s
              individual interests using the Identified Computer. Unless you
              voluntarily identify yourself (through registration, for example),
              we will have no way of knowing who you are, even if we assign a
              cookie to your computer. The only personal information a cookie
              can contain is information you supply (an example of this is when
              you ask for our Personalised Horoscope). A cookie cannot read data
              off your hard drive. Our advertisers may also assign their own
              cookies to your browser (if you click on their ads), a process
              that we do not control.
            </p>

            <p className="mb-6 text-black">
              Our web servers automatically collect limited information about
              your computer&apos;s connection to the Internet, including your IP
              address, when you visit our site. (Your IP address is a number
              that lets computers attached to the Internet know where to send
              you data -- such as the web pages you view.) Your IP address does
              not identify you personally. We use this information to deliver
              our web pages to you upon request, to tailor our site to the
              interests of our users, to measure traffic within our site and let
              advertisers know the geographic locations from where our visitors
              come.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Links to the Other Sites
            </h2>
            <p className="mb-6 text-black">
              Our policy discloses the privacy practices for our own web site
              only. Our site provides links to other websites also that are
              beyond our control. We shall in no way be responsible in way for
              your use of such sites.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Indemnity
            </h2>
            <p className="mb-6 text-black">
              The User unilaterally agree to indemnify and hold harmless,
              without objection, the Company, its officers, directors, employees
              and agents from and against any claims, actions and/or demands
              and/or liabilities and/or losses and/or damages whatsoever arising
              from or resulting from their use of <strong>www.scriza.in</strong>{" "}
              or their breach of the terms .
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="mb-6 text-black">
              We share the sensitive personal information to any third party
              without obtaining the prior consent of the user in the following
              limited circumstances:
            </p>

            <p className="mb-6 text-black">
              (a) When it is requested or required by law or by any court or
              governmental agency or authority to disclose, for the purpose of
              verification of identity, or for the prevention, detection,
              investigation including cyber incidents, or for prosecution and
              punishment of offences. These disclosures are made in good faith
              and belief that such disclosure is reasonably necessary for
              enforcing these Terms; for complying with the applicable laws and
              regulations.
            </p>

            <p className="mb-6 text-black">
              (b) We propose to share such information within its group
              companies and officers and employees of such group companies for
              the purpose of processing personal information on its behalf. We
              also ensure that these recipients of such information agree to
              process such information based on our instructions and in
              compliance with this Privacy Policy and any other appropriate
              confidentiality and security measures.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Information Security
            </h2>
            <p className="mb-6 text-black">
              We take appropriate security measures to protect against
              unauthorized access to or unauthorized alteration, disclosure or
              destruction of data. These include internal reviews of our data
              collection, storage and processing practices and security
              measures, including appropriate encryption and physical security
              measures to guard against unauthorized access to systems where we
              store personal data.
            </p>

            <p className="mb-6 text-black">
              All information gathered on our Website is securely stored within
              our controlled database. The database is stored on servers secured
              behind a firewall; access to the servers is password-protected and
              is strictly limited. However, as effective as our security
              measures are, no security system is impenetrable. We cannot
              guarantee the security of our database, nor can we guarantee that
              information you supply will not be intercepted while being
              transmitted to us over the Internet. And, of course, any
              information you include in a posting to the discussion areas is
              available to anyone with Internet access.
            </p>

            <p className="mb-6 text-black">
              However the internet is an ever evolving medium. We may change our
              Privacy Policy from time to time to incorporate necessary future
              changes. Of course, our use of any information we gather will
              always be consistent with the policy under which the information
              was collected, regardless of what the new policy may be.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Grievance Redressal
            </h2>
            <p className="mb-6 text-black">
              Redressal Mechanism: Any complaints, abuse or concerns with
              regards to content and or comment or breach of these terms shall
              be immediately informed to the designated Grievance Officer as
              mentioned below via in writing or through email signed with the
              electronic signature (&quot;Grievance Officer&quot;).
            </p>

            <p className="mb-6 text-black">
              <b>(Grievance Officer)</b>
              <br />
              <strong> www.scriza.in</strong>
              <br />
              <strong> Scriza Private Limited</strong>
              <br />
              <strong> Office:</strong>{" "}
              <strong>A-125, Sector 16A, Noida, Uttar Pradesh, India</strong>
              <br />
              <strong> Email:</strong> <strong>info@scriza.in</strong>
            </p>
          </div>
        </div>
      </div>

      <Certifications />
      <Footer />
    </div>
  );
}
