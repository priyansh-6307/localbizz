import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";



export default function Work() {
  const handleclick=()=>{
     window.location.href = '/contact'
  }
  return (
    <div className="min-h-screen">
   
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
              "E-commerce", "Technology", "Healthcare", , 
              , "Real Estate", , ,
            , , "Small Business", "Professional Services"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-card hover:shadow-large transition-all">
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 y text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together and achieve remarkable results for your business.
          </p>
          <Button variant="secondary" size="lg" onClick={handleclick}>
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}