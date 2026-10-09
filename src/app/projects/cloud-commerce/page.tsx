
import Link from "next/link";

const technologies = [
  "AWS",
  "S3",
  "CloudFront",
  "Lambda",
  "DynamoDB",
  "API Gateway",
];

export default function CloudCommercePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Back navigation */}
        <Link
          href="/#projects"
          className="text-sm text-primary-light hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* Project heading */}
        <header className="mt-12">
          <p className="font-mono text-sm text-primary-light">
            PROJECT / CLOUD COMPUTING
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Cloud Commerce Project
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            A serverless e-commerce application built using AWS cloud
            services, exploring cloud infrastructure, API integration,
            and database-driven product management.
          </p>
        </header>

        {/* Overview */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            Overview
          </h2>

          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            This project explores the development of a cloud-hosted
            online electronics store using AWS services. It includes
            product browsing, individual product pages, and ongoing
            work on the checkout workflow.
          </p>
        </section>

        {/* Technology stack */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Technology Stack
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border bg-card px-4 py-2 text-sm text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
