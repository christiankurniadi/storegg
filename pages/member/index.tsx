import OverviewContent from "@/components/organisms/OverviewContent"
import SideBar from "@/components/organisms/SideBar"

export default function Member() {
  return (
    <>
      {/* Overview */}
      <section className="overview overflow-auto">
        <SideBar ActiveMenu="overview" />
        <OverviewContent />
      </section>
    </>
  )
}
