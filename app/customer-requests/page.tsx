import Link from 'next/link';

export default function CustomerRequestsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Customer Requests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build what customers actually want by managing and prioritizing their feature requests.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Centralize customer feedback
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Collect, organize, and prioritize feature requests from all your customer touchpoints in one place.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Unified request management</h3>
                    <p className="text-gray-600">Bring requests from email, support tickets, and in-app feedback into one system</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart prioritization</h3>
                    <p className="text-gray-600">Automatically prioritize requests based on customer value and impact</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer engagement</h3>
                    <p className="text-gray-600">Keep customers informed about the status of their requests</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">Dark Mode Support</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">High Priority</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Requested by 247 customers</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>📧 Email</span>
                    <span>💬 Support</span>
                    <span>📱 In-app</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">Export to PDF</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Requested by 89 customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Request Collection</h3>
              <p className="text-gray-600 mb-4">
                Automatically collect requests from multiple channels and consolidate them in one place.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Email integration</li>
                <li>• Support ticket sync</li>
                <li>• In-app feedback widget</li>
                <li>• API for custom integrations</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prioritization</h3>
              <p className="text-gray-600 mb-4">
                Use data-driven insights to prioritize which features to build next.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Customer count tracking</li>
                <li>• Revenue impact analysis</li>
                <li>• Strategic alignment scoring</li>
                <li>• Custom priority rules</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication</h3>
              <p className="text-gray-600 mb-4">
                Keep customers in the loop about their requests and build stronger relationships.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Status updates</li>
                <li>• Release notifications</li>
                <li>• Public roadmap</li>
                <li>• Customer portal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
