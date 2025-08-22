import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Award, Target, Heart } from "lucide-react";
import { Link } from "lucide-react";

export default function About() {
    const handleGetInTouch = () => {
    window.location.href = '/contact'; 
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">LocBizz</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a passionate team  dedicated to creating 
              super-rich online experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Locbizz began with a clear mission, to help small and local businesses grow in the digital world.
 We saw that many great businesses struggled not because of bad products, but because of poor digital presence. That’s where we stepped in.

We launched Locbizz to bridge that gap — offering services like Google Map listings, customized catalogues, auto messaging, digital ads, and more — all designed to boost visibility and build trust.

              </p>
          
              
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
              To create digital experiences that not only captivate audiences but also drive real business growth for our clients.
We empower local businesses through smart tools like Google Map listings, custom catalogues, auto messaging, and targeted ads.
We believe in the power of data-driven creativity to transform businesses and strengthen the bond between brands and their customers.
Our focus is always on meaningful impact, not just flashy results.
At Locbizz, we’re here to help local go digital — with purpose, passion, and precision.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-card hover:shadow-large transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  We're passionate about what we do and it shows in every project we deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-large transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-muted-foreground">
                  Every strategy we create is designed to deliver measurable, meaningful results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-large transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in working closely with our clients as true partners.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-large transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our work and service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
    

      {/* CTA Section */}
   <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Let's discuss how we can help your business grow!
          </p>
          <Button 
            onClick={handleGetInTouch}
            className="bg-yellow-500 hover:bg-yellow-700 text-white"
            size="lg"
          >
            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}