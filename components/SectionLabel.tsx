interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${className}`}>
      <span className="block w-8 h-px bg-brass flex-shrink-0" aria-hidden="true" />
      <span className="font-jost font-medium text-[0.6875rem] tracking-[0.2em] uppercase text-brass">
        {children}
      </span>
    </div>
  )
}
