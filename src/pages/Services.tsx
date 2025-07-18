import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, TrendingUp, Zap, Globe, Lightbulb, Search, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build engaging communities and drive conversions through strategic social media campaigns.",
    features: [
      "Content Strategy & Creation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships",
      "Social Media Analytics"
    ]
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results and maximize your ROI.",
    features: [
      "PPC Campaign Management",
      "Conversion Optimization",
      "Retargeting Strategies",
      "A/B Testing",
      "Performance Analytics"
    ]
  },
  {
    icon: TrendingUp,
    title: "Web Analytics",
    description: "Deep insights and analytics to understand your audience and optimize performance.",
    features: [
      "Google Analytics Setup",
      "Custom Dashboard Creation",
      "User Behavior Analysis",
      "Conversion Tracking",
      "Data Visualization"
    ]
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your visibility and organic traffic with comprehensive SEO strategies.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building",
      "Local SEO"
    ]
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    features: [
      "Custom Website Design",
      "Mobile-First Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization"
    ]
  },
  {
    icon: Lightbulb,
    title: "Integrated Digital Solutions",
    description: "Comprehensive digital strategies that connect all your marketing touchpoints.",
    features: [
      "Digital Strategy Planning",
      "Brand Identity Development",
      "Marketing Automation",
      "CRM Integration",
      "Multi-channel Campaigns"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer comprehensive digital marketing services designed to help your business 
              thrive in the digital landscape. From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Strategy", description: "We develop a comprehensive digital marketing strategy." },
              { step: "03", title: "Execute", description: "We implement the strategy with precision and creativity." },
              { step: "04", title: "Optimize", description: "We continuously monitor and optimize for better results." }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose WeBeeSocial?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Data-Driven Approach</h3>
                    <p className="text-muted-foreground">Every decision is backed by data and analytics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Creative Excellence</h3>
                    <p className="text-muted-foreground">We combine creativity with strategy for maximum impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dedicated Team</h3>
                    <p className="text-muted-foreground">A dedicated team of experts working on your success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Let's discuss your digital marketing needs and create a strategy 
                that drives real results for your business.
              </p>
              <Button variant="secondary" size="lg">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}