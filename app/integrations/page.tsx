import Link from 'next/link';

export default function IntegrationsPage() {
  const integrations = [
    { name: 'Slack', category: 'Communication', description: 'Get notifications and updates in Slack' },
    { name: 'GitHub', category: 'Development', description: 'Sync issues with pull requests and commits' },
    { name: 'Figma', category: 'Design', description: 'Link designs to issues and track design work' },
    { name: 'Jira', category: 'Migration', description: 'Import and sync with existing Jira projects' },
    { name: 'Linear', category: 'Migration', description: 'Seamlessly migrate from Linear' },
    { name: 'Notion', category: 'Documentation', description: 'Embed Layers views in Notion pages' },
    { name: 'Zapier', category: 'Automation', description: 'Connect Layers with 5000+ apps via Zapier' },
    { name: 'Webhooks', category: 'Developer', description: 'Build custom integrations with webhooks' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Integrations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect Layers with 100+ tools to enhance your product development workflow.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {integrations.map((integration, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-bold text-lg">{integration.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{integration.category}</p>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Integration Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Slack</li>
                  <li>• Microsoft Teams</li>
                  <li>• Discord</li>
                  <li>• Email</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Development</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GitHub</li>
                  <li>• GitLab</li>
                  <li>• Bitbucket</li>
                  <li>• VS Code</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Design</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Figma</li>
                  <li>• Sketch</li>
                  <li>• Adobe XD</li>
                  <li>• Framer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a custom integration?</h2>
            <p className="text-gray-600 mb-8">
              Our API makes it easy to build custom integrations. Check out our developer documentation.
            </p>
            <Link href="/developers" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
              View API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
