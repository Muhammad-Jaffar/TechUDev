import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

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
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={getSkillUrl(title)}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>

      </CardBody>
    </Card>
  );
};

export default ProjectCard;
