
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-sm text-primary-light">
          PROJECT
        </span>

        <span className="text-xl text-primary-light">
          ↗
        </span>
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="mt-auto pt-8 text-sm font-medium text-primary-light hover:underline"
      >
        Explore Project →
      </Link>
    </article>
  );
}
