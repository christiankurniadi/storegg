import Image from "next/image"
import cx from "classnames"
import Link from "next/link"

interface MenuItemProps {
  title: string
  active?: boolean
  src:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings"
    | "logout"
  href: string
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, src, active, href = "/" } = props

  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  })

  return (
    <div className={classItem}>
      <Image
        src={`/icon/${src}-icon.svg`}
        width={25}
        height={25}
        alt="icon"
        className="icon me-3"
      />
      <p className="item-title m-0">
        <Link legacyBehavior href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}
