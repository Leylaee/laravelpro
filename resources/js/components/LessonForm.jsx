import { useForm, usePage } from "@inertiajs/react"


export default function LessonForm(){
    const { data, setData, post, processing, errors } = useForm({
        category: '',
        description: '',
        starttime: '',
        endtime: '',
        startdate:'',
        enddate: '',
        day_of_week: '',
        user_ids: []
      })

      const {users} = usePage().props;
      
      
    function handleCheckboxChange(userId) {
        const updatedUserIds = data.user_ids.includes(userId)
            ? data.user_ids.filter(id => id !== userId)
            : [...data.user_ids, userId];
        setData('user_ids', updatedUserIds);
    }
      
    function submit(e) {
        e.preventDefault();
            post('/lessons'); 
    }

    return (
        <div>
            <h1>Les toevoegen</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="category">Categorie:</label>
                    <input 
                          type="text" 
                          value={data.category} 
                          onChange={e => setData('category', e.target.value)} 
                    />
                    {errors.category && <div  className="errors">{errors.category}</div>}
                </div>
                <div>
                    <label htmlFor="description">Beschrijving:</label>
                    <textarea 
                          value={data.description} 
                          onChange={e => setData('description', e.target.value)} 
                    />
                    {errors.description && <div  className="errors">{errors.description}</div>}
                </div>
                <div>
                    <label htmlFor="starttime">Starttijd:</label>
                    <input 
                          type="time" 
                          value={data.starttime} 
                          onChange={e => setData('starttime', e.target.value)} 
                    />
                    {errors.starttime && <div  className="errors">{errors.starttime}</div>}
                </div>
                <div>
                    <label htmlFor="endtime">eindtijd:</label>
                    <input 
                          type="time" 
                          value={data.endtime} 
                          onChange={e => setData('endtime', e.target.value)} 
                    />
                    {errors.endtime && <div  className="errors">{errors.endtime}</div>}
                </div>
                <div>
                    <label htmlFor="startdate">Startdatum:</label>
                    <input 
                          type="date" 
                          value={data.startdate} 
                          onChange={e => setData('startdate', e.target.value)} 
                    />
                    {errors.startdate && <div  className="errors">{errors.startdate}</div>}
                </div>
                <div>
                    <label htmlFor="enddate">Einddatum:</label>
                    <input 
                          type="date" 
                          value={data.enddate} 
                          onChange={e => setData('enddate', e.target.value)} 
                    />
                    {errors.enddate && <div  className="errors">{errors.enddate}</div>}
                </div>
                <div>
                    <label htmlFor="day_of_week">Kies een dag:</label>
                    <select
                          name="day_of_week" 
                          value={data.day_of_week} 
                          onChange={e => setData('day_of_week', parseInt(e.target.value))} 
                    >
                         <option value={1}>Maandag</option>
                         <option value={2}>Dinsdag</option>
                         <option value={3}>Woensdag</option>
                         <option value={4}>Donderdag</option>
                         <option value={5}>Vrijdag</option>
                         <option value={6}>Zaterdag</option>
                         <option value={7}>Zondag</option>
                    </select>

                    {errors.day_of_week && <div  className="errors">{errors.day_of_week}</div>}
                </div>
                <div>
                    <label>Docenten/Studenten:</label>
                    {users.map(user => (
                        <div key={user.id}>
                            <input
                                type="checkbox"
                                id={user.id}
                                value={user.id}
                                checked={data.user_ids.includes(user.id)}
                                onChange={() => handleCheckboxChange(user.id)}
                            />
                            <label htmlFor={user.id}>{user.name} ({user.role})</label>
                        </div>
                    ))}
                    {errors.user_ids && <div  className="errors">{errors.user_ids}</div>}
                </div>

               <button type="submit" disabled={processing}>Voeg les toe</button>
            </form>
        </div>
    )
}