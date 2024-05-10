export default function InfoContent(){
    return(
        <>
            <section className="backg-color-1">
               <div className="padding-top-150 padding-bottom-100 padding-right-150 padding-left-150 font-2 container-m">
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
    </>
    )
}