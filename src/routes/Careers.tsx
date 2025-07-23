import { Link } from 'react-router-dom'
import careerHero from '../assets/customer_happy.jpg'

const Careers = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] mb-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-500"
          style={{
            backgroundImage: `url(${careerHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 lg:px-8 max-w-5xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Join Our Team
            </h1>
            <p className="text-lg lg:text-xl text-white leading-relaxed drop-shadow-md">
              Shape the future of mobile field force automation with a proven industry leader
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              MCC employees thrive on the challenges of working in a constantly evolving, fast-paced industry. 
              They are highly motivated by the satisfaction of working with a proven industry leader to deliver 
              innovative business solutions and services to our clients.
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Our growing organization is always looking for talented professionals. We offer opportunities 
              for people with a wide range of skills. If you're passionate and creative, please check out 
              our current career opportunities.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="grid gap-8 md:gap-12 mb-12">
            {/* Innovation */}
            <div className="bg-gray-50 p-6 lg:p-8 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                Innovation & Growth
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Work at the forefront of mobile technology and field force automation. 
                Join a team that's been pioneering solutions since 1986 and continues to shape the industry.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                Make a Real Impact
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Your work directly helps businesses optimize their operations, reduce costs, and improve 
                customer satisfaction. See the tangible results of your contributions every day.
              </p>
            </div>

            {/* Team */}
            <div className="bg-primary-yellow/10 border border-primary-yellow/20 p-6 lg:p-8 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                Collaborative Environment
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Work alongside passionate professionals who value integrity, agility, and customer success. 
                Join a team that believes in building long-standing relationships and delivering excellence.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="bg-gray-900 text-white p-8 lg:p-12 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Your Career with MCC?
              </h3>
              <p className="text-lg lg:text-xl mb-6 opacity-90">
                Submit all inquiries and discover how you can contribute to our mission of delivering 
                innovative mobile solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a 
                  href="mailto:mcccareers@mobilecom.com" 
                  className="bg-primary-yellow text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-primary-yellow/90 transition-colors"
                >
                  Send Your Application
                </a>
                <Link 
                  to="/contact" 
                  className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn More About MCC
                </Link>
              </div>
              <p className="text-sm opacity-75">
                <a 
                  href="mailto:mcccareers@mobilecom.com" 
                  className="text-primary-yellow hover:underline"
                >
                  mcccareers@mobilecom.com
                </a>
              </p>
              <p className="text-base mt-4 opacity-90">
                Thank you for your employment interest with Mobile Computing Corp. Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers