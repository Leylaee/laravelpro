import { Link,useForm, usePage, router} from "@inertiajs/react";

export default function Index({lessons}){
    
    const handleDelete = (id) => {
        if (confirm('Weet je zeker dat je dit item wilt verwijderen?')) {
        }
        {lessons.filter(lesson => lesson.id === id (
            router.delete('/lessons/' + lesson.id)
        ))
        }

    };

    return(
        <>
           <Link href='/lessons/create'>
            <button>Nieuwe les toevoegen</button>
           </Link>
           <ul>
              {lessons.map(lesson => (
                <li key={lesson.id}>
                            <>
                                <h2>{lesson.category}</h2>
                                <p>Beschrijving: {lesson.description}</p>
                                <p>Begintijd: {lesson.starttime}</p>
                                <p>Eindtijd: {lesson.endtime}</p>
                                <p>Startdatum: {lesson.startdate}</p>
                                <p>Einddatum: {lesson.enddate}</p>
                                <p>Dag van de week: {getDayOfWeek(lesson.day_of_week)}</p>
                                <p>Docenten: 
                                     {lesson.users.map(user => {
                                     if (user.role === 'docent') {
                                    return <span key={user.id}>{user.name}</span>;
                                    }
                                   })}
                                </p>
                                <p>Leerlingen: 
                                     {lesson.users.map(user => {
                                     if (user.role === 'leerling') {
                                    return <span key={user.id}>{user.name}</span>;
                                    }
                                   })}
                                </p>
                                <Link href={`/lessons/${lesson.id}/edit`}><button>Bewerken</button></Link>
                            </>
                        <button onClick={handleDelete}>Verwijderen</button>
                </li>
              ))}
           </ul>
        </>
    )
}

function getDayOfWeek(day){
    switch (day) {
        case 1: return 'Maandag';
        case 2: return 'Dinsdag';
        case 3: return 'Woensdag';
        case 4: return 'Donderdag';
        case 5: return 'Vrijdag';
        case 6: return 'Zaterdag';
        case 7: return 'Zondag';
        default: return '';
    }
}