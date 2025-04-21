
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Apple, Google, Info, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff]">
      <div className="w-full max-w-sm px-6 py-8 flex flex-col items-center animate-fade-in rounded-xl">
        {/* Logo */}
        <img
          src="/lovable-uploads/b9dfc0d9-be78-4b7e-a5fb-c2a7d29b18e0.png"
          alt="clickworker logo"
          className="h-10 mb-4 mt-2"
        />
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Login or Sign Up
        </h1>
        {/* Username/Email Input */}
        <Input
          type="text"
          placeholder="Username or E-Mail"
          className="mb-3 bg-gray-100 text-base"
        />
        {/* Continue Button */}
        <Button className="w-full bg-[#1EAEDB] hover:bg-[#178fb3] text-white text-base font-semibold mb-4 rounded-md py-2">
          Continue
        </Button>
        {/* Divider */}
        <div className="flex items-center w-full mb-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        {/* OAuth Buttons */}
        <Button
          variant="outline"
          className="w-full flex items-center gap-3 justify-start border mb-3 text-base font-normal"
        >
          <Apple size={20} />
          Continue with Apple
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-3 justify-start border mb-5 text-base font-normal"
        >
          <Google size={20} className="text-[#EA4335]" />
          Continue with Google
        </Button>
        {/* Help/Info Icons */}
        <div className="flex items-center gap-6 mt-2 mb-0">
          <Info size={22} className="text-gray-400 cursor-pointer hover:scale-105 hover:text-gray-600 transition" />
          <HelpCircle size={22} className="text-gray-400 cursor-pointer hover:scale-105 hover:text-gray-600 transition" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
