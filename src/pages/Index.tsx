import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600 mb-4">
          Start building your amazing project here!
        </p>
        <div className="flex flex-col gap-2 items-center mt-4">
          <a
            href="/login"
            className="inline-block px-6 py-3 rounded-xl bg-[#1EAEDB] text-white font-semibold text-lg hover:bg-[#178fb3] transition mb-2"
          >
            Login / Sign Up
          </a>
          <a
            href="/invite"
            className="inline-block px-6 py-3 rounded-xl bg-black text-white font-semibold text-lg hover:bg-gray-900 transition"
          >
            Invite a Friend
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
