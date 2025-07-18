import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, TrendingUp, Users, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";


const BusinessCategories = () => {
  const categories = [
    {
      name: "Restaurants",
      image: "res.png",
      description: "Elevate your dining experience with tailored digital solutions.",
      route: "/service/restaurant", // Changed from "/restaurant" to "/service/restaurant"
    },
    {
      name: "Architecture & Interior",
      image: "int.png",
      description: "Showcase your designs with stunning online portfolios.",
      route: "/service/architect", // Changed from "/services/architecture" to "/service/architecture"
    },
    {
      name: "Retail Stores",
      image: "reatil.png",
      description: "Boost your retail presence with engaging digital campaigns.",
      route: "/service/retail", // Changed from "/services/retail" to "/service/retail"
    },
    {
      name: "Real Estate",
      image: "real.png",
      description: "Market properties effectively with cutting-edge digital tools.",
      route: "/service/real", // Changed from "/services/real-estate" to "/service/real-estate"
    },
    {
      name: "Other",
      image: "other.jpg",
      description: "Custom solutions for unique business needs.",
      route: "/service/other", // Changed from "/services/other" to "/service/other"
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-full bg-geometric-yellow transform skew-x-12 origin-top-right"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-geometric-teal transform skew-x-12 origin-top-right translate-x-32 backdrop-blur-md"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 section-underline">Our Business Categories</h2>
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 pb-12 border-b-2 border-geometric-teal/20`}
            >
              <div className="lg:w-1/2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full min-h-[300px] object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{category.description}</p>
                <Link to={category.route}>
                  <Button
                    className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent border text-lg px-6 py-2"
                  >
                    View Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent border text-lg px-8 py-3"
            >
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-geometric-gray/20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-geometric-yellow transform skew-x-12 origin-top-right"></div>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-geometric-teal transform skew-x-12 origin-top-right translate-x-32 backdrop-blur-md"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <svg width="80" height="20" viewBox="0 0 80 20" className="text-gray-900">
                <path
                  d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
              We create super-rich<br />
              <span className="text-primary">experiences online!</span>
            </h1>
            <div className="mb-8">
              <svg width="80" height="20" viewBox="0 0 80 20" className="text-gray-900">
                <path
                  d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories Section */}
      <BusinessCategories />

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
                  What<br />
                  we<br />
                  <span className="text-primary">do</span><span className="text-primary text-8xl">?</span>
                </h2>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-2 section-underline text-gray-900">Digital.</h3>
                <h4 className="text-lg font-medium mb-4 italic">We create super-rich experiences online!</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WeBeeSocial is a full-scale Digital Marketing Agency based out of New Delhi, India. 
                  We mix our years of experience and knowledge to create solutions for our clients which 
                  are not only performance driven, but also creative. We are running kick-ass digital 
                  campaigns for our clients, even as you read this!
                </p>
                <Button className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent border">
                  ABOUT US <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2 section-underline text-gray-900">And More Digital.</h3>
                <h4 className="text-lg font-medium mb-4 italic">Marketing brands with care</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What is marketing if it is not performance driven?
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We create digital experiences which stick with audiences and also reach the end objective. 
                  Trust us with making your brand visible and desired, with highly focused performance partnering.
                </p>
                <Button className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent border">
                  OUR SERVICES <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative group h-full min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img
                  alt="Cartoon of a man riding a Twitter bird"
                  src="socil.png"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                  <h2 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    Social Media Marketing
                  </h2>
                  <Link to="/service/social-media"> {/* Changed from "/services/social-media" to "/service/social-media" */}
                    <Button className="absolute bottom-4 text-primary border-primary hover:bg-primary hover:text-white bg-transparent border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="relative group h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt="Cartoon of a man with a megaphone on a podium"
                    src="automation.png"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                    <h2 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      Auto Messaging
                    </h2>
                    <Link to="/service/auto-messaging"> {/* Changed from "/services/auto-messaging" to "/service/auto-messaging" */}
                      <Button className="absolute bottom-4 text-primary border-primary hover:bg-primary hover:text-white bg-transparent border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative group h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt="Cartoon of a hand with two fingers"
                    src="inta.jpg"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                    <h2 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      Ad's
                    </h2>
                    <Link to="/service/ads"> {/* Changed from "/services/ads" to "/service/ads" */}
                      <Button className="absolute bottom-4 text-primary border-primary hover:bg-primary hover:text-white bg-transparent border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative group h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt="Cartoon of a woman working at a laptop"
                    src="catalogue.png"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                    <h2 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      Personalised Catalogue
                    </h2>
                    <Link to="/service/catalogue"> {/* Changed from "/services/catalogue" to "/service/catalogue" */}
                      <Button className="absolute bottom-4 text-primary border-primary hover:bg-primary hover:text-white bg-transparent border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative group h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt="Cartoon of a team working on a website"
                    src="website.png"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                    <h2 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      Website Design & Development
                    </h2>
                    <Link to="/service/website"> {/* Changed from "/services/website" to "/service/website" */}
                      <Button className="absolute bottom-4 text-primary border-primary hover:bg-primary hover:text-white bg-transparent border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-geometric-teal hover:text-white text-lg px-6 py-3">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}