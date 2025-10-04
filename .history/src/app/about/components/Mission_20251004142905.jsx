// Mission.jsx
"use client";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
        {/* === Row 1: OUR MISSION === */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div className="flex flex-col items-start">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black uppercase">
              OUR MISSION
            </h2>
            {/* Yellow Dot */}
          </div>

          {/* Right: Details */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <b>Visual i</b>, we aim to empower businesses worldwide by
              integrating advanced AI technology with innovative digital
              marketing strategies. As a leading digital marketing agency in
              Banani, Dhaka, we deliver measurable results in digital marketing,
              SEO, PR, cybersecurity, website development, and more. We aim to
              help clients achieve sustainable growth and succeed in the dynamic
              digital landscape. We are committed to crafting custom-tailored
              solutions that enhance visibility, drive engagement, and ensure
              long-term success for every client we serve.
            </p>
          </div>
        </div>

        {/* === Row 2: OUR VISION === */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Details */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to become a globally recognized leader in
              AI-powered digital marketing, offering a comprehensive suite of
              services that cater to the diverse needs of businesses. As a
              Digital Marketing Agency in Banani, Dhaka, we strive to transform
              industries by leveraging innovation and data-driven insights,
              empowering companies to reach and exceed their digital potential.
              Through collaboration, transparency, and continuous innovation, we
              aim to shape the future of digital marketing and technology
              solutions.
            </p>
          </div>

          {/* Right: Title */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <h2 className="text-5xl md:text-7xl text-center font-extrabold text-black uppercase">
              OUR VISION
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
