// 1. हमने यहाँ useEffect को इम्पोर्ट कर लिया है
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { name: "Rahul Verma", text: "The best clinic in the city! The staff is extremely polite and Dr. Abhiman gave me the exact treatment I needed.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=facearea&facepad=2" },
    { name: "Priya Sharma", text: "Very clean facilities and zero waiting time. I highly recommend their cardiology department.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=facearea&facepad=2" },
    { name: "Amit Kumar", text: "Dr. Abhiman is very patient and listens to all problems carefully. The online booking system is also very smooth.", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=facearea&facepad=2" }
  ];

  // 🌟 AUTO SLIDE LOGIC 🌟
  useEffect(() => {
    // यह टाइमर हर 4 सेकंड (4000ms) में स्लाइड को आगे बढ़ाएगा
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 4000); 

    // जब हम किसी और पेज पर जाएँगे, तो यह टाइमर अपने आप बंद हो जाएगा (Cleanup)
    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-blue-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Patients Say</h2>
        
        <div className="relative bg-blue-700 p-10 rounded-2xl shadow-2xl border border-blue-500 min-h-[300px] flex flex-col justify-center overflow-hidden">
          
          {/* Review Content (हमने key={currentSlide} लगाया है ताकि हर बार नया डिज़ाइन स्मूथली लोड हो) */}
          <div key={currentSlide} className="flex flex-col items-center gap-6 animate-[pulse_0.5s_ease-in-out]">
            <img 
              src={testimonials[currentSlide].img} 
              alt="Patient" 
              className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg object-cover" 
            />
            <p className="text-xl italic text-blue-50 max-w-2xl min-h-[80px]">
              "{testimonials[currentSlide].text}"
            </p>
            <h4 className="font-bold text-2xl text-yellow-300">
              - {testimonials[currentSlide].name}
            </h4>
          </div>

          <button onClick={prevSlide} className="absolute left-4 md:-left-4 bg-white text-blue-600 w-12 h-12 rounded-full font-bold text-2xl shadow-lg hover:bg-yellow-400 hover:text-white transition-all z-10">❮</button>
          <button onClick={nextSlide} className="absolute right-4 md:-right-4 bg-white text-blue-600 w-12 h-12 rounded-full font-bold text-2xl shadow-lg hover:bg-yellow-400 hover:text-white transition-all z-10">❯</button>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`h-3 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-yellow-400" : "w-3 bg-blue-400"}`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}