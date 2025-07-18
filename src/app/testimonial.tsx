"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Typography, Card, CardBody, Avatar, Rating, IconButton } from "@material-tailwind/react";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { getImagePrefix } from "../../utils/utils";

// Custom styles for 3-card carousel
const styles = `
  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;
  }
  
  .carousel-wrapper {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 4rem;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    will-change: transform;
  }
  
  .carousel-item {
    flex: 0 0 33.3333%;
    padding: 0 12px;
    transition: all 0.3s ease;
    min-width: 0; /* Prevents flex items from overflowing */
  }
  
  @media (max-width: 1024px) {
    .carousel-item {
      flex: 0 0 50%;
    }
  }
  
  @media (max-width: 640px) {
    .carousel-item {
      flex: 0 0 100%;
    }
  }
  
  .carousel-item:hover {
    transform: translateY(-5px);
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: all 0.3s ease;
    opacity: 0.9;
    pointer-events: auto;
  }
  
  .nav-button:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    opacity: 1;
  }
  
  .nav-button:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .nav-button.prev {
    left: 10px;
  }
  
  .nav-button.next {
    right: 10px;
  }
  
  .pagination-dots {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    gap: 8px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #e5e7eb;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background: #3b82f6;
    width: 30px;
    border-radius: 5px;
  }
`;

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    review: 'Working with this team was an absolute pleasure. They delivered our project ahead of schedule and the quality exceeded our expectations.',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar1.jpg`
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    review: 'Their attention to detail and creative solutions helped us solve complex challenges. Highly recommended!',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar2.jpg`
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandFlow',
    review: 'The team understood our vision perfectly and executed it flawlessly. Our website traffic has increased by 200% since launch!',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar3.jpg`
  },
  {
    name: 'David Kim',
    role: 'Founder, StartupXYZ',
    review: 'Incredible work ethic and technical expertise. They became an extension of our team and delivered beyond our expectations.',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar4.jpg`
  },
  {
    name: 'Priya Patel',
    role: 'CTO, TechSolutions',
    review: 'Their innovative approach and technical skills helped us build a scalable solution that will grow with our business.',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar5.jpg`
  },
  {
    name: 'James Wilson',
    role: 'Director of Digital, GrowthLabs',
    review: 'Exceptional service from start to finish. The team was responsive, professional, and delivered outstanding results.',
    rating: 5,
    avatar: `${getImagePrefix()}/image/avatar6.jpg`
  }
];

interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card 
      color="white" 
      shadow={true} 
      className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
    >
      <CardBody className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
            size="lg"
            className="border-2 border-white shadow-lg"
            onError={(e) => {
              // Fallback to a placeholder if the image fails to load
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
            }}
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1 font-semibold">
              {testimonial.name}
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal opacity-75">
              {testimonial.role}
            </Typography>
          </div>
        </div>
        <Typography className="mb-6 text-gray-700 flex-grow text-justify italic">
          "{testimonial.review}"
        </Typography>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'text-yellow-500' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalTestimonials = TESTIMONIALS.length;
  const cardsToShow = 3;
  const totalGroups = Math.ceil(totalTestimonials / cardsToShow);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();

  // Calculate total number of slides needed
  const totalSlides = Math.ceil(totalTestimonials / cardsToShow);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [isAnimating, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [isAnimating, totalSlides]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prev => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => {
      clearInterval(slideInterval);
    };
  }, [totalSlides]);

  // Reset animation state after slide change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Add custom styles to the document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="py-12 px-4 sm:px-8 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(0deg,transparent,white)]"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Typography variant="h2" color="blue-gray" className="mb-4 text-4xl md:text-5xl font-bold">
            Words That <span className="text-blue-600">Fuel</span> Us!
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-2xl px-4 font-normal !text-gray-600 text-lg"
          >
            What People Say!
          </Typography>
        </div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 33.3333}%)`,
                transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="carousel-item">
                  <div className="h-full px-2">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          
            <button 
              onClick={prevSlide} 
              className="nav-button prev"
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="nav-button next"
              disabled={isAnimating}
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="pagination-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
