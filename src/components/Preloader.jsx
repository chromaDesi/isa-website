import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Preloader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out animation

      setTimeout(() => {
        onFinish(); // tell App to render main site
      }, 800); // match transition duration
    }, 3500); // preload duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-2 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Spline scene="add new preload effect" />
    </div>
  );
};

export default Preloader;

