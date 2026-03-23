import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
// About, Services, Contact, EventDetails को भी इम्पोर्ट करना ज़रूरी है
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import EventDetails from "./EventDetails";

function App() {
  
  // मेनु आइटम्स की लिस्ट (जो आपने माँगी थी)
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Faqs", path: "/" }, // Faqs को अभी के लिए होमपेज पर रखते हैं
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* 🌟 PREMIUM WHITE HEADER SECTION 🌟 */}
      {/* सफेद बैकग्राउंड, छाया (shadow), और ऊपर चिपका हुआ (sticky) */}
      <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Column 1: LOGO (Clickable to Home) */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* simple logo icon (cross + heartbeat) */}
            <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-blue-700 transition-colors shadow-lg">
              🩺
            </div>
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight group-hover:text-blue-700 transition-colors">
              Dr. Abhiman
            </span>
          </Link>

          {/* Column 2: MENU LINKS (Desktop version) */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className="text-gray-600 hover:text-blue-600 transition-colors py-1 relative group"
              >
                {item.name}
                {/* Hover animation underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Column 3: "Book Now" Button (Extra Touch!) */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-md transform hover:-translate-y-0.5 hidden md:inline-block">
              Book Appointment
            </Link>
            
            {/* Mobile Menu Icon (We will implement state later) */}
            <button className="md:hidden text-3xl text-gray-700">☰</button>
          </div>

        </nav>
      </header>

      {/* SECTION: MAIN CONTENT ROUTES */}
      {/* यहाँ हमारे सारे पेजों का डेटा रेंडर होगा */}
      <main className="max-w-full mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Details वाला डायनामिक पेज */}
          <Route path="/service/:eventName" element={<EventDetails />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;