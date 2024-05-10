import '../../css/app.css'
import MainNav from "../components/MainNav";
import Scroller from "../components/Scroller";
import Hero from '../components/Hero';
import InfoContent from '../components/InfoContent';
import Team from '../components/Team';
import Aanbod from '../components/Aanbod'
import Review from '../components/Review';



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
            


  <section className="schedule position-relative" id="lessenrooster">
    <div className="padding-left-150 padding-right-150 padding-top-150 padding-bottom-100">
      <div className="border-1 text-center" />
      <div className="schedule-title position-relative">
        <h3 className=" text-center padding-top-20 padding-bottom-20 bold font-size-3 text-color-2">
          Lessenrooster
        </h3>
      </div>
      <div className="schedule-header padding-top-20 d-flex">
        <div className="dance-level">
          <button className="">Kleuters</button>
        </div>
        <div className="dance-level">
          <button className="">Modern</button>
        </div>
        <div className="dance-level">
          <button className="">Hip-Hop</button>
        </div>
        <div className="dance-level">
          <button className="">Wedstrijdgroepen</button>
        </div>
        <div className="dance-level">
          <button className="">High Level</button>
        </div>
      </div>
      <div className="table-container padding-top-20 padding-bottom-20">
        <table>
          <thead>
            <tr>
              <th>Tijdstip</th>
              <th>Dag</th>
              <th>Wie</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:30-10u30</td>
              <td>Zaterdag</td>
              <td>Instappers &amp; 1ste kleuterklas</td>
              <td>Class</td>
            </tr>
            <tr>
              <td>10:30-11:30</td>
              <td>Zaterdag</td>
              <td>2de &amp; 3de kleuterklas</td>
              <td>Class</td>
            </tr>
            <tr>
              <td>14:00-15:00</td>
              <td>Woensdag</td>
              <td>2de &amp; 3de kleuterklas</td>
              <td>Class</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="news backg-color-1 text-center">
    <div className="padding-top-150 padding-bottom-100 position-relative padding-right-200 padding-left-200 container-m">
      <div className="border-1" />
      <div className="news-title">
        <h3 className="text-color padding-top-20 padding-bottom-20 bold font-size-3">
          Laatste Nieuws
        </h3>
      </div>
      <div className="news-container row">
        <div className="news-card col-md-5 col-xs-12">
          <div className="news-header">
            <img
              src="images/dansvoorstelling-katan-17-18-mei.jpg"
              alt="afbeelding dansvoorstelling studio katan"
            />
          </div>
          <div className="news-body">
            <p>14 April 2024</p>
            <h4>Jaarlijkse voorstelling!</h4>
          </div>
        </div>
        <div className="news-card col-md-5 col-xs-12">
          <div className="news-header">
            <img
              src="images/dansvoorstelling-katan-17-18-mei.jpg"
              alt="afbeelding dansvoorstelling studio katan"
            />
          </div>
          <div className="news-body">
            <p>14 April 2024</p>
            <h4>Jaarlijkse voorstelling!</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="banner d-flex align-center justify-f-center column">
    <div className="border-1 text-center banner-border" />
    <h2 className="font-3 bold-500 font-size-5 text-color-2 padding-top-50">
      Discover your potential Now
    </h2>
    <button className='button-1'>Subscribe</button>
  </section>
  <section className="contact" id="contact">
    <div className="d-flex column contact-container">
      <div className="contact-form position-relative text-center padding-top-150 padding-bottom-100">
        <div className="border-1" />
        <div className="contact-title">
          <h3 className="padding-top-20 padding-bottom-20 bold font-size-3 text-color">
            Get in Touch
          </h3>
        </div>
        <form>
          <div>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                defaultValue={""}
              />
            </label>
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.7398120505763!2d5.371573476439287!3d51.020955471706706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1266722a32fad%3A0x962aeafe4f075177!2sDansstudio%20Katan!5e0!3m2!1snl!2sbe!4v1714669969527!5m2!1snl!2sbe"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
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
  <p>
    © 2024 Dansstudio Katan | All rights reserved | Webdesign by Leyla Elmas
    </p>
        </>
    )
}