import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/site-data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left column: intro + CTAs */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-brand shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
            Available for Internship
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
            Hi, I&apos;m <span className="text-brand">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-navy-soft">
            {profile.subtitle}
          </p>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-navy-soft">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand hover:text-brand"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub">
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </SocialLink>
          </div>
        </div>

        {/* Right column: profile photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-5 rounded-full bg-blue-400/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-52 w-52 overflow-hidden rounded-full ring-2 ring-white/90 shadow-xl shadow-blue-500/15 sm:h-56 sm:w-56 md:h-60 md:w-60">
              <Image
                src={profile.photo || '/placeholder.svg'}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 13rem, 15rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-soft shadow-sm transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  )
}
