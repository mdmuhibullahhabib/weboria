"use client";

export default function SectionTitle({ titleTop, titleBottom }) {
  return (
    <div className="text-center my-10 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-snug">
        <span className="text-blue-600">{titleTop}</span>
        <br />
        <span className="text-orange-500">{titleBottom}</span>
      </h2>
    </div>
  );
}

        <h2 className="text-5xl font-semibold text-black text-center">
          OUR FEATURED 
        </h2>
        <h2 className='text-orange-500 text-5xl ml-[620px]'> PROJECTS</h2>