import { useState, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, ScrollRestoration } from 'react-router-dom'

import Home from './routes/Home'
import OurStory from './routes/OurStory'
import Contact from './routes/Contact'
import Industries from './routes/Industries'
import IndustryDetail from './routes/IndustryDetail'
import Services from './routes/Services'
import MLINX from './routes/MLINX'
import BookADemo from './routes/BookADemo'
import CorporateOverview from './routes/CorporateOverview'
import Partners from './routes/Partners'
import Careers from './routes/Careers'

import logo from './assets/MCCLogo.png'

const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return ''
    case '/our-story':
      return 'Our Story'
    case '/corporate-overview':
      return 'Corporate Overview'
    case '/partners':
      return 'Partners'
    case '/careers':
      return 'Careers'
    case '/mlinx':
      return 'M-LINX™'
    case '/industries':
      return 'Industries'
    case '/services':
      return 'Services'
    case '/contact':
      return 'Contact'
    case '/book-a-demo':
      return 'Book a Demo'
    default:
      // Handle industry detail pages
      if (pathname.startsWith('/industries/')) {
        return 'Industries'
      }
      return ''
  }
}

const NavigationContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const location = useLocation()
  const currentPageTitle = getPageTitle(location.pathname)
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActivePath = (path: string) => location.pathname === path
  const isAboutPath = () => ['/our-story', '/corporate-overview', '/partners', '/careers'].includes(location.pathname)
  const isIndustriesPath = () => location.pathname === '/industries' || location.pathname.startsWith('/industries/')

  return (
    <div className={`min-h-screen font-mono`}>
      {/* Navigation */}
      <nav className={`bg-white shadow-md-bottom p-4 top-0 sticky z-96`}>
        <div className="container mx-auto px-2 lg:px-10">
          <div className="flex items-center w-full">
            {/* Logo and Mobile Page Title */}
            <Link to="/" className="">
                <img src={logo} alt="logo" className="min-w-24 w-24 lg:min-w-32 lg:w-32" />
              </Link>
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Mobile Page Title */}
              <span className="lg:hidden text-center w-full mr-auto text-sm font-semibold text-gray-800">
                {currentPageTitle}
              </span>
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center ml-auto justify-stretch space-x-8 text-black font-mono">
              <div className="relative group">
                <button className={`transition-colors p-2 hover:bg-gray-100 rounded-md flex items-center ${isAboutPath() ? 'bg-gray-100' : ''}`}>
                  About
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Desktop Dropdown Menu on Hover */}
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
                  <div className="py-2">
                    {/* <Link to="/our-story" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Our Story
                    </Link> */}
                    <Link 
                      to="/corporate-overview" 
                      className={`block px-4 py-2 hover:bg-gray-100 transition-colors ${isActivePath('/corporate-overview') ? 'bg-gray-100' : ''}`}
                    >
                      Corporate Overview
                    </Link>
                    <Link 
                      to="/partners" 
                      className={`block px-4 py-2 hover:bg-gray-100 transition-colors ${isActivePath('/partners') ? 'bg-gray-100' : ''}`}
                    >
                      Partners
                    </Link>
                    <Link 
                      to="/careers" 
                      className={`block px-4 py-2 hover:bg-gray-100 transition-colors ${isActivePath('/careers') ? 'bg-gray-100' : ''}`}
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                to="/mlinx" 
                className={`transition-colors p-2 hover:bg-gray-100 rounded-md ${isActivePath('/mlinx') ? 'bg-gray-100' : ''}`}
              >
                M-LINX™
              </Link>
              <Link 
                to="/industries" 
                className={`transition-colors p-2 hover:bg-gray-100 rounded-md ${isIndustriesPath() ? 'bg-gray-100' : ''}`}
              >
                Industries
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors p-2 hover:bg-gray-100 rounded-md ${isActivePath('/services') ? 'bg-gray-100' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors p-2 hover:bg-gray-100 rounded-md ${isActivePath('/contact') ? 'bg-gray-100' : ''}`}
              >
                Contact
              </Link>
              <Link to="/book-a-demo" className="hover:scale-[1.05] bg-primary-yellow font-mono font-semibold text-white duration-150 transition-transform px-4 py-2 rounded-md">
                Book a Demo
              </Link>
            </div>

            
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-2">
              {/* Mobile About Dropdown */}
              <div>
                <button
                  className="w-full text-left p-3 hover:bg-gray-100 rounded-md flex items-center justify-between"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  About
                  <svg className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 space-y-1 transition-all duration-200 ${isAboutDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {/* <Link to="/our-story" className="block p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Our Story
                  </Link> */}
                  <Link to="/corporate-overview" className="block p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Corporate Overview
                  </Link>
                  <Link to="/partners" className="block p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Partners
                  </Link>
                  <Link to="/careers" className="block p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Careers
                  </Link>
                </div>
              </div>
              <Link to="/mlinx" className="block p-3 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                M-LINX™
              </Link>
              <Link to="/industries" className="block p-3 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Industries
              </Link>
              <Link to="/services" className="block p-3 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className="block p-3 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/book-a-demo" className="block bg-yellow-500 font-semibold text-white px-4 py-3 rounded-md text-center transition-colors hover:bg-yellow-600" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mlinx" element={<MLINX />} />
          <Route path="/book-a-demo" element={<BookADemo />} />
          <Route path="/corporate-overview" element={<CorporateOverview />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="bg-gray-900 font-roboto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Company Logo and Copyright */}
            <div className="flex lg:max-w-1/4 lg:flex-col h-full py-8 px-4 lg:mr-auto gap-5">
              <div className="flex flex-col">
                <img src={logo} alt="logo" className="w-24 h-auto lg:mb-auto" />
                <p className="text-sm text-white mt-4">
                  MCC is a leading full service provider of real
                  time field force mobility and optimization solutions.
                  M-LINX™ is proven to dramatically enhance customer service and retention while reducing operating costs.
                </p>
              </div>
              <p className="text-sm text-white lg:mt-auto hidden lg:block">
                &copy; {new Date().getFullYear()} Mobile Computing Corp. Inc.
              </p>
            </div>
            {/* Explore Links */}
            <div className="flex flex-col items-start py-8 px-4 gap-2">
              <p className="text-left text-sm text-white/50 mb-4">EXPLORE</p>
              {/* <Link to="/our-story" className="text-left text-sm text-white hover:underline">Our Story</Link> */}
              <Link to="/corporate-overview" className="text-left text-sm text-white hover:underline">Corporate Overview</Link>
              <Link to="/partners" className="text-left text-sm text-white hover:underline">Partners</Link>
              <Link to="/careers" className="text-left text-sm text-white hover:underline">Careers</Link>
            </div>
            
            {/* Industries */}
            <div className="flex flex-col items-start py-8 px-4 gap-2 max-w-xs">
              <Link to="/industries" className="text-left text-sm text-white/50 mb-4">INDUSTRIES</Link>
              <Link to="/industries/linen-textile-rental" className="text-left text-sm text-white hover:underline break-words">Route Accounting for Linen and Textile Rental Industry</Link>
              <Link to="/industries/hvac-repair" className="text-left text-sm text-white hover:underline break-words">HVAC Repair</Link>
              <Link to="/industries/appliance-repair" className="text-left text-sm text-white hover:underline break-words">Appliance Repair</Link>
              <Link to="/industries/disaster-restoration-recovery" className="text-left text-sm text-white hover:underline break-words">Disaster, Restoration and Recovery Services</Link>
              <Link to="/industries/equipment-maintenance-rental" className="text-left text-sm text-white hover:underline break-words">Equipment Maintenance and Rental Services</Link>
              <Link to="/industries/roofing-repair-dispatch" className="text-left text-sm text-white hover:underline break-words">Roofing Repair & Dispatch Services</Link>
              <Link to="/industries/chain-custody-asset-tracking" className="text-left text-sm text-white hover:underline break-words">Chain of Custody Asset Tracking</Link>
              <Link to="/industries/document-shredding" className="text-left text-sm text-white hover:underline break-words">Document Shredding Services</Link>
              <Link to="/industries/medical-waste-tracking" className="text-left text-sm text-white hover:underline break-words">Medical Waste – Mobile Pickup and Tracking Solution</Link>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start py-8 px-4 gap-2">
              <p className="text-left text-sm text-white/50 mb-4">CONTACT</p>
              <Link to="/contact" className="text-left text-sm text-white hover:underline">Contact Us</Link>
              <Link to="/book-a-demo" className="text-left text-sm text-white hover:underline">Book a Demo</Link>
              <p className="text-left text-sm text-white"><a href="tel:18003928651" className="text-white hover:underline">+1 (800) 392-8651</a></p>
              <p className="text-left text-sm text-white break-words"><a href="mailto:MCCMarketing@mobilecom.com" className="text-white hover:underline">MCCMarketing@mobilecom.com</a></p>
              <p className="text-left text-sm text-white break-words">PO Box 53018 RPO Erin Mills<br />Mississauga, ON<br />Canada L5M 5H7</p>
            </div>

            {/* Our Newsletter */}
            <div className="flex flex-col items-start py-8 px-4 gap-2 max-w-xs">
              <p className="text-left text-sm text-white/50 mb-4">OUR NEWSLETTER</p>
              <p className="text-left text-sm text-white break-words">Sign up for industry news, updates from MCC and invitations to special events.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="w-full text-sm p-2 rounded-l-md bg-white text-black" />
                <button className="bg-primary-yellow text-white text-sm px-2 py-1 rounded-r-md">Join</button>
              </div>
            </div>

            {/* Copyright Mobile */}
            <p className="text-sm text-white lg:mt-auto lg:hidden px-4 py-8">
              &copy; {new Date().getFullYear()} Mobile Computing Corp. Inc.
            </p>
          </div>
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <NavigationContent />
      
    </Router>
  )
}

export default App