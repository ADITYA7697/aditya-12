import { ArrowUp } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">© 2026 {profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            Built with HTML, CSS &amp; JavaScript
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
          >
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
