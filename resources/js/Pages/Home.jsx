import '../../css/app.css'
import MainNav from "../components/MainNav";
import Scroller from "../components/Scroller";
import Hero from '../components/Hero';
import InfoContent from '../components/InfoContent';
import Team from '../components/Team';
import Aanbod from '../components/Aanbod'
import Review from '../components/Review';
import Schedule from '../components/Schedule';
import News from '../components/News';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer'


export default function Home(){
    return(
            <>
              <MainNav />
              <Scroller />
              <Hero />
              <InfoContent />
              <Team />
              <Aanbod />
              <Review />
              <Schedule />
              <News />
              <Banner />
              <Contact />
              <Footer />
            


        </>
    )
}