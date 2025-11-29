import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/bias-logo.png" alt="BIAS Writer" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-semibold tracking-tight">BIAS Writer</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/support" className="text-gray-600 hover:text-gray-900">
              Support
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Get it Write
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Some words are more important than others, <em>yours</em>.
            <br />
            A professional markdown editor for novelists, journalists, students, and bloggers.
          </p>
          <div className="flex justify-center gap-4">
            {/* These will link to actual stores once live */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <AppleIcon />
              App Store
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <PlayIcon />
              Google Play
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-16">
              Built for writers
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <Feature 
                title="Distraction-free" 
                description="A clean, minimal interface that gets out of your way. Just you and your words."
              />
              <Feature 
                title="Powerful organization" 
                description="Projects, #tags, and ((custom)) [[syntax]] keep creativity flowing and your work organized."
              />
              <Feature 
                title="Instant search" 
                description="Seek and find project-wide with our patent-pending search system."
              />
              <Feature 
                title="Sprint timer" 
                description="Timed writing sessions to keep you focused and productive."
              />
              <Feature 
                title="Universal formats" 
                description="Markdown or PDF. Export anywhere."
              />
              <Feature 
                title="Sync everywhere" 
                description="Seamlessly sync across iPhone, iPad, Android, and the web."
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-16">
              Simple pricing
            </h2>
            <div className="max-w-md mx-auto">
              <div className="rounded-xl p-8 bg-gray-900 text-white ring-2 ring-gray-900">
                <h3 className="text-xl font-semibold mb-2">BIAS Writer</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">$3.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">or $39.99/year (save 17%)</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-white" />
                    <span className="text-gray-200">Unlimited projects and documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-white" />
                    <span className="text-gray-200">Cloud sync across all devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-white" />
                    <span className="text-gray-200">Export to Markdown and PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-white" />
                    <span className="text-gray-200">Custom syntax: memos, omits, tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-white" />
                    <span className="text-gray-200">Sprint timer for focused writing</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              Start with a 7-day free trial. Cancel anytime.
            </p>
          </div>
        </section>
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

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.28l14.5 8.5c.56.33.76 1.06.43 1.62-.1.16-.23.3-.39.39l-14.5 8.5c-.5.29-1.14.12-1.43-.38-.12-.2-.18-.43-.18-.66z"/>
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
