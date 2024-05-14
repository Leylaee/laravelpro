import { useState} from "react";
import { router , Link} from "@inertiajs/react";

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
        <div className="container-m padding-top-50 padding-bottom-50">
            <div className="lessonEdit padding-top-30">
            <h1 className="padding-left-30 padding-bottom-10">Les bewerken</h1>
            <div className="lessonDiv">
                <div>
                <label htmlFor="category">Categorie:</label>
                </div>
                <input type="text" name="category" value={lessonData.category} onChange={handleChange} />
            </div>
            <div className="lessonDiv">
                <div>
                <label htmlFor="description">Beschrijving:</label>
                </div>
                <textarea name="description" value={lessonData.description} onChange={handleChange} />
            </div>
            <div className="lessonDiv"> 
                <div>
                <label htmlFor="starttime">Begintijd:</label>
                </div>
                <input type="time" name="starttime" value={lessonData.starttime} onChange={handleChange} />
            </div>
            <div className="lessonDiv">
                <div>
                <label htmlFor="endtime">Eindtijd:</label>
                </div>
                <input type="time" name="endtime" value={lessonData.endtime} onChange={handleChange} />
            </div>
            <div className="lessonDiv">
                <div>
                <label htmlFor="startdate">Startdatum:</label>
                </div>
                <input type="date" name="startdate" value={lessonData.startdate} onChange={handleChange} />
            </div>
            <div className="lessonDiv">
                <div>
                <label htmlFor="enddate">Einddatum:</label>
                </div>
                <input type="date" name="enddate" value={lessonData.enddate} onChange={handleChange} />
            </div>
            <div className="lessonDiv">
                <div>
                <label htmlFor="day_of_week">Dag van de week:</label>
                </div>
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
            <div className="lessonDiv">
                <label>Kies gebruikers:</label>
                {users.map((user) => (
                    <div key={user.id}>
                        <input
                            className="check"
                            type="checkbox"
                            id={`user_${user.id}`}
                            checked={selectedUsers[user.id] || false}
                            onChange={() => handleCheckboxChange(user.id)}
                        />
                        <label htmlFor={`user_${user.id}`}>{user.name}</label>
                    </div>
                ))}
            </div>
             
             <div className="editButtons">
                <button onClick={handleSave} className="back editbtn">Opslaan</button>
                <Link href='/lessons'><button className="back editbtn btn3">Annuleren</button></Link>
            </div>
            </div>
        </div>
    )
}