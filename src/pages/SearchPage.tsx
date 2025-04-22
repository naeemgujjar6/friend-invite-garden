
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, BellDot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  "Home & Garden",
  "Hair Extensions & Wigs",
  "Men's Clothing",
  "Accessories",
  "Consumer Electronics",
  "Home Improvement & Lighting",
  "Home Appliances",
  "Automotive & Motorcycle",
  "Luggages & Bags",
  "Shoes"
];

const recommendedItems = [
  { name: "Laptop Batteries", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Tie Clips & Cufflinks", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Toothbrushes Head", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Edge & Corner Guards", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Cloth Dryer", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Pants", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Material Paper", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Floor Socks", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Towel", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Eye Massage Instrument", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Solar Panels", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" },
  { name: "Adhesive Paper", image: "/lovable-uploads/f68e7d41-d7d1-4863-944a-d587ee2f7975.png" }
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-10 px-4 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Back</span>
            ←
          </Button>
          
          <div className="flex-1 flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2">
            <Input 
              type="text"
              placeholder="wind turbine generator"
              className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto text-sm"
            />
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>

          <Button variant="ghost" className="w-8 h-8 p-0 relative">
            <BellDot className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center">
              92
            </span>
          </Button>
        </div>
      </div>

      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <ScrollArea className="w-40 h-[calc(100vh-4rem)] border-r">
          <div className="p-4">
            <h2 className="text-red-500 mb-4 font-medium">Recommended for you</h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="w-full justify-start font-normal text-sm h-auto py-1"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-medium mb-4">Recommended for you</h2>
          <div className="grid grid-cols-3 gap-4">
            {recommendedItems.map((item) => (
              <Card key={item.name} className="p-4 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-sm text-center">{item.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
