import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to our team for sales, support, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sales */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Talk to Sales</h2>
              <p className="text-gray-600 mb-6">
                Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
              </p>
              <Link
                href="mailto:sales@layers.app"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-6">
                Ask product questions, report problems, or leave feedback.
              </p>
              <Link
                href="mailto:support@layers.app"
                className="inline-block px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other ways to connect</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/slack" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">S</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Join Slack</h3>
              <p className="text-sm text-gray-600">Community support</p>
            </Link>
            <a href="mailto:hello@layers.app" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">@</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">hello@layers.app</h3>
              <p className="text-sm text-gray-600">General inquiries</p>
            </a>
            <Link href="/docs" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Layers Docs</h3>
              <p className="text-sm text-gray-600">Documentation</p>
            </Link>
            <Link href="/api" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">API</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Layers API</h3>
              <p className="text-sm text-gray-600">Developer resources</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/status" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>All systems operational</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



