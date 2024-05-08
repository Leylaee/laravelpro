import Calendar from "../../components/Calendar"

export default function UserProfile({user,lessons}) {
  return (
    <div>
       <h1>Welcome, {user.name}</h1>
          <Calendar lessons={lessons} /> 
    </div>
  )
}