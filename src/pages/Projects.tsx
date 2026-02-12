import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";
import { projects } from "../data/ProjectsData";

export default function Projects() {
  useEffect(() => {
    window.document.title = "Kenzō's Projects";
  }, [])

  return (
    <StaggerContainer className="w-full max-w-full px-4">
      {projects.map((project) => (
        <StaggerItem key={project.id} className="mb-3 sm:mb-6">
          <Link to={`/project/${project.id}`}>
            <div className="flex items-center gap-1 m-2 sm:m-5 cursor-pointer group">
              <i className={`ph ${project.icon} text-strong mr-2 sm:mr-3 text-base sm:text-xl flex-shrink-0`}></i>
              <p className="text-text-strong font-mono font-normal text-sm sm:text-base uppercase whitespace-nowrap">{project.title}</p>
              <span className="text-text-weak font-mono font-normal text-xs sm:text-base uppercase transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 hidden sm:inline whitespace-nowrap">
                _ {project.description}
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}