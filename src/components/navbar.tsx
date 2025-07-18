import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  CodeBracketIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

// Custom animation styles
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "#home",
  },
  {
    name: "About",
    icon: UserCircleIcon,
    href: "#about",
  },
  {
    name: "Projects",
    icon: CodeBracketIcon,
    href: "#projects",
  },
  {
    name: "Contact",
    icon: CommandLineIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  index?: number;
}

function NavItem({ children, href, index = 0 }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.li 
      initial="hidden"
      animate="visible"
      custom={index}
      variants={navItemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link 
        href={href || "#"}
        className={`flex items-center gap-2 font-medium text-white/90 hover:text-white transition-colors duration-300`}
      >
        {children}
        <motion.span 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isHovered ? 1 : 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        />
      </Link>
    </motion.li>
  );
}

import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
    };
  }, []);

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Image 
                  src="/image/Screenshot%202025-07-17%20134131.png" 
                  alt="TechUDev Logo" 
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain transition-all duration-300 hover:brightness-110"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
              </motion.div>
            </Link>
          </motion.div>
          <ul className="hidden items-center space-x-8 lg:flex">
            {NAV_MENU.map(({ name, icon: Icon, href }, index) => (
              <NavItem key={name} href={href} index={index}>
                <Icon className="h-5 w-5 mr-1" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outlined" 
                className="text-white border-white/30 hover:bg-white/10 transition-colors duration-300"
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
              >
                <CodeBracketIcon className="h-5 w-5" />
                Get Started
              </Button>
            </motion.div>
          </div>
          <div className="lg:hidden">
            <IconButton
              variant="text"
              onClick={handleOpen}
              className="text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  duration: 0.3,
                  ease: "easeInOut"
                } 
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  duration: 0.2,
                  ease: "easeInOut"
                } 
              }}
              className="lg:hidden absolute left-0 right-0 top-full bg-gray-900/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <ul className="flex flex-col space-y-6">
                  {NAV_MENU.map(({ name, icon: Icon, href }) => (
                    <motion.li 
                      key={name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          duration: 0.3,
                          ease: "easeOut"
                        } 
                      }}
                      className="border-b border-white/10 pb-2"
                    >
                      <Link 
                        href={href} 
                        className="flex items-center text-white/80 hover:text-white text-lg py-2 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col space-y-4">
                  <Button 
                    variant="outlined" 
                    fullWidth
                    className="text-white border-white/30 hover:bg-white/10 transition-colors duration-300"
                  >
                    Sign In
                  </Button>
                  <Button 
                    fullWidth
                    className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
