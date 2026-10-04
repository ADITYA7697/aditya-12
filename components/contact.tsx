'use client'

import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    /*
     * No backend/email service is configured, so we fall back to the user's
     * mail client via a prefilled mailto link. To send messages to a real
     * inbox, connect a form service (e.g. Resend, Formspree) and replace this.
     */
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-sky py-20 sm:py-24 section-lavender-glow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Have an internship opportunity or just want to say hi? I'd love to hear from you."
          center
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Contact details */}
          <div className="space-y-4">
            <ContactItem
              href={`mailto:${profile.email}`}
              icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              label="Email"
              value={profile.email}
            />
            <ContactItem
              href={`tel:${profile.phone}`}
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              label="Phone"
              value={profile.phone}
            />
            <ContactItem
              href={profile.github}
              external
              icon={<GithubIcon className="h-5 w-5" aria-hidden="true" />}
              label="GitHub"
              value="github.com/ADITYA7697"
            />
            <ContactItem
              href={profile.linkedin}
              external
              icon={<LinkedinIcon className="h-5 w-5" aria-hidden="true" />}
              label="LinkedIn"
              value="linkedin.com/in/aditya-dube-b50380342"
            />
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-brand/15 bg-white p-6 shadow-sm sm:p-8"
          >
            <Field
              id="name"
              label="Name"
              value={values.name}
              error={errors.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
            />
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-navy-soft"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) =>
                  setValues((s) => ({ ...s, message: e.target.value }))
                }
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>

            <p className="mt-3 text-center text-xs text-navy-soft">
              This opens your email app with the message prefilled.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  value,
  error,
  onChange,
}: {
  id: string
  label: string
  type?: string
  value: string
  error?: string
  onChange: (v: string) => void
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-navy-soft"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactItem({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  value: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 rounded-2xl border border-brand/15 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-navy-soft">{label}</span>
        <span className="block truncate font-medium text-navy">
          {value}
        </span>
      </span>
    </a>
  )
}
