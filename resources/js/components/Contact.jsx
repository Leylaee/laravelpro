import ContactForm from '../components/ContactForm'


export default function Contact(){
    return(
        <>
          <section className="contact font-4" id="contact">
            <div className="d-flex column contact-container">
             <div className="contact-form position-relative text-center padding-top-150 padding-bottom-100">
               <div className="border-1" />
                 <div className="contact-title">
                  <h3 className="padding-top-20 padding-bottom-20 bold font-size-3 text-color">
                  Get in Touch
                  </h3>
                 </div>
                <ContactForm />
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
       </>
    )
}