import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - BIAS',
  description: 'Privacy Policy for BIAS Writer, BIAS Writer Solo, and BIAS Script',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/BiasWRITER.png" alt="BIAS Writer" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <span className="text-xl font-semibold tracking-tight">BIAS Writer</span>
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
        <p className="text-gray-500 mb-12">Last Updated: March 15, 2026</p>
        
        <div className="prose prose-gray max-w-none">
          <p className="lead">
            BIAS LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates BIAS Writer, BIAS Writer Solo, 
            BIAS Script, and any other applications published by BIAS LLC (collectively, the 
            &ldquo;BIAS apps&rdquo;). The BIAS apps are client-side writing and screenwriting tools 
            available on iPad and Mac. This Privacy Policy explains what information is collected, 
            how it is used, and your choices regarding your data.
          </p>

          {/* ============ SECTION 1 ============ */}
          <h2>1. Our Approach to Your Data</h2>
          <p>
            The BIAS apps are designed as client-side tools. Your content is created, stored, and 
            managed on your device and, if you enable sync, through Apple&rsquo;s iCloud service. 
            BIAS LLC does not operate servers that store, transmit, or process your writing content. 
            We do not have access to your documents, projects, scripts, or other creative work.
          </p>
          <p>
            <strong>Your writing is your own.</strong> We do not read, analyze, collect, or use your 
            content for any purpose.
          </p>

          {/* ============ SECTION 2 ============ */}
          <h2>2. Information We Collect</h2>

          <h3>Information We Do Not Collect</h3>
          <p>To be clear about what we do not have access to:</p>
          <ul>
            <li>We do not collect or store your writing content, documents, projects, or scripts</li>
            <li>We do not collect or store your Apple ID credentials or passwords</li>
            <li>We do not collect or store your payment information, credit card numbers, or billing details</li>
            <li>We do not maintain user accounts or a customer database separate from Apple&rsquo;s systems</li>
          </ul>

          <h3>Authentication</h3>
          <p>
            If you use iCloud-based sync features, you sign in through your Apple ID via Apple&rsquo;s 
            authentication services. BIAS LLC does not manage, process, or store your Apple ID 
            credentials. Apple&rsquo;s handling of your account information is governed by 
            Apple&rsquo;s own privacy policy.
          </p>

          <h3>Subscription and Purchase Information</h3>
          <p>
            All purchases are processed through Apple&rsquo;s App Store. Apple is the merchant of 
            record. We receive subscription status information from Apple (such as whether a 
            subscription is active, expired, or in a trial period) in order to enable the 
            appropriate features in the app. We do not receive or store your payment card 
            information or billing details.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>We may collect limited technical information, including:</p>
          <ul>
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>Crash reports and performance data</li>
            <li>General usage analytics (features used, not content created)</li>
          </ul>
          <p>
            This information is collected in aggregate and is used solely to improve app stability 
            and performance. It does not include your writing content.
          </p>

          {/* ============ SECTION 3 ============ */}
          <h2>3. How We Use Information</h2>
          <p>The limited information we receive is used to:</p>
          <ul>
            <li>Verify your subscription or purchase status to enable app features</li>
            <li>Improve app stability through crash reports and performance data</li>
            <li>Understand general feature usage patterns (in aggregate, not individually)</li>
            <li>Respond to support requests you initiate</li>
          </ul>

          {/* ============ SECTION 4 ============ */}
          <h2>4. Data Storage and Sync</h2>
          <p>
            Your content is stored locally on your device. If you enable iCloud sync, your content 
            is also stored in your personal iCloud account through Apple&rsquo;s CloudKit infrastructure. 
            This sync is between your devices and Apple&rsquo;s iCloud service. BIAS LLC does not 
            operate intermediate servers in this process.
          </p>
          <p>
            The security, encryption, and handling of your iCloud data is governed by Apple&rsquo;s 
            privacy policy and iCloud terms of service. We recommend reviewing Apple&rsquo;s documentation 
            on iCloud security and data handling.
          </p>

          {/* ============ SECTION 5 ============ */}
          <h2>5. Data Retention and Deletion</h2>
          <p>
            Because your content is stored on your device and in your iCloud account (not on 
            servers operated by BIAS LLC), you control your own data retention and deletion:
          </p>
          <ul>
            <li>You can delete documents and projects within the app at any time</li>
            <li>You can export your content in standard formats before deleting</li>
            <li>Uninstalling the app removes locally stored data from that device</li>
            <li>iCloud data may persist in your iCloud account until you delete it or manage it through Apple&rsquo;s iCloud settings</li>
          </ul>
          <p>
            If you contact us for support and provide personal information in that context (such 
            as your email address), we will retain that information only as long as necessary to 
            resolve your request, and will delete it upon request.
          </p>

          {/* ============ SECTION 6 ============ */}
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your data at any time through the app and your device</li>
            <li><strong>Export</strong> your documents in standard formats (Markdown, PDF, Fountain, FDX, and others depending on the app)</li>
            <li><strong>Delete</strong> your content at any time through the app or by managing your iCloud storage through Apple&rsquo;s settings</li>
            <li><strong>Request deletion</strong> of any personal information you have provided to us directly (such as through support requests)</li>
          </ul>
          <p>
            To exercise these rights or ask questions, contact us 
            at{' '}<a href="mailto:support@bias.pub" className="text-blue-600 hover:underline">support@bias.pub</a>.
          </p>

          {/* ============ SECTION 7 ============ */}
          <h2>7. Children&rsquo;s Privacy</h2>
          <p>
            The BIAS apps are not intended for children under 13. We do not knowingly collect 
            personal information from children under 13. If you believe a child has provided us 
            with personal information, please contact us and we will take steps to delete it.
          </p>

          {/* ============ SECTION 8 ============ */}
          <h2>8. Third-Party Services</h2>
          <p>
            The BIAS apps rely on the following third-party services, each of which has its own 
            privacy policy governing its handling of your data:
          </p>
          <ul>
            <li><strong>Apple (App Store, iCloud, CloudKit)</strong> &mdash; authentication, purchases, sync, and storage</li>
            <li><strong>Vercel</strong> &mdash; hosting for our website at bias.pub</li>
          </ul>
          <p>
            We do not share, sell, or provide your personal information or content to any third 
            party for advertising, marketing, or data brokerage purposes.
          </p>

          {/* ============ SECTION 9 ============ */}
          <h2>9. International Users</h2>
          <p>
            BIAS LLC is based in Wisconsin, USA. If you use the BIAS apps from outside the United 
            States, your content is stored on your device and in your iCloud account as managed by 
            Apple. Any limited technical data we collect (such as crash reports) may be processed 
            in the United States. By using the BIAS apps, you acknowledge this processing.
          </p>

          {/* ============ SECTION 10 ============ */}
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant 
            changes through the app or via our website. Continued use after changes constitutes 
            acceptance.
          </p>

          {/* ============ CONTACT ============ */}
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy:</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@bias.pub" className="text-blue-600 hover:underline">support@bias.pub</a><br />
            <strong>Website:</strong>{' '}
            <Link href="/support" className="text-blue-600 hover:underline">www.bias.pub/support</Link>
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
