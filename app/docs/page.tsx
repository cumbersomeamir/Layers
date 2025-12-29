export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get started with Layers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of Layers and set up your workspace.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline">Read more →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Complete API documentation for developers.
              </p>
              <a href="/api" className="text-gray-900 font-semibold hover:underline">Read more →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for common workflows.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline">Read more →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



