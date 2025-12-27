'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">Layers</span>
            </Link>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    <li><Link href="/plan" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Plan</Link></li>
                    <li><Link href="/build" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Build</Link></li>
                    <li><Link href="/insights" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Insights</Link></li>
                    <li><Link href="/customer-requests" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Customer Requests</Link></li>
                    <li><Link href="/ask" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Layers Ask</Link></li>
                    <li><Link href="/security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Security</Link></li>
                    <li><Link href="/mobile" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Mobile</Link></li>
                  </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Pricing</Link></li>
              <li><Link href="/method" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Method</Link></li>
              <li><Link href="/integrations" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Integrations</Link></li>
              <li><Link href="/changelog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Changelog</Link></li>
              <li><Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Documentation</Link></li>
              <li><Link href="/download" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Download</Link></li>
              <li><Link href="/switch" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Switch</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">About</Link></li>
              <li><Link href="/customers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Customers</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Careers</Link></li>
              <li><Link href="/now" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Now</Link></li>
              <li><Link href="/readme" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">README</Link></li>
              <li><Link href="/quality" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Quality</Link></li>
              <li><Link href="/brand" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Brand</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/developers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Developers</Link></li>
              <li><Link href="/status" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Status</Link></li>
              <li><Link href="/startup" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Startup</Link></li>
              <li><Link href="/vulnerability" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Report vulnerability</Link></li>
              <li><Link href="/dpa" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">DPA</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Terms</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Contact us</Link></li>
              <li><Link href="/community" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">Community</Link></li>
              <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">X (Twitter)</Link></li>
              <li><Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">GitHub</Link></li>
              <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transform duration-200">YouTube</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

