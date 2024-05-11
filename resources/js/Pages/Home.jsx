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
            



  

  <footer className="backg-color-2 text-color-2">
    <div className="footer-container d-flex">
      <div className="footer-info">
        <h5>STUDIO KATAN</h5>
        <p className="font-size-6">
          Dansstudio Katan is een dansplek voor jong en oud. Zowel beginners als
          gevorderden krijgen een variatie aangeboden van verschillende
          dansstijlen. Naast moderne dans en hiphop bieden we ook pilates lessen
          aan.
        </p>
      </div>
      <div className="">
        <h5>Adres &amp; Tel</h5>
        <ul>
          <li>Grote Baan 12A bus 1</li>
          <li>3530 Houthalen</li>
          <li>Ann Houben: 04.77.44.60.46</li>
        </ul>
      </div>
      <div>
        <h5>GET SOCIAL</h5>
        <p>Follow us to stay connected.</p>
      </div>
    </div>
  </footer>

        </>
    )
}