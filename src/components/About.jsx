import { images } from "./images";
import Banner from "./banner";

const About = () => {
  return (
    <section id="About" className="bg-black text-white overflow-hidden flex flex-col md:flex-row min-h-screen">
      
      {/* Left Reels (md and up) */}
      <div className="hidden md:block w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical" />
      </div>
      <div className="hidden md:block w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical-down" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 text-center z-10">
        <div>
          <h1 className="text-4xl font-bebas font-extrabold uppercase tracking-tight text-shadow mb-4 [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
            About Us
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed mb-6">
            The Indian Student Association (ISA) at George Mason University is a vibrant cultural organization...
          </p>
          <p className="text-lg max-w-3xl leading-relaxed">
            Whether you're looking to explore Indian culture, make lifelong friends, or simply enjoy good food and music, ISA has something for everyone.
          </p>
        </div>
      </div>

      {/* Right Reels (md and up) */}
      <div className="hidden md:block w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical-down" />
      </div>
      <div className="hidden md:block w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical" />
      </div>
     
    </section>
  );
};

export default About;
