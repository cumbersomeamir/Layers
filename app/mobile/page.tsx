import Link from 'next/link';

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Layers Mobile
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Move product work forward from anywhere with our native mobile apps.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Full-featured mobile experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Access all Layers features on iOS and Android. Create issues, update projects, and collaborate with your team—all from your phone.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Native apps</h3>
                    <p className="text-gray-600">Fast, responsive native apps for iOS and Android</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Offline support</h3>
                    <p className="text-gray-600">Work offline and sync when you're back online</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Push notifications</h3>
                    <p className="text-gray-600">Stay updated with real-time notifications</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">Active Issues</span>
                    <span className="text-xs text-gray-500">12</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Fix login bug</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Add dark mode</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Quick Actions</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">New Issue</button>
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">View Projects</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">iOS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">iOS App</h3>
                  <p className="text-sm text-gray-600">Available on the App Store</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Optimized for iPhone and iPad with full support for all Layers features.
              </p>
              <Link href="/download" className="text-gray-900 font-semibold hover:underline">
                Download for iOS →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Android App</h3>
                  <p className="text-sm text-gray-600">Available on Google Play</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Native Android experience with Material Design and all Layers capabilities.
              </p>
              <Link href="/download" className="text-gray-900 font-semibold hover:underline">
                Download for Android →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
