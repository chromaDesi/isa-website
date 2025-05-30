import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import { Menu, X } from "lucide-react";
import {cn} from "../libs/utils"


const items = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Links', url: 'https://linktr.ee/isa_gmu?fbclid=PAZXh0bgNhZW0CMTEAAaeMawhJGZ-KKZ_YQftQk8gdRgHeffn7IEh8mjFJy_-l-R6c1em8V-VpY5biwA_aem_14wsImdskkSdCX1XMlgH3w'},
]

//<img alt="logo" src="/isa_logo.svg" className=" w-20 h-20 rounded-full" />
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
            <h1 className='text-3xl text-primary md:text-4xl lg:text-5xl m-0'>ISA</h1>
            <nav className="hidden md:flex space-x-8 gap-12">


                
                    {items.map((item, key) => (
                        <motion.a
                        initial={{opacity: 0, y:-20}}
                        animate={{opacity:1, y:0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.7 + key * 0.2
                        }}
                        key={key}
                        href={item.url}
                        target="_blank" rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors duration-300 font-semibold"
                        >
                        {item.label}
                        </motion.a>
                    ))}
            </nav>
        </header>


    );
}

export default Navbar;