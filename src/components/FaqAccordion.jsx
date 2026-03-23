import { useState } from "react";

export default function FaqAccordion() {
  // मैंने शुरुआत में 0 पास किया है, ताकि पहला सवाल पहले से ही खुला हुआ मिले (यह एक बहुत अच्छी UX प्रैक्टिस है)
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { question: "What are your clinic timings?", answer: "We are open from 8:00 AM to 10:00 PM, Monday to Saturday. Emergency services are available 24/7." },
    { question: "Do you accept health insurance?", answer: "Yes, we accept all major health insurance providers. Please bring your insurance card during your visit." },
    { question: "How can I book an appointment?", answer: "You can book an appointment by filling out the 'Get In Touch' form below, or by calling our 24/7 helpline." },
    { question: "Are video consultations available?", answer: "Absolutely! Dr. Abhiman offers online video consultations for patients who cannot visit the clinic in person." }
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      
      {/* नया, बड़ा और सुंदर हेडिंग सेक्शन */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Got Questions? We've Got Answers</h2>
        <p className="text-lg text-gray-500">Find quick answers to the most common questions about our clinic.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          
          return (
            <div 
              key={index} 
              // 🌟 अगर खुला है तो नीला बॉर्डर और शैडो, वरना नॉर्मल ग्रे बॉर्डर 🌟
              className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${
                isOpen ? "border-blue-400 shadow-lg shadow-blue-100/50 ring-1 ring-blue-50" : "border-gray-200 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              
              <button 
                onClick={() => setOpenFaq(isOpen ? null : index)} 
                className={`w-full text-left p-6 font-bold text-lg flex justify-between items-center transition-colors ${
                  isOpen ? "text-blue-700 bg-blue-50/40" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span className="flex items-center gap-4">
                  {/* गोल Question Mark आइकॉन */}
                  <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors ${
                    isOpen ? "bg-blue-600 text-white shadow-md" : "bg-blue-100 text-blue-600"
                  }`}>
                    ?
                  </span>
                  {faq.question}
                </span>
                
                {/* 🌟 एनिमेटेड + और - बटन (rotate-180 का जादू) 🌟 */}
                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-500 ${
                  isOpen ? "rotate-180 bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-500"
                }`}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              
              {/* 🌟 Smooth Slide-Down Animation 🌟 */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 ml-14 text-gray-600 leading-relaxed bg-blue-50/40 border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
      
    </section>
  );
}