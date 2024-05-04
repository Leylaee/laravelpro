import LessonForm from "./LessonForm";

export default function AdminProfile({user}) {
    return (
        <>
           <h1>Welcome, {user.name}</h1>
           <LessonForm />
        </>
    )
}