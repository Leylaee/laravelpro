export default function News() {
    return (
        <>
         <section className="news backg-color-1 text-center font-4" id="news">
          <div className="news-c padding-top-150 padding-bottom-100 position-relative padding-right-200 padding-left-200 container-m">
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
                 alt="Afbeelding dansvoorstelling Studio Katan"
               />
             </div>
             <div className="news-body">
               <p>17-18 mei 2024</p>
               <h4>Dansvoorstelling!</h4>
            </div>
           </div>
           <div className="news-card col-md-5 col-xs-12">
             <div className="news-header">
              <img
                src="images/pilates-katan.png"
                alt="Afbeelding pilates Studio Katan"
              />
             </div>
             <div className="news-body">
               <p>Elke zondag!</p>
               <h4>Pilates lessen</h4>
             </div>
            </div>
           </div>
          </div>
         </section>
      </>
    )
}