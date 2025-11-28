import Link from 'next/link'

export const metadata = {
  title: 'Support - BIAS Writer',
  description: 'Get help with BIAS Writer',
}

export default function Support() {
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
        <h1 className="text-4xl font-bold mb-6">Support</h1>
        <p className="text-xl text-gray-600 mb-12">
          We're here to help. Reach out with any questions about BIAS Writer.
        </p>
        
        <div className="space-y-12">
          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              For questions, feedback, or issues, email us at:
            </p>
            <a 
              href="mailto:support@bias.pub" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <EmailIcon />
              support@bias.pub
            </a>
            <p className="text-gray-500 text-sm mt-4">
              We typically respond within 24-48 hours.
            </p>
          </section>

          {/* Quick Help */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Quick Help</h2>
            <div className="space-y-6">
              <HelpItem 
                question="How do I cancel my subscription?"
                answer="You can cancel your subscription at any time through your device's app store settings. On iOS, go to Settings → [Your Name] → Subscriptions. On Android, go to Google Play Store → Menu → Subscriptions."
              />
              <HelpItem 
                question="How do I export my documents?"
                answer="Open any document, tap the export button, and choose your format: Markdown or PDF."
              />
              <HelpItem 
                question="How does sync work?"
                answer="When you're signed in, your projects and documents automatically sync across all your devices. Changes are saved continuously as you type."
              />
              <HelpItem 
                question="What are memos, omits, and tags?"
                answer="These are BIAS Writer's custom syntax features. ((Memos)) are notes to yourself that won't appear in exports. [[Omits]] hide text from view but keep it in your document. #tags help you organize and filter your content."
              />
              <HelpItem 
                question="Can I use BIAS Writer offline?"
                answer="Yes! BIAS Writer works fully offline. Your changes will sync automatically when you reconnect to the internet."
              />
              <HelpItem 
                question="How do I delete my account?"
                answer="Contact us at support@bias.pub to request account deletion. We'll remove your account and all associated data within 30 days."
              />
            </div>
          </section>

          {/* Documentation Link */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-600 mb-4">
              For detailed guides and documentation, visit our help center:
            </p>
            <a 
              href="https://help.bias.pub" 
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              help.bias.pub →
            </a>
            <p className="text-gray-500 text-sm mt-2">
              (Coming soon)
            </p>
          </section>
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

function HelpItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}
