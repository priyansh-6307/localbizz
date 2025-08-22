import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Briefcase, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function WorkWithUs() {
  const formRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    position: '',
    experience: '',
    skills: '',
    portfolio: '',
    motivation: '',
    availability: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      position: '',
      experience: '',
      skills: '',
      portfolio: '',
      motivation: '',
      availability: ''
    });
  };

  const handleSubmit = () => {
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'dateOfBirth', 'skills', 'motivation'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Create form data for EmailJS
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      position: formData.position || 'Not specified',
      experience: formData.experience || 'Not specified',
      skills: formData.skills,
      portfolio: formData.portfolio || 'Not provided',
      motivation: formData.motivation,
      availability: formData.availability || 'Not specified'
    };

    emailjs
      .send(
        "service_qwalnde", // Replace with your EmailJS service ID
        "template_vs7jftz", // Replace with your template ID for job applications
        templateParams,
        "rcPHL4gsnwp5e0Akk" // Replace with your public key
      )
      .then(
        () => {
          // Clear the form
          resetForm();
          
          // Show success notification
          setShowNotification(true);
          
          // Hide notification after 5 seconds
          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
        },
        (error) => {
          alert("Failed to send application. Please try again.");
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <CheckCircle className="h-5 w-5" />
          <span>Query has been successfully sent! Check your email.</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="text-blue-600">With Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our dynamic team and help us create amazing digital marketing solutions. We're always looking for talented individuals who are passionate about innovation and growth.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Collaborative Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>Growth Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Join Our Team</CardTitle>
                <p className="text-gray-600">
                  Tell us about yourself and why you'd like to work with us. We'll get back to you within 48 hours.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-b pb-2">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input 
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="Enter your full name" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          type="email" 
                          placeholder="Enter your email address" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          type="tel" 
                          placeholder="Enter your phone number" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input 
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          type="date" 
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-b pb-2">Professional Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="position">Position Interested In</Label>
                        <Select onValueChange={(value) => handleInputChange('position', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="digital-marketing">Digital Marketing Specialist</SelectItem>
                            <SelectItem value="web-developer">Web Developer</SelectItem>
                            <SelectItem value="graphic-designer">Graphic Designer</SelectItem>
                            <SelectItem value="content-writer">Content Writer</SelectItem>
                            <SelectItem value="social-media">Social Media Manager</SelectItem>
                            <SelectItem value="sales">Sales Executive</SelectItem>
                            <SelectItem value="business-analyst">Business Analyst</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select onValueChange={(value) => handleInputChange('experience', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years (Fresh Graduate)</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="skills">What can you provide us? (Skills & Services) *</Label>
                      <Textarea
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        placeholder="Tell us about your skills, expertise, and what you can bring to our team. For example: Web development, Digital marketing, Content creation, etc."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio">Portfolio/Website URL</Label>
                      <Input 
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange('portfolio', e.target.value)}
                        type="url" 
                        placeholder="https://your-portfolio.com" 
                      />
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-b pb-2">Tell Us More</h3>
                    
                    <div>
                      <Label htmlFor="motivation">Why do you want to work with us? *</Label>
                      <Textarea
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        placeholder="Tell us what motivates you to join our team, what interests you about our company, and how you see yourself contributing to our growth..."
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability">When can you start?</Label>
                      <Select onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                          <SelectItem value="1-month">1 month notice</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Application..."
                    ) : (
                      <>
                        Submit Application <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Our Team?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a dynamic work environment with opportunities for growth and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement opportunities in a fast-growing company.",
              },
              {
                title: "Flexible Environment",
                description: "Work-life balance with flexible hours and remote work options.",
              },
              {
                title: "Creative Projects",
                description: "Work on exciting digital marketing projects for diverse clients across industries.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}