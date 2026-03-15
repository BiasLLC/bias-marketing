import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms of Service - BIAS',
  description: 'Terms of Service for BIAS Writer, BIAS Writer Solo, and BIAS Script',
}

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last Updated: March 15, 2026</p>
        
        <div className="prose prose-gray max-w-none">
          <p className="lead">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of BIAS Writer, BIAS Writer Solo, 
            BIAS Script, and any other applications published by BIAS LLC (collectively, 
            the &ldquo;Service&rdquo; or &ldquo;BIAS apps&rdquo;). BIAS LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a Wisconsin 
            limited liability company. By downloading, installing, or using any BIAS app, you agree 
            to these Terms. If you do not agree, do not use the Service.
          </p>

          {/* ============ SECTION 1 ============ */}
          <h2>1. The Service</h2>
          <p>
            The BIAS apps are client-side writing and screenwriting tools designed for iPad and Mac. 
            They help you create, organize, format, and export written content. Key features may include 
            document editing, project organization, formatting tools, export to PDF and other formats, 
            and iCloud-based sync.
          </p>
          <ul>
            <li>
              <strong>BIAS Writer</strong> is a subscription-based markdown writing app with support 
              for multiple projects and documents.
            </li>
            <li>
              <strong>BIAS Writer Solo</strong> is a one-time-purchase version of BIAS Writer limited 
              to a single project, with all other features included.
            </li>
            <li>
              <strong>BIAS Script</strong> is a screenwriting and script editing app with Fountain-based 
              formatting, scene management, and screenplay export features.
            </li>
          </ul>
          <p>
            We may update, modify, or discontinue features of the Service at any time. We will make 
            reasonable efforts to notify you of significant changes.
          </p>

          {/* ============ SECTION 2 ============ */}
          <h2>2. Accounts and Authentication</h2>
          <p>
            To use certain features, including iCloud-based sync and backup, you may need to sign in 
            with your Apple ID through Apple&rsquo;s services. Apple account authentication, credential 
            management, and related account security are governed by Apple&rsquo;s own terms and policies. 
            BIAS LLC does not manage Apple ID credentials or passwords.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining the security of your devices and Apple account access</li>
            <li>All activity that occurs through your use of the Service</li>
            <li>Notifying us of suspected misuse of the app itself</li>
          </ul>
          <p>
            We may suspend or terminate access to app-specific features if you violate these Terms.
          </p>

          {/* ============ SECTION 3 ============ */}
          <h2>3. Subscriptions, Purchases, and Payments</h2>
          
          <h3>Subscription Apps</h3>
          <p>
            BIAS Writer and BIAS Script may require a paid subscription after any applicable free trial 
            period. If you do not cancel before a trial ends, you will be charged for the subscription.
          </p>

          <h3>One-Time Purchase Apps</h3>
          <p>
            BIAS Writer Solo is available as a one-time purchase through the App Store. No recurring 
            subscription is required.
          </p>

          <h3>Billing and Payment Processing</h3>
          <p>
            All purchases, subscription billing, renewals, cancellations, and refund processing are 
            handled through Apple&rsquo;s App Store. Apple, not BIAS LLC, is the merchant of record for 
            all App Store transactions. We do not directly collect or store your payment information 
            for App Store purchases.
          </p>
          <p>
            Subscription pricing, billing cycles, free trial terms, cancellation rights, and refund 
            eligibility are subject to Apple&rsquo;s terms, App Store rules, and Apple&rsquo;s refund policies.
          </p>

          <h3>Cancellation and Refunds</h3>
          <ul>
            <li>You may cancel a subscription at any time through your device&rsquo;s App Store settings</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>Refund requests must be directed to Apple per their refund policies</li>
            <li>We cannot process refunds directly for App Store purchases</li>
          </ul>

          {/* ============ SECTION 4 ============ */}
          <h2>4. Your Content</h2>

          <h3>Ownership</h3>
          <p>
            <strong>You retain full ownership of all content you create using any BIAS app.</strong> We 
            claim no ownership interest in your documents, projects, scripts, notes, or other creative work.
          </p>

          <h3>Limited Service License</h3>
          <p>
            You grant BIAS LLC only the limited rights reasonably necessary to operate, maintain, and 
            support the app features we provide to you.
          </p>
          <p>
            To the extent that sync, backup, or storage features rely on Apple services such as iCloud, 
            storage, transmission, authentication, and related processing are performed through 
            Apple&rsquo;s systems rather than systems operated directly by BIAS LLC. We do not maintain 
            separate servers that store or transmit your content.
          </p>
          <p>
            We do not claim any broader right to use, publish, sell, exploit, or review your content 
            except as required to provide support you request, comply with law, enforce these Terms, 
            or protect the Service.
          </p>

          <h3>Your Responsibilities</h3>
          <p>
            You are solely responsible for your content and for maintaining any backups you want beyond 
            the functionality offered through the app or Apple services. You agree not to use any BIAS 
            app to create, store, or distribute content that violates any applicable law or infringes 
            on others&rsquo; intellectual property rights.
          </p>

          {/* ============ SECTION 5 ============ */}
          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Attempt to gain unauthorized access to our systems or the systems of any third-party service used by the BIAS apps</li>
            <li>Use the Service to harm, harass, or defraud others</li>
            <li>Reverse engineer, decompile, or disassemble any BIAS app</li>
            <li>Use automated systems to access the Service without permission</li>
            <li>Resell or redistribute the Service without authorization</li>
          </ul>

          {/* ============ SECTION 6 ============ */}
          <h2>6. Intellectual Property</h2>
          <p>
            The BIAS apps, including their design, code, features, and branding, are owned by BIAS LLC 
            and protected by intellectual property laws. Certain features of the Service may be the 
            subject of pending patent applications. These Terms do not grant you any rights to our 
            trademarks, logos, patents, or other intellectual property.
          </p>

          {/* ============ SECTION 7 ============ */}
          <h2>7. Privacy</h2>
          <p>
            Your use of the BIAS apps is governed by our{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. 
            Certain account, purchase, sync, storage, authentication, and device-level functions may 
            also be governed by Apple&rsquo;s own terms, privacy disclosures, and platform policies.
          </p>

          {/* ============ SECTION 8 ============ */}
          <h2>8. Disclaimers</h2>
          <p>
            The BIAS apps are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, 
            express or implied, including warranties of merchantability, fitness for a particular 
            purpose, non-infringement, accuracy, availability, or uninterrupted operation.
          </p>
          <p>
            We do not guarantee that the Service will be uninterrupted, error-free, secure, or 
            compatible with every device, operating system version, Apple service, or third-party 
            platform environment.
          </p>
          <p>
            We are not responsible for outages, delays, data loss, sync failures, billing problems, 
            or feature interruptions caused by Apple, the App Store, iCloud, device settings, operating 
            system issues, internet service providers, or other third-party services outside our 
            reasonable control.
          </p>
          <p>
            <strong>You are responsible for maintaining your own backups of important content.</strong>
          </p>

          {/* ============ SECTION 9 ============ */}
          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BIAS LLC and its owners, officers, employees, 
            contractors, and agents will not be liable for any indirect, incidental, consequential, 
            special, exemplary, or punitive damages, including loss of data, loss of content, loss 
            of profits, loss of goodwill, business interruption, device failure, sync failure, or 
            service interruption, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            To the maximum extent permitted by law, our total liability arising out of or relating to 
            the Service or these Terms will not exceed the greater of:
          </p>
          <ul>
            <li>The amount you paid to us through the Service in the twelve (12) months before the event giving rise to the claim, or</li>
            <li>Fifty U.S. dollars (US $50)</li>
          </ul>

          {/* ============ SECTION 10 ============ */}
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless BIAS LLC and its owners, officers, 
            employees, contractors, and agents from and against claims, losses, liabilities, damages, 
            judgments, costs, and expenses, including reasonable attorneys&rsquo; fees, arising out of or 
            relating to:
          </p>
          <ul>
            <li>Your use or misuse of the Service</li>
            <li>Your content</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any law or any third-party right, including intellectual property, privacy, publicity, or contractual rights</li>
          </ul>

          {/* ============ SECTION 11 ============ */}
          <h2>11. Third-Party Services and Events Outside Our Control</h2>
          <p>
            Certain features of the Service depend on third-party services, platforms, or infrastructure, 
            including Apple, the App Store, iCloud, internet providers, device manufacturers, and 
            operating system vendors. We are not responsible for failures, interruptions, compatibility 
            issues, delays, account restrictions, or changes caused by those third parties.
          </p>
          <p>
            We will not be liable for delay or failure to perform caused by events beyond our reasonable 
            control, including outages, cyber incidents, platform changes, acts of government, labor 
            disputes, natural disasters, telecommunications failures, or internet disruptions.
          </p>

          {/* ============ SECTION 12 ============ */}
          <h2>12. Changes to the Service</h2>
          <p>
            We may modify, suspend, or discontinue any BIAS app (or any part of it) at any time. We 
            will make reasonable efforts to notify you of significant changes.
          </p>

          {/* ============ SECTION 13 ============ */}
          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes through 
            the app or via email. Continued use after changes constitutes acceptance.
          </p>

          {/* ============ SECTION 14 ============ */}
          <h2>14. Termination</h2>
          <p>
            You may stop using any BIAS app at any time. We may terminate or suspend your access if 
            you violate these Terms or for any other reason with reasonable notice.
          </p>
          <p>Upon termination:</p>
          <ul>
            <li>Your right to use the Service ends immediately, except as required by applicable law</li>
            <li>You should export or back up your content before deleting the app, ending your subscription, or terminating use</li>
            <li>Access to app features may end immediately or over time depending on platform and subscription status</li>
            <li>Content stored through Apple or on your own devices may remain subject to Apple&rsquo;s systems, your device settings, and your own deletion choices</li>
          </ul>

          {/* ============ SECTION 15 ============ */}
          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Wisconsin, United States, without 
            regard to conflict of law principles.
          </p>

          {/* ============ SECTION 16 ============ */}
          <h2>16. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or the Service shall be resolved through binding 
            arbitration in Wisconsin, except that either party may seek injunctive relief in court 
            for intellectual property violations.
          </p>

          {/* ============ SECTION 17 ============ */}
          <h2>17. General</h2>
          <ul>
            <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and BIAS LLC regarding the BIAS apps.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any right does not waive that right.</li>
            <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets.</li>
          </ul>

          {/* ============ CONTACT ============ */}
          <h2>Contact Us</h2>
          <p>If you have questions about these Terms:</p>
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
