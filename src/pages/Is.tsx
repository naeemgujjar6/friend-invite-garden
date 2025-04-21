
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Book,
  FileText,
  MapPin,
  CreditCard,
  Wallet,
  Gift,
  Award,
  User,
  Heart,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Settings,
  Home,
  Calendar,
  Tag,
  Menu,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuSections = [
  {
    items: [
      { icon: <ShoppingCart />, label: "Orders" },
      { icon: <Book />, label: "Bookings" },
      { icon: <FileText />, label: "Quotes" },
      { icon: <MapPin />, label: "Addresses" },
    ],
  },
  {
    items: [
      { icon: <CreditCard />, label: "Payments" },
      { icon: <Wallet />, label: "Wallet" },
      { icon: <Gift />, label: "Vouchers" },
      { icon: <Award />, label: "Reward Points" },
    ],
  },
  {
    items: [
      { icon: <User />, label: "Referral" },
      { icon: <Heart />, label: "Wish List" },
    ],
  },
  {
    items: [
      { icon: <PhoneCall />, label: "Contact Us" },
      { icon: <MessageSquare />, label: "Communication" },
      { icon: <HelpCircle />, label: "Help" },
      { icon: <Settings />, label: "Settings" },
    ],
  },
];

const bottomNav = [
  { icon: <Home />, label: "Home", to: "/" },
  { icon: <Calendar />, label: "Booking", to: "#" },
  { icon: <Users />, label: "My Experts", to: "#" },
  { icon: <Tag />, label: "Offers", to: "#" },
  { icon: <Menu />, label: "More", to: "/is" },
];

export default function Is() {
  return (
    <div className="relative min-h-screen bg-[#fafbfc] flex flex-col pb-20">
      {/* Header */}
      <div className="w-full flex items-center px-4 py-3 bg-[#ea384c]">
        <div className="flex-1 flex items-center gap-2">
          <img src="/lovable-uploads/7d3472d0-6958-4a10-b076-124708dffefa.png" alt="Profile" className="w-6 h-6 rounded-full bg-white" />
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-block">
            <svg width="22" height="22" fill="none" stroke="#fff"><path d="M12 6v4l3 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
          </span>
          <span className="font-bold text-base text-white flex items-center gap-1">
            <span className="text-sm">🇬🇧</span>
            <svg width="13" height="13" fill="#fff"><circle cx="6.5" cy="6.5" r="6.5"/></svg>
          </span>
        </div>
      </div>
      {/* Menu */}
      <div className="flex-1 overflow-y-auto p-3 pt-4">
        <Card className="shadow-none border-none bg-transparent">
          <CardContent className="flex flex-col gap-4 p-0">
            {menuSections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-xs">
                {section.items.map((item, i) => (
                  <Link to="#" className="flex items-center px-3 py-3 gap-3 border-b last:border-b-0 hover:bg-gray-50 transition" key={item.label}>
                    <span className="w-6 h-6 flex items-center justify-center text-[#aaa]">{item.icon}</span>
                    <span className="text-base text-gray-900 flex-1">{item.label}</span>
                    <span className="text-gray-300">&gt;</span>
                  </Link>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between px-0 z-20">
        {bottomNav.map((item, idx) => (
          <Link key={item.label} to={item.to} className={`flex flex-col items-center justify-center flex-1 py-2 ${item.label === "More" ? "text-[#ea384c]" : "text-[#aaa]"}`}>
            <span className="w-6 h-6 flex items-center justify-center">{item.icon}</span>
            <span className="text-xs mt-0.5">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
