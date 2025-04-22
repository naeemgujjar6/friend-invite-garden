
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserRound } from "lucide-react";

const employees = [
  { name: "John Smith", role: "Software Engineer", years: "5+ years" },
  { name: "Sarah Johnson", role: "Product Manager", years: "7+ years" },
  { name: "Mike Brown", role: "UX Designer", years: "3+ years" },
  { name: "Emily Davis", role: "Marketing Lead", years: "4+ years" },
  { name: "David Wilson", role: "Sales Director", years: "6+ years" },
];

const Employees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Our Team</h1>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {employees.map((employee) => (
              <CarouselItem key={employee.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="mx-2">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <UserRound className="w-12 h-12 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
                    <p className="text-gray-600 mb-2">{employee.role}</p>
                    <Badge variant="secondary">{employee.years}</Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Employees;
