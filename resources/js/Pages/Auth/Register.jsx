import { useForm, Link } from "@inertiajs/react"
import { useEffect } from "react"
import '../../../css/register.css'

export default function Register(){

    const { data, setData, post, processing, errors } = useForm({
        name:'',
        email: '',
        password: '',
    })
      
    function submit(e) {
        e.preventDefault()
        post('/register')
    }

    useEffect(() => {
        document.body.style.backgroundColor = '#F0EBE3';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="register-container">
            <div className="register-1 font-4">
            <h1>Register</h1>
            <form onSubmit={submit}>
                <div className="register-input">
                    <div>
                    <label htmlFor="name">Naam:</label>
                    </div>
                    <input 
                          type="text" 
                          value={data.name} 
                          onChange={e => setData('name', e.target.value)} 
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="register-input">
                    <div>
                    <label htmlFor="email">E-mail:</label>
                    </div>
                    <input 
                          type="text" 
                          value={data.email} 
                          onChange={e => setData('email', e.target.value)} 
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="register-input">
                    <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    </div>
                    <input 
                          type="password" 
                          value={data.password} 
                          onChange={e => setData('password', e.target.value)} 
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div className="register-input">
                    <div>
                    <label htmlFor="password">Bevestig wachtwoord:</label>
                    </div>
                    <input 
                          type="password" 
                          value={data.password_confirmation} 
                          onChange={e => setData('password_confirmation', e.target.value)} 
                    />
                    {errors.password_confirmation && <div>{errors.password_confirmation}</div>}
                </div>
               <button type="submit" disabled={processing}>Register</button>
               <p>of <Link className='loginLink' href='/login'>meld</Link> je aan</p>
             </form>
            </div>
        </div>
    )
}