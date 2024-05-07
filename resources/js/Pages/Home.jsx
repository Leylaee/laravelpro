import '../../css/app.css'
import MainNav from "../components/MainNav";
import Scroller from "../components/Scroller";



export default function Home(){
    return(
            <>
              <MainNav />
              <Scroller />
  <section className="videocontainer position-relative">
    <video autoPlay="" muted="" id="video1" className="video1">
      <source src="images/video1.mp4" type="video/mp4" />
    </video>
    <video muted="" id="video2" className="video2">
      <source src="images/video2.mp4" type="video/mp4" />
    </video>
    <video muted="" id="video3" className="video3 ">
      <source src="images/video3.mp4" type="video/mp4" />
    </video>
    <video muted="" id="video4" className="video4 ">
      <source src="images/video4.mp4" type="video/mp4" />
    </video>
    <div className="video-text text-center text-color-2">
      <h1 className="font-3 bold-600 font-size-1">Dream Believe Achieve</h1>
      <p>MOVE WITH GRACE</p>
    </div>
  </section>
  <section className="backg-color-1">
    <div className="padding-top-100 padding-bottom-100 padding-right-150 padding-left-150 font-2 container-m">
      <div className="row">
        <div className="col-md-4 text-center info-content">
          <div>
            <i className="fa-regular fa-user icon-xl lila " />
          </div>
          <div>
            <h4 className="padding-top-20 padding-bottom-20">
              Personal Training
            </h4>
          </div>
          <div className="width-icontext-300">
            <p className="text-color">
              Personal training biedt individueel ontworpen danssessies op maat
              die perfect aansluiten bij jouw behoeften.
            </p>
          </div>
        </div>
        <div className="col-md-4  text-center info-content">
          <div>
            <i className="fa-solid fa-people-group icon-xl lila" />
          </div>
          <div>
            <h4 className="padding-top-20 padding-bottom-20">Group Training</h4>
          </div>
          <div className="width-icontext-300">
            <p className="text-color">
              Groepstraining stelt je in staat om te genieten van de beste
              dansstijlen terwijl je nieuwe moves leert met andere studenten.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center info-content ">
          <div>
            <i className="fa-solid fa-bullhorn icon-xl lila" />
          </div>
          <div>
            <h4 className="padding-top-20 padding-bottom-20">Workshops</h4>
          </div>
          <div className="width-icontext-300">
            <p className="text-color ">
              Als je niet zeker weet wat je moet kiezen, kun je altijd een van
              onze dansworkshops proberen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="team" id="team">
    <div className="team-info padding-left-150 padding-right-150 padding-bottom-100 position-relative padding-top-100 container-m">
      <div className="border-1 text-center" />
      <div className=" text-center ">
        <h3 className="padding-top-20 padding-bottom-20 bold font-size-3 text-color">
          Meet the Team
        </h3>
        <p>
          Bij Studio Katan streven we ernaar om een positief verschil te maken
          in het leven van artiesten door inspiratie, ondersteuning en
          professionaliteit. Onze toegewijde docenten zijn
          industrieprofessionals die je helpen jouw volledige potentieel te
          bereiken.
        </p>
      </div>
      <div className="team-container padding-top-50">
        <div className="row">
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4">
            <div className="member-pic">
              <img src="images/an-verantwoordelijke-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20 ">
              <h4 className="bold-500">Ann Houben</h4>
              <p className="bold-300 font-size-4">VERANTWOORDELIJKE</p>
            </div>
          </div>
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4">
            <div className="member-pic">
              <img src="images/karo-highlevel-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20">
              <h4 className="bold-500">Karo Hendrickx</h4>
              <p className="bold-300 font-size-4">LERAAR, HIGH LEVEL GROEPEN</p>
            </div>
          </div>
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4">
            <div className="member-pic">
              <img src="images/sophie-wedstrijdtrainer-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20">
              <h4 className="bold-500">Sophie Wynants</h4>
              <p className="bold-300 font-size-4">
                LERAAR, WEDSTRIJDTEAMS &amp; HIP-HOP
              </p>
            </div>
          </div>
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4">
            <div className="member-pic">
              <img src="images/kim-kleuters-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20">
              <h4 className="bold-500">Kim Van de Beek</h4>
              <p className="bold-300 font-size-4">LERAAR, KLEUTERS</p>
            </div>
          </div>
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4 ">
            <div className="member-pic">
              <img src="images/esmee-hiphop-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20">
              <h4 className="bold-500">Esmee Roman</h4>
              <p className="bold-300 font-size-4">LERAAR, HIP-HOP</p>
            </div>
          </div>
          <div className="team-member-container text-center col-12 col-md-6 col-xl-4">
            <div className="member-pic">
              <img src="images/lina-modernedans-katan.jpg" />
            </div>
            <div className="member-pic-overlay">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="member-info padding-top-20 padding-bottom-20">
              <h4 className="bold-500">Lina Maagouz</h4>
              <p className="bold-300 font-size-4">LERAAR, MODERNE DANSLES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="classes backg-color-2" id="aanbod">
    <div className="row container-m padding-left-150 padding-right-150 padding-top-100 padding-bottom-100 position-relative">
      <div className="border-1 text-center" />
      <div className="classes-title">
        <h3 className="text-color-2 text-center padding-top-20 padding-bottom-20 bold font-size-3">
          Aanbod
        </h3>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">01</div>
        <div className="padding-left-55 padding-top-25">
          <h4>Hip-Hop</h4>
          <p className="width-100">Ontdek de basisprincipes van Hip-hop.</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">02</div>
        <div className="padding-left-30 padding-top-25">
          <h4>Moderne dans</h4>
          <p className="width-100">
            Verken de wereld van Moderne dans met beweging en emotie.
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">03</div>
        <div className="padding-left-30 padding-top-25">
          <h4>Kleuters</h4>
          <p className="width-100">
            Laat kleuters kennismaken met de vrolijke wereld van dansplezier.
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">03</div>
        <div className="padding-left-30 padding-top-25">
          <h4>High Level</h4>
          <p className="width-100">
            Verrijk je dansvaardigheden met onze high-level groepen.
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">05</div>
        <div className="padding-left-30 padding-top-25">
          <h4>Pilates</h4>
          <p className="width-100">
            Versterk je lichaam en geest met onze Pilates-lessen.
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 d-flex text-color-2 ">
        <div className="lila number-size">06</div>
        <div className="padding-left-30 padding-top-25">
          <h4>Wedstijdteams</h4>
          <p className="width-100">Treed toe tot onze competitieve teams.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="backg-color-1 text-color" id="TKE">
    <div className="reviews-container d-flex justify-f-center align-center padding-top-100 padding-bottom-100">
      <div className="review position-relative">
        <div className="review-head padding-bottom-20">
          <h3 className="padding-left-30">The Katan Experience</h3>
          <p className="padding-left-150">See what people are saying..</p>
        </div>
        <div className="review-body">
          <ul>
            <li>
              <div className="wrapper">
                <div className="thumbnail">
                  <div className="thumbnail-overlay" />
                  <img src="images/review1.jpg" />
                </div>
                <div className="aside padding-right-10">
                  <i>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloremque, quibusdam necessitatibus! Commodi voluptas fugit
                    sequi maiores perferendis autem, laboriosam qui sed quaerat
                    ipsum soluta incidunt sit quas? Fuga, beatae ipsum.
                  </i>
                  <div className="name">
                    <h4>Sarah Malik</h4>
                    <p>Dancer</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="schedule position-relative" id="lessenrooster">
    <div className="padding-left-150 padding-right-150 padding-top-100 padding-bottom-100">
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
    <div className="padding-top-100 padding-bottom-100 position-relative padding-right-200 padding-left-200 container-m">
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
    <h2 className="font-3 bold-500 font-size-5 text-color-2">
      Discover your potential Now
    </h2>
    <button>Book a free trial</button>
  </section>
  <section className="contact" id="contact">
    <div className="d-flex column contact-container">
      <div className="contact-form position-relative text-center padding-top-100 padding-bottom-100">
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