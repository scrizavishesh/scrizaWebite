import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Certifications from "../components/Certifications";

export const metadata = {
  title: "Terms and Conditions - Scriza Private Limited",
  description:
    "Terms and Conditions for Scriza Private Limited. Please read these terms carefully before using our website and services.",
};

export default function TermsConditions() {
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
            <span className="text-gray-900 font-medium">
              Terms and Conditions
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Terms and Conditions
          </h1>

          <div className="text-black leading-relaxed">
            <p className="mb-6 text-black">
              Your website may use the Terms and Conditions given below.
            </p>

            <p className="mb-6 text-black">
              The terms &quot;We&quot; , &quot;Us&quot; ,
              &quot;Our&quot; and &quot;Company&quot; individually and collectively
              refer to Scriza Private Limited and the terms &quot;Visitor&quot;
              &quot;User&quot; refer to the users.
            </p>

            <p className="mb-6 text-black">
              This page states the Terms and Conditions under which you
              (Visitor) may visit this website (&quot;Website&quot;). Please
              read this page carefully. If you do not accept the Terms and
              Conditions stated here, we would request you to exit this site.
              The business, any of its business divisions and / or its
              subsidiaries, associate companies or subsidiaries to subsidiaries
              or such other investment companies (in India or abroad) reserve
              their respective rights to revise these Terms and Conditions at
              any time by updating this posting. You should visit this page
              periodically to re-appraise yourself of the Terms and Conditions,
              because they are binding on all users of this Website.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Use Of Content
            </h2>
            <p className="mb-6 text-black">
              All logos, brands, marks headings, labels, names, signatures,
              numerals, shapes or any combinations thereof, appearing in this
              site, except as otherwise noted, are properties either owned, or
              used under licence, by the business and / or its associate
              entities who feature on this Website. The use of these properties
              or any other content on this site, except as provided in these
              terms and conditions or in the site content, is strictly
              prohibited.
            </p>

            <p className="mb-6 text-black">
              You may not sell or modify the content of this Website or
              reproduce, display, publicly perform, distribute, or otherwise use
              the materials in any way for any public or commercial purpose
              without the respective organisation&apos;s or entity&apos;s
              written permission.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Acceptable Website Use
            </h2>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">
              (A) Security Rules
            </h3>
            <p className="mb-6 text-black">
              Visitors are prohibited from violating or attempting to violate
              the security of the Web site, including, without limitation, <br /> <br /> (1)
              accessing data not intended for such user or logging into a server
              or account which the user is not authorised to access, <br /> <br /> (2)
              attempting to probe, scan or test the vulnerability of a system or
              network or to breach security or authentication measures without
              proper authorisation, <br /> <br /> (3) attempting to interfere with service to
              any user, host or network, including, without limitation, via
              means of submitting a virus or &quot;Trojan horse&quot; to the
              Website, overloading, &quot;flooding&quot;, &quot;mail
              bombing&quot; or &quot;crashing&quot; <br /><br /> (4) sending unsolicited
              electronic mail, including promotions and/or advertising of
              products or services. Violations of system or network security may
              result in civil or criminal liability. The business and / or its
              associate entities will have the right to investigate occurrences
              that they suspect as involving such violations and will have the
              right to involve, and cooperate with, law enforcement authorities
              in prosecuting users who are involved in such violations.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">
              (B) General Rules
            </h3>
            <p className="mb-6 text-black">
              Visitors may not use the Web Site in order to transmit,
              distribute, store or destroy material <br /> <br /> (a) that could constitute or
              encourage conduct that would be considered a criminal offence or
              violate any applicable law or regulation, <br /> <br /> (b) in a manner that
              will infringe the copyright, trademark, trade secret or other
              intellectual property rights of others or violate the privacy or
              publicity of other personal rights of others, or <br /> <br /> (c) that is
              libellous, defamatory, pornographic, profane, obscene,
              threatening, abusive or hateful.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Indemnity
            </h2>
            <p className="mb-6 text-black">
              The User unilaterally agree to indemnify and hold harmless,
              without objection, the Company, its officers, directors, employees
              and agents from and against any claims, actions and/or demands
              and/or liabilities and/or losses and/or damages whatsoever arising
              from or resulting from their use of www.scriza.in or their breach
              of the terms .
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Liability
            </h2>
            <p className="mb-6 text-black">
              User agrees that neither Company nor its group companies,
              directors, officers or employee shall be liable for any direct
              or/and indirect or/and incidental or/and special or/and
              consequential or/and exemplary damages, resulting from the use
              or/and the inability to use the service or/and for cost of
              procurement of substitute goods or/and services or resulting from
              any goods or/and data or/and information or/and services purchased
              or/and obtained or/and messages received or/and transactions
              entered into through or/and from the service or/and resulting from
              unauthorized access to or/and alteration of user&apos;s
              transmissions or/and data or/and arising from any other matter
              relating to the service, including but not limited to, damages for
              loss of profits or/and use or/and data or other intangible, even
              if Company has been advised of the possibility of such damages.
            </p>

            <p className="mb-6 text-black">
              User further agrees that Company shall not be liable for any
              damages arising from interruption, suspension or termination of
              service, including but not limited to direct or/and indirect
              or/and incidental or/and special consequential or/and exemplary
              damages, whether such interruption or/and suspension or/and
              termination was justified or not, negligent or intentional,
              inadvertent or advertent.
            </p>

            <p className="mb-6 text-black">
              User agrees that Company shall not be responsible or liable to
              user, or anyone, for the statements or conduct of any third party
              of the service. In sum, in no event shall Company&apos;s total
              liability to the User for all damages or/and losses or/and causes
              of action exceed the amount paid by the User to Company, if any,
              that is related to the cause of action.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">
              Disclaimer Of Consequential Damages
            </h2>
            <p className="mb-6 text-black">
              In no event shall Company or any parties, organisations or
              entities associated with the corporate brand name us or otherwise,
              mentioned at this Website be liable for any damages whatsoever
              (including, without limitations, incidental and consequential
              damages, lost profits, or damage to computer hardware or loss of
              data information or business interruption) resulting from the use
              or inability to use the Website and the Website material, whether
              based on warranty, contract, tort, or any other legal theory, and
              whether or not, such organisation or entities were advised of the
              possibility of such damages.
            </p>
          </div>
        </div>
      </div>

      <Certifications />
      <Footer />
    </div>
  );
}
