import { GraduationCap, Code2, Briefcase } from 'lucide-react'
import { aboutCards, profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const icons = [GraduationCap, Code2, Briefcase]

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center lg:gap-16">
          {/* Left: introduction */}
          <div>
            <p className="text-pretty text-lg leading-relaxed text-navy-soft">
              {profile.about}
            </p>
          </div>

          {/* Right: information cards */}
          <div className="grid gap-4 sm:grid-cols-1">
            {aboutCards.map((card, i) => {
              const Icon = icons[i] ?? Code2
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-4 rounded-2xl border border-brand/15 bg-sky p-5 shadow-sm shadow-brand/5 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-soft">
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
