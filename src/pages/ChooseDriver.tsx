
import { Star } from "lucide-react";

const DRIVERS = [
  {
    name: "Jamal",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    rating: 5,
    distance: "2 km",
    time: "7 min",
    fare: "415 PKR",
    highlight: true,
  },
  {
    name: "Rizwan",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    rating: 4,
    distance: "3 km",
    time: "11 min",
    fare: "390 PKR",
    highlight: false,
  },
  {
    name: "Humayun",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    rating: 4,
    distance: "2.8 km",
    time: "9 min",
    fare: "410 PKR",
    highlight: false,
  },
  {
    name: "Maham",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    rating: 5,
    distance: "2 km",
    time: "8 min",
    fare: "430 PKR",
    highlight: false,
  },
  {
    name: "Noman",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    rating: 3,
    distance: "2.9 km",
    time: "5 min",
    fare: "420 PKR",
    highlight: false,
  },
];

const ChooseDriver = () => {
  return (
    <div className="min-h-screen bg-[#222] flex flex-col items-center py-6 px-2">
      <h1 className="text-white text-[2.5rem] font-extrabold mb-8 mt-2 text-center leading-tight shadow-lg" style={{letterSpacing: 1}}>Choose<br />your driver</h1>
      <div className="w-full flex flex-col items-center gap-[-28px]" style={{ maxWidth: 380 }}>
        {DRIVERS.map((driver, i) => (
          <div
            key={driver.name}
            className={`w-[335px] relative flex items-center justify-between mb-[-28px]`}
            style={{
              zIndex: DRIVERS.length - i,
              opacity: driver.highlight ? 1 : 0.35,
              filter: driver.highlight ? "none" : "grayscale(0.7)",
              transform: driver.highlight ? "scale(1)" : "scale(0.94)",
            }}
          >
            <div className={`flex-1 flex items-center rounded-3xl shadow-md bg-white ${driver.highlight ? "py-4 px-5" : "py-3 px-4"}`}>
              <img
                src={driver.avatar}
                alt={driver.name}
                className={`w-12 h-12 rounded-full object-cover border-2 ${driver.highlight ? "border-[#8E9196]" : "border-gray-300"}`}
              />
              <div className="ml-3 flex flex-col">
                <span className="font-bold text-lg text-[#222]">{driver.name}</span>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={16}
                      className={starIdx < driver.rating ? "text-[#F7C948] fill-[#F7C948]" : "text-gray-300"}
                      fill={starIdx < driver.rating ? "#F7C948" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-700 font-semibold text-sm">{driver.distance}</span>
                  <span className="text-gray-700 font-semibold text-sm">{driver.time}</span>
                </div>
              </div>
              <div className="ml-auto flex flex-col items-end min-w-[90px]">
                <span className="text-[#222] font-bold text-2xl mb-2">{driver.fare}</span>
                {driver.highlight ? (
                  <button
                    className="bg-lime-400 text-[#222] hover:bg-lime-300 font-bold px-5 py-1.5 rounded-lg text-base shadow transition"
                  >
                    Accept
                  </button>
                ) : (
                  <button
                    className="bg-gray-200 text-gray-500 font-semibold px-5 py-1.5 rounded-lg text-base cursor-default"
                    disabled
                  >
                    Accept
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseDriver;
