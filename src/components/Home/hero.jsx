const Hero = ({ onRegisterClick }) => {
  return (
    <section
      class="relative py-20 md:py-32 h-screen flex items-center justify-center"
      id="home"
    >
      <div class="absolute inset-0 bg-cover bg-center">
        <img
          src="/hero_logo.jpg"
          alt="Hagiazo 25"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="absolute inset-0 bg-zinc/70" />

      <div class="container mx-auto px-4 relative text-white/80">
        <div class="flex flex-col gap-6 text-center max-w-3xl mx-auto">
          <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            HAGIAZO 2025
          </h1>
          <h2 class="text-white/80 text-lg md:text-xl font-normal leading-normal">
            Join us for a weekend of faith, fellowship, and renewal. Discover
            your purpose and connect with a vibrant community.
          </h2>
          <div class="flex flex-wrap gap-4 justify-center mt-6">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-zinc text-base font-bold leading-normal tracking-wide transform hover:scale-105 transition-transform"
              onClick={onRegisterClick}
            >
              <span class="truncate">Register Now</span>
            </button>

            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-zinc-200 text-zinc-200 text-base font-bold leading-normal tracking-wide hover:bg-zinc-200 hover:text-yellow-200 hover:border-yellow-200 transition-colors">
              <a href="#about" class="truncate">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
