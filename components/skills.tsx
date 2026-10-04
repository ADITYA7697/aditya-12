import { skills } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  return (
    <section id="skills" className="bg-sky py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="The tools and technologies I use to build clean, responsive websites."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-emerald/15 bg-white p-6 shadow-sm shadow-emerald/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Simple monogram avatar keeps the design consistent without external logos */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-navy">{skill.name}</h3>
                  {skill.learning && (
                    <span className="rounded-full bg-sky px-2 py-0.5 text-xs font-medium text-brand">
                      Learning
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
