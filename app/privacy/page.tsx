import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - BIAS Writer',
  description: 'Privacy Policy for BIAS Writer',
}

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last Updated: November 28, 2024</p>
        
        <div className="prose prose-gray max-w-none">
          <p className="lead">
            BIAS LLC ("we," "us," or "our") operates BIAS Writer, a writing application 
            available on iOS, iPadOS, Android, and the web. This Privacy Policy explains 
            how we collect, use, and protect your information.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Account Information</h3>
          <p>When you create a BIAS account, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>Authentication credentials (passwords are securely hashed; if you use Sign in with Apple or Sign in with Google, we receive only the information those services provide)</li>
          </ul>

          <h3>Your Content</h3>
          <p>To enable cloud sync across your devices, we store:</p>
          <ul>
            <li>Projects and documents you create</li>
            <li>Application settings and preferences</li>
            <li>Organization data (folders, tags, document order)</li>
          </ul>
          <p>
            <strong>Your writing is your own.</strong> We do not read, analyze, or use your 
            content for any purpose other than providing the service to you.
          </p>

          <h3>Subscription Information</h3>
          <p>If you subscribe to BIAS Writer Pro:</p>
          <ul>
            <li>Purchases are processed entirely by Apple (App Store) or Google (Google Play)</li>
            <li>We do not collect or store payment information such as credit card numbers</li>
            <li>We receive subscription status information (active, expired, trial) to enable Pro features</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>We may collect:</p>
          <ul>
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>Crash reports and performance data</li>
            <li>General usage analytics (features used, not content created)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain BIAS Writer</li>
            <li>Sync your content across devices</li>
            <li>Verify your subscription status</li>
            <li>Improve the app through aggregated, anonymized analytics</li>
            <li>Communicate with you about your account or the service</li>
            <li>Respond to support requests</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            Your data is stored using Supabase, a secure cloud infrastructure provider. 
            We implement industry-standard security measures including:
          </p>
          <ul>
            <li>Encryption in transit (TLS/SSL)</li>
            <li>Encryption at rest</li>
            <li>Secure authentication protocols</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your account and content data for as long as your account is active. 
            If you delete your account:
          </p>
          <ul>
            <li>Your personal data will be deleted within 30 days</li>
            <li>Backups may retain data for up to 90 days before being purged</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your data at any time through the app</li>
            <li><strong>Export</strong> your documents in standard formats (Markdown, PDF)</li>
            <li><strong>Delete</strong> your account and all associated data</li>
            <li><strong>Correct</strong> your account information</li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:support@bias.pub">support@bias.pub</a>.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            BIAS Writer is not intended for children under 13. We do not knowingly collect 
            information from children under 13. If you believe a child has provided us with 
            personal information, please contact us.
          </p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Supabase</strong> (authentication and data storage)</li>
            <li><strong>Apple App Store</strong> (iOS/iPadOS purchases)</li>
            <li><strong>Google Play Store</strong> (Android purchases)</li>
            <li><strong>Vercel</strong> (web hosting)</li>
          </ul>
          <p>Each service has its own privacy policy governing its use of data.</p>

          <h2>International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in the United States, where our 
            servers are located. By using BIAS Writer, you consent to this transfer.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of 
            significant changes through the app or via email. Continued use after changes 
            constitutes acceptance.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy:</p>
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
