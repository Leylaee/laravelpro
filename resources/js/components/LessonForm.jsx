import { useForm, usePage, Link } from "@inertiajs/react";


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
        <div className="container-m padding-top-50 padding-bottom-50">
            <form onSubmit={submit} className="lessonEdit padding-top-30">
            <h1 className="padding-left-30 padding-bottom-10">Les toevoegen</h1>
                <div className="lessonDiv">
                    <label htmlFor="category">Categorie:</label>
                    <input 
                          type="text" 
                          value={data.category} 
                          onChange={e => setData('category', e.target.value)} 
                    />
                    {errors.category && <div  className="errors">{errors.category}</div>}
                </div>
                <div className="lessonDiv">
                    <label htmlFor="description">Beschrijving:</label>
                    <textarea 
                          value={data.description} 
                          onChange={e => setData('description', e.target.value)} 
                    />
                    {errors.description && <div  className="errors">{errors.description}</div>}
                </div>
                <div className="lessonDiv">
                    <label htmlFor="starttime">Starttijd:</label>
                    <input 
                          type="time" 
                          value={data.starttime} 
                          onChange={e => setData('starttime', e.target.value)} 
                    />
                    {errors.starttime && <div  className="errors">{errors.starttime}</div>}
                </div>
                <div className="lessonDiv">
                    <label htmlFor="endtime">eindtijd:</label>
                    <input 
                          type="time" 
                          value={data.endtime} 
                          onChange={e => setData('endtime', e.target.value)} 
                    />
                    {errors.endtime && <div  className="errors">{errors.endtime}</div>}
                </div>
                <div className="lessonDiv">
                    <label htmlFor="startdate">Startdatum:</label>
                    <input 
                          type="date" 
                          value={data.startdate} 
                          onChange={e => setData('startdate', e.target.value)} 
                    />
                    {errors.startdate && <div  className="errors">{errors.startdate}</div>}
                </div>
                <div className="lessonDiv">
                    <label htmlFor="enddate">Einddatum:</label>
                    <input 
                          type="date" 
                          value={data.enddate} 
                          onChange={e => setData('enddate', e.target.value)} 
                    />
                    {errors.enddate && <div  className="errors">{errors.enddate}</div>}
                </div>
                <div className="lessonDiv">
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
                <div className="lessonDiv">
                    <label>Docenten/Studenten:</label>
                    {users.map(user => (
                        <div key={user.id}>
                            <input
                                className="check"
                                type="checkbox"
                                id={user.id}
                                value={user.id}
                                checked={data.user_ids.includes(user.id)}
                                onChange={() => handleCheckboxChange(user.id)}
                            />
                            <label htmlFor={user.id}> {user.name} ({user.role})</label>
                        </div>
                    ))}
                    {errors.user_ids && <div  className="errors">{errors.user_ids}</div>}
                </div>
               <div className="editButtons margin-top-10">
               <button type="submit" disabled={processing} className="back editbtn ">Toevoegen</button>
               <Link href='/lessons'><button className="back editbtn btn3">Annuleren</button></Link>
                </div>

            </form>
        </div>
    )
}