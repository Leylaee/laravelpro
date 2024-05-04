import AdminProfile from "../../components/AdminProfile";
import Calendar from "../../components/Calendar";

export default function Show({user}) {

    const isNotAdmin = user.role !== 'admin';
    const isAdmin = user.role === 'admin';

    return(
        <>

           {isAdmin ? (
                <AdminProfile 
                             user={user}
                />
           ) : (
            <div>
                 <h1>Welcome, {user.name}</h1>
                 {isNotAdmin &&  <Calendar /> }
            </div>
           )}
          
        </>
    )
}