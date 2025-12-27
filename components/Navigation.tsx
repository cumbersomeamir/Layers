'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setProductOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductOpen(false);
    }, 150);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    setResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
              Layers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={handleProductMouseEnter}
              onMouseLeave={handleProductMouseLeave}
            >
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Product
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productOpen && (
                <div
                  ref={productMenuRef}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-scale-in"
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  <Link href="/plan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Plan</Link>
                  <Link href="/build" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Build</Link>
                  <Link href="/insights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Insights</Link>
                  <Link href="/customer-requests" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Customer Requests</Link>
                  <Link href="/ask" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Layers Ask</Link>
                  <Link href="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Security</Link>
                  <Link href="/mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Mobile</Link>
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div
                  ref={resourcesMenuRef}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-scale-in"
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                >
                  <Link href="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Documentation</Link>
                  <Link href="/method" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Method</Link>
                  <Link href="/integrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Integrations</Link>
                  <Link href="/changelog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Changelog</Link>
                  <Link href="/developers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Developers</Link>
                  <Link href="/startup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded mx-1">Startup</Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/customers" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Customers
            </Link>
            <Link href="/now" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Now
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/docs" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Docs
            </Link>
            <Link href="/app" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Open app
            </Link>
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <div className="px-4">
                <button
                  className="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-2"
                  onClick={() => setProductOpen(!productOpen)}
                >
                  Product
                  <svg className={`h-4 w-4 transition-transform ${productOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/plan" className="block py-2 text-sm text-gray-600">Plan</Link>
                    <Link href="/build" className="block py-2 text-sm text-gray-600">Build</Link>
                    <Link href="/insights" className="block py-2 text-sm text-gray-600">Insights</Link>
                    <Link href="/customer-requests" className="block py-2 text-sm text-gray-600">Customer Requests</Link>
                    <Link href="/ask" className="block py-2 text-sm text-gray-600">Layers Ask</Link>
                    <Link href="/security" className="block py-2 text-sm text-gray-600">Security</Link>
                    <Link href="/mobile" className="block py-2 text-sm text-gray-600">Mobile</Link>
                  </div>
                )}
              </div>
              <div className="px-4">
                <button
                  className="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-2"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  Resources
                  <svg className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/docs" className="block py-2 text-sm text-gray-600">Documentation</Link>
                    <Link href="/method" className="block py-2 text-sm text-gray-600">Method</Link>
                    <Link href="/integrations" className="block py-2 text-sm text-gray-600">Integrations</Link>
                    <Link href="/changelog" className="block py-2 text-sm text-gray-600">Changelog</Link>
                    <Link href="/developers" className="block py-2 text-sm text-gray-600">Developers</Link>
                    <Link href="/startup" className="block py-2 text-sm text-gray-600">Startup</Link>
                  </div>
                )}
              </div>
              <Link href="/pricing" className="block px-4 py-2 text-sm font-medium text-gray-700">Pricing</Link>
              <Link href="/customers" className="block px-4 py-2 text-sm font-medium text-gray-700">Customers</Link>
              <Link href="/now" className="block px-4 py-2 text-sm font-medium text-gray-700">Now</Link>
              <Link href="/contact" className="block px-4 py-2 text-sm font-medium text-gray-700">Contact</Link>
              <Link href="/docs" className="block px-4 py-2 text-sm font-medium text-gray-700">Docs</Link>
              <Link href="/app" className="block px-4 py-2 text-sm font-medium text-gray-700">Open app</Link>
              <Link href="/login" className="block px-4 py-2 text-sm font-medium text-gray-700">Log in</Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg text-center mx-4"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

