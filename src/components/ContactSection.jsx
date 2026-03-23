// 1. हमने यहाँ useState को इम्पोर्ट कर लिया है
import { useState } from "react";

export default function ContactSection() {
  
  // 2. फॉर्म के डेटा को याद रखने के लिए State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  // 3. फॉर्म का स्टेटस (idle = खाली, submitting = भेज रहा है, success = चला गया)
  const [status, setStatus] = useState("idle");

  // जब यूज़र किसी भी डिब्बे में कुछ टाइप करेगा, तो यह फंक्शन चलेगा
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // जब यूज़र "Submit Request" बटन दबाएगा
  const handleSubmit = (e) => {
    e.preventDefault(); // यह पेज को रीफ्रेश होने से रोकेगा
    setStatus("submitting"); // बटन पर "Sending..." दिखाने के लिए

    // इंटरनेट (API) की एक्टिंग: 2 सेकंड का इंतज़ार
    setTimeout(() => {
      setStatus("success"); // 2 सेकंड बाद सक्सेस मैसेज दिखाओ
      
      // 5 सेकंड बाद वापस फॉर्म को नॉर्मल (idle) कर दो और खाली कर दो
      setTimeout(() => {
        setStatus("idle");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }, 5000);
      
    }, 2000);
  };

  return (
    <section className="bg-blue-50 py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Image & Contact Info (यह हिस्सा वैसा ही है) */}
        <div className="md:w-5/12 relative text-white">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" alt="Doctor" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
          <div className="relative p-10 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Let's Talk About Your Health</h3>
            <p className="mb-10 text-blue-100">Fill out the form or reach us directly.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4"><div className="bg-blue-600 p-3 rounded-full text-xl shadow-lg">📞</div><div><p className="text-sm text-blue-200">Call Us</p><p className="font-bold">+91 98765 43210</p></div></div>
              <div className="flex items-center gap-4"><div className="bg-blue-600 p-3 rounded-full text-xl shadow-lg">✉️</div><div><p className="text-sm text-blue-200">Email</p><p className="font-bold">support@drabhiman.com</p></div></div>
              <div className="flex items-center gap-4"><div className="bg-blue-600 p-3 rounded-full text-xl shadow-lg">📍</div><div><p className="text-sm text-blue-200">Visit Us</p><p className="font-bold">Bhatpara, West Bengal</p></div></div>
            </div>
          </div>
        </div>

        {/* Right Side: The Functional Form */}
        <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-center relative">
          
          {/* 🌟 जादू यहाँ है: अगर सक्सेस है, तो मैसेज दिखाओ, वरना फॉर्म दिखाओ 🌟 */}
          {status === "success" ? (
            
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl text-center transform transition-all duration-500 scale-100">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-green-700 mb-2">
                Thank You, {formData.firstName}!
              </h3>
              <p className="text-green-600 text-lg">
                Your request has been successfully submitted. Our medical team will contact you shortly.
              </p>
            </div>

          ) : (

            <>
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-8">We will get back to you within 2 hours.</p>

              {/* 🌟 Form टैग में onSubmit लगा दिया 🌟 */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <input 
                    type="text" name="firstName" required
                    value={formData.firstName} onChange={handleChange}
                    placeholder="First Name" 
                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                  <input 
                    type="text" name="lastName" required
                    value={formData.lastName} onChange={handleChange}
                    placeholder="Last Name" 
                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                </div>
                <input 
                  type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="Email Address" 
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400" 
                />
                <textarea 
                  name="message" required
                  value={formData.message} onChange={handleChange}
                  placeholder="Briefly describe your problem..." rows="4" 
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                
                {/* 🌟 बटन का टेक्स्ट स्टेट के हिसाब से बदलेगा 🌟 */}
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className={`text-white font-bold py-4 rounded-xl mt-2 transition-all shadow-lg ${
                    status === "submitting" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"
                  }`}
                >
                  {status === "submitting" ? "Sending Request... ⏳" : "Submit Request 🚀"}
                </button>
              </form>
            </>

          )}
        </div>
      </div>
    </section>
  );
}