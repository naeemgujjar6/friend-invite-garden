
import {
  Bell,
  MapPin,
  CloudSun,
  AlertTriangle,
  Map,
  CalendarDays,
  CreditCard,
  FileCheck,
  Calendar,
  History,
  Building,
  Phone,
  MessageSquare,
  AlertCircle,
  GraduationCap,
  Newspaper
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  { icon: <AlertTriangle size={32} className="text-[#ea384c]" />, label: "Traffic Advisory" },
  { icon: <Map size={32} className="text-[#ea384c]" />, label: "Route Planner" },
  { icon: <CreditCard size={32} className="text-[#ea384c]" />, label: "Challan Payment" },
  { icon: <FileCheck size={32} className="text-[#ea384c]" />, label: "E-License\n(Get your License)" },
  { icon: <Calendar size={32} className="text-[#ea384c]" />, label: "Schedule Appointment" },
  { icon: <History size={32} className="text-[#ea384c]" />, label: "Cancel Appointments/\nHistory" },
  { icon: <Building size={32} className="text-[#ea384c]" />, label: "Driving License Center" },
  { icon: <Phone size={32} className="text-[#ea384c]" />, label: "Emergency Call 15" },
  { icon: <MessageSquare size={32} className="text-[#ea384c]" />, label: "Traffic Feedback/\nComplaints" },
  { icon: <AlertCircle size={32} className="text-[#ea384c]" />, label: "Incidents" },
  { icon: <GraduationCap size={32} className="text-[#ea384c]" />, label: "Driving School Locations" },
  { icon: <Newspaper size={32} className="text-[#ea384c]" />, label: "News and Events" }
];

const RastaHome = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col w-full">
      {/* Header */}
      <div className="relative w-full flex-shrink-0">
        <div className="bg-gradient-to-br from-[#ea384c] to-[#c50e36] h-[108px] flex items-center px-5 justify-between">
          <Bell size={26} className="text-white" />
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/572b5c98-03d9-4d81-9e08-f36f681d1968.png"
              alt="RASTA logo"
              className="h-8 mr-2"
              style={{ filter: "drop-shadow(0 2px 2px #3338)" }}
            />
            <span className="text-3xl tracking-widest font-extrabold text-[#fff] font-sans" style={{ letterSpacing: 1 }}>RASTA</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center text-white text-sm font-semibold gap-2">
              <MapPin size={18} className="text-white" />
              Model Town
            </span>
            <span className="text-white text-base">38°</span>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="flex-1 bg-[#fff] px-3 py-4">
        <div className="grid grid-cols-3 gap-x-1 gap-y-6">
          {FEATURES.map((feat, i) => (
            <div key={feat.label + i} className="flex flex-col items-center text-center cursor-pointer transition hover:scale-105 rounded-lg p-2 select-none">
              <div className="flex items-center justify-center w-14 h-14 bg-[#eee] rounded-full shadow-sm mb-2">
                {feat.icon}
              </div>
              <span className="text-[15px] font-medium text-[#222] whitespace-pre-line">{feat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RastaHome;
