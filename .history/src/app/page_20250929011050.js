// import HeroSection from '@/components/HeroSection';
// import ServiceCard from '@/components/ServiceCard';
// import PortfolioCard from '@/components/PortfolioCard';
// import TestimonialCard from '@/components/TestimonialCard';
// import CTASection from '@/components/CTASection';
import { Code, Smartphone, TrendingUp, Search, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import ServiceCard from './Home/components/ServiceCard';
import PortfolioCard from './Home/components/PortfolioCard';
import CTASection from './Home/components/CTASection';
import TestimonialCard from './Home/components/TestimonialCard';
import HeroSection from './Home/components/HeroSection';

// HomePage with all main sections
export default function Home() {
  //TODO: remove mock data functionality
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase brand visibility and drive targeted traffic to your business.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Brand Development"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Search engine optimization that improves your website's visibility and drives organic traffic from your target audience.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Local SEO"]
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "Modern online shopping platform with advanced features including real-time inventory, secure payments, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application with workout tracking, nutrition monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "https://example.com"
    },
    {
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online reservations, menu management, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "CEO",
      content: "Weboria transformed our outdated website into a modern, high-performing platform that increased our conversions by 40%. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content: "The mobile app they developed exceeded our expectations. The user experience is incredible and our customer engagement has tripled since launch.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Local Bistro",
      role: "Owner",
      content: "Their digital marketing strategy helped us reach new customers and increase our online orders by 60%. Outstanding results and professional service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help your business thrive in the modern marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore some of our recent projects that showcase our expertise and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" data-testid="button-view-full-portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from businesses that have transformed their digital presence with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact">
        <CTASection 
          title="Ready to Start Your Next Project?"
          subtitle="Let's discuss how we can help transform your digital presence and drive your business forward."
          onPrimaryClick={() => console.log('Navigate to contact form')}
          onSecondaryClick={() => console.log('Schedule consultation call')}
        />
      </section>
    </div>
  );
}