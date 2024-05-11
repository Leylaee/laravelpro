export default function Team(){
    return(
        <>
         <section className="team" id="team">
          <div className="team-info padding-left-150 padding-right-150 padding-bottom-100 position-relative padding-top-150 container-m">
            <div className="border-1 text-center" />
               <div className=" text-center ">
                 <h3 className="padding-top-20 padding-bottom-20 bold font-size-3 text-color font-4">
                  Meet the Team
                 </h3>
                 <p className='font-4'> 
                   Bij Studio Katan streven we ernaar om een positief verschil te maken
                   in het leven van artiesten door inspiratie, ondersteuning en
                   professionaliteit. Onze toegewijde docenten zijn
                   industrieprofessionals die je helpen jouw volledige potentieel te
                   bereiken.
                 </p>
               </div>
               <div className="team-container padding-top-50">
                <div className="row">
                  <div className="team-member-container text-center col-12 col-md-6 col-sm-6 col-xl-4">
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
                  <div className="team-member-container text-center col-12 col-md-6 col-sm-6 col-xl-4">
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
                  <div className="team-member-container text-center col-12 col-md-6 col-sm-6 col-xl-4">
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
                 <div className="team-member-container text-center col-12 col-md-6  col-sm-6 col-xl-4">
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
               <div className="team-member-container text-center col-12 col-md-6 col-sm-6 col-xl-4 ">
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
              <div className="team-member-container text-center col-12 col-md-6 col-sm-6 col-xl-4">
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
       </>
    )
}