import { useRef, useState } from "react"


export default function review(){
    const reviews = [
        {
            image: 'images/review1.jpg',
            alt: 'Foto van Sarah Malik',
            text: 'De danslessen zijn van topkwaliteit, met getalenteerde instructeurs en een ondersteunende gemeenschap die elke danservaring betoverend maakt.',
            name: 'Sarah Malik',
            occupation: 'Dancer'
        },
        {
            image: 'images/review2.jpg',
            alt: 'Foto van Niels Thijs',
            text: 'Mijn dochter is dol op de danslessen bij Dansstudio Katan. Het is geweldig om haar passie voor dans te zien groeien.',
            name: 'Niels Thijs',
            occupation:  'Vader'
        }
    ]

    const handlePrevReview = () => {
        console.log("Previous review clicked");
        setCurrentReviewIndex((prevIndex) => {
            if(prevIndex === 0) {
                return reviews.length - 1;
            }else {
                return prevIndex - 1;
            }
        })
    }
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const currentReview = reviews[currentReviewIndex];
    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }



    return(
        <>
          <section className="backg-color-1 text-color font-4" id="TKE">
             <div className="reviews-container d-flex justify-f-center align-center padding-top-150 padding-bottom-100">
               <div className="review position-relative">
                  <div className="review-head padding-bottom-20">
                     <h3 className="padding-left-30">The Katan Experience</h3>
                     <p className="padding-left-150">See what people are saying..</p>
                  </div>
                  <div className="d-flex">
                   <div className='review-icon-back lila'>
                     <i onClick={handlePrevReview} className="fa-solid fa-circle-chevron-left"/>
                   </div>
                 <div className="review-body position-relative">
                  <ul>
                   <li>
                      <div className="wrapper">
                         <div className="thumbnail">
                              <div className="thumbnail-overlay" />
                               <img src={currentReview.image} alt={currentReview.alt} />
                         </div>
                         <div className="aside padding-right-10">
                            <i>
                               {currentReview.text}
                            </i>
                            <div className="name">
                                <h4>{currentReview.name}</h4>
                                <p>{currentReview.occupation}</p>
                            </div>
                        </div>
                      </div>
                    </li>
                   </ul>
                </div>
               <div className='review-icon lila'>
                  <i onClick={handleNextReview} className="fa-solid fa-circle-chevron-right" />
                </div>
             </div>
            </div>
            </div>
          </section>
      </>
    )
}