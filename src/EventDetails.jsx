import { useParams, Link } from "react-router-dom";

// यहाँ 'export default' लिखना बहुत ज़रूरी है!
export default function EventDetails() {
  const { eventName } = useParams();

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6 text-center">
      
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4 drop-shadow-sm">
        {eventName} Details
      </h1>
      
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Welcome to the detail page for {eventName}. Here you can show photos, pricing, and booking forms for this specific medical service!
      </p>

      <Link to="/" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-1">
        ⬅ Back to Home
      </Link>
      
    </div>
  );
}