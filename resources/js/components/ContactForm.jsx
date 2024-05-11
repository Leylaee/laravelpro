export default function ContactForm(){
    return(
        <>
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
          <button type="submit" className='button-1'>Verzenden</button>
        </form>
       </>
    )
}