import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8 py-8 font-roboto px-4 text-center">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="max-w-prose text-gray-700">
        Whether you have questions about our solutions or would like a personalized demo, we’re here to help.
      </p>
      <div className="flex flex-col lg:flex-row gap-4">
        <a
          href="mailto:MCCMarketing@mobilecom.com"
          className="bg-primary-gray text-white px-6 py-2 rounded-md hover:bg-primary-gray/80"
        >
          Contact Us
        </a>
        <Link
          to="/book-a-demo"
          className="bg-primary-yellow text-white px-6 py-2 rounded-md hover:brightness-110"
        >
          Book a Demo
        </Link>
      </div>

      <div className="grid gap-1 text-gray-800">
        <p className="font-semibold">Mobile Computing Corp. Inc.</p>
        <p>PO Box 53018 RPO Erin Mills</p>
        <p>Mississauga, ON</p>
        <p>Canada L5M 5H7</p>
        <p>
          <a href="tel:18003928651" className="hover:underline text-primary-yellow">
            +1 (800) 392-8651
          </a>
        </p>
        <p>
          <a
            href="mailto:MCCMarketing@mobilecom.com"
            className="hover:underline text-primary-yellow break-all"
          >
            MCCMarketing@mobilecom.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact