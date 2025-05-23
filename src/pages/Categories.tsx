import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Electrician", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Plumber", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Welder", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Camera Installation", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Cloth Dryer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Painter", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Home Construction", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Tile Mason", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Ac Installation", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Carpenter", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Solar Panels Installer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Helper", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Glass & Door Expert", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Beautician", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Quran Teacher", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Driver", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Teacher", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "App Developer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Web Developer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Graphic Designer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Car Washer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Furniture", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Interior Designer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Software Developer", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Food Points", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
  { name: "Travel Agency", image: "/lovable-uploads/760ab183-dc4b-41b4-9f88-aadd6077fc9b.png" },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <Badge variant="secondary" className="w-full justify-center text-xs font-normal">
                  {category.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
