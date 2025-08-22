import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Restaurant = [
  {
    title: "Auto Message on WhatsApp",
    description:
      "Automate greetings, quick replies, and order confirmations using WhatsApp's auto-message features.",
    image: "/automessage.png", // image path
  },
  {
    title: "Website Development",
    description:
      "We design and develop responsive, user-friendly websites tailored to showcase your brand and engage customers effectively.",
    image: "/webs.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "We provide end-to-end social media marketing services including ad campaigns, Instagram carousels, content creation, and targeted promotions to grow your brand.",
    image: "/socialmedia.png",
  },
  {
    title: "Designing Services",
    description:
      "We provide creative designing services including logo design, restaurant menus, pamphlets, posters, and other branding materials to make your business stand out.",
    image: "/reald.png",
  },
];

export default function ViewServices() {
  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Services for <span className="text-primary">Restaurants</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grow your restaurant business with our specialized digital services. Here's what we offer:
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {Restaurant.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-[400px] h-auto"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <Card className="shadow-card border-0">
                  <CardHeader className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" />
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
