export type Project = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card h-full">
      <div className="aspect-[4/3] w-full rounded-xl bg-slate-200 mb-4" />
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <h3 className="font-heading text-lg text-navy">{project.title}</h3>
        <span className="text-xs uppercase tracking-wide text-slateText/70">
          {project.type}
        </span>
      </div>
      <p className="text-xs text-slateText/70 mb-2">{project.location}</p>
      <p className="text-sm text-slateText/90 leading-relaxed">
        {project.description}
      </p>
    </article>
  );
}
