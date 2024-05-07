import { useForm, usePage } from '@inertiajs/react'

export default function EnrollmentForm(){
    const { data, setData, post, processing, errors } = useForm({
         name: '',
         tel: '',
         email: '',
         category:'',
         description: '',
        })

    const {lessons} = usePage().props;

    function submit(e) {
            e.preventDefault()
            post('/enrollment')
    }

    return (
           <form onSubmit={submit}>
               <input 
                   type="text" 
                   value={data.name} 
                   onChange={e => setData('name', e.target.value)} 
                />
                {errors.name && <div>{errors.name}</div>}
                <input 
                   type="tel" 
                   value={data.tel} 
                   onChange={e => setData('tel', e.target.value)} 
                />
                {errors.tel && <div>{errors.tel}</div>}
                <input 
                   type="email" 
                   value={data.email} 
                   onChange={e => setData('email', e.target.value)} 
                />
                {errors.email && <div>{errors.email}</div>}
                {lessons.map((lesson) => (
                       <div key={lesson.id}>
                            <input
                                type="radio"
                                id={lesson.id}
                                name="category"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                             />
                        </div>
                 ))}

               
               <button type="submit" disabled={processing}>Login</button>
          </form>
     )
}