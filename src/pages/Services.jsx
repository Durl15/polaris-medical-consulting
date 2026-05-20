export default function Services() {
  const services = [
    {
      title: "Occupational Medicine Consulting",
      description: "Add your service description here"
    },
    {
      title: "Drug Screening Programs",
      description: "Add your service description here"
    },
    {
      title: "Medical Review Officer (MRO) Services",
      description: "Add your service description here"
    },
    {
      title: "Post-Offer Examinations",
      description: "Add your service description here"
    },
    {
      title: "Workplace Health & Compliance",
      description: "Add your service description here"
    },
    {
      title: "Medicolegal Consulting",
      description: "Add your service description here"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-brand-darkblue mb-12">Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-brand-darkblue mb-4">{service.title}</h3>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-brand-teal/10 to-brand-cyan/10 border-l-4 border-brand-teal p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-darkblue mb-4">Industry Expertise</h2>
        <p className="text-gray-800 mb-6">Polaris Medical Consulting serves organizations across multiple industries including:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="text-gray-700 font-medium">Entertainment & Media</span>
          <span className="text-gray-700 font-medium">Energy & Power</span>
          <span className="text-gray-700 font-medium">Mining</span>
          <span className="text-gray-700 font-medium">Manufacturing</span>
          <span className="text-gray-700 font-medium">Healthcare</span>
          <span className="text-gray-700 font-medium">And More</span>
        </div>
      </div>
    </div>
  )
}
