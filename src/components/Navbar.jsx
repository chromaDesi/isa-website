import { useState, useEffect } from "react";
import { cn } from "../libs/utils";
import { Menu, X, Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Contact from "./Contact";

// Nav items
const items = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "contact" },
  {
    name: "Links",
    href: "https://linktr.ee/isa_gmu?fbclid=PAZXh0bgNhZW0CMTEAAaeMawhJGZ-KKZ_YQftQk8gdRgHeffn7IEh8mjFJy_-l-R6c1em8V-VpY5biwA_aem_14wsImdskkSdCX1XMlgH3w",
  },
  { name: <Mail />, href: "mailto:gmu.isa.1@gmail.com" },
  { name: <Instagram />, href: "https://www.instagram.com/gmu_isa/" },
  { name: <MapPin />, href: "https://maps.app.goo.gl/RxbM7p8QFfZCh2ZQA" },
];

const mobileItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#About" },
  { name: "Contact", href: "contact" },
  {
    name: "Links",
    href: "https://linktr.ee/isa_gmu?fbclid=PAZXh0bgNhZW0CMTEAAaeMawhJGZ-KKZ_YQftQk8gdRgHeffn7IEh8mjFJy_-l-R6c1em8V-VpY5biwA_aem_14wsImdskkSdCX1XMlgH3w",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
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
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled && !isMenuOpen
            ? "min-h-[60px] bg-black/70 backdrop-blur-lg shadow-md"
            : "min-h-[76px] bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
            href="#Hero"
            className="text-2xl font-bold text-white font-bebas tracking-tight whitespace-nowrap [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]"
          >
            INDIAN STUDENT ASSOCIATION
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            {items.map((item, idx) => (
              <motion.a
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                href={item.href}
                onClick={(e) => {
                  if (item.name === "Contact") {
                    e.preventDefault();
                    setShowContact(true);
                  }
                }}
                target={
                  item.name === "Links" || typeof item.name !== "string"
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className="border border-white text-white rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors duration-300 text-sm md:text-base"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-white z-50"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-[999] px-6 py-10 flex flex-col gap-6 items-center md:hidden transition-all duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

          {/* Optional Logo */}
          <img
            src="/isa_logo.svg"
            alt="ISA Logo"
            className="w-24 h-24 rounded-full mt-8"
          />

          {/* Mobile Menu Items */}
          <div className="flex flex-col items-center gap-6 mt-6 text-lg">
            {mobileItems.map((item, idx) => (
              <a
                key={idx}
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
                className="text-white hover:text-primary transition-colors font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 border-t pt-6">
            <a
              href="mailto:gmu.isa.1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white"
            >
              <Mail />
            </a>
            <a
              href="https://www.instagram.com/gmu_isa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://maps.app.goo.gl/RxbM7p8QFfZCh2ZQA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white"
            >
              <MapPin />
            </a>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Navbar;
