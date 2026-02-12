import { useEffect } from "react";
import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";

const skills = [
  {
    href: 'https://www.python.org/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
        <path d="M11 6l0 .01" />
        <path d="M13 18l0 .01" />
      </svg>
    ),
    title: 'python',
    description: 'general-purpose scripting and backend development',
    hoverColor: '#c6e211',
  },
  {
    href: 'https://www.gnu.org/software/bash/',
    icon: 'ph-terminal',
    title: 'bash',
    description: 'shell scripting and automation',
    hoverColor: '#25c530',
  },
  {
    href: 'https://en.cppreference.com/w/c/',
    icon: 'ph-file-c',
    title: 'c',
    description: 'low-level programming and memory management',
    hoverColor: '#252ac5',
  },
  {
    href: 'https://cppreference.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 12h4" />
        <path d="M20 10v4" />
        <path d="M11 12h4" />
        <path d="M13 10v4" />
        <path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
      </svg>
    ),
    title: 'c++',
    description: 'object-oriented and performance-focused development',
    hoverColor: '#2560c5',
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
        <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
      </svg>
    ),
    title: 'javascript',
    description: 'dynamic and interactive web programming',
    hoverColor: '#dfdf2b',
  },
  {
    href: 'https://go.dev/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15.695 14.305c1.061 1.06 2.953 .888 4.226 -.384c1.272 -1.273 1.444 -3.165 .384 -4.226c-1.061 -1.06 -2.953 -.888 -4.226 .384c-1.272 1.273 -1.444 3.165 -.384 4.226z" />
        <path d="M12.68 9.233c-1.084 -.497 -2.545 -.191 -3.591 .846c-1.284 1.273 -1.457 3.165 -.388 4.226c1.07 1.06 2.978 .888 4.261 -.384a3.669 3.669 0 0 0 1.038 -1.921h-2.427" />
        <path d="M5.5 15h-1.5" />
        <path d="M6 9h-2" />
        <path d="M5 12h-3" />
      </svg>
    ),
    title: 'go',
    description: 'concurrent, efficient backend development',
    hoverColor: '#11efe1',
  },
  {
    href: 'https://code.visualstudio.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 3v18l4 -2.5v-13z" />
        <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
        <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
      </svg>
    ),
    title: 'visual studio code',
    description: 'lightweight and extensible development environment',
    hoverColor: '#236db6',
  },
  {
    href: 'https://git-scm.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 15v-6" />
        <path d="M15 11l-2 -2" />
        <path d="M11 7l-1.9 -1.9" />
        <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
      </svg>
    ),
    title: 'git',
    description: 'version control and collaboration workflows',
    hoverColor: '#ec5910',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Linux',
    icon: 'ph-linux-logo',
    title: 'linux',
    description: 'system administration and development environment',
    hoverColor: '#c7c7c7',
  },
  {
    href: 'https://www.typescriptlang.org/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
        <path d="M9 12h4" />
        <path d="M11 12v6" />
        <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
      </svg>
    ),
    title: 'typescript',
    description: 'typed JavaScript for scalable applications',
    hoverColor: '#35d0ff',
  },
  {
    href: 'https://www.prisma.io/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z" />
        <path d="M8.5 22l3.5 -20" />
      </svg>
    ),
    title: 'prisma',
    description: 'type-safe database ORM',
    hoverColor: '#9e3be5',
  },
  {
    href: 'https://flask.palletsprojects.com/en/stable/',
    icon: 'ph-flask',
    title: 'flask',
    description: 'lightweight Python web framework',
    hoverColor: '#58e188',
  },
  {
    href: 'https://www.docker.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" />
        <path d="M5 10h3v3h-3z" />
        <path d="M8 10h3v3h-3z" />
        <path d="M11 10h3v3h-3z" />
        <path d="M8 7h3v3h-3z" />
        <path d="M11 7h3v3h-3z" />
        <path d="M11 4h3v3h-3z" />
        <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
        <path d="M10 16l0 .01" />
      </svg>
    ),
    title: 'docker',
    description: 'containerization and environment isolation',
    hoverColor: '#2e00d5',
  },
];

export default function Skills() {
  useEffect(() => {
    window.document.title = "Skills";
  }, [])

  return (
    <StaggerContainer className="w-full max-w-4xl px-4">
      {skills.map((skill, index) => (
        <StaggerItem key={index} className="mb-3 sm:mb-6">
          <a href={skill.href} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
              <i className="text-strong mr-2 sm:mr-3 text-base sm:text-xl">
                {typeof skill.icon === 'string' ? <i className={`ph ${skill.icon}`}></i> : skill.icon}
              </i>
              <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase">{skill.title}</p>
              <span 
                className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:translate-x-1 hidden sm:inline"
                style={{'--hover-color': skill.hoverColor} as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = skill.hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                _ {skill.description}
              </span>
            </div>
          </a>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
