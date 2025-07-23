import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import abstract from '../assets/abstract.jpg'

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null)

  const services = [
    {
      title: "Consulting on Solution Integration",
      description: (
        <div>
          <div className="mb-3 flex flex-col gap-2">
            <p>The successful deployment of a mobile workforce automation solution requires the delicate balance of people, process, and technology.</p>
            <p>At MCC, we know that technology implementation is only half the equation. To move forward with a mobile solution, organizations must consider its impact on workers, customers, and internal management staff.</p>
            <p>MCC helps you reap the benefits of automation rapidly and manage through the organizational change that often accompanies the deployment of a mobile solution. Our goal is to deliver value to your organization.</p>
            <p>MCC provides:</p>
            <ul className="list-disc list-outside break-words space-y-1 text-gray-600 pl-5">
              <li>Consulting support for work flow re-engineering</li>
              <li>Best practice business processes and operational models for mobile worker enablement, performance monitoring, and workforce management</li>
              <li>Innovative solutions to help you maximize your investment and rapidly achieve your ROI</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Customer Experience Services", 
      description: (
        <div className="flex flex-col gap-2">
          <p>Through our many years of experience, we have developed flexibility in providing support which drives us to deliver programs designed for each individual customer. One size does not fit all when dealing with Support programs.</p>  
          <p>We do not believe in a tiered approach. We strongly believe that all customers should receive the best service available geared to individual requirements. A custom designed program which may, over-time, evolve and require modification as our customers become more mature in the handling and management of the solution.</p>
          <p>Our North American-based call centre is available to support your solution needs 24*7. This includes Software, Hardware, Hosting, Training and Reporting.</p>
        </div>
      )
    },
    {
      title: "Deployment Support",
      description: (
        <div className="flex flex-col gap-2">
          <p>As a full solution provider, through our network of business partners, MCC will design, develop, integrate, support and maintain all the components required to integrate your back-office systems with your mobile work force and provide a seamless on-demand bi-directional data and information flow.</p>
          <p>MCC’s approach is to jointly work with your team and combine our strengths as system integrators with your deep knowledge of your own business. Our project managers, system and business analysts with extensive enterprise system integration expertise, will provide your company with additional resources to identify, validate and address all your company’s needs and improve efficiency.</p>
          <p>First we listen and observe and whether it involves field trips with your mobile work force, interviewing office employees, reviewing and analyzing back-office processes and procedures our extensive expertise will allow us to conduct a full business analysis or complement and validate your existing findings and needs.</p>
          <p>Based on our extensive integration experience we understand the impact such projects have on your organization. We will design the new solution, encompassing both technology and process changes, and integrate with your existing infrastructure with minimum impact on your organization. Our phased integration methodology and deployment approach will give your organization the time to adjust while maintaining all its operational capabilities and start seeing returns and improvements as early as possible.</p>
          <p>Our flexible and configurable interfaces allow us to minimize the impact on your back-office systems for a quick integration and will keep the changes required and workload on your IT department at the minimum.</p>
          <p>Our flexible and powerful business logic engines allow us to implement and electronically reproduce any paper-based forms your mobile workers are currently using and streamline their workflow minimizing the impact and drastically reducing training and adoption times.</p>
          <p>With over 20 years of wireless solutions, custom software development, third party software and hardware integration experience across a wide range of industries MCC is one of the top providers of mobile work force automation and integration.</p>
          <p>Long after the initial deployment MCC will continue to look for ways our systems can improve your company’s operations and bottom line fostering a mutually beneficial long lasting business relationship.</p>
        </div>
      )
    },
    {
      title: "Training Services",
      description: (
        <div className="flex flex-col gap-2">
          <p>Training is an essential element of a successful deployment. At MCC, our goal is to meet all your training needs, so that your mobile automation solution reaps immediate and measurable value.</p>
          <p>MCC provides:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>Flexible, practical course content and comprehensive hands-on training</li>
            <li>Custom programs that enable your mobile workers and administrators to get up to speed quickly and effectively</li>
            <li>Training via the Web, in a classroom environment, and on-site with instructors who have real-world industry experience</li>
          </ul>
          <p>We tailor our training to your needs, offering:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>Customized workshops</li>
            <li>Practical content combined with hands-on training</li>
            <li>Comprehensive user level documentation, including flash cards</li>
            <li>Refresher programs</li>
            <li>New feature update training programs</li>
          </ul>
        </div>
      )
    },
    {
      title: "Hosting Facilities Management",
      description: (
        <div className="flex flex-col gap-2">
          <p>MCC Managed Services is designed for companies that prefer to rely on their solutions partner to fully manage their mission-critical technology deployments, in order to better concentrate on their core business. This approach allows them to focus on their strategic direction, while at the same time strengthening their overall competitiveness and bottom line through the increased management efficiency and effectiveness, lower costs, access to skilled resources, innovation, and higher service levels provided by their technology solutions.</p>
          <p>MCC Managed Services is our elite service bundle. It provides:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>Low risk, single touch point for assured success</li>
            <li>Fully MCC-backed solution</li>
            <li>Structure that qualifies it as an operating expense vs. capital request</li>
          </ul>
          <p>MCC’s full suite of managed services includes:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>24×7 Technical Assistance Center</li>
            <li>Trouble Ticket Management, Escalation Reporting</li>
            <li>Hosting Services</li>
            <li>Software and Maintenance</li>
            <li>MCC Hardware</li>
            <li>Local Sparing</li>
            <li>Implementation Services</li>
            <li>Change Management Consulting Service</li>
          </ul>
          <p>Depending on individual business requirements, MCC will lead strategic partners in the deployment of additional hardware and airtime.</p>
        </div>
      )
    },
    {
      title: "Development Engineering Services",
      description: (
        <div className="flex flex-col gap-2">
          <p>With over 20 years experience developing technology solutions, MCC understands that every business has its unique challenges that require a tailor-made response. So we’ve developed the expertise, skills, and resources to handle each and every aspect of workforce automation, including development engineering and testing.</p>
          <p>MCC provides:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>Software development</li>
            <li>Web page development</li>
            <li>Screen flow and printing layout engineering</li>
            <li>Integration services</li>
          </ul>
          <p>At MCC, we qualify and stand behind our solutions. We partner with our customers, to ensure that they derive their full potential and business value. Our commitment is demonstrated with:</p>
          <p>Thorough solution testing:</p>
          <ul className="list-disc list-outside space-y-1 text-gray-600 pl-5">
            <li>Usability testing</li>
            <li>Lab and interface testing</li>
            <li>Communication testing</li>
            <li>Field trial testing</li>
            <li>Comprehensive component level testing evaluations, including shock, vibration, humidity, endurance, and more.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Integration Services",
      description: (
        <div className="flex flex-col gap-2">
          <p>MCC’s approach is to jointly work with your team and combine our strengths as system integrators with your deep knowledge of the business. Our project managers, system and business analysts with deep industry system integration expertise will provide your company with additional resources to identify, validate and address all your company needs and improve efficiency.</p>
          <p>Based on our extensive integration experience in the industry we understand the impact such projects have on organizations. We will design and integrate the new solution with minimum impact on your organization. Our phased integration methodology and deployment approach will give your organization the time to adjust while maintaining all its operational capabilities.</p>
          <p>As a full solution provider MCC will provide and implement all the components required to provide real-time connectivity and link your back-office systems with your mobile work force.</p>
        </div>
      )
    },
    {
      title: "Hardware and Enterprise Support Services",
      description: (
        <div className="flex flex-col gap-2">
          <p>Mobility is all about expanding your business capabilities and access to data in real-time, beyond the four walls and ensuring your field operations are provided with the right tools, services and sustainable programs to keep you focused on your core value offerings.</p>
          <p>Our specialized programs allow us to scale outwards from simplified device procurement, asset identification and kitting to complex configurations requiring special account setup, customization and multiple peripheral solutions.</p>
          <p>MCC understands that the success of this technology is reliant on many unique components, typically requiring multi-vendor support programs. At MCC we have consolidated all of the required professional and 3rd party services, which include:</p>
          
          <p className="font-bold">Mobile Device Management (MDM)</p>
          <p>Our mobile device management services, coupled with our enterprise toolset, allow us to manage smart phones, super phones, tablets, laptops and rugged devices.</p>
          <p>The ability to administer, lockdown and enforce corporate policies regardless of corporate or employee owned devices. Supported features include implementation, user set-up, device lock/load/unlock, troubleshooting, reporting and software maintenance updates.</p>

          <p className="font-bold">Hardware, Accessories and Customization Consultation</p>
          <p>Which device is right for your operations? Based on your business requirements today and provisioned for growth, MCC can provide you with recommendations of best in class devices that will provide you with maximum reliability, functionality and overall customer experience.</p>

          <p>Whether you are looking to extend the useful life of your investment, provide better user ergonomics, reduce repair/damage cycles or support your corporate brand awareness, accessories are just as important as the device itself.</p>
          <p>If standard products are not available, we can work with our existing custom designers to create a product that is as unique as your business.</p>

          <p className="font-bold">Depot Management Services</p>
          <p>Centralize how devices are returned and warranty programs are administered. MCC can facilitate the logistics and repair services and extended warranty programs either in-house or through our partner network.</p>

          <p className="font-bold">Device Activations and Expense Management</p>
          <p>Proper activations, device provisioning and configuration increase the productivity and efficiencies of your mobile workforce. Proactive management and ongoing review of costs associated with device usage help drive down the administration and telecommunications expense.</p>
        </div>
      )
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
    <div className="w-full flex flex-col gap-16 font-roboto pb-4">
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
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                >
                  {openService === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="text-gray-700 leading-relaxed">
                        {service.description}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* M-LINX Primary Service */}
      <div className="relative container mx-auto px-4 w-[95%] lg:w-9/10">
        <div 
          className="absolute inset-0 z-0 blur-0 bg-clip rounded-lg brightness-80"
          style={{
            backgroundImage: `url(${abstract})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative rounded-lg shadow-lg p-4 py-16 lg:p-12 z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                M-LINX™ Mobile Workforce Platform
              </h2>
              <p className="text-lg text-white mb-6">
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
            <div className="bg-primary-gray/90 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start text-white">
                  <span className="text-primary-yellow mr-2">•</span>
                  Real-time route optimization and dispatch
                </li>
                <li className="flex items-start text-white">
                  <span className="text-primary-yellow mr-2">•</span>
                  Mobile field worker applications
                </li>
                <li className="flex items-start text-white">
                  <span className="text-primary-yellow mr-2">•</span>
                  Customer management and billing integration
                </li>
                <li className="flex items-start text-white">
                  <span className="text-primary-yellow mr-2">•</span>
                  Asset tracking and chain of custody
                </li>
                <li className="flex items-start text-white">
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