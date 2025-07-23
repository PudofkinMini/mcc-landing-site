import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null)

  const services = [
    {
      title: "Consulting on Solution Integration",
      description: "Expert guidance on integrating mobile workforce solutions into your existing business processes and technology infrastructure. Our consultants work closely with your team to design optimal workflows and ensure seamless integration."
    },
    {
      title: "Customer Experience Services", 
      description: "Comprehensive services focused on enhancing customer satisfaction through improved field service delivery, real-time communication, and streamlined service processes that exceed customer expectations."
    },
    {
      title: "Deployment Support",
      description: "Full deployment assistance from initial planning through go-live and beyond. Our experienced team manages the entire rollout process, ensuring minimal disruption to your operations while maximizing adoption rates."
    },
    {
      title: "Training Services",
      description: "Comprehensive training programs designed to empower your team with the knowledge and skills needed to maximize the value of your mobile workforce solution. Includes user training, administrator training, and ongoing support."
    },
    {
      title: "Hosting Facilities Management",
      description: "Secure, reliable hosting infrastructure management with 24/7 monitoring, backup services, and scalable resources to ensure your mobile workforce platform operates at peak performance."
    },
    {
      title: "Development Engineering Services",
      description: "Custom development and engineering services to extend platform capabilities, create specialized integrations, and build tailored solutions that meet your unique business requirements."
    },
    {
      title: "Integration Services",
      description: "Professional integration services to connect your mobile workforce platform with existing ERP, CRM, accounting, and other business systems, ensuring seamless data flow and operational efficiency."
    },
    {
      title: "Hardware and Enterprise Support Services",
      description: "Comprehensive hardware support including device management, troubleshooting, replacement services, and enterprise-level technical support to keep your mobile workforce equipped and operational."
    }
  ]

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index)
  }

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'Services - Mobile Workforce Management Solutions | MCC'
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MCC provides comprehensive mobile workforce management services including M-LINX™ solutions, route optimization, field force automation, and custom mobile applications for various industries.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'MCC provides comprehensive mobile workforce management services including M-LINX™ solutions, route optimization, field force automation, and custom mobile applications for various industries.'
      document.head.appendChild(meta)
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'mobile workforce management, field service management, M-LINX, route optimization, mobile applications, MCC services')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = 'mobile workforce management, field service management, M-LINX, route optimization, mobile applications, MCC services'
      document.head.appendChild(meta)
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'MCC'
    }
  }, [])

  return (
    <div className="w-full flex flex-col gap-16 font-roboto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-gray to-primary-gray/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto">
            Comprehensive mobile workforce management solutions designed to enhance customer service 
            and reduce operating costs across multiple industries.
          </p>
        </div>
      </div>

      {/* Main Services Description */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            The successful selection, creation, deployment and support of a real-time mobile workforce automation solution require the delicate balance of people, process and technology.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-6">
            At MCC we understand that the software and hardware elements are only a few elements of the entire solution.
            For this reason, MCC has developed expertise in a full range of professional services which will not only assist but guide your organization from project initiation through to day to day support once the project has been rolled out.
            Our theory is to provide a partnership which evolves with the needs of personnel and technology over time.
          </p>
        </div>
      </div>

      {/* Professional Services Dropdowns */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-gray mb-12">
            Professional Services
          </h2>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-inset"
                  aria-expanded={openService === index}
                  aria-controls={`service-content-${index}`}
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-primary-gray">
                    {service.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openService === index ? (
                      <ChevronUpIcon className="w-6 h-6 text-primary-yellow transition-transform duration-200" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-primary-yellow transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`service-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openService === index 
                      ? 'max-h-screen opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {openService === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* M-LINX Primary Service */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-gray mb-6">
                M-LINX™ Mobile Workforce Platform
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our flagship solution provides real-time field force mobility and optimization. 
                M-LINX™ dramatically enhances customer service and retention while reducing operating costs 
                through comprehensive route management and mobile automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/mlinx"
                  className="bg-primary-yellow text-white px-6 py-3 rounded-md hover:brightness-110 transition-all duration-200 text-center font-semibold"
                >
                  Learn More About M-LINX™
                </Link>
                <Link 
                  to="/book-a-demo"
                  className="bg-primary-gray text-white px-6 py-3 rounded-md hover:bg-primary-gray/80 transition-all duration-200 text-center font-semibold"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="bg-primary-gray/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary-gray mb-4">Key Features:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2">•</span>
                  Real-time route optimization and dispatch
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2">•</span>
                  Mobile field worker applications
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2">•</span>
                  Customer management and billing integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2">•</span>
                  Asset tracking and chain of custody
                </li>
                <li className="flex items-start">
                  <span className="text-primary-yellow mr-2">•</span>
                  Comprehensive reporting and analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-gray mb-12">
          Complete Service Portfolio
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mobile Application Development */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">Mobile Application Development</h3>
            <p className="text-gray-700">
              Custom mobile applications tailored to your industry needs, enabling field workers to access 
              real-time data and complete tasks efficiently.
            </p>
          </div>

          {/* Route Optimization */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">Route Optimization</h3>
            <p className="text-gray-700">
              Advanced algorithms to optimize delivery routes, reduce fuel costs, and improve customer 
              satisfaction through efficient scheduling and dispatching.
            </p>
          </div>

          {/* Field Service Management */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">Field Service Management</h3>
            <p className="text-gray-700">
              Comprehensive solutions for managing field operations, from work order creation to 
              completion tracking and customer communication.
            </p>
          </div>

          {/* Asset Tracking */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">Asset Tracking & Chain of Custody</h3>
            <p className="text-gray-700">
              Real-time tracking of assets and materials with complete chain of custody documentation 
              for compliance and accountability.
            </p>
          </div>

          {/* Integration Services */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">System Integration</h3>
            <p className="text-gray-700">
              Seamless integration with existing ERP, CRM, and accounting systems to ensure data 
              consistency and streamlined operations.
            </p>
          </div>

          {/* Support & Training */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-primary-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-gray mb-3">Support & Training</h3>
            <p className="text-gray-700">
              Comprehensive support services including implementation assistance, user training, 
              and ongoing technical support to ensure success.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-gray mb-12">
            Industry-Specific Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/industries/linen-textile-rental" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-lg font-semibold text-primary-gray group-hover:text-primary-yellow transition-colors">
                Linen & Textile Rental
              </h3>
              <p className="text-gray-600 mt-2">Route accounting and customer management solutions</p>
            </Link>
            
            <Link to="/industries/hvac-repair" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-lg font-semibold text-primary-gray group-hover:text-primary-yellow transition-colors">
                HVAC Repair
              </h3>
              <p className="text-gray-600 mt-2">Service scheduling and technician dispatch</p>
            </Link>
            
            <Link to="/industries/appliance-repair" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-lg font-semibold text-primary-gray group-hover:text-primary-yellow transition-colors">
                Appliance Repair
              </h3>
              <p className="text-gray-600 mt-2">Work order management and customer communication</p>
            </Link>
            
            <Link to="/industries/disaster-restoration-recovery" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-lg font-semibold text-primary-gray group-hover:text-primary-yellow transition-colors">
                Disaster Restoration
              </h3>
              <p className="text-gray-600 mt-2">Emergency response and recovery coordination</p>
            </Link>
            
            <Link to="/industries/medical-waste-tracking" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group">
              <h3 className="text-lg font-semibold text-primary-gray group-hover:text-primary-yellow transition-colors">
                Medical Waste Tracking
              </h3>
              <p className="text-gray-600 mt-2">Compliance and chain of custody solutions</p>
            </Link>
            
            <Link to="/industries" className="bg-primary-gray rounded-lg p-6 hover:bg-primary-gray/80 transition-colors duration-200 text-white">
              <h3 className="text-lg font-semibold">
                View All Industries
              </h3>
              <p className="text-gray-200 mt-2">Explore our complete industry coverage</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 text-center">
        <div className="bg-primary-gray rounded-lg text-white p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Mobile Workforce?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn how MCC's solutions can enhance your customer service 
            and reduce operating costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-a-demo"
              className="bg-primary-yellow text-white px-8 py-4 rounded-md hover:brightness-110 transition-all duration-200 font-semibold text-lg"
            >
              Book a Demo
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-primary-gray px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services