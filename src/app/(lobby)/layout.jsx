import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../../components/layouts/Navbar'));
const Footer = dynamic(() => import('../../components/layouts/Footer'));

export default async function LobbyLayout({ children }) {
  return (
    <div>
      <Navbar />
 
      <StairTransition />
      <PageTransition>
      <div>{children}</div>
      </PageTransition>
      <Footer />
    </div>
  );
}
