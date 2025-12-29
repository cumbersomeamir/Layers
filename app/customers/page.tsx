export default function CustomersPage() {
  const customers = [
    { name: 'Vercel', logo: 'V', description: 'Building the future of web development' },
    { name: 'Stripe', logo: 'S', description: 'Powering online payments globally' },
    { name: 'GitHub', logo: 'G', description: 'Where software is built' },
    { name: 'Figma', logo: 'F', description: 'Design tools for teams' },
    { name: 'Notion', logo: 'N', description: 'All-in-one workspace' },
    { name: 'Vercel', logo: 'V', description: 'Building the future of web development' },
  ];

  const testimonials = [
    {
      quote: "Layers has transformed how we plan and execute our product roadmap. The speed and clarity it brings to our team is unmatched.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "TechCorp"
    },
    {
      quote: "We've tried every tool out there. Layers is the only one that actually makes product development enjoyable.",
      author: "Michael Rodriguez",
      role: "Head of Engineering",
      company: "StartupXYZ"
    },
    {
      quote: "The AI features in Layers have saved us countless hours. It's like having an extra team member.",
      author: "Emily Johnson",
      role: "Product Manager",
      company: "InnovateCo"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Trusted by the world's best teams
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From fast-growing startups to established enterprises, teams use Layers to build better products.
          </p>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {customers.map((customer, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-gray-400">{customer.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{customer.name}</h3>
                <p className="text-sm text-gray-600">{customer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Teams</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50M+</div>
              <div className="text-gray-600">Issues Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



