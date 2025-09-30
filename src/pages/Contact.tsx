import React, { useRef } from "react";
// Imports from Shadcn/Custom components (assuming they are functional)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Imports from Lucide React
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// EmailJS Import
import emailjs from "@emailjs/browser";
import { CTASection,Footer } from "@/components/layout/Footer";

// --- Custom Theme Colors (Approximations based on previous components) ---
const THEME_COLORS = {
    BG_LIGHT: '#f7f7f7',     // Equivalent to bg-adko-light-bg
    TEXT_DARK: '#333333',    // Equivalent to text-adko-dark-text
    MUSTARD: '#C99E3A',      // Primary accent color (Mustard/Gold)
    ACCENT_BLUE: '#7EA8BA',  // Secondary accent color (Blue-Gray)
    TEXT_MUTED: '#6b7280',   // Muted gray text
};

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
                    alert("Your query has been sent successfully! Check your email.");
                    formRef.current?.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                }
            );
    };

    return (
        // Use custom light background for the whole container
        <div className="min-h-screen" style={{ backgroundColor: THEME_COLORS.BG_LIGHT, color: THEME_COLORS.TEXT_DARK }}>
            
            {/* Hero Section - Using a dark text background for contrast */}
            <section className="py-20" style={{ backgroundColor: THEME_COLORS.TEXT_DARK }}>
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto text-white">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            Get In <span style={{ color: THEME_COLORS.MUSTARD }}>Touch</span>
                        </h1>
                        <p className="text-xl text-zinc-300 mb-8">
                            Ready to take your business to the next level? Let's discuss your
                            goals and create a strategy that drives real results for your business.
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
                            <h2 className="text-2xl font-black mb-6" style={{ color: THEME_COLORS.TEXT_DARK }}>Contact Information</h2>
                            <div className="space-y-6">
                                
                                {/* Office Card */}
                                <Card className="border shadow-lg" style={{ borderColor: THEME_COLORS.BG_LIGHT, backgroundColor: 'white' }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: THEME_COLORS.MUSTARD }}>
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Our Office</h3>
                                                <p style={{ color: THEME_COLORS.TEXT_MUTED }}>
                                                    16th Park View, Gaur Yamuna City <br />
                                                    Greater Noida, India 203209
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Phone Card */}
                                <Card className="border shadow-lg" style={{ borderColor: THEME_COLORS.BG_LIGHT, backgroundColor: 'white' }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: THEME_COLORS.ACCENT_BLUE }}>
                                                <Phone className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Phone</h3>
                                                <a
                                                    href="https://wa.me/918126605193"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opacity-80 transition-opacity"
                                                    style={{ color: THEME_COLORS.TEXT_MUTED }}
                                                >
                                                    +91 8126605193
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Email Card */}
                                <Card className="border shadow-lg" style={{ borderColor: THEME_COLORS.BG_LIGHT, backgroundColor: 'white' }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: THEME_COLORS.MUSTARD }}>
                                                <Mail className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Email</h3>
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=teamlocbizz@gmail.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opacity-80 transition-opacity"
                                                    style={{ color: THEME_COLORS.TEXT_MUTED }}
                                                >
                                                    teamlocbizz@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Hours Card */}
                                <Card className="border shadow-lg" style={{ borderColor: THEME_COLORS.BG_LIGHT, backgroundColor: 'white' }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: THEME_COLORS.ACCENT_BLUE }}>
                                                <Clock className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-1">Business Hours</h3>
                                                <p style={{ color: THEME_COLORS.TEXT_MUTED }}>
                                                    Monday - Sunday 9:00 AM - 6:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="border shadow-xl" style={{ borderColor: THEME_COLORS.BG_LIGHT, backgroundColor: 'white' }}>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-black" style={{ color: THEME_COLORS.TEXT_DARK }}>Send us a Message</CardTitle>
                                    <p style={{ color: THEME_COLORS.TEXT_MUTED }}>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* First Name */}
                                            <div>
                                                <Label htmlFor="firstName">First Name *</Label>
                                                <Input name="firstName" id="firstName" placeholder="Enter your first name" required />
                                            </div>
                                            {/* Last Name */}
                                            <div>
                                                <Label htmlFor="lastName">Last Name *</Label>
                                                <Input name="lastName" id="lastName" placeholder="Enter your last name" required />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Email */}
                                            <div>
                                                <Label htmlFor="email">Email *</Label>
                                                <Input name="email" id="email" type="email" placeholder="Enter your email" required />
                                            </div>
                                            {/* Phone */}
                                            <div>
                                                <Label htmlFor="phone">Phone *</Label>
                                                <Input name="phone" id="phone" placeholder="Enter your phone number" required />
                                            </div>
                                        </div>
                                        
                                        {/* Services Checkboxes */}
                                        <div>
                                            <Label>Services Interested In</Label>
                                            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Social Media Marketing" /><span>Social Media Marketing</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Personalised Catalogue" /><span>Personalised Catalogue</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Website Development" /><span>Website Development</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Ad's" /><span>Ad's</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Auto Message" /><span>Auto Message</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Business Account Setup" /><span>Business Account Setup</span></label>
                                                <label className="flex items-center space-x-2"><input type="checkbox" name="services" value="Other" /><span>Other</span></label>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea name="message" id="message" placeholder="Tell us about your project, goals, and how we can help..." rows={6} required />
                                        </div>

                                        {/* Submit Button */}
                                        <Button type="submit" className="w-full font-black hover:opacity-90 transition-opacity" size="lg" style={{ backgroundColor: THEME_COLORS.MUSTARD, color: THEME_COLORS.TEXT_DARK }}>
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
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
                        <p className="text-zinc-200 max-w-2xl mx-auto">
                            Have questions? Here are some of the most common questions we receive from our clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "How long does it take to see results?",
                                answer:
                                    "Results vary by service, but typically you'll see initial improvements within 30-60 days, with significant results in 3-6 months.",
                            },
                            {
                                question: "Do you work with small businesses?",
                                answer:
                                    "Yes! We work with businesses of all sizes, from startups to enterprises, and tailor our services to fit your budget and goals.",
                            },
                            {
                                question: "How will you tailor your strategy specifically for our business and our industry?",
                                answer:
                                    "Your business is unique, and your strategy should be too. We start by getting to know your brand, customers, and goals. This allows us to craft a tailored plan that’s focused on delivering the powerful results you need.",
                            },
                            {
                                question: "Why You Should trust us ?",
                                answer:
                                    "We know finding the right partner is a big decision. Our goal is simple: to help businesses like yours grow. But don't just take our word for it, see what our clients are saying in our Work section",
                            },
                        ].map((faq, index) => (
                            <Card key={index} className="border-0 shadow-lg" style={{ backgroundColor: THEME_COLORS.TEXT_DARK }}>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2 text-white">{faq.question}</h3>
                                    <p className="text-zinc-400">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <CTASection/>
            <Footer/>
        </div>
    );
}