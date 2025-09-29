"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("Contact form submitted:", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Message sent successfully! We'll get back to you within 24 hours.");

    e.target.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@weboria.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "San Francisco, CA",
      description: "123 Innovation Street, Suite 100",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "Average response time",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-base-100">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div>
          <div className="card border border-gray-200 shadow-lg hover:shadow-2xl transition p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Name *</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email *</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Subject *</span>
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, consultation, etc."
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Message *</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, and how we can help..."
                  className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? "loading" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" />Send Message</>}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info & FAQ */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's start a conversation</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're here to help you transform your digital presence. Whether you need a new website,
              mobile app, or digital marketing strategy, our team is ready to bring your vision to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="card border border-gray-200 shadow-sm hover:shadow-lg transition p-6 rounded-lg text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="font-medium mb-1">{item.details}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="card border border-gray-200 shadow-sm hover:shadow-lg transition p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Questions?</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-medium mb-1">How long does a typical project take?</p>
                <p>Most projects are completed within 4-12 weeks, depending on complexity and scope.</p>
              </div>
              <div>
                <p className="font-medium mb-1">Do you offer ongoing support?</p>
                <p>Yes! We provide maintenance and support packages to keep your solution running smoothly.</p>
              </div>
              <div>
                <p className="font-medium mb-1">What's included in the consultation?</p>
                <p>A free 60-minute strategy session to discuss your goals and provide initial recommendations.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
