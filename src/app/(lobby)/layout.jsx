import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../../components/layouts/Navbar'));
const Hero = dynamic(() => import('../../components/Hero'));
const Footer = dynamic(() => import('../../components/layouts/Footer'));

export default async function LobbyLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <StairTransition />
      <PageTransition>
      <div>{children}</div>
      </PageTransition>
      <Footer />
    </div>
  );
}
