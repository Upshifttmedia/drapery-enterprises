import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'brass' | 'light'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-block font-jost font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 border transition-all duration-300 cursor-pointer focus-visible:outline-1'

  const variants = {
    primary:
      'border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-off-white',
    brass:
      'border-brass text-brass bg-transparent hover:bg-brass hover:text-off-white',
    light:
      'border-off-white text-off-white bg-transparent hover:bg-off-white hover:text-charcoal',
  }

  const styles = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
