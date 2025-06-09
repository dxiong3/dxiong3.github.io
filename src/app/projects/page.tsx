import ProjectCard from '@/components/project-card';
import { projectsData } from '@/data/projects-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Personal Website',
  description: 'A showcase of my projects.',
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-8 md:py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          My Projects
        </h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 md:pb-16">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
