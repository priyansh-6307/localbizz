import { CheckCircle2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BusinessCategories() {
  const services = [
    "Android Development",
    "Website Development",
    "Graphic Designing",
    "Social Media Marketing",
    "WhatsApp Bot",
  ];

  const tools = ["Payroll", "Gym Tracker"];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-12 px-8">
        
        {/* Left Column - Heading */}
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl font-extrabold leading-tight text-black">
            Our <br />
            <span className="text-green-600">Offerings</span>
          </h2>
        </div>

        {/* Middle Column - Services */}
        <div>
          <h3 className="text-3xl font-bold text-black flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-gray-500" />
            Services
          </h3>
          <div className="h-1 w-16 bg-pink-500 my-3"></div>
          <ul className="space-y-4 mt-6 text-lg text-gray-700 leading-relaxed">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-black transition"
              >
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {service}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/services">
              <Button className="py-4 text-lg rounded-xl bg-black text-white hover:bg-gray-800 transition">
                Know More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Tools */}
        <div>
          <h3 className="text-3xl font-bold text-black flex items-center gap-3">
            <Wrench className="w-8 h-8 text-gray-500" />
            Tools
          </h3>
          <div className="h-1 w-16 bg-pink-500 my-3"></div>
          <ul className="space-y-4 mt-6 text-lg text-gray-700 leading-relaxed">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-black transition"
              >
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-gray-500 italic text-lg">
            Coming Soon...
          </p>
        </div>
      </div>
    </section>
  );
}
