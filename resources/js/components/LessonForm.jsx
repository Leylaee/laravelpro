export default function LessonForm(){
    const { data, setData, post, processing, errors } = useForm({
        category: '',
        description: '',
        time: '',
        startdate:'',
        enddate: '',
        day_of_week: '',
        user_id:''
      })
      
      function submit(e) {
        e.preventDefault()
        post('/lessons')
      }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="category">Categorie:</label>
                    <input 
                          type="text" 
                          value={data.category} 
                          onChange={e => setData('category', e.target.value)} 
                    />
                    {errors.category && <div>{errors.category}</div>}
                </div>
                <div>
                    <label htmlFor="description">Beschrijving:</label>
                    <textarea 
                          value={data.description} 
                          onChange={e => setData('description', e.target.value)} 
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div>
                    <label htmlFor="time">Tijd:</label>
                    <input 
                          type="time" 
                          value={data.time} 
                          onChange={e => setData('time', e.target.value)} 
                    />
                    {errors.time && <div>{errors.time}</div>}
                </div>
                <div>
                    <label htmlFor="startdate">Startdatum:</label>
                    <input 
                          type="date" 
                          value={data.startdate} 
                          onChange={e => setData('startdate', e.target.value)} 
                    />
                    {errors.startdate && <div>{errors.startdate}</div>}
                </div>
                <div>
                    <label htmlFor="enddate">Einddatum:</label>
                    <input 
                          type="date" 
                          value={data.enddate} 
                          onChange={e => setData('enddate', e.target.value)} 
                    />
                    {errors.enddate && <div>{errors.enddate}</div>}
                </div>
                <div>
                    <label htmlFor="day_of_week">Dag van de week:</label>
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

                    {errors.day_of_week && <div>{errors.day_of_week}</div>}
                </div>
                <div>
                    <label htmlFor="user_id">Docentnaam:</label>
                    <input 
                          type="text" 
                          value={data.user_id} 
                          onChange={e => setData('user_id', e.target.value)} 
                    />
                    {errors.user_id && <div>{errors.user_id}</div>}
                </div>

               <button type="submit" disabled={processing}>Voeg les toe</button>
            </form>
        </div>
    )
}