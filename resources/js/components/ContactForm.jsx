import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ContactForm(){
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    message:''
  })

  const [status,setStatus] = useState(null);
  
  useEffect(() => {
    if(window.flash && window.flash.status) {
      setStatus(window.flash.status);
    }
  },[]);

  function submit(e) {
    e.preventDefault();
        post('/', {
          onSuccess: () => setStatus('Je bericht is verstuurd.')
        });
   }



    return(
        <>
        {status && <div>{status}</div>}
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
                autoComplete="name"
              />
            </label>
            {errors.name && <div className="errors">{errors.name}</div>}
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
                autoComplete="email"
              />
            </label>
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="phone">
              <input type="tel" id="phone" name="telefoon" placeholder="Phone"
                     value={data.phone} 
               onChange={e => setData('phone', e.target.value)} 
               autoComplete="tel"/>
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
            {errors.message && <div className="errors">{errors.message}</div>}
          </div>
          <button type="submit" className='button-1'>Verzenden</button>
        </form>
       </>
    )
}