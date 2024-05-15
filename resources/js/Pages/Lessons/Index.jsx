import { Link, router} from "@inertiajs/react";
import '../../../css/lesson.css'

export default function Index({lessons}){

    const handleDelete = (id) => {
        if (confirm('Weet je zeker dat je dit item wilt verwijderen?')) {
            router.delete(`/lessons/${id}`)
        }
    };

    return(
        <div className="container-m">
          <div className="buttons padding-right-150 padding-left-150">  
           <Link href="/profile"><button className="back">Terug</button></Link>
           <Link href='/lessons/create'>
            <button className="back btn2">Nieuwe les toevoegen</button>
           </Link>
          </div>
        <div className="padding-right-150 padding-left-150">
           <ul className="row lessen">
              {lessons.map(lesson => (
                <li key={lesson.id} style={{backgroundColor: getCategoryColor(lesson.category)}} className="col-md-5 col-sm-12 lescategorie">
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
                                    return <span key={user.id}> {user.name}</span>;
                                    }
                                   })}
                                </p>
                                <p>Leerlingen: 
                                     {lesson.users.map(user => {
                                     if (user.role === 'leerling') {
                                    return <span key={user.id}> {user.name}</span>;
                                    }
                                   })}
                                </p>
                                <Link href={`/lessons/${lesson.id}/edit`}><button className="back ">Bewerken</button></Link>
                                <button className="back btn2"  onClick={() => handleDelete(lesson.id)}>Verwijderen</button>
                            </>
                        </li>
                   ))}
           </ul>
           </div>
        </div>
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

function getCategoryColor(category) {
    switch (category) {
        case 'Kleuters':
            return 'lightblue';
        case 'Hip-Hop':
            return 'lightgreen';
        case 'Modern':
            return 'lightpink';
        case 'Wedstrijdgroepen':
            return 'lightyellow';
        case 'High level':
            return '#E6E6FA';
        default: 
             return 'lightgrey';
    }
}