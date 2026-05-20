import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #0369a1 0%, #14b8a6 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>P</span>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#003265' }}>POLARIS</div>
              <div style={{ fontSize: '11px', color: '#14b8a6', fontWeight: '600', lineHeight: '1' }}>Medical</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue transition font-medium">Bio</Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-blue transition font-medium">Services</Link>
            <Link to="/news" className="text-gray-700 hover:text-brand-blue transition font-medium">In The News</Link>
            <Link to="/contact" className="px-6 py-2 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-darkblue transition shadow-md">
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-brand-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <Link to="/" className="block text-gray-700 hover:text-brand-blue transition font-medium">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-brand-blue transition font-medium">Bio</Link>
            <Link to="/services" className="block text-gray-700 hover:text-brand-blue transition font-medium">Services</Link>
            <Link to="/news" className="block text-gray-700 hover:text-brand-blue transition font-medium">In The News</Link>
            <Link to="/contact" className="block px-6 py-2 bg-brand-blue text-white rounded-full font-medium text-center">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
