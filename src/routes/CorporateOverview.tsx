import React from 'react'
import corporate from '../assets/corporate.jpeg'

const CorporateOverview = () => {
  console.log('Corporate image path:', corporate)
  
  return (
    <div className="font-sans container mx-auto px-4 py-8 lg:py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] mb-12 rounded-lg overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-500 blur-xs"
          style={{
            backgroundImage: `url(${corporate})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 lg:px-8 max-w-4xl">
            <p className="text-lg lg:text-xl text-white leading-relaxed mb-6 drop-shadow-md">
              Mobile Computing Corp Inc is an expert in mobile field force automation focused exclusively on rapidly reducing your operational burn and controlling your spend.
            </p>
            <p className="text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-md">
              At MCC, we're focused on customer satisfaction, service excellence and improving visibility, performance and communication – and ultimately maximizing our customer's bottom line. MCC's turnkey solutions allow businesses to deploy an enterprise wide, real-time wireless solution within a short time frame that achieves a rapid return on investment.
            </p>
          </div>
        </div>
      </div>

      {/* How MCC is Different */}
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
          How is MCC different from other technology vendors?
        </h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-center mb-8">
          Your overall experience with MCC will show you! MCC is a customer driven operation, focused on building successful long standing relationships. We continuously evolve and strive to provide the best possible service, leverage leading yet proven technology, and customize our ongoing support services programs. Integrity and agility define how we partner with our customers to provide exactly what you need.
        </p>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-center italic">
          If you are looking for the same old…there are many vendors out there. If you want to make an impacting change for your future, partner with a technology vendor that has your best interest in mind…let's have a conversation.
        </p>
      </div>

      {/* Key Differentiators */}
      <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
        {/* Industry Knowledge */}
        <div className="bg-gray-50 p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            Industry Knowledge
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            Recognizing the daily challenges facing today's service companies because we've been there, leading the way in helping best-in-class service companies manage <b>stronger, leaner, more profitable operations since 1986</b>.
          </p>
        </div>

        {/* Made for Your Business */}
        <div className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            Made for Your Business
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            MCC delivers <b>best-in-class</b> mobile worker driven solutions that address the challenges businesses face daily. Whether the organization is a Fortune 500 company or a smaller independent business, MCC's systems are designed to work for your business.
          </p>
        </div>

        {/* Implementation Experience */}
        <div className="bg-gray-50 p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            Implementation Experience
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            MCC has developed many strategic partnerships over the years. These relationships have allowed MCC to stay at the forefront of the wireless data world and maintain its reputation as a complete solutions provider. While technology is an important factor, it is only one component of the ultimate success of a project.
          </p>
        </div>

        {/* Business Partner */}
        <div className="bg-primary-yellow/10 border border-primary-yellow/20 p-6 lg:p-8 rounded-lg">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            MCC Is A Business Partner
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            As a trusted partner and technology supplier, MCC realizes that in the world of mission critical applications, success can be compromised unless continued support is provided. We realize that our success depends upon the success of our customers. For that reason, our customers are a never-ending focus as we leverage our market position to provide the very best support and mobile technologies available.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 lg:mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-900 text-white p-8 lg:p-12 rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Partner with MCC?
          </h3>
          <p className="text-lg lg:text-xl mb-6 opacity-90">
            Let's discuss how we can help transform your mobile workforce operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary-yellow text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-primary-yellow/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/book-a-demo" 
              className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateOverview