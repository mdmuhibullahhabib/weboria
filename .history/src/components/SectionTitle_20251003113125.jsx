"use client";

export default function SectionTitle({ titleTop, titleBottom }) {
  return (
    <div className="text-center my-10 px-4">
      <div className="text-5xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-snug">
        {/* <span className="text-blue-600">{titleTop}</span> */}
        <h2 className="text-6xl font-extrabold text-blue-600 text-center">{titleTop}</h2>
        <h2 className='text-orange-500 font-semibold text-6xl ml-[400px]'> {titleBottom}</h2>
      </div>
    </div>
  );
}

        // <h2 className="text-5xl font-semibold text-black text-center">
        //   OUR FEATURED 
        // </h2>
        // <h2 className='text-orange-500 text-5xl ml-[620px]'> PROJECTS</h2>