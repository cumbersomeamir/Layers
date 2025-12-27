'use client';

import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for your team. All plans include core features.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                   {/* Free Plan */}
                   <ScrollReveal delay={0}>
                     <div className="bg-white border border-gray-200 rounded-lg p-8 card-hover">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                       <div className="mb-6">
                         <span className="text-4xl font-bold text-gray-900">$0</span>
                         <span className="text-gray-600">/month</span>
                       </div>
                       <ul className="space-y-4 mb-8">
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Up to 10 team members</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Unlimited issues</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Basic integrations</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Community support</span>
                         </li>
                       </ul>
                       <Link
                         href="/signup"
                         className="btn-secondary block w-full text-center"
                       >
                         Get Started
                       </Link>
                     </div>
                   </ScrollReveal>

                   {/* Standard Plan */}
                   <ScrollReveal delay={100}>
                     <div className="bg-white border-2 border-gray-900 rounded-lg p-8 relative card-hover transform scale-105">
                       <div className="absolute top-0 right-0 bg-gray-900 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold animate-pulse">
                         Popular
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                       <div className="mb-6">
                         <span className="text-4xl font-bold text-gray-900">$8</span>
                         <span className="text-gray-600">/user/month</span>
                       </div>
                       <ul className="space-y-4 mb-8">
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Everything in Free</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Unlimited team members</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Advanced integrations</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Priority support</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Advanced analytics</span>
                         </li>
                       </ul>
                       <Link
                         href="/signup"
                         className="btn-primary block w-full text-center"
                       >
                         Get Started
                       </Link>
                     </div>
                   </ScrollReveal>

                   {/* Enterprise Plan */}
                   <ScrollReveal delay={200}>
                     <div className="bg-white border border-gray-200 rounded-lg p-8 card-hover">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                       <div className="mb-6">
                         <span className="text-4xl font-bold text-gray-900">Custom</span>
                       </div>
                       <ul className="space-y-4 mb-8">
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Everything in Standard</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">SSO & SAML</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Advanced security</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Dedicated support</span>
                         </li>
                         <li className="flex items-start">
                           <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                           <span className="text-gray-700">Custom integrations</span>
                         </li>
                       </ul>
                       <Link
                         href="/contact"
                         className="btn-secondary block w-full text-center"
                       >
                         Contact Sales
                       </Link>
                     </div>
                   </ScrollReveal>
                 </div>
        </div>
      </section>

             {/* FAQ Section */}
             <section className="py-16 bg-gray-50">
               <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                 <ScrollReveal>
                   <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
                 </ScrollReveal>
                 <div className="space-y-6">
                   {[
                     { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time.' },
                     { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and ACH transfers for Enterprise plans.' },
                     { q: 'Is there a free trial?', a: 'Yes, all paid plans come with a 14-day free trial. No credit card required.' },
                   ].map((faq, i) => (
                     <ScrollReveal key={i} delay={i * 100}>
                       <div className="bg-white p-6 rounded-lg border border-gray-200 card-hover">
                         <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                         <p className="text-gray-600">{faq.a}</p>
                       </div>
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
             </section>
    </div>
  );
}

