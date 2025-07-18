import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Growth Campaign",
    client: "Fashion Retailer",
    category: "Performance Marketing",
    results: [
      "300% increase in online sales",
      "150% growth in website traffic",
      "45% reduction in CAC"
    ],
    tags: ["PPC", "Social Media", "Analytics"]
  },
  {
    title: "Brand Awareness Campaign",
    client: "Tech Startup",
    category: "Social Media Marketing",
    results: [
      "2M+ social media impressions",
      "85% increase in brand mentions",
      "200% follower growth"
    ],
    tags: ["Content Strategy", "Influencer Marketing", "Community Building"]
  },
  {
    title: "Local Business SEO",
    client: "Restaurant Chain",
    category: "Search Engine Optimization",
    results: [
      "500% increase in local searches",
      "75% more online reservations",
      "Top 3 ranking for key terms"
    ],
    tags: ["Local SEO", "Content Marketing", "Review Management"]
  },
  {
    title: "Website Redesign & Development",
    client: "Professional Services",
    category: "Web Development",
    results: [
      "60% improvement in page speed",
      "40% increase in conversion rate",
      "95% mobile usability score"
    ],
    tags: ["UX/UI Design", "Development", "Performance Optimization"]
  },
  {
    title: "Multi-Channel Campaign",
    client: "SaaS Company",
    category: "Integrated Marketing",
    results: [
      "250% increase in lead generation",
      "180% growth in trial signups",
      "35% improvement in LTV"
    ],
    tags: ["Email Marketing", "PPC", "Content Marketing", "Marketing Automation"]
  },
  {
    title: "Mobile App Marketing",
    client: "FinTech Startup",
    category: "Performance Marketing",
    results: [
      "1M+ app downloads",
      "4.8 star app store rating",
      "25% monthly user retention"
    ],
    tags: ["App Store Optimization", "Mobile PPC", "Influencer Marketing"]
  }
];

export default function Work() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Take a look at some of our successful digital marketing campaigns and the 
              incredible results we've achieved for our clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">Results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Campaigns" },
              { number: "150+", label: "Happy Clients" },
              { number: "2M+", label: "Social Impressions" },
              { number: "300%", label: "Average ROI Increase" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore detailed case studies showcasing our strategic approach and the 
              exceptional results we've delivered for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-2">{project.client}</p>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have experience working with clients across diverse industries, 
              understanding their unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "E-commerce", "Technology", "Healthcare", "Finance", 
              "Education", "Real Estate", "Food & Beverage", "Fashion",
              "Automotive", "Travel", "Entertainment", "Professional Services"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-card hover:shadow-large transition-all">
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "WeBeeSocial transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations.",
                author: "Sarah Johnson",
                company: "Tech Innovations Inc."
              },
              {
                quote: "The results speak for themselves. Our online sales increased by 300% within just 6 months of working with WeBeeSocial.",
                author: "Raj Patel",
                company: "Fashion Forward"
              },
              {
                quote: "Their team's expertise in performance marketing helped us achieve our best quarter ever. Highly recommended!",
                author: "Michael Chen",
                company: "GrowthCorp"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together and achieve remarkable results for your business.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}