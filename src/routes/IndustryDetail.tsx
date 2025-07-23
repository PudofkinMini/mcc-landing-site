import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import hvacRepair from '../assets/hvac_repair.png'
import applianceRepair from '../assets/appliance_repair.jpg'
import disasterRecovery from '../assets/disaster_recovery.jpg'
import deviceMaintenance from '../assets/device_maintenance.jpg'
import roofing from '../assets/roofing.jpg'
import chainCustody from '../assets/chain_custody.jpg'
import biohazard from '../assets/biohazard.jpg'
import pileOfScrubs from '../assets/pile_of_scrubs.png'
import uniforms from '../assets/uniforms.jpg'

interface IndustryDetailData {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  benefits: string[]
}

const industriesDetailData: { [key: string]: IndustryDetailData } = {
  'linen-textile-rental': {
    id: 'linen-textile-rental',
    name: 'Route Accounting for Linen and Textile Rental Industry',
    description: 'Comprehensive mobile solutions for linen and textile rental businesses, optimizing route efficiency and customer service with real-time tracking and inventory management.',
    image: uniforms,
    features: [
      'Real-time route optimization and GPS tracking',
      'Comprehensive inventory tracking and management',
      'Integrated customer billing and invoicing',
      'Service delivery confirmation and signatures',
      'Customer communication and notifications',
      'Automated reporting and analytics'
    ],
    benefits: [
      'Reduced operational costs through optimized routing',
      'Improved customer satisfaction with reliable service',
      'Enhanced inventory accuracy and control',
      'Streamlined billing and payment processes'
    ]
  },
  'hvac-repair': {
    id: 'hvac-repair',
    name: 'HVAC Repair',
    description: 'Advanced field service management solutions for HVAC professionals, enhancing technician efficiency and customer satisfaction through comprehensive mobile tools.',
    image: hvacRepair,
    features: [
      'Intelligent work order management and dispatch',
      'Real-time parts inventory tracking',
      'Customer communication and scheduling tools',
      'Comprehensive service history tracking',
      'Equipment diagnostic integration',
      'Maintenance scheduling and reminders'
    ],
    benefits: [
      'Increased technician productivity and efficiency',
      'Reduced equipment downtime for customers',
      'Improved first-time fix rates',
      'Enhanced customer communication and satisfaction'
    ]
  },
  'appliance-repair': {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    description: 'Mobile workforce solutions designed specifically for appliance repair services, streamlining operations from initial dispatch to job completion.',
    image: applianceRepair,
    features: [
      'Smart technician scheduling and dispatch',
      'Diagnostic tools and equipment integration',
      'Warranty and service records management',
      'Customer appointment scheduling and management',
      'Parts ordering and inventory tracking',
      'Service documentation and reporting'
    ],
    benefits: [
      'Faster service delivery and response times',
      'Improved diagnostic accuracy and repair success',
      'Better parts management and availability',
      'Enhanced customer experience and retention'
    ]
  },
  'disaster-restoration-recovery': {
    id: 'disaster-restoration-recovery',
    name: 'Disaster, Restoration and Recovery Services',
    description: 'Emergency response and restoration service management solutions that help coordinate rapid response teams and track recovery progress effectively.',
    image: disasterRecovery,
    features: [
      'Emergency dispatch coordination and management',
      'Resource allocation and crew tracking',
      'Progress documentation with photos and notes',
      'Insurance claim support and documentation',
      'Equipment and material tracking',
      'Customer communication and updates'
    ],
    benefits: [
      'Faster emergency response times',
      'Improved coordination of recovery efforts',
      'Comprehensive documentation for insurance claims',
      'Enhanced customer communication during crisis'
    ]
  },
  'equipment-maintenance-rental': {
    id: 'equipment-maintenance-rental',
    name: 'Equipment Maintenance and Rental Services',
    description: 'Comprehensive solutions for equipment rental and maintenance companies, managing fleet operations, service schedules, and customer relationships.',
    image: deviceMaintenance,
    features: [
      'Equipment tracking and monitoring systems',
      'Preventive maintenance scheduling',
      'Rental agreement and contract management',
      'Asset lifecycle tracking and analytics',
      'Customer portal and self-service options',
      'Maintenance history and reporting'
    ],
    benefits: [
      'Reduced equipment downtime and failures',
      'Optimized maintenance schedules and costs',
      'Improved equipment utilization rates',
      'Enhanced customer satisfaction and retention'
    ]
  },
  'roofing-repair-dispatch': {
    id: 'roofing-repair-dispatch',
    name: 'Roofing Repair & Dispatch Services',
    description: 'Specialized mobile solutions for roofing contractors, optimizing crew dispatch, project management, and safety compliance capabilities.',
    image: roofing,
    features: [
      'Intelligent crew scheduling and dispatch',
      'Project progress tracking and management',
      'Material ordering and inventory management',
      'Safety compliance monitoring and reporting',
      'Weather tracking and scheduling integration',
      'Customer communication and updates'
    ],
    benefits: [
      'Improved project completion times',
      'Enhanced safety compliance and reporting',
      'Better material management and cost control',
      'Increased customer satisfaction and referrals'
    ]
  },
  'chain-custody-asset-tracking': {
    id: 'chain-custody-asset-tracking',
    name: 'Chain of Custody Asset Tracking',
    description: 'Secure asset tracking solutions ensuring complete chain of custody documentation for sensitive materials and equipment with full compliance.',
    image: chainCustody,
    features: [
      'Secure asset tracking with digital signatures',
      'Complete chain of custody documentation',
      'Real-time location monitoring and alerts',
      'Compliance reporting and audit trails',
      'Tamper-evident tracking and notifications',
      'Integration with security systems'
    ],
    benefits: [
      'Ensured compliance with regulatory requirements',
      'Complete audit trail for sensitive assets',
      'Reduced risk of asset loss or tampering',
      'Streamlined reporting and documentation'
    ]
  },
  'document-shredding': {
    id: 'document-shredding',
    name: 'Document Shredding Services',
    description: 'Secure document destruction service management with complete tracking, compliance documentation, and customer communication capabilities.',
    image: pileOfScrubs,
    features: [
      'Service route optimization and scheduling',
      'Digital certificate of destruction generation',
      'Compliance documentation and reporting',
      'Customer communication and notifications',
      'Secure pickup tracking and verification',
      'Audit trail and record management'
    ],
    benefits: [
      'Ensured compliance with privacy regulations',
      'Improved service efficiency and reliability',
      'Enhanced customer trust and confidence',
      'Streamlined documentation and reporting'
    ]
  },
  'medical-waste-tracking': {
    id: 'medical-waste-tracking',
    name: 'Medical Waste – Mobile Pickup and Tracking Solution',
    description: 'Specialized solutions for medical waste management, ensuring regulatory compliance, safe handling procedures, and complete documentation.',
    image: biohazard,
    features: [
      'Regulatory compliance tracking and monitoring',
      'Safe handling protocols and checklists',
      'Pickup scheduling and route optimization',
      'Disposal documentation and certificates',
      'Hazard classification and tracking',
      'Emergency response procedures'
    ],
    benefits: [
      'Full regulatory compliance and safety',
      'Reduced liability and risk exposure',
      'Improved operational efficiency',
      'Enhanced environmental protection'
    ]
  }
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>()
  
  // Set page title and meta description for SEO
  useEffect(() => {
    if (!industryId || !industriesDetailData[industryId]) {
      return
    }

    const industry = industriesDetailData[industryId]
    document.title = `${industry.name} - Mobile Workforce Solutions | MCC`
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', industry.description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = industry.description
      document.head.appendChild(meta)
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'MCC'
    }
  }, [industryId])

  // Check if industry exists after useEffect
  if (!industryId || !industriesDetailData[industryId]) {
    return <Navigate to="/industries" replace />
  }

  const industry = industriesDetailData[industryId]

  return (
    <div className="font-roboto">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-yellow">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/industries" className="hover:text-primary-yellow">Industries</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{industry.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {industry.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book-a-demo" 
                  className="bg-primary-yellow text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors text-center"
                >
                  Book a Demo
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-primary-gray text-primary-gray font-semibold px-6 py-3 rounded-md hover:bg-primary-gray hover:text-white transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary-yellow mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Benefits for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary-yellow/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-yellow font-semibold">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-primary-gray text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today to learn how M-LINX™ can be customized for your {industry.name.toLowerCase()} business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-a-demo" 
                className="bg-primary-yellow text-white font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Schedule a Demo
              </Link>
              <Link 
                to="/industries" 
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-gray transition-colors"
              >
                Back to Industries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryDetail