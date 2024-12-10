
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../../components/layouts/Navbar'));
const Footer = dynamic(() => import('../../components/layouts/Footer'));

export default async function LobbyLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div>{children}</div>
   
      <Footer />
    </div>
  );
}
