import { useState} from "react";
import { router} from "@inertiajs/react";

export default function Edit({users,lesson,lessonUsers}) {
    const [lessonData, setLessonData] = useState({
        category: lesson.category,
        description: lesson.description,
        starttime: lesson.starttime,
        endtime: lesson.endtime,
        startdate: lesson.startdate,
        enddate: lesson.enddate,
        day_of_week: lesson.day_of_week,
        user_ids: lesson.user_ids
    })

    const [selectedUsers, setSelectedUsers] = useState({});


    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setLessonData((lesData) => ({
            ...lesData,
            [key]: value 
        }))
    }

    const handleCheckboxChange = (userId) => {
        setSelectedUsers((prevSelectedUsers) => ({
            ...prevSelectedUsers,
            [userId]: !prevSelectedUsers[userId] 
        }));
    };

    const handleSave = () => {
        const selectedUserIds = Object.keys(selectedUsers).filter(userId => selectedUsers[userId]);
        const updatedLessonData = {
            ...lessonData,
            user_ids: selectedUserIds
        };
        router.put(`/lessons/${lesson.id}`, updatedLessonData);
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
                <label>Kies gebruikers:</label>
                {users.map((user) => (
                    <div key={user.id}>
                        <input
                            type="checkbox"
                            id={`user_${user.id}`}
                            checked={selectedUsers[user.id] || false}
                            onChange={() => handleCheckboxChange(user.id)}
                        />
                        <label htmlFor={`user_${user.id}`}>{user.name}</label>
                    </div>
                ))}
            </div>
       
            <button onClick={handleSave}>Opslaan</button>
        </>
    )
}