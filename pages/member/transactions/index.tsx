import SideBar from "@/components/organisms/SideBar"
import TransactionContent from "@/components/organisms/TransactionContent"

export default function Transactions() {
  return (
    <>
      {/* Transactions */}
      <section className="transactions overflow-auto">
        <SideBar ActiveMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  )
}
