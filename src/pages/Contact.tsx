import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Plus, Minus, ArrowUp, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

const THEME_COLORS = {
    BG_DARK: '#09090b',     // Zinc-950
    CARD_BG: '#18181b',     // Zinc-900
    TEXT_WHITE: '#ffffff',
    TEXT_MUTED: '#a1a1aa',  // Zinc-400
    MUSTARD: '#C99E3A',
    ACCENT_BLUE: '#7EA8BA',
};

const faqs = [
    {
        number: "01",
        question: "What does Locbizz do?",
        answer: "Locbizz is a specialized digital agency providing strategic ad campaigns, cinematic 3D ad production, high-performance website development, and comprehensive brand consultancy. We combine creative excellence with data-driven strategy to help brands scale effectively in the modern market."
    },
    {
        number: "02",
        question: "What is the process we follow while delivering a project?",
        answer: "Our Process Flow is designed for transparency and excellence:\n\n1. Client Call: Define project goals and scope.\n2. Storyboarding: Create or review the visual narrative.\n3. Client Review: Approve frames before moving to full production.\n4. Video Creation & Editing: Produce the final cinematic assets."
    },
    {
        number: "03",
        question: "How long does it take to see results?",
        answer: "Results vary by service, but typically you'll see initial improvements within 30-60 days, with significant results in 3-6 months. For content production, we usually deliver within 7-14 days."
    },
    {
        number: "04",
        question: "Why should you trust us?",
        answer: "We know finding the right partner is a big decision. Our goal is simple: to help businesses like yours grow. We focus on ROI-driven creativity rather than just aesthetics, ensuring your investment leads to scale."
    }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: any, isOpen: boolean, toggle: () => void }) => {
    return (
        <div className="border-b border-zinc-800 py-6">
            <button 
                onClick={toggle}
                className="w-full flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <span className="text-zinc-500 font-mono text-sm">{faq.number}.</span>
                    <span className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{faq.question}</span>
                </div>
                {isOpen ? (
                    <ArrowUp className="w-5 h-5 text-white" />
                ) : (
                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="mt-4 ml-12 text-zinc-400 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default as in image

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_qwalnde",
                "template_vs7jftz",
                formRef.current!,
                "rcPHL4gsnwp5e0Akk"
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
        <div className="min-h-screen font-sans" style={{ backgroundColor: THEME_COLORS.BG_DARK, color: THEME_COLORS.TEXT_WHITE }}>
            
            {/* Hero Section */}
            <section className="py-24 border-b border-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6">
                            Let's build something <span className="text-zinc-500">extraordinary.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
                            Ready to take your business to the next level? Drop us a message below and let's start the conversation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-12">
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">WhatsApp</p>
                                            <a href="https://wa.me/918126605193" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-zinc-400 transition-colors">
                                                +91 8126605193
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                                            <a href="mailto:teamlocbizz@gmail.com" className="text-lg hover:text-zinc-400 transition-colors">
                                                teamlocbizz@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Business Hours</p>
                                            <p className="text-lg">Mon - Sun, 9 AM - 6 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12 rounded-2xl">
                                <h2 className="text-2xl font-medium mb-2">Send us a Message</h2>
                                <p className="text-zinc-400 mb-10 font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
                                
                                <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-xs uppercase tracking-widest text-zinc-500">First Name *</Label>
                                            <Input name="firstName" id="firstName" className="bg-transparent border-zinc-800 focus:border-zinc-500 h-12 rounded-none" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-xs uppercase tracking-widest text-zinc-500">Last Name *</Label>
                                            <Input name="lastName" id="lastName" className="bg-transparent border-zinc-800 focus:border-zinc-500 h-12 rounded-none" placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500">Email *</Label>
                                            <Input name="email" id="email" type="email" className="bg-transparent border-zinc-800 focus:border-zinc-500 h-12 rounded-none" placeholder="john@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-500">Phone *</Label>
                                            <Input name="phone" id="phone" className="bg-transparent border-zinc-800 focus:border-zinc-500 h-12 rounded-none" placeholder="+91 ..." required />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <Label className="text-xs uppercase tracking-widest text-zinc-500">Services Interested In</Label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {["Cinematic Ad Production", "Strategic Campaigns", "Website Development", "Brand Consultancy", "Other"].map((service) => (
                                                <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                                                    <input type="checkbox" name="services" value={service} className="w-4 h-4 rounded border-zinc-800 bg-transparent text-white focus:ring-zinc-500 focus:ring-offset-zinc-950" />
                                                    <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">{service}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500">Message *</Label>
                                        <Textarea name="message" id="message" className="bg-transparent border-zinc-800 focus:border-zinc-500 rounded-none min-h-[150px]" placeholder="Tell us about your project..." required />
                                    </div>

                                    <Button type="submit" className="w-full h-14 bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-bold uppercase tracking-widest text-xs">
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 border-t border-zinc-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-700 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">F.A.Q.</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-medium text-white mb-4">Questions? We got answers.</h2>
                    </div>
                    
                    <div className="mt-12">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                faq={faq} 
                                isOpen={openIndex === index} 
                                toggle={() => setOpenIndex(openIndex === index ? null : index)} 
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}