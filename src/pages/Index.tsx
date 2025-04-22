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
          <Link
            to="/categories"
            className="inline-block px-6 py-3 rounded-xl bg-purple-500 text-white font-semibold text-lg hover:bg-purple-600 transition mb-2"
          >
            Browse Categories
          </Link>
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
          <a
            href="/rasta"
            className="inline-block px-6 py-3 rounded-xl bg-[#ea384c] text-white font-bold text-lg hover:bg-[#c50e36] transition"
          >
            RASTA Home
          </a>
          <a
            href="/choose-driver"
            className="inline-block px-6 py-3 rounded-xl bg-[#9b87f5] text-white font-bold text-lg hover:bg-[#7E69AB] transition"
          >
            Choose your driver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
