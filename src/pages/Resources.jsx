export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-brand-darkblue mb-12">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-brand-darkblue mb-4">Resource Title</h3>
          <p className="text-gray-700 mb-4">Add your resource description here</p>
          <a href="#" className="text-brand-teal hover:text-brand-cyan font-semibold transition">Learn More →</a>
        </div>

        <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-brand-darkblue mb-4">Resource Title</h3>
          <p className="text-gray-700 mb-4">Add your resource description here</p>
          <a href="#" className="text-brand-teal hover:text-brand-cyan font-semibold transition">Learn More →</a>
        </div>

        <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-brand-darkblue mb-4">Resource Title</h3>
          <p className="text-gray-700 mb-4">Add your resource description here</p>
          <a href="#" className="text-brand-teal hover:text-brand-cyan font-semibold transition">Learn More →</a>
        </div>

        <div className="card-gradient rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-brand-darkblue mb-4">Resource Title</h3>
          <p className="text-gray-700 mb-4">Add your resource description here</p>
          <a href="#" className="text-brand-teal hover:text-brand-cyan font-semibold transition">Learn More →</a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-teal/10 to-brand-cyan/10 border border-brand-teal rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-darkblue mb-4">Need Additional Resources?</h2>
        <p className="text-gray-700 mb-6">Contact us to discuss your specific occupational medicine needs.</p>
        <a href="/contact" className="btn-primary">Get in Touch</a>
      </div>
    </div>
  )
}
