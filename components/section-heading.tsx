export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-pretty leading-relaxed text-navy-soft">
          {subtitle}
        </p>
      )}
    </div>
  )
}
