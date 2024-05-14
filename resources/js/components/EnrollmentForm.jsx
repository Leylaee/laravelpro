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
        <div className='enrol'>
            <h1>Inschrijving</h1>
           <form onSubmit={submit}>
            <div className='enrol1column'>
            <div>
                <div>
                <label htmlFor='registration_for'>Voor wie is de inschrijving bedoeld?</label>
                </div>
                <select id="registration_for" value={data.registration_for} onChange={e => setData('registration_for', e.target.value)}>
                      <option value="">Selecteer</option>
                      <option value="self">Voor mezelf</option>
                      <option value="other">Voor iemand anders</option>
                </select>
                {errors.registration_for && <div className="errors">{errors.registration_for}</div>}
            </div>

            <div>
               <div>
               <label htmlFor="name">Voer volledige naam in:</label>
               </div>
               <input 
                   type="text" 
                   value={data.name} 
                   onChange={e => setData('name', e.target.value)} 
                />
                {errors.name && <div className="errors">{errors.name}</div>}
            </div>

            <div>
               <div>
               <label htmlFor="birthdate">Geboortedatum:</label>
               </div>
               <input 
                   type="date" 
                   value={data.birthdate} 
                   onChange={e => setData('birthdate', e.target.value)} 
                />
                {errors.birthdate && <div className="errors">{errors.birthdate}</div>}
            </div>

            <div>
                <div>
                <label htmlFor="tel">Telefoon:</label>
                </div>
                <input 
                   type="tel" 
                   value={data.tel} 
                   onChange={e => setData('tel', e.target.value)} 
                />
                {errors.tel && <div className="errors" >{errors.tel}</div>}
            </div>

            </div>


            <div className='enrol2column'>

            <div>
                <div>
                <label htmlFor="email">Email:</label>
                </div>
                <input 
                   type="email" 
                   value={data.email} 
                   onChange={e => setData('email', e.target.value)} 
                />
                {errors.email && <div className="errors">{errors.email}</div>}
            </div>
            <div>
                <label htmlFor='les'>Selecteer les:</label>
                {uniqueCategories.map((category) => (   
                    <div key={category} className='radio'>
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
                {errors.category && <div className="errors">{errors.category}</div>}

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
         </div>
         <button type="submit" disabled={processing} className=''>Schrijf je in</button>
        </form>
        </div>
     );
}