import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - BIAS Writer',
  description: 'Terms of Service for BIAS Writer',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            BIAS Writer
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/support" className="text-gray-600 hover:text-gray-900">
              Support
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last Updated: November 28, 2024</p>
        
        <div className="prose prose-gray max-w-none">
          <p className="lead">
            These Terms of Service ("Terms") govern your use of BIAS Writer, operated by 
            BIAS LLC ("we," "us," or "our"). By using BIAS Writer, you agree to these Terms.
          </p>

          <h2>1. The Service</h2>
          <p>
            BIAS Writer is a writing application that helps you create, organize, and export 
            written content. The service is available on iOS, iPadOS, Android, and the web.
          </p>

          <h2>2. Accounts</h2>
          <p>
            To use BIAS Writer's sync features, you must create an account. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>

          <h2>3. Subscriptions and Payments</h2>
          
          <h3>Subscription</h3>
          <p>
            BIAS Writer requires a paid subscription after a 7-day free trial.
          </p>

          <h3>Billing</h3>
          <ul>
            <li>All purchases are processed through Apple App Store (iOS/iPadOS) or Google Play Store (Android)</li>
            <li>We do not process payments directly</li>
            <li>Subscription terms, pricing, and billing are governed by the respective app store's terms</li>
          </ul>

          <h3>Free Trials</h3>
          <p>
            Pro subscriptions may include a free trial period. If you do not cancel before 
            the trial ends, you will be charged for the subscription.
          </p>

          <h3>Cancellation and Refunds</h3>
          <ul>
            <li>You may cancel your subscription at any time through your device's app store settings</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>Refund requests must be directed to Apple or Google, per their refund policies</li>
            <li>We cannot process refunds directly</li>
          </ul>

          <h2>4. Your Content</h2>
          
          <h3>Ownership</h3>
          <p>
            <strong>You retain full ownership of all content you create using BIAS Writer.</strong> We 
            claim no intellectual property rights over your projects, documents, or other creative work.
          </p>

          <h3>License to Us</h3>
          <p>
            By using our sync features, you grant us a limited license to store, transmit, and 
            display your content solely for the purpose of providing the service to you. This 
            license ends when you delete your content or account.
          </p>

          <h3>Your Responsibilities</h3>
          <p>
            You are solely responsible for your content. You agree not to use BIAS Writer to 
            create, store, or distribute content that:
          </p>
          <ul>
            <li>Violates any applicable law</li>
            <li>Infringes on others' intellectual property rights</li>
            <li>Contains malware or harmful code</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the service to harm, harass, or defraud others</li>
            <li>Reverse engineer, decompile, or disassemble the application</li>
            <li>Use automated systems to access the service without permission</li>
            <li>Resell or redistribute the service without authorization</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            BIAS Writer, including its design, code, features, and branding, is owned by BIAS LLC 
            and protected by intellectual property laws. These Terms do not grant you any rights 
            to our trademarks, logos, or other brand features.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of BIAS Writer is also governed by our{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            BIAS Writer is provided "as is" and "as available" without warranties of any kind, 
            either express or implied, including but not limited to:
          </p>
          <ul>
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Uninterrupted or error-free operation</li>
          </ul>
          <p>
            <strong>We do not guarantee that your content will never be lost. You are responsible 
            for maintaining your own backups.</strong>
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BIAS LLC shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          <ul>
            <li>Loss of data</li>
            <li>Loss of profits</li>
            <li>Loss of goodwill</li>
            <li>Service interruption</li>
          </ul>
          <p>
            Our total liability for any claim arising from these Terms or the service shall not 
            exceed the amount you paid us in the twelve (12) months preceding the claim, or fifty 
            dollars ($50), whichever is greater.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless BIAS LLC and its officers, employees, and 
            agents from any claims, damages, losses, or expenses (including legal fees) arising from:
          </p>
          <ul>
            <li>Your use of the service</li>
            <li>Your content</li>
            <li>Your violation of these Terms</li>
          </ul>

          <h2>11. Changes to the Service</h2>
          <p>
            We may modify, suspend, or discontinue BIAS Writer (or any part of it) at any time. 
            We will make reasonable efforts to notify you of significant changes.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes 
            through the app or via email. Continued use after changes constitutes acceptance.
          </p>

          <h2>13. Termination</h2>
          <p>
            You may stop using BIAS Writer at any time. We may terminate or suspend your access 
            if you violate these Terms or for any other reason with reasonable notice.
          </p>
          <p>Upon termination:</p>
          <ul>
            <li>Your right to use the service ends immediately</li>
            <li>You may export your content before termination takes effect</li>
            <li>We may delete your data in accordance with our Privacy Policy</li>
          </ul>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Wisconsin, United States, 
            without regard to conflict of law principles.
          </p>

          <h2>15. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or the service shall be resolved through 
            binding arbitration in Wisconsin, except that either party may seek injunctive 
            relief in court for intellectual property violations.
          </p>

          <h2>16. General</h2>
          <ul>
            <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and BIAS LLC regarding BIAS Writer.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any right does not waive that right.</li>
            <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them in connection with a merger or acquisition.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>If you have questions about these Terms:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:support@bias.pub">support@bias.pub</a><br />
            <strong>Website:</strong> <a href="/support">www.bias.pub/support</a>
          </p>
          <p>
            BIAS LLC<br />
            Wisconsin, USA
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} BIAS LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
