export default function Features() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="p-4"><h3 className="text-5xl mb-2">🚑</h3><h4 className="font-bold text-lg">24/7 Emergency</h4></div>
        <div className="p-4"><h3 className="text-5xl mb-2">🔬</h3><h4 className="font-bold text-lg">Modern Labs</h4></div>
        <div className="p-4"><h3 className="text-5xl mb-2">👨‍⚕️</h3><h4 className="font-bold text-lg">Expert Doctors</h4></div>
        <div className="p-4"><h3 className="text-5xl mb-2">💊</h3><h4 className="font-bold text-lg">In-house Pharmacy</h4></div>
      </div>
    </section>
  );
}