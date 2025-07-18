import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Other= [
  {
    title: "Google Map Listing",
    description:
      "Get your restaurant listed on Google Maps to increase visibility and attract local customers."
  },
  {
    title: "Google Ads",
    description:
      "Run targeted Google Ads to reach potential customers searching for food or restaurants near them."
  },
  {
    title: "WhatsApp Business Account Setup",
    description:
      "Set up and verify your WhatsApp Business account to communicate professionally with your customers."
  },
  {
    title: "Auto Message on WhatsApp",
    description:
      "Automate greetings, quick replies, and order confirmations using WhatsApp's auto-message features."
  },
  {
    title: "Personalised Menu",
    description:
      "Design a personalized and digital menu that suits your brand and can be shared easily online."
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Other.map((service, index) => (
            <Card key={index} className="shadow-card border-0">
              <CardHeader className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" />
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
