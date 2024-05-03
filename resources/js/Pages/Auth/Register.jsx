import { useForm } from "@inertiajs/react"


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

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Naam:</label>
                    <input 
                          type="text" 
                          value={data.name} 
                          onChange={e => setData('name', e.target.value)} 
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                          type="text" 
                          value={data.email} 
                          onChange={e => setData('email', e.target.value)} 
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    <input 
                          type="password" 
                          value={data.password} 
                          onChange={e => setData('password', e.target.value)} 
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="password">Bevestig wachtwoord:</label>
                    <input 
                          type="password" 
                          value={data.password_confirmation} 
                          onChange={e => setData('password_confirmation', e.target.value)} 
                    />
                    {errors.password_confirmation && <div>{errors.password_confirmation}</div>}
                </div>
               <button type="submit" disabled={processing}>Register</button>
            </form>
        </div>
    )
}