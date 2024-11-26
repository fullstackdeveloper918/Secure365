import Footer from "@/components/layouts/Footer"
import Navbar from "@/components/layouts/Navbar"


export default async function LobbyLayout({
  children,
}) {


  return (
    <div>
      <Navbar  />
      <div>{children}</div>
      <Footer />
    </div>
  )
}