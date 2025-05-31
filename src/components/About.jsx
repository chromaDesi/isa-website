import { images } from "./images";
import Banner from "./banner";

const About = () => {
  return (
    <section id="About" className="bg-black text-white overflow-hidden flex min-h-screen">
      {/* Left Reels - always visible but narrower on mobile */}
      <div className="w-12 md:w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical" />
      </div>
      <div className="w-12 md:w-28 flex-none hidden md:block">
        <Banner images={images} speed={10000} direction="scroll-vertical-down" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-6 py-12 text-center">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bebas font-extrabold uppercase tracking-tight mb-4 [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
            ABOUT US
            <br/>
          </h1>
          <p className="text-sm md:text-lg leading-snug md:leading-relaxed mb-4">
            The Indian Student Association (ISA) at George Mason University is a vibrant cultural organization dedicated to fostering community, cultural awareness, and collaboration among students of Indian heritage and those interested in Indian culture. Rooted in the values of unity in diversity, ISA serves as a platform to celebrate the rich traditions, festivals, and social values of India while promoting inclusivity and cross-cultural dialogue on campus.
          </p>
          <p className="text-sm md:text-lg leading-snug md:leading-relaxed">
            Each semester, ISA hosts a wide range of events — from large-scale cultural showcases like Diwali and Holi celebrations to mixers, game nights, professional development sessions, and charity initiatives. With one of the largest student memberships among cultural organizations at Mason, ISA connects hundreds of students through engaging experiences that blend tradition with modern student life. Whether you're looking to explore Indian culture, make lifelong friends, or simply enjoy some good food and music, ISA offers something for everyone.
          </p>
        </div>
      </div>

      {/* Right Reels - always visible but narrower on mobile */}
      <div className="w-12 md:w-28 flex-none hidden md:block">
        <Banner images={images} speed={10000} direction="scroll-vertical-down" />
      </div>
      <div className="w-12 md:w-28 flex-none">
        <Banner images={images} speed={10000} direction="scroll-vertical" />
      </div>
    </section>
  );
};

export default About;


