import Link from 'next/link';

export default function AskPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Layers Ask
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn workplace requests into actionable issues instantly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Layers Ask</p>
                      <p className="text-xs text-gray-500">Ready to help</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      "Add a feature to export reports as PDF"
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>✨ Creating issue...</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Issue Created</p>
                  <p className="text-xs text-gray-600">ENG-4567: Add PDF export functionality</p>
                  <p className="text-xs text-gray-500 mt-2">Assigned to: Backend Team</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Natural language to issues
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Simply describe what you need in plain English, and Layers Ask automatically creates structured issues with proper assignments and labels.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant issue creation</h3>
                    <p className="text-gray-600">Convert requests to issues in seconds, not minutes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart assignment</h3>
                    <p className="text-gray-600">Automatically route issues to the right team based on context</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-channel support</h3>
                    <p className="text-gray-600">Works in Slack, email, web, and mobile</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How it works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Make a request</h4>
                <p className="text-sm text-gray-600">Type or speak your request in natural language</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI processes</h4>
                <p className="text-sm text-gray-600">Layers Ask understands context and creates structured issues</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Issue created</h4>
                <p className="text-sm text-gray-600">Issue appears in your workspace, ready for work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
