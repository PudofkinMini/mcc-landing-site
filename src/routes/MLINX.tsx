import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import world from '../assets/world.jpg'
import customerHappy from '../assets/customer_happy.jpg'
import chainOfCustody from '../assets/chain_custody.jpg'
import truck from '../assets/truck.png'
import abstract from '../assets/abstract.jpg'
import { IndustryCard } from '../components/IndustryCard'

const MLINX = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'M-LINX™ - Mobile Workforce Management | MCC'
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'M-LINX™ is MCC\'s comprehensive mobile workforce management solution that enhances customer service and reduces operating costs through real-time field force automation.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'M-LINX™ is MCC\'s comprehensive mobile workforce management solution that enhances customer service and reduces operating costs through real-time field force automation.'
      document.head.appendChild(meta)
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'mobile workforce management, field force automation, route optimization, M-LINX, MCC, Mobile Computing Corp')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = 'mobile workforce management, field force automation, route optimization, M-LINX, MCC, Mobile Computing Corp'
      document.head.appendChild(meta)
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'MCC'
    }
  }, [])

  return (
    <div className="font-sans">
      {/* SEO Meta Tags would be handled by a helmet or similar, but including content structure */}
      
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${world})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 lg:px-8 max-w-5xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              M-LINX<sup className="text-2xl lg:text-3xl">™</sup>
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 drop-shadow-md">
              Real-time field force mobility and optimization solutions that dramatically enhance customer service and retention while reducing operating costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-a-demo" 
                className="bg-primary-yellow text-gray-900 font-semibold px-8 py-4 rounded-md hover:bg-primary-yellow/90 transition-colors text-lg"
              >
                Book a Demo
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Enterprise-Grade Mobile Workforce Management
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            M-LINX™ is MCC's comprehensive mobile workforce management application suite, built specifically for modern service companies. Our proven solution transforms field operations through intelligent routing, real-time communication, and automated workflows.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Efficiency</h3>
            <p className="text-gray-700">Optimize routes and schedules to reduce travel time and increase daily service capacity by up to 30%.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduce Costs</h3>
            <p className="text-gray-700">Lower fuel costs, reduce administrative overhead, and minimize billing errors through automated processes.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhance Customer Service</h3>
            <p className="text-gray-700">Provide real-time updates, accurate ETAs, and consistent service quality that keeps customers satisfied.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Visibility</h3>
            <p className="text-gray-700">Monitor field operations in real-time with comprehensive dashboards and reporting capabilities.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Quality</h3>
            <p className="text-gray-700">Ensure regulatory compliance with automated documentation and quality control workflows.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-primary-yellow rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
            <p className="text-gray-700">Cloud-based solution that grows with your business, from single locations to enterprise deployments.</p>
          </div>
        </div>
      </div>

      {/* Core Modules Section */}
      <div className="p-4 py-16 lg:p-20 relative mx-auto w-[95%] lg:w-9/10"
        style={{
          // background: `linear-gradient(135deg, #F4B92F 0%, #616163 100%)`,
        }}
      >
        {/* Background texture overlay */}
        <div 
          className="absolute inset-0 -z-0 blur-0 bg-clip rounded-lg brightness-80"
          style={{
            backgroundImage: `url(${abstract})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="w-full relative z-10">
          <div className="w-full text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              M-LINX™ Core Modules
            </h2>
            <p className="text-lg lg:text-xl text-white font-semibold leading-relaxed">
              Our integrated suite of applications works together to optimize every aspect of your field operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mx-auto w-full">
            {/* Route Manager */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Route Manager</h3>
              <p className="text-gray-700 mb-6">Intelligent route optimization and scheduling that reduces travel time and increases service capacity.</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dynamic route optimization based on traffic and priorities
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated scheduling and dispatch
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time GPS tracking and ETA updates
                </li>
              </ul>
            </div>

            {/* Mobile App */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Application</h3>
              <p className="text-gray-700 mb-6">Native mobile apps for iOS and Android that keep field workers connected and productive.</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital work orders and service tickets
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Electronic signature capture
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Photo documentation and notes
                </li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inventory Management</h3>
              <p className="text-gray-700 mb-6">Real-time inventory tracking and automated replenishment for field operations.</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Barcode and RFID scanning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated reorder points
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chain of custody tracking
                </li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-700 mb-6">Comprehensive business intelligence and operational insights to drive informed decisions.</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time operational dashboards
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance metrics and KPIs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom reporting and data export
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="mt-8 rounded-t-2xl bg-gray-100">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              M-LINX™ is designed to meet the specific needs of various service industries with customizable workflows and industry-specific features.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center mb-16">
            <IndustryCard
              image={truck}
              name="Route Accounting for Linen and Textile Rental"
              className="hover:shadow-lg w-80 h-60 shadow rounded-lg p-6 cursor-pointer transition-all duration-300"
            />
            <IndustryCard
              image={chainOfCustody}
              name="Asset Tracking and Chain of Custody"
              className="hover:shadow-lg w-80 h-60 shadow rounded-lg p-6 cursor-pointer transition-all duration-300"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">HVAC Services</h4>
              <p className="text-sm text-gray-700">Optimize technician routes and manage service appointments efficiently.</p>
            </div>
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Equipment Rental</h4>
              <p className="text-sm text-gray-700">Track equipment location, maintenance schedules, and rental agreements.</p>
            </div>
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Medical Waste</h4>
              <p className="text-sm text-gray-700">Ensure compliance with automated tracking and documentation.</p>
            </div>
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Document Shredding</h4>
              <p className="text-sm text-gray-700">Maintain security protocols with chain of custody tracking.</p>
            </div>
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Restoration Services</h4>
              <p className="text-sm text-gray-700">Coordinate emergency response and track project progress.</p>
            </div>
            <div className="bg-primary-yellow/5 border border-primary-yellow/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Appliance Repair</h4>
              <p className="text-sm text-gray-700">Schedule service calls and track parts inventory in real-time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonial */}
      <div className="bg-primary-gray py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src={customerHappy} 
                  alt="Happy customer using M-LINX"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 text-white">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary-yellow mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L18.497 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
                  </svg>
                </div>
                <blockquote className="text-xl lg:text-2xl leading-relaxed mb-6">
                  "Implementing Route Manager solves every one of our order entry and invoicing issues. MCC's technology significantly enhances our operational processes."
                </blockquote>
                <cite className="text-primary-yellow font-semibold text-lg">
                  — American Textile
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Implementation Process
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our proven implementation methodology ensures rapid deployment and quick return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
            <p className="text-gray-700">Analyze your current processes and identify optimization opportunities.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Configuration</h3>
            <p className="text-gray-700">Customize M-LINX™ to match your specific business requirements and workflows.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Training</h3>
            <p className="text-gray-700">Comprehensive training for all users to ensure successful adoption.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Go-Live</h3>
            <p className="text-gray-700">Launch with ongoing support to ensure smooth operations from day one.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Field Operations?
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Join hundreds of companies that have already optimized their operations with M-LINX™. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-a-demo" 
                className="bg-primary-yellow text-gray-900 font-semibold px-8 py-4 rounded-md hover:bg-primary-yellow/90 transition-colors text-lg"
              >
                Schedule a Demo
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-75">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Proven ROI in 90 days
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                24/7 Support included
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Cloud-based solution
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MLINX