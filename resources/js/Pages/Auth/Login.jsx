import { useForm } from "@inertiajs/react"
import { useEffect } from "react"
import {Link} from "@inertiajs/react"
import '../../../css/login.css'


export default function Login(){

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
      })
      
      function submit(e) {
        e.preventDefault()
        post('/login')
      }

      useEffect(() => {
        document.body.style.backgroundColor = '#F0EBE3';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="login-container font-4">
           <div className="login-1">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className="login-input">
                    <div>
                    <label htmlFor="email">E-mail:</label>
                    </div>
                    <input 
                          type="text" 
                          value={data.email} 
                          onChange={e => setData('email', e.target.value)} 
                    />
                    {errors.email && <div className="errors">{errors.email}</div>}
                </div>
                <div className="login-input">
                    <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    </div>
                    <input 
                          type="password" 
                          value={data.password} 
                          onChange={e => setData('password', e.target.value)} 
                    />
                    {errors.password && <div className="errors">{errors.password}</div>}
                </div>
               <button type="submit" disabled={processing}>LOGIN</button>
               <p>of maak een <Link className='loginLink' href='/register'>account</Link> aan</p>
            </form>
            </div>
        </div>
    )
}