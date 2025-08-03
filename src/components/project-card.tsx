import Image from "next/image";
import { useState } from "react";
import { Typography } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

const skillUrlMap: Record<string, string> = {
  "Website Development": "/skills/website-development",
  "Landing Page Development": "/skills/landing-page-development",
  "Digital Marketing": "/skills/digital-marketing",
  "SEO Services": "/skills/seo-services",
  "WordPress Development": "/skills/wordpress-development",
  "AI Automation": "/skills/ai-automation",
  "Mobile App Development": "/skills/mobile-app-development",
  "E-commerce development": "/skills/e-commerce-development",
};

function getSkillUrl(title: string): string {
  return skillUrlMap[title] || "#";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ img, title, desc }) => {
  const [imageError, setImageError] = useState(false);
  const imagePath = imageError ? "/image/image-placeholder.svg" : img;

  // Handle image loading errors
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <div className="h-full flex flex-col rounded-lg shadow-md overflow-hidden bg-white">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          onError={handleImageError}
          className="rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <a
          href={getSkillUrl(title)}
          className="text-blue-gray-900 hover:text-gray-800 transition-colors block flex-grow"
        >
          <Typography variant="h5" className="mb-2 font-semibold">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <a href={getSkillUrl(title)} className="inline-block mt-auto">
          <button
            className="flex items-center gap-2 text-blue-gray-900 font-medium"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
