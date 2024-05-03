import { useForm } from "@inertiajs/react"


export default function Login(){

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
      })
      
      function submit(e) {
        e.preventDefault()
        post('/login')
      }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
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
                    <label htmlFor="password">Password:</label>
                    <input 
                          type="password" 
                          value={data.password} 
                          onChange={e => setData('password', e.target.value)} 
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
               <button type="submit" disabled={processing}>Login</button>
            </form>
        </div>
    )
}