// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-24 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Dr. Abhiman's Multi-Specialty Clinic 🩺
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Providing world-class healthcare with a personal touch. Your health is our first priority.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block">
            Book an Appointment
          </Link>
        </div>
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop" alt="Clinic" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}