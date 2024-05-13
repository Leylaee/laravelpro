import { useForm } from "@inertiajs/react";

export default function ContactForm(){
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    message:''
  })

  function submit(e) {
    e.preventDefault();
        post('/'); 
}


    return(
        <>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={data.name} 
                onChange={e => setData('name', e.target.value)}
              />
            </label>
            {errors.name && <div>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={data.email} 
                onChange={e => setData('email', e.target.value)}
              />
            </label>
            {errors.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="phone">
              <input type="tel" id="phone" name="telefoon" placeholder="Phone"
                     value={data.phone} 
               onChange={e => setData('phone', e.target.value)} />
            </label>
            {errors.phone && <div>{errors.phone}</div>}
          </div>
          <div>
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={data.message} 
                onChange={e => setData('message', e.target.value)}
              />
            </label>
            {errors.message && <div>{errors.message}</div>}
          </div>
          <button type="submit" className='button-1'>Verzenden</button>
        </form>
       </>
    )
}