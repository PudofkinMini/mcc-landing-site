import placeholderLogo from '../assets/placeholder_logo.jpg'
import microsoftPartners from '../assets/microsoft_partner_logo.png'
import dna from '../assets/dna.jpg'
import android from '../assets/android_dev.jpg'
import moneris from '../assets/moneris_logo.jpg'
import trsa from '../assets/trsa_logo.jpg'

const Partners = () => {
  return (
    <div className="font-sans container mx-auto px-4 py-8 lg:py-12 flex flex-col gap-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">Our Partners</h1>
      <p className="text-center text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
        Mobile Computing Corp. Inc. works closely with leading technology vendors to deliver reliable mobility solutions. These relationships strengthen the solutions we provide.
      </p>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="flex gap-4 bg-gray-50 p-6 rounded-lg items-start">
          <img src={microsoftPartners} alt="Microsoft logo" className="w-12 lg:w-16 object-contain" />
          <p className="text-gray-700 text-sm lg:text-base">
            Founded in 1975, Microsoft is a worldwide leader in software, services and Internet technologies. MCC has relied on Microsoft platforms for more than a decade, using them as the cornerstone of our solutions.
            <br />
            <a href="https://www.microsoft.com" className="text-primary-yellow hover:underline" target="_blank" rel="noopener noreferrer">www.microsoft.com</a>
          </p>
        </div>

        <div className="flex gap-4 bg-white border border-gray-200 p-6 rounded-lg items-start">
          <img src={dna} alt="DNA Evolutions logo" className="w-12 lg:w-16 object-contain" />
          <p className="text-gray-700 text-sm lg:text-base">
            Worldwide DNA partners use DNA's scheduling and rapid decisioning technology, JOpt, for strategic and operational workforce planning. Mobile Computing Corp. Inc. integrates DNA modules to offer advanced resource planning and route optimization.
            <br />
            <a href="https://www.dna-evolutions.com" className="text-primary-yellow hover:underline" target="_blank" rel="noopener noreferrer">www.dna-evolutions.com</a>
          </p>
        </div>

        <div className="flex gap-4 bg-gray-50 p-6 rounded-lg items-start">
          <img src={android} alt="Android logo" className="w-12 lg:w-16 object-contain" />
          <p className="text-gray-700 text-sm lg:text-base">
            Android powers millions of devices worldwide. MCC's M-LINX™ application harnesses the Android platform, giving customers access to the latest smartphone and tablet features.
          </p>
        </div>

        <div className="flex gap-4 bg-white border border-gray-200 p-6 rounded-lg items-start">
          <img src={moneris} alt="Moneris logo" className="w-12 lg:w-16 object-contain" />
          <p className="text-gray-700 text-sm lg:text-base">
            Moneris processes billions of card transactions each year for merchants across North America. Partnering with Moneris keeps MCC customers at the forefront of secure payment innovation.
            <br />
            <a href="https://www.moneris.com" className="text-primary-yellow hover:underline" target="_blank" rel="noopener noreferrer">www.moneris.com</a>
          </p>
        </div>

        <div className="flex gap-4 bg-gray-50 p-6 rounded-lg items-start">
          <img src={trsa} alt="TRSA logo" className="w-12 h-12 object-contain" />
          <p className="text-gray-700 text-sm lg:text-base">
            TRSA member commercial laundries provide hygienic and sustainable services to millions every day. TRSA promotes and protects its members while educating industry leaders.
            <br />
            <a href="https://www.trsa.org" className="text-primary-yellow hover:underline" target="_blank" rel="noopener noreferrer">www.trsa.org</a>
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 max-w-3xl mx-auto">
        Product or service names are trademarks of their respective owners. Graphics are used with permission and remain the property of the originating owners.
      </p>
    </div>
  )
}

export default Partners
