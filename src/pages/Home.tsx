import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessCategories = () => {
  const categories = [
    { name: "Restaurants", route: "/service/restaurant" },
    { name: "Architecture & Interior", route: "/service/architect" },
    { name: "Retail Stores", route: "/service/retail" },
    { name: "Real Estate", route: "/service/real" },
    { name: "Other", route: "/service/other" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-regular text-gray-900 mb-12">Explore Business Categories</h2>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          {categories.map((category) => (
            <Link to={category.route} key={category.name}>
              <Button
                className="w-full text-white text-2xl font-light py-7 bg-black hover:bg-gray-800 transition-all duration-300 rounded-xl shadow-md"
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCategories;
