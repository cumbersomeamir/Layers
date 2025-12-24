export default function ChangelogPage() {
  const updates = [
    {
      date: 'December 24, 2024',
      version: '2.5.0',
      title: 'AI Agents and Enhanced Mobile Experience',
      items: [
        'Introducing AI agents for automated task management',
        'Improved mobile app with offline support',
        'New Slack integration for real-time notifications',
        'Enhanced analytics dashboard with custom metrics',
      ],
    },
    {
      date: 'November 15, 2024',
      version: '2.4.0',
      title: 'Project Updates and Customer Requests',
      items: [
        'Built-in project update templates',
        'Customer request management system',
        'Improved search with natural language queries',
        'New keyboard shortcuts for power users',
      ],
    },
    {
      date: 'October 8, 2024',
      version: '2.3.0',
      title: 'Security Enhancements and Performance',
      items: [
        'SOC 2 Type II certification achieved',
        'SSO and SAML 2.0 support',
        '50% faster page load times',
        'Enhanced data encryption',
      ],
    },
    {
      date: 'September 20, 2024',
      version: '2.2.0',
      title: 'Insights and Reporting',
      items: [
        'New analytics dashboard',
        'Custom report builder',
        'Export to PDF and CSV',
        'Team performance metrics',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Changelog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest updates and improvements to Layers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {updates.map((update, i) => (
              <article key={i} className="border-b border-gray-200 pb-12 last:border-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500">{update.date}</span>
                    <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      v{update.version}
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{update.title}</h2>
                <ul className="space-y-2">
                  {update.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to get notified about new features and updates.
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
