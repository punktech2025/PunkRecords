import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-avocado-gray border-t border-avocado-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-avocado-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">PR</span>
              </div>
              <span className="text-white font-bold text-xl">Punk Records</span>
            </Link>
            <p className="text-avocado-text text-sm max-w-md mb-4">
              Leading creative agency offering comprehensive web development, photography, videography, music
              production, and digital marketing services for businesses across India.
            </p>
            <div className="text-avocado-text text-sm">
              <p className="mb-1">
                <span className="text-avocado-green font-semibold">Website:</span> punktech.in
              </p>
              <p className="mb-1">
                <span className="text-avocado-green font-semibold">Location:</span> Ashok Chowk, Medical Square
              </p>
              <p>Nagpur, Maharashtra, India</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reveal" className="text-avocado-text hover:text-avocado-green text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/protect" className="text-avocado-text hover:text-avocado-green text-sm">
                  Creative Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-avocado-text hover:text-avocado-green text-sm">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-avocado-text hover:text-avocado-green text-sm">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-avocado-text hover:text-avocado-green text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-avocado-text hover:text-avocado-green text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/newsroom" className="text-avocado-text hover:text-avocado-green text-sm">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-avocado-text hover:text-avocado-green text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-avocado-light-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-avocado-text text-sm">© {new Date().getFullYear()} Punk Records. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-avocado-text hover:text-avocado-green text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-avocado-text hover:text-avocado-green text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
