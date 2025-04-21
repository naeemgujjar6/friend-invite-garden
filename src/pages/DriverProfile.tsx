
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, User, Phone, Image as ImageIcon } from "lucide-react";

const DRIVERS = [
  {
    name: "Jamal",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    nic: "3120193661967",
    mobile: "03089007099",
    location: "Lahore, Punjab, Pakistan"
  },
  {
    name: "Rizwan",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    nic: "3120193661111",
    mobile: "03209999999",
    location: "Islamabad, Pakistan"
  },
  {
    name: "Humayun",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    nic: "3120193661222",
    mobile: "03081112222",
    location: "Karachi, Pakistan"
  },
  {
    name: "Maham",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    nic: "3120193661333",
    mobile: "03083334444",
    location: "Rawalpindi, Pakistan"
  },
  {
    name: "Noman",
    avatar: "/lovable-uploads/196fa5fd-6dd5-43d4-b508-b570b9b9c57d.png",
    nic: "3120193661444",
    mobile: "03451234567",
    location: "Multan, Pakistan"
  }
];

export default function DriverProfile() {
  const { name } = useParams();
  const driver = DRIVERS.find(
    d => d.name.toLowerCase() === String(name).toLowerCase()
  );
  const navigate = useNavigate();

  if (!driver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Driver not found</div>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-5 bg-[#f3f3f3]">
      {/* Simulated "Mazdoor" header bar */}
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
      {/* Profile photo section */}
      <div className="flex flex-col items-center mt-6 mb-2">
        <img
          src={driver.avatar}
          alt={driver.name}
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
        <Input value={driver.name} readOnly icon={<User />} className="bg-white" />
        <label className="text-xs font-semibold text-[#8E9196] mt-2">NIC No.</label>
        <Input value={driver.nic} readOnly className="bg-white" />
        <label className="text-xs font-semibold text-[#8E9196] mt-2">Mobile no.</label>
        <Input value={driver.mobile} readOnly icon={<Phone />} className="bg-white" />
        <label className="text-xs font-semibold text-[#8E9196] mt-2">Location</label>
        <div className="relative">
          <Input value={driver.location} readOnly className="pr-10 bg-white" />
          <MapPin className="absolute top-2 right-2 w-5 h-5 text-rose-500" />
        </div>
        <Button type="button" className="text-base bg-[#1EAEDB] hover:bg-[#178fb3] font-bold w-full mt-5 mb-2">SAVE</Button>
      </form>
    </div>
  );
}
