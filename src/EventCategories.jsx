import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EventCategories() {
  // 1. शुरुआत में हमारे पास कोई इवेंट नहीं है (खाली लिस्ट [])
  const [events, setEvents] = useState([]);
  
  // 2. एक State यह याद रखने के लिए कि क्या डेटा अभी रास्ते में (Loading) है?
  const [isLoading, setIsLoading] = useState(true);

  // 3. useEffect का इस्तेमाल: "जैसे ही पेज लोड हो, API से डेटा ले आओ"
  useEffect(() => {
    
    // API से डेटा मँगाने वाला फंक्शन
    async function fetchEventsFromAPI() {
      try {
        // असली दुनिया में हम कुछ ऐसा लिखते:
        // let response = await fetch("https://api.abhiman.com/get-events");
        // let data = await response.json();
        
        // चूँकि अभी हमारे पास असली API नहीं है, हम 'setTimeout' से 
        // 2 सेकंड का इंतज़ार करवाकर API की एक्टिंग (Simulation) करेंगे:
        setTimeout(() => {
          const apiData = [
            "Birthdays", "Weddings", "Engagement parties", 
            "Private celebrations", "Corporate gatherings", "Memorial services"
          ];
          
          setEvents(apiData); // 4. API से आया डेटा State में डाल दिया
          setIsLoading(false); // 5. लोडिंग बंद कर दी!
        }, 2000); // 2000 milliseconds = 2 seconds

      } catch (error) {
        console.log("Error fetching data!", error);
      }
    }

    fetchEventsFromAPI();
    
  }, []); // खाली ब्रैकेट का मतलब: यह काम सिर्फ एक बार करना है

  // 6. अगर डेटा अभी आ रहा है, तो लोडिंग स्क्रीन दिखाओ
  if (isLoading) {
    return (
      <div className="bg-[#aeb798] min-h-[50vh] flex items-center justify-center">
        <h2 className="text-3xl text-white font-bold animate-pulse">
          ⏳ Loading Events from API...
        </h2>
      </div>
    );
  }

  // 7. जब डेटा आ जाए, तो अपना असली डिज़ाइन दिखा दो
  return (
    <div className="bg-[#aeb798] py-10 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {events.map((eventName, index) => (
          <Link 
            key={index} 
            to={`/event/${eventName}`}
            className="bg-[#545e46] text-white text-center py-4 px-6 rounded-full font-medium text-lg cursor-pointer hover:bg-[#434b38] hover:scale-105 transition-all duration-300 shadow-md block"
          >
            {eventName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventCategories;