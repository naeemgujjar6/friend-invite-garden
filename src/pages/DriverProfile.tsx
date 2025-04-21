
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, User, Phone, Image as ImageIcon } from "lucide-react";

const PROFILE = {
  name: "Naeem Altaf",
  avatar: "/lovable-uploads/649a8077-eced-4324-b139-8c6e10e8d338.png",
  nic: "3120193661967",
  mobile: "03089007099",
  location: "Ahmedpur East, Punjab, Pakistan"
};

export default function DriverProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-0 bg-[#f3f3f3]">
      {/* Header bar */}
      <div className="w-full bg-lime-400 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" stroke="#8E9196" strokeWidth={2}><rect x="4" y="6.5" width="16" height="2.3" rx="1" /><rect x="4" y="11.5" width="16" height="2.3" rx="1" /><rect x="4" y="16.5" width="10" height="2.3" rx="1" /></svg>
          </div>
          <img src="/lovable-uploads/af9aa2f2-8d48-4fc8-bf54-6ccabc2e855a.png" alt="Logo" className="h-6" />
          <span className="font-extrabold text-xl text-[#3e913b]" style={{letterSpacing: 1}}>Mazdoor</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-[#de177c]">
          <span className="text-sm">0.0</span>
          <span className="text-black/80 text-sm">PKR</span>
        </div>
      </div>

      {/* Profile photo */}
      <div className="flex flex-col items-center mt-6 mb-2">
        <img
          src={PROFILE.avatar}
          alt={PROFILE.name}
          className="rounded-full border-4 border-[#8E9196] w-24 h-24 object-cover shadow-lg"
        />
        <label className="mt-2 text-[#1EAEDB] font-medium cursor-pointer text-sm hover:underline flex items-center gap-1">
          <ImageIcon className="w-4 h-4" />
          Change image
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* Profile form */}
      <form className="w-full max-w-xs flex flex-col gap-3 mt-2">
        <label className="text-xs font-semibold text-[#8E9196]">USERNAME</label>
        <div className="relative">
          <Input value={PROFILE.name} readOnly className="bg-white pl-10" />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
        
        <label className="text-xs font-semibold text-[#8E9196] mt-2">NIC No.</label>
        <Input value={PROFILE.nic} readOnly className="bg-white" />
        
        <label className="text-xs font-semibold text-[#8E9196] mt-2">Mobile no.</label>
        <div className="relative">
          <Input value={PROFILE.mobile} readOnly className="bg-white pl-10" />
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
        
        <label className="text-xs font-semibold text-[#8E9196] mt-2">Location</label>
        <div className="relative">
          <Input value={PROFILE.location} readOnly className="bg-white pr-10" />
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-500" />
        </div>
        
        <Button type="button" className="text-base bg-[#1EAEDB] hover:bg-[#178fb3] font-bold w-full mt-5 mb-2 rounded-xl h-12">
          SAVE
        </Button>
      </form>
    </div>
  );
}
