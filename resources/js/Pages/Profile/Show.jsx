import AdminProfile from "./AdminProfile";
import UserProfile from "./UserProfile";

export default function Show({user,lessons}) {

    const isAdmin = user.role === 'admin';

    return(
        <>
       

           {isAdmin ? (
                <AdminProfile 
                             user={user}
                />
           ) : (
                <UserProfile 
                            user={user}
                            lessons={lessons}/>
           )}
        
        </>
    )
}