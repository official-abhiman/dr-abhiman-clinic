export default function ServicesSection() {
  const services = ["General Checkup", "Cardiology", "Pediatrics", "Dental Care", "Neurology", "Orthopedics"];
  
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">Our Medical Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service}</h3>
              <p className="text-gray-600">Expert care and consultation for {service.toLowerCase()} related issues.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}