export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 text-center md:text-left">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">About Our Clinic</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With over 15 years of experience, Dr. Abhiman and his team are dedicated to offering comprehensive healthcare services. We combine modern medical technology with compassionate care to ensure a fast and effective recovery for all our patients.
          </p>
        </div>
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-100">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" alt="Reception" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}