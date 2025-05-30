import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import "@fontsource/bebas-neue"; // Defaults to weight 400


//<Spline scene="https://prod.spline.design/sptprqaOu7sY3nN6/scene.splinecode" />
const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen w-full bg-black bg-gradient-to-b from-orange-700 to-black overflow-hidden"
    >
           
      {/* Spline background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
         <Spline scene="/trial.spline" />
      </motion.div>
      <motion.img
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.5 }}
  src="/isa_logo.svg"
  alt="ISA Logo"
  className="absolute top-[clamp(6.5rem,_1vw,_9.5rem)] left-[clamp(1.5rem,_5vw,_7.5rem)] w-[clamp(8rem,_20vw,_32rem)] h-auto rounded-full"
/>

    </section>
  );
};

export default Hero;