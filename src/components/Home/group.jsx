import React from "react";

const GroupPic = () => {
  return (
    <section class="py-20 md:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-zinc tracking-tight text-3xl md:text-4xl font-bold leading-tight">
            Experience the Moment
          </h2>
          <p class="text-slate-500 text-base md:text-lg font-normal leading-normal mt-4">
            Join us on this transformative journey as we answer the call to
            love, serve, and transform lives across the globe
          </p>
        </div>

        <div class="relative w-full overflow-hidden rounded-xl shadow-lg group">
          <div class="aspect-[16/9] w-full">
            <img
              src="/hero_logo.jpg" // Fixed path - removed /public/
              alt="Event highlights from Hagiazo conference"
              class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Optional overlay with text that appears on hover */}
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end">
            <div class="p-6 text-white">
              <h3 class="text-xl font-bold mb-2">Join Us This Year</h3>
              <p class="text-sm">Be part of an unforgettable experience</p>
            </div>
          </div>
        </div>

        {/* Optional caption below the image */}
        <p class="text-center text-slate-500 text-sm mt-4 italic">
          Hagiazo 2024 Conference Highlights
        </p>
      </div>
    </section>
  );
};

export default GroupPic;
