import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                {/* Place your logo at `src/assets/iL-Symbol.png` (copy from C:\Naga\ILS\Templates\iL-Symbol.png) */}
                <img src="/src/assets/iL-Symbol.png" alt="iLOGIC logo" className="w-8 h-8 rounded-md object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-sky to-cyan bg-clip-text text-transparent">
                  iLOGIC Systems
                </span>
              </div>
            <p className="text-sm text-gray-400">
              innovate. integrate. implement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-sky transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-sky transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-sm text-gray-400 hover:text-sky transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-sky transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-sky transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-sky transition-colors">Quality Engineering</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-sky transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-sky transition-colors">Managed Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-sky" />
                <a href="mailto:info@ilogicsys.com" className="hover:text-sky transition-colors">
                  info@ilogicsys.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-sky" />
                <a href="tel:+19169001009" className="hover:text-sky transition-colors">
                  916-900-1009
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-sky" />
                <span>USA · Remote-first</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} iLOGIC Systems. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-sky transition-colors">
              Privacy Policy
            </Link>
            <Link to="/careers" className="text-sm text-gray-400 hover:text-sky transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
