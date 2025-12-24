import Link from 'next/link';

export default function AppPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Open Layers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Access your Layers workspace. Sign in to continue where you left off.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg border border-gray-200">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/signup" className="text-sm text-gray-600 hover:text-gray-900">
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/download" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-bold">📥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Download Desktop App</h3>
              <p className="text-sm text-gray-600">Get the native desktop experience</p>
            </Link>
            <Link href="/mobile" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-bold">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-sm text-gray-600">iOS and Android apps available</p>
            </Link>
            <Link href="/docs" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-bold">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Learn how to use Layers</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
