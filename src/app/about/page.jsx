import { Award, Users, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "With over 10 years in digital strategy, Alex leads Weboria's vision to transform businesses through innovative technology solutions.",
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Sarah brings technical excellence and innovation leadership, ensuring our solutions are built with cutting-edge technologies and best practices.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Design",
      image: null,
      bio: "Marcus crafts beautiful, user-centered designs that not only look amazing but also drive engagement and conversions.",
    },
    {
      name: "Jennifer Wu",
      role: "Marketing Director",
      image: null,
      bio: "Jennifer develops strategic marketing campaigns that amplify our clients' brands and drive meaningful business growth.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring quality that exceeds expectations and delivers real business value.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in close collaboration with our clients, working together as partners to achieve shared success and goals.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every solution we create is designed with clear objectives and measurable outcomes that drive business growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of technology trends and bring innovative solutions that give our clients competitive advantages.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Weboria</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We're a passionate team of digital innovators dedicated to
            transforming businesses through cutting-edge technology solutions
            and exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg shadow hover:shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-primary">Vision</span>
            </h2>
            <p className="text-gray-600 mb-6">
              To be the leading digital agency that empowers businesses to
              thrive in the digital age through innovative technology solutions
              and exceptional user experiences.
            </p>
            <p className="text-gray-600">
              We envision a world where every business, regardless of size, has
              access to world-class digital solutions that drive growth and
              success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-gray-600 mb-6">
              To deliver exceptional digital solutions that transform
              businesses, enhance user experiences, and drive measurable
              results.
            </p>
            <p className="text-gray-600">
              We're committed to building long-term partnerships with our
              clients and helping them achieve their goals through strategic
              digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow hover:shadow-xl transition"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
