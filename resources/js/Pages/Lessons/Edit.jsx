import { useState,useEffect } from "react";
import { router,usePage } from "@inertiajs/react";

export default function Edit({ lesson }) {
    const [lessonData, setLessonData] = useState({
        ...lesson,
        users_id: lesson.users.map(user => user.id) // Initialize selected users with the users already assigned to the lesson
    });

    const [selectedUsers, setSelectedUsers] = useState(lesson.users.map(user => user.id));

    const { users } = usePage().props;

    useEffect(() => {
        // Update selected users when the lesson prop changes (e.g., lesson is edited)
        setSelectedUsers(lesson.users.map(user => user.id));
    }, [lesson]);

    const handleUserSelect = (userId) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleChange = (e) => {
        const { name, value} = e.target;
        setLessonData(prevLessonData => ({
            ...prevLessonData,
            [name]: value
        }));
    }

    const handleSave = () => {
        const updatedLessonData = {
            ...lessonData,
            users_id: selectedUsers
        };
        router.put(`/lessons/${lessonData.id}`, updatedLessonData);
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
                {lesson.users.map((user) => (
                    <div key={user.id}>
                        <input
                            type="checkbox"
                            id={`user_${user.id}`}
                            value={user.id}
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => handleUserSelect(user.id)}
                        />
                        <label htmlFor={`user_${user.id}`}>{user.name}</label>
                    </div>
                ))}
            </div>
       
            <button onClick={handleSave}>Opslaan</button>
        </>
    )
}