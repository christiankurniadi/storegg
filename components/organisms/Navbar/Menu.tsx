import Link from "next/link"
import cx from "classnames"

interface MenuProps {
  title: string
  active?: boolean
  href: string
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props

  const classTitle = cx({
    "nav-link": true,
    active,
  })

  return (
    <li className="nav-item my-auto">
      <Link legacyBehavior href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  )
}
