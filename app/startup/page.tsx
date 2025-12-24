import Link from 'next/link';

export default function StartupPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Startup Program
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Special pricing and support for early-stage startups building the next generation of products.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for startups
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get access to Layers at a special startup rate, plus dedicated support to help you scale your product team.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">50% off first year</h3>
                    <p className="text-gray-600">Special pricing for eligible startups</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dedicated support</h3>
                    <p className="text-gray-600">Priority support from our team</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">All features included</h3>
                    <p className="text-gray-600">Full access to all Layers features</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$4</span>
                  <span className="text-gray-600">/user/month</span>
                  <p className="text-sm text-gray-500 mt-2">50% off standard pricing</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All Standard features
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Onboarding assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Less than 2 years old</li>
                  <li>• Less than $10M in funding</li>
                  <li>• Less than 50 employees</li>
                  <li>• VC-backed or accelerator program</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What you get</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 50% discount for first year</li>
                  <li>• Priority customer support</li>
                  <li>• Custom onboarding session</li>
                  <li>• Access to startup community</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for the Startup Program</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Fill out a quick application and our team will review it within 2 business days.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
