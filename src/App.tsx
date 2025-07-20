import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Industries from './routes/Industries'
import Services from './routes/Services'
import MLINX from './routes/MLINX'

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex space-x-4">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
            <Link to="/industries" className="hover:text-blue-200 transition-colors">
              Industries
            </Link>
            <Link to="/services" className="hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link to="/mlinx" className="hover:text-blue-200 transition-colors">
              M-LINX
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mlinx" element={<MLINX />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App