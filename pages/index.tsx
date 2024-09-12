import { useEffect } from "react"
import AOS from "aos"
import Navbar from "../components/organisms/Navbar"
import MainBanner from "../components/organisms/MainBanner"
import TransactionStep from "../components/organisms/TransactionStep"
import Reached from "@/components/organisms/Reached"
import Story from "@/components/organisms/Story"
import Footer from "@/components/organisms/Footer"
import FeaturedGame from "@/components/organisms/FeaturedGame"
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Banner */}
      <MainBanner />
      {/* Transaction Step */}
      <TransactionStep />
      {/* Featured games */}
      <FeaturedGame />
      {/* Reached */}
      <Reached />
      {/* Story */}
      <Story />
      {/* Footer */}
      <Footer />
    </>
  )
}
