export default function CancelLesson({cancelDate, handleDateChange, handleCancel}){
    return(
        <>
           <input
                type='date'
                value={cancelDate}
                onChange={handleDateChange}
                className='unsub'
            />  
            <button onClick={handleCancel}>Annuleer</button>
        </>
    )
}