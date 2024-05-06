import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Edit({ lesson }) {
    const [lessonData, setLessonData] = useState(lesson);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLessonData(prevLessonData => ({
            ...prevLessonData,
            [name]: value
        }));
    }

    const handleSave = () => {
        router.put(`/lessons/${lessonData.id}`, lessonData);
    }

    return (
        <>
            <div>
                <label htmlFor="category">Categorie:</label>
                <input type="text" name="category" value={lessonData.category} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Beschrijving:</label>
                <textarea name="description" value={lessonData.description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="starttime">Begintijd:</label>
                <input type="time" name="starttime" value={lessonData.starttime} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="endtime">Eindtijd:</label>
                <input type="time" name="endtime" value={lessonData.endtime} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="startdate">Startdatum:</label>
                <input type="date" name="startdate" value={lessonData.startdate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="enddate">Einddatum:</label>
                <input type="date" name="enddate" value={lessonData.enddate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="day_of_week">Dag van de week:</label>
                <select name="day_of_week" value={lessonData.day_of_week} onChange={handleChange}>
                    <option value={1}>Maandag</option>
                    <option value={2}>Dinsdag</option>
                    <option value={3}>Woensdag</option>
                    <option value={4}>Donderdag</option>
                    <option value={5}>Vrijdag</option>
                    <option value={6}>Zaterdag</option>
                    <option value={7}>Zondag</option>
                </select>
            </div>
            <div>
                <label htmlFor="user_name">Docentnaam:</label>
                <input type="text" name="user_name" value={lessonData.user_name} onChange={handleChange} />
            </div>
            <button onClick={handleSave}>Opslaan</button>
        </>
    )
}