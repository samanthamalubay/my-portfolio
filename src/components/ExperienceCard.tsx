
type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-6">
      <p className="mb-2 font-mono text-xs text-primary-light">
        {period}
      </p>

      <h3 className="text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-1 text-sm text-primary-light">
        {company}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </article>
  );
}