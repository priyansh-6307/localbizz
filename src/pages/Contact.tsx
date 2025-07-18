import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qwalnde", // Replace with your EmailJS service ID
        "template_vs7jftz", // Replace with your template ID
        formRef.current!,
        "rcPHL4gsnwp5e0Akk" // Replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to take your digital marketing to the next level? Let's discuss your goals and create a strategy that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Our Office</h3>
                        <p className="text-muted-foreground">
                          16th Park View, Gaur Yamuna City
                          <br />
                          Greater Noida, India 203209
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">diskcuser@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Sunday 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input name="firstName" id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input name="lastName" id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input name="email" id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input name="phone" id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input name="company" id="company" placeholder="Enter your company name" />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select name="service">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="social-media">Social Media Marketing</SelectItem>
                            <SelectItem value="catalogue">Personalised Catalogue</SelectItem>
                            <SelectItem value="website-dev">Website Development</SelectItem>
                            <SelectItem value="ads">Ad's</SelectItem>
                            <SelectItem value="automsg">Auto Message</SelectItem>
                            <SelectItem value="business-setup">Business Account Setup</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Here are some of the most common questions we receive from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service, but typically you'll see initial improvements within 30-60 days, with significant results in 3-6 months.",
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes! We work with businesses of all sizes, from startups to enterprises, and tailor our services to fit your budget and goals.",
              },
              {
                question: "What's included in your monthly reports?",
                answer: "Our reports include detailed analytics, performance metrics, insights, recommendations, and progress towards your goals.",
              },
              {
                question: "Can you help with international markets?",
                answer: "Absolutely! We have experience with global campaigns and can help you expand into international markets effectively.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
