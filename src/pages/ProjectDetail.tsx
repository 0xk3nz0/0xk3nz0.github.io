import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StaggerContainer, StaggerItem } from "../components/StaggerComponent";
import { projects } from "../data/ProjectsData";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (project) {
      window.document.title = `${project.title} - Kenzō's Projects`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <p className="text-text-weak text-center mb-4">Project not found</p>
        <button
          onClick={() => navigate("/projects")}
          className="text-accent hover:text-accent/80 font-mono"
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <StaggerContainer className="w-full max-w-4xl mx-auto px-4 mt-32">
      {/* Back button */}
      <StaggerItem className="mb-6">
        <button
          onClick={() => navigate("/projects")}
          className="text-accent hover:text-accent/80 font-mono text-sm uppercase transition-colors"
        >
          ← Back to Projects
        </button>
      </StaggerItem>

      {/* Cover image */}
      <StaggerItem className="mb-6 sm:mb-8">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto rounded-lg object-cover aspect-video"
        />
      </StaggerItem>

      {/* Title and icon */}
      <StaggerItem className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <i className={`ph ${project.icon} text-strong text-3xl`}></i>
          <h1 className="text-text-strong font-mono font-normal text-2xl sm:text-3xl uppercase">
            {project.title}
          </h1>
        </div>
      </StaggerItem>

      {/* Short description */}
      <StaggerItem className="mb-6">
        <p className="text-text-weak font-mono text-sm sm:text-base">
          {project.shortDescription}
        </p>
      </StaggerItem>

      {/* Technologies */}
      <StaggerItem className="mb-6 sm:mb-8">
        <div>
          <h2 className="text-text-strong font-mono font-normal text-sm uppercase mb-3">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-text-weak text-text-weak font-mono text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </StaggerItem>

      {/* Overview */}
      <StaggerItem className="mb-6 sm:mb-8">
        <div>
          <h2 className="text-text-strong font-mono font-normal text-sm uppercase mb-3">
            Overview
          </h2>
          <p className="text-text-weak font-mono text-sm leading-relaxed">
            {project.overview}
          </p>
        </div>
      </StaggerItem>

      {/* Features */}
      <StaggerItem className="mb-6 sm:mb-8">
        <div>
          <h2 className="text-text-strong font-mono font-normal text-sm uppercase mb-3">
            Key Features
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-text-weak font-mono text-sm flex items-start gap-2">
                <span className="text-accent flex-shrink-0">›</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </StaggerItem>

      {/* Challenge and Outcome */}
      <StaggerItem className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.challenge && (
            <div>
              <h2 className="text-text-strong font-mono font-normal text-sm uppercase mb-3">
                Challenge
              </h2>
              <p className="text-text-weak font-mono text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}
          {project.outcome && (
            <div>
              <h2 className="text-text-strong font-mono font-normal text-sm uppercase mb-3">
                Outcome
              </h2>
              <p className="text-text-weak font-mono text-sm leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}
        </div>
      </StaggerItem>
    </StaggerContainer>
  );
}