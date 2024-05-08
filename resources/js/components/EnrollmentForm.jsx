import { useForm, usePage} from '@inertiajs/react'
import { useState } from 'react';

export default function EnrollmentForm(){
    const { data, setData, post, processing, errors } = useForm({
        registration_for: '',
        name: '',
        birthdate: '',
        tel: '',
        email: '',
        category: '',
        description:'',
        })

    const {lessons} = usePage().props;

    const uniqueCategories = [...new Set(lessons.map((lesson) => lesson.category))]
    const [selectedCategory, setSelectedCategory] = useState('');

    const filterDescription = () => {
        if(!selectedCategory) return [];
        const selectedLesson = lessons.filter((lesson) => lesson.category === selectedCategory);
        console.log('Selected Lesson:' , selectedLesson);
        return selectedLesson.flatMap((lesson) => lesson.description);
    }

    function submit(e) {
            e.preventDefault()
            post('/enrollment')
    }

    return (
           <form onSubmit={submit}>
            <div>
                <label htmlFor='registration_for'>Voor wie is de inschrijving bedoeld?</label>
                <select id="registration_for" value={data.registration_for} onChange={e => setData('registration_for', e.target.value)}>
                      <option value="">Selecteer</option>
                      <option value="self">Voor mezelf</option>
                      <option value="other">Voor iemand anders</option>
                </select>
                {errors.registration_for && <div>{errors.registration_for}</div>}
            </div>

            <div>
               <label htmlFor="name">Voer volledige naam in:</label>
               <input 
                   type="text" 
                   value={data.name} 
                   onChange={e => setData('name', e.target.value)} 
                />
                {errors.name && <div>{errors.name}</div>}
            </div>

            <div>
               <label htmlFor="birthdate">Geboortedatum:</label>
               <input 
                   type="date" 
                   value={data.birthdate} 
                   onChange={e => setData('birthdate', e.target.value)} 
                />
                {errors.birthdate && <div>{errors.birthdate}</div>}
            </div>

            <div>
                <label htmlFor="tel">Telefoon:</label>
                <input 
                   type="tel" 
                   value={data.tel} 
                   onChange={e => setData('tel', e.target.value)} 
                />
                {errors.tel && <div>{errors.tel}</div>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                   type="email" 
                   value={data.email} 
                   onChange={e => setData('email', e.target.value)} 
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Selecteer les:</label>
                {uniqueCategories.map((category) => (   
                    <div key={category}>
                            <label>
                            <input
                                type="radio"
                                name="lesson"
                                checked={selectedCategory === category}
                                value={category}
                                onChange={(e) => {setData('category', e.target.value); setSelectedCategory(e.target.value); console.log('Selected Category:', selectedCategory);}}
                            />
                             {category}
                            </label>
                        </div>
                ))}
            </div>
            <div>
            {selectedCategory  && (
                         <>  
                             <label>Kies niveau:</label>
                             <label>
                                <select
                                   value={data.description}
                                   onChange={(e) => setData('description', e.target.value)}
                                >
                                    <option value="">Selecteer een niveau</option>
                                    {filterDescription().map((description,index) => (
                                        <option key={index} value={description}>
                                            {description}
                                        </option>
                                    ))}
                                </select>
                            </label>
                         </>
            )}
            </div>
                
               <button type="submit" disabled={processing}>Schrijf je in</button>
        </form>
     );
}