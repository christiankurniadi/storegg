import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SideBarProps {
  ActiveMenu: "overview" | "transactions" | "settings"
}

export default function SideBar(props: SideBarProps) {
  const { ActiveMenu } = props
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem
              title="Overview"
              src="overview"
              active={ActiveMenu === "overview"}
              href="/member"
            />
            <MenuItem
              title="Transactions"
              src="transactions"
              href="/member/transactions"
              active={ActiveMenu === "transactions"}
            />
            <MenuItem title="Messages" src="messages" href="/member" />
            <MenuItem title="Card" src="card" href="/member" />
            <MenuItem title="Rewards" src="rewards" href="/member" />
            <MenuItem
              title="Settings"
              src="settings"
              href="/member/edit-profile"
              active={ActiveMenu === "settings"}
            />
            <MenuItem title="Log out" src="logout" href="/sign-in" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  )
}
