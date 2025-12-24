export default function MethodPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            The Layers Method
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our approach to product development that helps teams ship faster and build better products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan</h3>
              <p className="text-gray-600">
                Start with clear goals and a strategic roadmap. Define what success looks like before you build.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build</h3>
              <p className="text-gray-600">
                Execute with focus. Break work into cycles, track progress, and maintain momentum.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn</h3>
              <p className="text-gray-600">
                Measure impact, gather feedback, and iterate. Use insights to inform the next cycle.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Core Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focus over features</h3>
                <p className="text-gray-600">
                  Say no to good ideas so you can say yes to great ones. Maintain focus on what matters most.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Velocity over perfection</h3>
                <p className="text-gray-600">
                  Ship fast, learn quickly, and iterate. Perfect is the enemy of done.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-driven decisions</h3>
                <p className="text-gray-600">
                  Use metrics and customer feedback to guide your product decisions, not opinions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-centric</h3>
                <p className="text-gray-600">
                  Build for your customers, not for your roadmap. Their success is your success.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to adopt the Layers Method?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using Layers to build better products faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </a>
              <a href="/contact" className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
