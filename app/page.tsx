import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/BiasWRITER.png" alt="BIAS Writer" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <span className="text-xl font-semibold tracking-tight">BIAS Writer</span>
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Link href="/support" className="text-gray-500 hover:text-gray-900 transition-colors">
              Support
            </Link>
            <Link href="https://help.bias.pub" className="text-gray-500 hover:text-gray-900 transition-colors">
              Help
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-16 pb-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold tracking-tight mb-6">
              Get it Write
            </h1>
            <p className="text-2xl text-gray-500 max-w-2xl mx-auto mb-10">
              Some words are more important than others, <em className="text-gray-700">yours</em>.
            </p>
            <a 
              href="https://apps.apple.com/us/app/bias-writer/id6755156256" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg"
            >
              <AppleIcon />
              Download on the App Store
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Available on iPhone, iPad, and Mac
            </p>
          </div>
        </section>

        {/* Device Showcase */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto">
            <Image 
              src="/BiasUniverseComp.png" 
              alt="BIAS Writer on Mac, iPad, and iPhone" 
              width={1400} 
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Tagline */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-3xl text-gray-600 leading-relaxed">
              A professional markdown editor for novelists, journalists, students, and bloggers.
            </p>
            <p className="text-xl text-gray-400 mt-6">
              Playwrights & screenwriters, you&apos;re <a href="#script" className="text-blue-500 hover:text-blue-600 underline">next</a>.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Built for writers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <Feature 
                title="Distraction-free" 
                description="A clean, minimal interface that gets out of your way. Just you and your words."
              />
              <Feature 
                title="Powerful organization" 
                description="Projects, #tags, and custom syntax keep creativity flowing and your work organized."
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
                description="Seamlessly sync across iPhone, iPad, and Mac with iCloud."
              />
            </div>
          </div>
        </section>

        {/* Motivated / Need Inspiration Split */}
        <section className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Motivated */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Image 
                    src="/motivation.png" 
                    alt="Sprint Timer" 
                    width={300} 
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <span className="text-2xl font-semibold text-gray-900">Motivated</span>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>

              {/* Need Inspiration */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Image 
                    src="/inspiration.png" 
                    alt="Writing Quote" 
                    width={300} 
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <span className="text-2xl font-semibold text-gray-900">Need inspiration?</span>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Simple pricing
            </h2>
            <p className="text-xl text-gray-500 text-center mb-16">
              Start with a 7-day free trial. Cancel anytime.
            </p>
            <div className="max-w-md mx-auto">
              <div className="rounded-3xl p-10 bg-gray-900 text-white">
                <h3 className="text-2xl font-semibold mb-4">BIAS Writer</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">$3.99</span>
                  <span className="text-gray-400 text-xl">/month</span>
                </div>
                <p className="text-gray-400 mb-8">or $39.99/year (save 17%)</p>
                <ul className="space-y-4">
                  <PricingItem text="Unlimited projects and documents" />
                  <PricingItem text="iCloud sync across all devices" />
                  <PricingItem text="Export to Markdown and PDF" />
                  <PricingItem text="Custom syntax: memos, omits, tags" />
                  <PricingItem text="Sprint timer for focused writing" />
                </ul>
                <a 
                  href="https://apps.apple.com/us/app/bias-writer/id6755156256" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-10 text-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BIAS Script */}
        <section id="script" className="py-24 px-6 bg-gradient-to-br from-purple-600 to-indigo-700">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Image 
              src="/BiasSCRIPT.png" 
              alt="BIAS Script" 
              width={100} 
              height={100} 
              className="mx-auto rounded-2xl shadow-lg mb-8"
            />
            <p className="text-purple-200 font-semibold mb-4">COMING SOON</p>
            <h2 className="text-4xl font-bold mb-2">
              BIAS Script
            </h2>
            <p className="text-xl text-purple-200 mb-6">For Stage and Screen</p>
            <p className="text-lg text-purple-100 max-w-xl mx-auto mb-10">
              Professional scriptwriting with Fountain syntax, scene numbering, and production-ready formatting.
            </p>
            <a 
              href="mailto:info@bias.pub?subject=BIAS%20Script%20-%20Early%20Access"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Early Access Updates →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/BiasWRITER.png" alt="BIAS Writer" width={24} height={24} className="rounded" />
              <span className="text-sm text-gray-500">© {new Date().getFullYear()} BIAS LLC</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="https://help.bias.pub" className="text-gray-500 hover:text-gray-900">
                Help
              </Link>
              <Link href="/support" className="text-gray-500 hover:text-gray-900">
                Support
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900">
                Terms
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Patent Pending — U.S. Application No. 63/949,099
          </p>
        </div>
      </footer>
    </div>
  )
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-200">{text}</span>
    </li>
  )
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}
