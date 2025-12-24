export default function NowPage() {
  const updates = [
    {
      date: 'December 2024',
      title: 'AI Agents for Product Development',
      description: 'We\'re excited to announce our new AI agent capabilities that help automate routine tasks and accelerate product development.',
      category: 'Product'
    },
    {
      date: 'November 2024',
      title: 'Enhanced Mobile Experience',
      description: 'Our mobile app now includes full project management capabilities, making it easier to work from anywhere.',
      category: 'Mobile'
    },
    {
      date: 'October 2024',
      title: 'New Integration: Slack',
      description: 'Seamlessly connect Layers with Slack to get notifications and updates directly in your workspace.',
      category: 'Integrations'
    },
    {
      date: 'September 2024',
      title: 'Advanced Analytics Dashboard',
      description: 'Get deeper insights into your team\'s productivity with our new analytics dashboard.',
      category: 'Features'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Updates from the Layers team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and news from Layers.
          </p>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {updates.map((update, i) => (
              <article key={i} className="border-b border-gray-200 pb-12 last:border-0">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-gray-500">{update.date}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {update.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{update.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{update.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay in the loop</h2>
          <p className="text-gray-600 mb-8">
            Get the latest updates delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

