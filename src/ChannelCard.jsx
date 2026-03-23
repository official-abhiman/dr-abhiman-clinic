// 1. हमने 'useState' के साथ 'useEffect' को भी मँगा लिया
import { useState, useEffect } from "react";

function ChannelCard({ channelName, category, subscribers }) {
  
  const [isSubscribed, setIsSubscribed] = useState(false);

  // 2. यहाँ हमने useEffect का जादू लगाया है!
  useEffect(() => {
    if (isSubscribed) {
      // अगर सब्सक्राइब किया है, तो ब्राउज़र का टैब यह कर दो:
      document.title = `${channelName} Subscribed! 🎉`;
    } else {
      // अगर नहीं किया है, तो टैब नॉर्मल रखो:
      document.title = "React App";
    }
  }, [isSubscribed, channelName]); 
  // ↑ इसे Dependency Array कहते हैं। 
  // इसका मतलब है: "यह इफ़ेक्ट सिर्फ तभी चलाना जब 'isSubscribed' बदले।"

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-2xl w-80 text-center transform transition duration-500 hover:scale-105 m-4">
      
      <h2 className="text-2xl font-bold text-yellow-400 mb-2">📺 {channelName}</h2>
      
      <div className="text-gray-300 text-lg mb-4">
        <p>Category: <span className="text-white font-semibold">{category}</span></p>
        <p>Subscribers: <span className="text-green-400 font-semibold">{subscribers}</span></p>
      </div>
      
      <button 
        onClick={() => setIsSubscribed(!isSubscribed)}
        className={`px-8 py-2 rounded-full font-bold shadow-md transition-colors text-white ${
          isSubscribed ? "bg-gray-500 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {isSubscribed ? "Subscribed ✅" : "Subscribe"}
      </button>

    </div>
  );
}

export default ChannelCard;