import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Layers is a purpose-built tool for planning and building products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start building
              </Link>
              <Link
                href="/slack"
                className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                New: Layers agent for Slack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-4">
              Powering the world's best product teams. From next-gen startups to established enterprises.
            </p>
            <Link href="/customers" className="text-gray-900 font-semibold hover:underline">
              Meet our customers →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {['Vercel', 'Stripe', 'GitHub', 'Figma', 'Notion', 'Vercel', 'Stripe', 'GitHub'].map((company, i) => (
              <div key={i} className="text-center text-gray-400 font-semibold text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              Layers is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
            </p>
            <Link href="/switch" className="text-gray-900 font-semibold hover:underline">
              Make the switch →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose-built for product development</h3>
              <p className="text-gray-600">
                Built specifically for product teams who need to move fast and ship quality work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Designed to move fast</h3>
              <p className="text-gray-600">
                Keyboard shortcuts, instant search, and a beautiful interface that gets out of your way.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crafted to perfection</h3>
              <p className="text-gray-600">
                Every detail is thoughtfully designed to create a delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/ai" className="text-sm text-gray-500 mb-2 block">Artificial intelligence</Link>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-assisted product development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Layers for Agents. Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
              </p>
              <Link href="/agents" className="text-gray-900 font-semibold hover:underline">
                Visit Layers Agents page →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[400px] border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">AI Agent</p>
                      <p className="text-xs text-gray-500">Ready to assist</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded p-2 text-sm text-gray-700">
                      Generate API endpoint for user authentication
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>⚡ Fast</span>
                      <span>•</span>
                      <span>🔒 Secure</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">Code Generation</span>
                    <span className="text-xs text-gray-500">In Progress</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-driving Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[400px] border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Auto-Assigned Issues</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Bug: Login timeout</span>
                      <span className="text-xs text-gray-500 ml-auto">→ Dev Team</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Feature: Dark mode</span>
                      <span className="text-xs text-gray-500 ml-auto">→ Design</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Smart Suggestions</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Similar issues grouped automatically</p>
                    <p>• Priority calculated from context</p>
                    <p>• Team capacity optimized</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Self-driving product operation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your product development workflow with AI assistance for routine, manual tasks.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">Automated issue assignment and triage</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">Smart project suggestions based on context</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Link href="/planning" className="text-sm text-gray-500 mb-2 block">Project and long-term planning</Link>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Set the product direction
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[300px] border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Q1 Roadmap</h4>
                    <span className="text-xs text-gray-500">3 projects</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-900 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-xs text-gray-600">75%</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Mobile App Redesign</p>
                      <p>• API v2 Launch</p>
                      <p>• Performance Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage projects end-to-end</h3>
              <p className="text-gray-600">
                Consolidate specs, milestones, tasks, and other documentation in one centralized location.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project updates</h3>
              <p className="text-gray-600 mb-4">
                Communicate progress and project health with built-in project updates.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200 min-h-[200px]">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Project Update</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>✅ Completed: User authentication flow</p>
                    <p>🔄 In Progress: Payment integration</p>
                    <p>📋 Next: Mobile app testing</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideate and specify what to build next</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" checked className="text-gray-900" />
                  <label className="text-sm text-gray-700">Collaborative document</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="text-gray-900" />
                  <label className="text-sm text-gray-700">Inline comment</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="text-gray-900" />
                  <label className="text-sm text-gray-700">Text-to-issue command</label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Initiative</h4>
              <p className="text-sm text-gray-600">Long-term strategic goals</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Cross-team project</h4>
              <p className="text-sm text-gray-600">Coordinate across teams</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Progress insight</h4>
              <p className="text-sm text-gray-600">Track and visualize progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Issue Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Link href="/tracking" className="text-sm text-gray-500 mb-2 block">Task tracking and sprint planning</Link>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Issue tracking you'll enjoy using
              </h2>
            </div>
            <div className="bg-white rounded-lg p-8 min-h-[300px] border border-gray-200">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Active Issues</h4>
                  <span className="text-xs text-gray-500">24 open</span>
                </div>
                <div className="space-y-2">
                  <div className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded">
                    <p className="text-sm font-medium text-gray-900">Fix login bug</p>
                    <p className="text-xs text-gray-600">ENG-1234 • High Priority</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3 py-2 bg-purple-50 rounded">
                    <p className="text-sm font-medium text-gray-900">Add dark mode</p>
                    <p className="text-xs text-gray-600">DES-567 • Medium Priority</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 py-2 bg-green-50 rounded">
                    <p className="text-sm font-medium text-gray-900">Optimize queries</p>
                    <p className="text-xs text-gray-600">PERF-890 • Low Priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build momentum with Cycle</h3>
              <p className="text-gray-600 mb-4">
                Create healthy routines and focus your team on what work should happen next.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 min-h-[200px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 text-sm">Cycle 12</h4>
                    <span className="text-xs text-gray-500">Week 2 of 4</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-semibold text-gray-900">8/12</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <p>✅ 8 issues done</p>
                      <p>🔄 4 in progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage incoming work with Triage</h3>
              <p className="text-gray-600 mb-4">
                Review and assign incoming bug reports, feature requests, and other unplanned work.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 min-h-[200px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 text-sm">Triage Queue</h4>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">3 pending</span>
                  </div>
                  <div className="space-y-2">
                    <div className="border border-gray-200 rounded p-2 text-sm">
                      <p className="font-medium text-gray-900">New bug report</p>
                      <p className="text-xs text-gray-500">From: user@example.com</p>
                      <div className="flex space-x-2 mt-2">
                        <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">Accept</button>
                        <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">Decline</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Layers Insights</h3>
              <p className="text-gray-600 mb-4">
                Take the guesswork out of product planning with realtime analytics and reporting dashboards.
              </p>
              <Link href="/insights" className="text-gray-900 font-semibold hover:underline">
                Visit Layers Insights page →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Tailored workflow</h4>
                <p className="text-sm text-gray-600">Customize to your needs</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Custom view</h4>
                <p className="text-sm text-gray-600">Create your perfect view</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Filter</h4>
                <p className="text-sm text-gray-600">Find exactly what you need</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">SLA</h4>
                <p className="text-sm text-gray-600">Track service levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/customer-requests" className="text-sm text-gray-500 mb-2 block">Customer Request</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build what customers actually want</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/git" className="text-sm text-gray-500 mb-2 block">Powerful git workflow</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automate pull requests and commit workflow</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/mobile" className="text-sm text-gray-500 mb-2 block">Layers Mobile</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Move product work forward from anywhere</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/ask" className="text-sm text-gray-500 mb-2 block">Layers Ask</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Turn workplace requests into actionable issues</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/integrations" className="text-sm text-gray-500 mb-2 block">Layers integrations</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100+ ways to enhance your Layers experience</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/figma" className="text-sm text-gray-500 mb-2 block">Figma integration</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bridge the gap between engineering and design</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <Link href="/developers" className="text-sm text-gray-500 mb-2 block">Built for developers</Link>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build your own add-ons with the Layers API</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/security" className="text-sm text-gray-400 mb-2 block">Enterprise-ready security</Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Trusted by the world's most innovative teams
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            SOC 2 Type II certified, GDPR compliant, and built with security at the core.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/signup"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/download"
              className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Download
            </Link>
            <Link
              href="/app"
              className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Open app
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

