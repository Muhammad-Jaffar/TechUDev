import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Navigation Menu - Moved to Left */}
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            {["Home", "About Us", "Blog", "Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Copyright - Moved to Right */}
          <Typography className="text-sm text-gray-500">
            © 2025 Fairtech Solutions. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
