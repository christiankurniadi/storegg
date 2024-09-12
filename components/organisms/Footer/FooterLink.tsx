import Link from "next/link"

interface FooterLinkProps {
  title: string
  href: string
}

export default function FooterLink(props: FooterLinkProps) {
  const { title, href } = props
  return (
    <li className="mb-6">
      <Link legacyBehavior href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  )
}
