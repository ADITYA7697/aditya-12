import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-24 section-lavender-glow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects I've worked on while learning web development."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand/15 bg-white shadow-sm shadow-brand/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Project preview image */}
              <div className="relative aspect-video overflow-hidden bg-sky">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Preview of ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-soft">
                  {project.description}
                </p>

                {/* Technology badges */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-brand"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-navy px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand"
                    >
                      <GithubIcon className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <span
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-dashed border-brand/25 px-3 py-2 text-sm font-medium text-slate-400"
                      title="GitHub link coming soon"
                    >
                      <GithubIcon className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand px-3 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-dashed border-brand/25 px-3 py-2 text-sm font-medium text-slate-400"
                      title="Live demo coming soon"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
