import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hvacRepair from '../assets/hvac_repair.png'
import applianceRepair from '../assets/appliance_repair.jpg'
import disasterRecovery from '../assets/disaster_recovery.jpg'
import deviceMaintenance from '../assets/device_maintenance.jpg'
import roofing from '../assets/roofing.jpg'
import chainCustody from '../assets/chain_custody.jpg'
import biohazard from '../assets/biohazard.jpg'
// import pileOfScrubs from '../assets/pile_of_scrubs.png'
import truck from '../assets/truck.png'
import uniforms from '../assets/uniforms.jpg'

interface IndustryData {
  id: string
  name: string
  description: string
  image: string
  features: string[]
}

const industriesData: IndustryData[] = [
  {
    id: 'linen-textile-rental',
    name: 'Route Accounting for Linen and Textile Rental Industry',
    description: 'Comprehensive mobile solutions for linen and textile rental businesses, optimizing route efficiency and customer service.',
    image: uniforms,
    features: [
      'Real-time route optimization',
      'Inventory tracking and management',
      'Customer billing integration',
      'Service delivery confirmation'
    ]
  },
  {
    id: 'hvac-repair',
    name: 'HVAC Repair',
    description: 'Advanced field service management solutions for HVAC professionals, enhancing technician efficiency and customer satisfaction.',
    image: hvacRepair,
    features: [
      'Work order management',
      'Parts inventory tracking',
      'Customer communication tools',
      'Service history tracking'
    ]
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    description: 'Mobile workforce solutions designed specifically for appliance repair services, streamlining operations from dispatch to completion.',
    image: applianceRepair,
    features: [
      'Technician scheduling and dispatch',
      'Diagnostic tools integration',
      'Warranty and service records',
      'Customer appointment management'
    ]
  },
  {
    id: 'disaster-restoration-recovery',
    name: 'Disaster, Restoration and Recovery Services',
    description: 'Emergency response and restoration service management solutions that help coordinate rapid response teams and track recovery progress.',
    image: disasterRecovery,
    features: [
      'Emergency dispatch coordination',
      'Resource allocation tracking',
      'Progress documentation',
      'Insurance claim support'
    ]
  },
  {
    id: 'equipment-maintenance-rental',
    name: 'Equipment Maintenance and Rental Services',
    description: 'Comprehensive solutions for equipment rental and maintenance companies, managing fleet operations and service schedules.',
    image: deviceMaintenance,
    features: [
      'Equipment tracking and monitoring',
      'Maintenance scheduling',
      'Rental agreement management',
      'Asset lifecycle tracking'
    ]
  },
  {
    id: 'roofing-repair-dispatch',
    name: 'Roofing Repair & Dispatch Services',
    description: 'Specialized mobile solutions for roofing contractors, optimizing crew dispatch and project management capabilities.',
    image: roofing,
    features: [
      'Crew scheduling and dispatch',
      'Project progress tracking',
      'Material management',
      'Safety compliance monitoring'
    ]
  },
  {
    id: 'chain-custody-asset-tracking',
    name: 'Chain of Custody Asset Tracking',
    description: 'Secure asset tracking solutions ensuring complete chain of custody documentation for sensitive materials and equipment.',
    image: chainCustody,
    features: [
      'Secure asset tracking',
      'Chain of custody documentation',
      'Real-time location monitoring',
      'Compliance reporting'
    ]
  },
  {
    id: 'document-shredding',
    name: 'Document Shredding Services',
    description: 'Secure document destruction service management with complete tracking and compliance documentation capabilities.',
    image: truck,
    features: [
      'Service route optimization',
      'Certificate of destruction',
      'Compliance documentation',
      'Customer communication'
    ]
  },
  {
    id: 'medical-waste-tracking',
    name: 'Medical Waste – Mobile Pickup and Tracking Solution',
    description: 'Specialized solutions for medical waste management, ensuring regulatory compliance and safe handling procedures.',
    image: biohazard,
    features: [
      'Regulatory compliance tracking',
      'Safe handling protocols',
      'Pickup scheduling and routing',
      'Disposal documentation'
    ]
  }
]

const Industries = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'Industries - Mobile Workforce Solutions | MCC'
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MCC provides specialized mobile workforce management solutions across multiple industries including HVAC, appliance repair, disaster recovery, medical waste, and more.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'MCC provides specialized mobile workforce management solutions across multiple industries including HVAC, appliance repair, disaster recovery, medical waste, and more.'
      document.head.appendChild(meta)
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'mobile workforce management, field service, HVAC, appliance repair, disaster recovery, medical waste, equipment maintenance, MCC')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = 'mobile workforce management, field service, HVAC, appliance repair, disaster recovery, medical waste, equipment maintenance, MCC'
      document.head.appendChild(meta)
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'MCC'
    }
  }, [])

  return (
    <div className="font-roboto">
      {/* Hero Section */}
      <div className="bg-primary-gray text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              MCC provides specialized mobile workforce management solutions tailored to the unique needs 
              of various industries. Our M-LINX™ platform enhances operational efficiency, improves customer 
              service, and reduces costs across diverse service sectors.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-primary-yellow text-white font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry has unique challenges and requirements. Our solutions are specifically 
              designed to address the operational needs and compliance requirements of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-yellow transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {industry.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-yellow mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-primary-yellow font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover how M-LINX™ can be customized for your industry's specific needs. 
              Contact us today to learn more about our mobile workforce management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-a-demo" 
                className="bg-primary-yellow text-white font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Book a Demo
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-primary-gray text-primary-gray font-semibold px-8 py-3 rounded-md hover:bg-primary-gray hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries