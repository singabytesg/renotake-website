import Link from "next/link"
import { generateSEOMetadata } from "@/components/seo-metadata"
import { Shield, Mail, Lock, Eye, Database, UserCheck } from "lucide-react"

export const metadata = generateSEOMetadata({
  title: "Privacy Policy | RenoTake Singapore",
  description:
    "RenoTake's privacy policy explains how we collect, use, and protect your personal data in compliance with Singapore PDPA. Your data security is our priority.",
  keywords: ["privacy policy Singapore", "PDPA compliance", "data protection", "RenoTake privacy"],
  canonicalUrl: "https://renotake.sg/privacy",
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-10 w-10 text-green-600" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-SG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="mb-8 rounded-xl bg-green-50 p-6">
            <h2 className="mb-3 text-xl font-semibold">Our Commitment to Your Privacy</h2>
            <p className="text-gray-700">
              RenoTake is committed to protecting your personal data in accordance with Singapore's
              Personal Data Protection Act (PDPA). This privacy policy explains how we collect, use,
              disclose, and protect your information when you use our website and services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="mb-4 flex items-center gap-2">
                <Database className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="mb-2 font-semibold">Information You Provide</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      <strong>Email address</strong> when you subscribe to our newsletter or
                      download resources
                    </li>
                    <li>
                      <strong>Contact information</strong> when you submit inquiries through our
                      contact form
                    </li>
                    <li>
                      <strong>Feedback and survey responses</strong> when you choose to participate
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Information Automatically Collected</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      <strong>Usage data:</strong> Pages visited, time spent, click patterns
                    </li>
                    <li>
                      <strong>Device information:</strong> Browser type, operating system, device
                      type
                    </li>
                    <li>
                      <strong>IP address</strong> for analytics and security purposes
                    </li>
                    <li>
                      <strong>Cookies and similar technologies</strong> (see Cookies section below)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>We use your personal data for the following purposes:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Service Delivery:</strong> To provide you with renovation guides, tools,
                    and resources
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you newsletters, updates, and respond to
                    your inquiries
                  </li>
                  <li>
                    <strong>Improvement:</strong> To analyze usage patterns and improve our content
                    and services
                  </li>
                  <li>
                    <strong>Personalization:</strong> To customize your experience based on your
                    interests
                  </li>
                  <li>
                    <strong>Security:</strong> To protect against fraud, abuse, and security threats
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable laws and
                    regulations
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>We do not sell your personal data to third parties.</strong> We may share
                  your information only in the following circumstances:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party service providers
                    who help us operate our website (e.g., email services, analytics platforms)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or
                    government authority
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition,
                    or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly agree to share your
                    information
                  </li>
                </ul>
                <p className="mt-4 rounded-lg bg-yellow-50 p-4 text-sm">
                  <strong>Important:</strong> We never share your email with contractors or use your
                  data for lead generation. RenoTake is an educational platform, not a lead
                  generation service.
                </p>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Your Rights Under PDPA</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>Under Singapore's PDPA, you have the following rights:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Withdrawal:</strong> Withdraw consent for data collection and use at any
                    time
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data (subject to
                    legal requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request your data in a machine-readable format
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your data for specific
                    purposes
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@renotake.sg"
                    className="font-medium text-green-600 hover:underline"
                  >
                    privacy@renotake.sg
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Cookies and Tracking Technologies</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We use cookies and similar technologies to improve your experience on our website:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                    (Google Analytics)
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Note that disabling cookies
                  may affect website functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal data:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers with restricted access</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Data minimization practices</li>
                </ul>
                <p className="mt-4 text-sm">
                  While we strive to protect your data, no method of transmission over the internet
                  is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
              <div className="text-gray-700">
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes
                  outlined in this policy:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-1">
                  <li>
                    <strong>Newsletter subscriptions:</strong> Until you unsubscribe
                  </li>
                  <li>
                    <strong>Contact inquiries:</strong> Up to 2 years for customer service purposes
                  </li>
                  <li>
                    <strong>Analytics data:</strong> Anonymized after 26 months (Google Analytics
                    default)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Third-Party Links</h2>
              <div className="text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices of these external sites. We encourage you to read their
                  privacy policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Children's Privacy</h2>
              <div className="text-gray-700">
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not
                  knowingly collect personal data from children. If you believe we have
                  inadvertently collected such data, please contact us immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Changes to This Policy</h2>
              <div className="text-gray-700">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our
                  practices or legal requirements. We will notify you of significant changes by
                  posting a notice on our website or sending an email to registered users.
                </p>
                <p className="mt-3">
                  The "Last updated" date at the top of this page indicates when this policy was
                  last revised.
                </p>
              </div>
            </section>

            <section className="rounded-xl bg-gray-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  If you have questions about this privacy policy or wish to exercise your rights
                  under PDPA, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@renotake.sg" className="text-green-600 hover:underline">
                      privacy@renotake.sg
                    </a>
                  </p>
                  <p>
                    <strong>General Inquiries:</strong>{" "}
                    <Link href="/contact" className="text-green-600 hover:underline">
                      Contact Form
                    </Link>
                  </p>
                  <p>
                    <strong>Data Protection Officer:</strong> dpo@renotake.sg
                  </p>
                </div>
                <p className="mt-4 text-sm">
                  We will respond to your inquiry within 30 days as required by PDPA.
                </p>
              </div>
            </section>

            <section className="border-t pt-6 text-center text-sm text-gray-600">
              <p>
                RenoTake is operated from Singapore and complies with Singapore's Personal Data
                Protection Act 2012 (PDPA).
              </p>
              <p className="mt-2">
                <Link href="/" className="text-green-600 hover:underline">
                  Back to Home
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB
              or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
