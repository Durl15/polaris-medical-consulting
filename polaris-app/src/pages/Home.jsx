import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                <span className="text-brand-teal font-bold text-sm tracking-wider">OCCUPATIONAL MEDICINE CONSULTING</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-darkblue mb-8 leading-tight">
                Workplace health guidance for complex, high-stakes
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The landscape of occupational medicine is constantly changing with new rules and regulations which can be difficult to interpret and implement in the workplace.
              </p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-darkblue transition shadow-lg">
                Get Started
              </Link>
            </div>

            {/* Right Column - Card */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="mb-6">
                <img 
                  src="/logo.png" 
                  alt="Polaris Medical Consulting" 
                  className="h-12 w-auto mb-6"
                />
                <h2 className="text-2xl font-bold text-brand-darkblue mb-2">Led by Dr. Sarah E. Johnson</h2>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Clinical expertise, regulatory fluency, and cross-industry experience for occupational health programs that need both rigor and real-world practicality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-brand-teal">15+</p>
                  <p className="text-gray-600 text-sm">Years of healthcare</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-teal">MRO</p>
                  <p className="text-gray-600 text-sm">Certified Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-darkblue mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-brand-darkblue mb-4">Occupational Medicine Consulting</h3>
              <p className="text-gray-700">Comprehensive consulting services for workplace health and safety compliance.</p>
            </div>
            <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-brand-darkblue mb-4">Drug Screening Programs</h3>
              <p className="text-gray-700">Expert management of workplace drug screening and testing programs.</p>
            </div>
            <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-brand-darkblue mb-4">Medical Review Officer (MRO)</h3>
              <p className="text-gray-700">Professional MRO services for employment screening and compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
