import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../../components/layouts/Navbar'));
const Hero = dynamic(() => import('../../components/Hero'));
const Footer = dynamic(() => import('../../components/layouts/Footer'));

export default async function LobbyLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
