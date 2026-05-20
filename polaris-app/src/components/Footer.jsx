export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-darkblue to-brand-blue text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-cyan">Polaris Medical Consulting</h3>
            <p className="text-blue-100">Occupational medicine expertise for workplaces across multiple industries.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-cyan">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/" className="hover:text-brand-cyan transition">Home</a></li>
              <li><a href="/about" className="hover:text-brand-cyan transition">About Dr. Johnson</a></li>
              <li><a href="/services" className="hover:text-brand-cyan transition">Services</a></li>
              <li><a href="/contact" className="hover:text-brand-cyan transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-cyan">Contact Info</h3>
            <p className="text-blue-100 mb-2">Workplace Health Consulting</p>
            <p className="text-blue-100">Available by appointment</p>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Polaris Medical Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
