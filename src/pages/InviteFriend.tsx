
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const InviteFriend = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[240px] md:h-[320px] flex-shrink-0">
        <img
          src="/lovable-uploads/0381906a-0ecc-4be3-8181-1f1267a4d71c.png"
          alt="Invite a Friend"
          className="w-full h-full object-cover"
        />
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 rounded-full shadow-md p-2 md:p-3 flex items-center justify-center transition hover:bg-gray-100"
          aria-label="Close"
          onClick={() => navigate("/")}
        >
          <X size={30} className="text-gray-800" />
        </button>
      </div>
      {/* Card Section */}
      <div className="w-full max-w-lg mx-auto p-6 mt-[-28px] bg-white rounded-t-3xl shadow-lg flex flex-col">
        <h1 className="text-4xl font-extrabold mb-3 text-black">Invite a Friend</h1>
        <p className="text-xl font-bold text-gray-700 mb-4">
          Tell a friend about clickworker and earn €5.00
        </p>
        <p className="text-lg text-gray-600 mb-5">
          Do you have friends or family who might be interested in working at clickworker? Tell them!
        </p>
        <p className="text-base text-gray-700 mb-2">
          For each new Clickworker you get to join, you'll get a referral bonus of <span className="font-semibold">€5.00</span>,
          as soon as he/she earns <span className="font-semibold">€10.00</span>.
        </p>
      </div>
    </div>
  );
};

export default InviteFriend;
