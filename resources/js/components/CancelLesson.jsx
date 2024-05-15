export default function CancelLesson({cancelDate, handleDateChange, handleCancelLesson}){
    
    const handleChange = (event) => {
        handleDateChange(event);
    }
    
    return(
        <>
           <input
                type='date'
                value={cancelDate}
                onChange={handleChange}
                className='unsub'
            />  
            <button onClick={handleCancelLesson}>Annuleer</button>
        </>
    )
}