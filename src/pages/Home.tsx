import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from '../components/StaggerComponent';
import { useEffect } from 'react';

const navigationItems = [
  {
    href: '/about',
    icon: 'ph-user',
    title: 'about',
    description: 'me? my journey',
  },
  {
    href: '/projects',
    icon: 'ph-rows',
    title: 'projects',
    description: 'things i\'ve built',
  },
  {
    href: '/skills',
    icon: 'ph-sparkle',
    title: 'skills',
    description: 'tech stack & tools',
  },
  {
    href: '/contact',
    icon: 'ph-link',
    title: 'contact',
    description: 'let\'s connect',
  },
  {
    href: '/certifications',
    icon: 'ph-certificate',
    title: 'Certifications',
    description: 'achievements & badges',
  },
  {
    href: '/resume',
    icon: 'ph-read-cv-logo',
    title: 'resume',
    description: 'my experience summary',
  },
];

export default function Home() {
  useEffect(() => {
    window.document.title = "Home";
  }, [])

  return (
    <StaggerContainer className="w-full px-4">
      {navigationItems.map((item) => (
        <StaggerItem key={item.href} className="mb-3 sm:mb-6">
          {item.title === 'resume' ? (
            <a
              href="/assets/resume.pdf"
              download
              className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group"
            >
              <i className={`ph ${item.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl`}></i>
              <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">
                {item.title}
              </p>
              <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline">
                _ {item.description}
              </span>
            </a>
          ) : (
            <Link to={item.href}>
              <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
                <i className={`ph ${item.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl`}></i>
                <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">
                  {item.title}
                </p>
                <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline">
                  _ {item.description}
                </span>
              </div>
            </Link>
          )}
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
