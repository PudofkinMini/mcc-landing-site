import { HomeCarousel } from '../components/HomeCarousel'
import { IndustryCard } from '../components/IndustryCard'
import { Link } from 'react-router-dom'
import applianceRepair from '../assets/appliance_repair.jpg'
import deviceMaintenance from '../assets/device_maintenance.jpg'
import disasterRecovery from '../assets/disaster_recovery.jpg'
import hvacRepair from '../assets/hvac_repair.png'
import pileOfScrubs from '../assets/pile_of_scrubs.png'
import truck from '../assets/truck.png'
import assetTracking from '../assets/chain_custody.jpg'
import roofing from '../assets/roofing.jpg'
import biohazard from '../assets/biohazard.jpg'
import cleanShow from '../assets/clean_show.jpg'
import { CalendarCard } from '../components/CalendarCard'

const Home = () => {
  return (
    <div className='w-full flex flex-col gap-16 font-roboto'>
      {/* Carousel */}
      <HomeCarousel />

      {/* About Us */}
      <div className="flex flex-col items-center justify-center container mx-auto gap-8 p-8 lg:rounded-lg">
        <div className="flex flex-col bg-primary-gray rounded-md lg:flex-row items-center justify-center divide-y lg:divide-x lg:divide-y-0 divide-white/20">
          <p className="text-center text-lg lg:text-xl text-white p-6">
            MCC is a leading full service provider of real time field force mobility and optimization solutions. 
            <Link to={'/mlinx'}> M-LINX<sup>TM</sup></Link> is proven to dramatically <b>enhance customer service and retention while reducing operating costs.</b>
          </p>
          <div className="relative">
            <svg
              fill="none"
              viewBox="0 0 600 800"
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-full stroke-primary-yellow/50 z-10"
            >
              <g transform="scale(2.5) translate(30, 80)">
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
              </g>
              <g transform="scale(2.5)translate(130, 80)">
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
              </g>
              

              {/* <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" /> */}
            </svg>
            <p className="text-center text-lg lg:text-xl text-primary-yellow p-6">
              Implementing Route Manager solves every one of our order entry and invoicing issues. MCC's technology significantly enhances our operational processes.
              <br />- American Textile
            </p>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="flex flex-col items-center justify-center container mx-auto gap-8">
        <h2 className="text-4xl font-bold text-center">Industries We Serve</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center" >
          <IndustryCard image={applianceRepair} name="Appliance Repair" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={deviceMaintenance} name="Equipment Maintenance and Rental Services" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={disasterRecovery} name="Disaster, Restoration, and Recovery Services" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={hvacRepair} name="HVAC Repair" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={pileOfScrubs} name="Route Accounting for Linen and Textile Rental" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={truck} name="Document Shredding Services" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={assetTracking} name="Chain of Custody Asset Tracking" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={roofing} name="Roofing Repair and Dispatch Services" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
          <IndustryCard image={biohazard} name="Medical Waste – Mobile Pickup and Tracking Solutions" className="hover:shadow-md w-60 h-48 shadow rounded-lg p-4 cursor-pointer transition-all duration-300 brightness-80" />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="flex flex-col items-center justify-center container mx-auto gap-8 p-2">
        <h2 className="text-4xl font-bold">Upcoming Events</h2>
        <CalendarCard title="The Clean Show 2025" date="2025/08/23 - 2025/08/26" description="Come see us at booth #2980!" image={cleanShow} location="Orlando, FL" />
      </div>

    </div>
  )
}

export default Home