import Portfolio from '../Portfolio/PortFolio';
import Footer from '../Footer/Footer';
import Hero from '@/hero/Hero';
import FooterQ from '@/Footer/FootQ';
import Pricing from '@/Pricing/Pricing';
import Possiblity from '@/Possiblity/Possiblity';
export default function Home() {
  return (
    <main className=" ">
  <Hero/>
  <Possiblity/>
		<Portfolio/>
    <Pricing/>
    <FooterQ/>
		<Footer/>

		
    </main>
  );
}
