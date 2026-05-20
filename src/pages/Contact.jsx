import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const industries = [
    'Manufacturing & Industrial',
    'Construction',
    'Mining & Extraction',
    'Transportation & Logistics',
    'Oil, Gas & Energy',
    'Utilities & Power',
    'Healthcare & Hospitals',
    'Telecommunications',
    'Aerospace & Defense',
    'Entertainment & Media (Film/TV)',
    'Hospitality & Food Service',
    'Retail & Distribution',
    'Government & Public Administration',
    'Education & Research Institutions',
    'Financial Services',
    'Real Estate & Property Management',
    'Automotive',
    'Chemical & Pharmaceutical',
    'Agriculture & Forestry',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Form submitted:', formData)
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div>
      {/* Contact Header Section */}
      <section className="gradient-deep-teal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-50">Let's discuss how we can support your workplace health needs</p>
        </div>
      </section>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-darkblue mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions about our occupational medicine consulting services? We'd like to hear from you. Complete the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="card-gradient rounded-lg p-6">
                <h3 className="font-bold text-brand-darkblue mb-2">Email</h3>
                <p className="text-gray-700">contact@polarismedical.com</p>
              </div>
              <div className="card-gradient rounded-lg p-6">
                <h3 className="font-bold text-brand-darkblue mb-2">Response Time</h3>
                <p className="text-gray-700">We typically respond within 1-2 business days</p>
              </div>
              <div className="card-gradient rounded-lg p-6">
                <h3 className="font-bold text-brand-darkblue mb-2">Services</h3>
                <p className="text-gray-700">Occupational medicine consulting, drug screening programs, medical review officer services, and more.</p>
              </div>
            </div>
          </div>

          <div>
            {submitted && (
              <div className="bg-emerald-50 border-2 border-brand-teal text-brand-teal px-6 py-4 rounded-lg mb-6 shadow-md">
                <p className="font-semibold text-lg">Thank you for your message!</p>
                <p>We'll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-teal w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-teal w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-teal w-full"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-teal w-full"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="input-teal w-full"
                >
                  <option value="">Select an industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-brand-darkblue font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-teal w-full"
                  placeholder="Tell us about your occupational medicine needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-cyan-teal text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
