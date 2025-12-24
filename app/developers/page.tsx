import Link from 'next/link';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Developers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build on top of Layers with our comprehensive API and developer tools.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful API
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our REST API gives you full programmatic access to Layers. Create issues, manage projects, and build custom integrations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">REST API</h3>
                    <p className="text-gray-600">Complete API coverage for all Layers features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Webhooks</h3>
                    <p className="text-gray-600">Real-time event notifications for your integrations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">SDKs</h3>
                    <p className="text-gray-600">Official SDKs for JavaScript, Python, and Go</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`POST /api/issues
{
  "title": "New feature",
  "description": "...",
  "teamId": "team-123"
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Complete documentation for all API endpoints, request/response formats, and authentication.
              </p>
              <Link href="/api" className="text-gray-900 font-semibold hover:underline">
                View API Docs →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step tutorials for common use cases like building integrations and automation.
              </p>
              <Link href="/docs" className="text-gray-900 font-semibold hover:underline">
                Read Guides →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 mb-4">
                Join our developer community to share ideas, ask questions, and get support.
              </p>
              <Link href="/community" className="text-gray-900 font-semibold hover:underline">
                Join Community →
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get Started</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">1. Get your API key</h3>
                <p className="text-sm text-gray-600 mb-4">Generate an API key from your account settings</p>
                <code className="block bg-gray-100 px-4 py-2 rounded text-sm">layers_api_key_abc123...</code>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">2. Make your first request</h3>
                <p className="text-sm text-gray-600 mb-4">Use our API to create issues, fetch projects, and more</p>
                <code className="block bg-gray-100 px-4 py-2 rounded text-sm">curl https://api.layers.app/v1/issues</code>
              </div>
              <div className="text-center">
                <Link href="/signup" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
                  Start Building
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
