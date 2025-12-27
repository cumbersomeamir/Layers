'use client';

import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Layers is a purpose-built tool for{' '}
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  planning and building products
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Start building</span>
                  <span className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link
                  href="/slack"
                  className="btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    New: Layers agent for Slack
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 mb-4">
                Powering the world's best product teams. From next-gen startups to established enterprises.
              </p>
              <Link href="/customers" className="text-gray-900 font-semibold hover:underline transition-all inline-flex items-center gap-2 group">
                Meet our customers
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {['Vercel', 'Stripe', 'GitHub', 'Figma', 'Notion', 'Vercel', 'Stripe', 'GitHub'].map((company, i) => (
              <ScrollReveal key={i} delay={i * 50} direction="up">
                <div className="text-center text-gray-400 font-semibold text-sm hover:text-gray-600 transition-colors cursor-default">
                  {company}
                </div>
              </ScrollReveal>
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
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-lg border border-gray-200 card-hover group">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose-built for product development</h3>
                <p className="text-gray-600">
                  Built specifically for product teams who need to move fast and ship quality work.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg border border-gray-200 card-hover group">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Designed to move fast</h3>
                <p className="text-gray-600">
                  Keyboard shortcuts, instant search, and a beautiful interface that gets out of your way.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg border border-gray-200 card-hover group">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Crafted to perfection</h3>
                <p className="text-gray-600">
                  Every detail is thoughtfully designed to create a delightful experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div>
                <Link href="/ai" className="text-sm text-gray-500 mb-2 block hover:text-gray-700 transition-colors">Artificial intelligence</Link>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AI-assisted product development
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Layers for Agents. Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
                </p>
                <Link href="/agents" className="text-gray-900 font-semibold hover:underline inline-flex items-center gap-2 group">
                  Visit Layers Agents page
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[400px] border border-gray-200 card-hover">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center animate-pulse">
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
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">Code Generation</span>
                      <span className="text-xs text-gray-500">In Progress</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gray-900 to-gray-700 w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Self-driving product operation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Streamline your product development workflow with AI assistance for routine, manual tasks.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all card-hover">
                    <p className="text-sm text-gray-600">Automated issue assignment and triage</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all card-hover">
                    <p className="text-sm text-gray-600">Smart project suggestions based on context</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal direction="right">
              <div>
                <Link href="/planning" className="text-sm text-gray-500 mb-2 block hover:text-gray-700 transition-colors">Project and long-term planning</Link>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Set the product direction
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[300px] border border-gray-200 card-hover">
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
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage projects end-to-end</h3>
                <p className="text-gray-600">
                  Consolidate specs, milestones, tasks, and other documentation in one centralized location.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project updates</h3>
                <p className="text-gray-600 mb-4">
                  Communicate progress and project health with built-in project updates.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-200 min-h-[200px] card-hover">
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
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideate and specify what to build next</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                    <input type="radio" checked className="text-gray-900" />
                    <label className="text-sm text-gray-700 cursor-pointer">Collaborative document</label>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                    <input type="radio" className="text-gray-900" />
                    <label className="text-sm text-gray-700 cursor-pointer">Inline comment</label>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                    <input type="radio" className="text-gray-900" />
                    <label className="text-sm text-gray-700 cursor-pointer">Text-to-issue command</label>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={0}>
              <div className="bg-gray-100 rounded-lg p-6 card-hover">
                <h4 className="font-bold text-gray-900 mb-2">Initiative</h4>
                <p className="text-sm text-gray-600">Long-term strategic goals</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-gray-100 rounded-lg p-6 card-hover">
                <h4 className="font-bold text-gray-900 mb-2">Cross-team project</h4>
                <p className="text-sm text-gray-600">Coordinate across teams</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-gray-100 rounded-lg p-6 card-hover">
                <h4 className="font-bold text-gray-900 mb-2">Progress insight</h4>
                <p className="text-sm text-gray-600">Track and visualize progress</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Issue Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal direction="right">
              <div>
                <Link href="/tracking" className="text-sm text-gray-500 mb-2 block hover:text-gray-700 transition-colors">Task tracking and sprint planning</Link>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Issue tracking you'll enjoy using
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-white rounded-lg p-8 min-h-[300px] border border-gray-200 card-hover">
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
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build momentum with Cycle</h3>
                <p className="text-gray-600 mb-4">
                  Create healthy routines and focus your team on what work should happen next.
                </p>
                <div className="bg-white rounded-lg p-6 border border-gray-200 min-h-[200px] card-hover">
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
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-2 rounded-full transition-all duration-1000" style={{ width: '67%' }}></div>
                      </div>
                      <div className="text-xs text-gray-500">
                        <p>✅ 8 issues done</p>
                        <p>🔄 4 in progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage incoming work with Triage</h3>
                <p className="text-gray-600 mb-4">
                  Review and assign incoming bug reports, feature requests, and other unplanned work.
                </p>
                <div className="bg-white rounded-lg p-6 border border-gray-200 min-h-[200px] card-hover">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900 text-sm">Triage Queue</h4>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded animate-pulse">3 pending</span>
                    </div>
                    <div className="space-y-2">
                      <div className="border border-gray-200 rounded p-2 text-sm hover:border-gray-300 transition-colors">
                        <p className="font-medium text-gray-900">New bug report</p>
                        <p className="text-xs text-gray-500">From: user@example.com</p>
                        <div className="flex space-x-2 mt-2">
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-green-100 hover:text-green-700 transition-colors">Accept</button>
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-red-100 hover:text-red-700 transition-colors">Decline</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to build
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: '/customer-requests', label: 'Customer Request', title: 'Build what customers actually want' },
              { href: '/git', label: 'Powerful git workflow', title: 'Automate pull requests and commit workflow' },
              { href: '/mobile', label: 'Layers Mobile', title: 'Move product work forward from anywhere' },
              { href: '/ask', label: 'Layers Ask', title: 'Turn workplace requests into actionable issues' },
              { href: '/integrations', label: 'Layers integrations', title: '100+ ways to enhance your Layers experience' },
              { href: '/figma', label: 'Figma integration', title: 'Bridge the gap between engineering and design' },
              { href: '/developers', label: 'Built for developers', title: 'Build your own add-ons with the Layers API' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 card-hover group">
                  <Link href={item.href} className="text-sm text-gray-500 mb-2 block group-hover:text-gray-700 transition-colors">{item.label}</Link>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Link href="/security" className="text-sm text-gray-400 mb-2 block hover:text-gray-300 transition-colors inline-block">Enterprise-ready security</Link>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Trusted by the world's most innovative teams
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              SOC 2 Type II certified, GDPR compliant, and built with security at the core.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ready to get started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Contact Sales
              </Link>
              <Link
                href="/signup"
                className="btn-primary"
              >
                Get Started
              </Link>
              <Link
                href="/download"
                className="btn-secondary"
              >
                Download
              </Link>
              <Link
                href="/app"
                className="btn-secondary"
              >
                Open app
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

