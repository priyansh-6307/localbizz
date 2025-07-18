import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Digital Marketing Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2024.",
    category: "Trends",
    author: "Priya Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "How to Optimize Your Social Media ROI",
    excerpt: "Learn proven strategies to maximize your return on investment from social media marketing campaigns.",
    category: "Social Media",
    author: "Rahul Gupta",
    date: "March 10, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "The Complete Guide to Performance Marketing",
    excerpt: "Everything you need to know about performance marketing, from strategy to execution and optimization.",
    category: "Performance Marketing",
    author: "Sneha Patel",
    date: "March 5, 2024",
    readTime: "10 min read",
    featured: true
  },
  {
    title: "SEO Best Practices for E-commerce Websites",
    excerpt: "Boost your online store's visibility with these essential SEO strategies specifically designed for e-commerce.",
    category: "SEO",
    author: "Amit Singh",
    date: "February 28, 2024",
    readTime: "8 min read",
    featured: false
  },
  {
    title: "Creating Engaging Content for Generation Z",
    excerpt: "Understand what resonates with Gen Z audiences and how to create content that captures their attention.",
    category: "Content Marketing",
    author: "Neha Kapoor",
    date: "February 20, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "The Future of Marketing Automation",
    excerpt: "Explore how AI and machine learning are revolutionizing marketing automation and what it means for businesses.",
    category: "Marketing Technology",
    author: "Vikram Joshi",
    date: "February 15, 2024",
    readTime: "9 min read",
    featured: false
  }
];

const categories = ["All", "Trends", "Social Media", "SEO", "Performance Marketing", "Content Marketing", "Marketing Technology"];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest digital marketing insights, trends, and strategies 
              from our team of experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                  <div className="h-48 bg-primary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="h-40 bg-secondary/20"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">
              Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}