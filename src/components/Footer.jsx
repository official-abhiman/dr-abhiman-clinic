import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Dr. Abhiman 🩺</h2>
          <p className="text-sm leading-relaxed mb-4">Providing world-class healthcare with a personal touch.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Departments</h3>
          <ul className="space-y-2 text-sm">
            <li>Cardiology</li><li>Neurology</li><li>Pediatrics</li><li>Dental Care</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 123 Health Ave, Bhatpara, West Bengal</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@drabhiman.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>© 2026 Dr. Abhiman's Multi-Specialty Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}