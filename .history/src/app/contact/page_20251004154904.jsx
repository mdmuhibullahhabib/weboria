"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import toast from "react-hot-toast";

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

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
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
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center px-4">
  <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
    Trusted Digital Marketing Company in <span className="text-sky-500">Bangladesh</span>
  </h2>

  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    At <b className="text-gray-900">Weboria</b>, we believe that strong communication builds
    strong partnerships. As a trusted online marketing company, we’re dedicated to supporting
    your business with <b>tailored digital solutions</b> designed for measurable success.
  </p>

  <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
    Connect with us to explore how our expertise in <b>Digital Marketing</b>, <b>SEO</b>, 
    <b> Web Development</b>, <b>Cyber Security</b>, and <b>AI-driven strategies</b> can
    transform your growth journey.
  </p>

  <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
    Our dedicated team is committed to providing <b>timely, professional assistance</b> for
    all inquiries. Please use the contact form below or reach out directly — we look forward
    to <b>partnering with you</b> and driving your <b>digital success forward.</b>
  </p>
</div>

      </section>

      {/* Contact Section */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <div className="card shadow-xl border border-gray-200 rounded-2xl">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
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
                        className="input input-bordered w-full focus:ring-2 focus:ring-sky-400"
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
                        className="input input-bordered w-full focus:ring-2 focus:ring-sky-400"
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
                      className="input input-bordered w-full focus:ring-2 focus:ring-sky-400"
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
                      className="textarea textarea-bordered w-full focus:ring-2 focus:ring-sky-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn bg-sky-600 hover:bg-sky-700 text-white w-full flex items-center justify-center gap-2 font-semibold tracking-wide ${
                      isSubmitting ? "loading" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" />Send Message</>}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Let's start a conversation</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're here to help you transform your digital presence. Whether
                you need a new website, mobile app, or digital marketing
                strategy, our team is ready to bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 shadow-sm hover:shadow-md rounded-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mb-4">
                    <item.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="font-medium text-gray-900">{item.details}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="border border-gray-200 rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Questions?</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium mb-1 text-gray-800">How long does a typical project take?</p>
                  <p>Most projects are completed within 4–12 weeks, depending on complexity and scope.</p>
                </div>
                <div>
                  <p className="font-medium mb-1 text-gray-800">Do you offer ongoing support?</p>
                  <p>Yes! We provide maintenance and support packages to keep your solution running smoothly.</p>
                </div>
                <div>
                  <p className="font-medium mb-1 text-gray-800">What's included in the consultation?</p>
                  <p>A free 60-minute strategy session to discuss your goals and provide initial recommendations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
