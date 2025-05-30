import { useState, useEffect } from "react";
import { cn } from "../libs/utils";
import { Menu, X, Instagram, Mail, MapPin, Send} from "lucide-react";
import { motion } from "framer-motion";
import Contact from './Contact'; // adjust path if needed






// nav items
const items = [
    { name: 'Home', href: '#Hero' },
    { name: 'About', href: '/About' },
    { name: 'Contact', href: 'contact' },
    { name: 'Links', href: 'https://linktr.ee/isa_gmu?fbclid=PAZXh0bgNhZW0CMTEAAaeMawhJGZ-KKZ_YQftQk8gdRgHeffn7IEh8mjFJy_-l-R6c1em8V-VpY5biwA_aem_14wsImdskkSdCX1XMlgH3w'},
    { name: <Mail />, href: "mailto:gmu.isa.1@gmail.com"},
    {name: <Instagram />, href: "https://www.instagram.com/gmu_isa/"},
    {name: <MapPin />, href: "https://maps.app.goo.gl/RxbM7p8QFfZCh2ZQA"},
]

const items2 = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: 'contact' },
    { name: 'Links', href: 'https://linktr.ee/isa_gmu?fbclid=PAZXh0bgNhZW0CMTEAAaeMawhJGZ-KKZ_YQftQk8gdRgHeffn7IEh8mjFJy_-l-R6c1em8V-VpY5biwA_aem_14wsImdskkSdCX1XMlgH3w'},
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Lock body scroll if menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  

  return (
    <>
    <nav
      className={cn(
  "fixed w-full z-50 transition-all duration-300 items-center -translate-y-[4px]",
  isScrolled && !isMenuOpen
    ? "min-h-[60px] bg-black/70 backdrop-blur-lg shadow-md"
    : "min-h-[76px] bg-transparent"
)}

    >
      
      <div className="container flex items-center justify-between absolute top-6 z-50 -translate-y-[4px]">
        {/* Logo */}
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="text-bold text-2xl items-center flex"
          href="#Hero"
        >
          <h1 className="text-white text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none font-bebas whitespace-nowrap [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
            INDIAN STUDENT ASSOCIATION
          </h1>
        

        </motion.a>

        {/* Desktop nav */}
        <div className="hidden xl:flex space-x-8 top-3">
            {items.map((item, key) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + key * 0.2,
                }}
                key={key}
                href={item.href}
                onClick={(e) => {
                  if (item.name === "Contact") {
                    e.preventDefault();
                    setShowContact(true);
                  }
                }}
                target={item.name === "Links" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="border border-white text-white rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors duration-300 text-sm md:text-base"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

        {/* Hamburger menu */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="xl:hidden p-2 text-primary z-50 absolute right-2 top-0.3"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-999 flex flex-col items-center justify-center",
          "transition-all duration-300 xl:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-foreground z-[1000]"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {/* Menu items */}
        <div className="flex flex-col space-y-8 text-xl mt-12 items-center">
            {items2.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => {
                  if (item.name === "Contact") {
                    e.preventDefault();
                    setShowContact(true);
                    setIsMenuOpen(false);
                  }
                }}
                target={item.name !== "Contact" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors duration-300 font-semibold"
              >
                {item.name}
              </a>
            ))}
            <br />
          </div>
            <nav className=" border-t py-8 pt-8 gap-4 flex">
            <a href="mailto:gmu.isa.1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <Mail />
            </a>
            <a href="https://www.instagram.com/gmu_isa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <Instagram />
            </a>
            <a href="https://maps.app.goo.gl/RxbM7p8QFfZCh2ZQA" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              <MapPin />
            </a>
            </nav>
      </div>
      
    </nav>
<Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Navbar;
