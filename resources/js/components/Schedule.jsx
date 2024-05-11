import { useState } from "react"
import Table from "./Table";

export default function Schedule() {
   const [selectedTable, setSelectedtable] = useState('kleuters');

   const toggleTable = (tableName) => {
    if (selectedTable === tableName) {
        setSelectedtable(null);
    } else {
        setSelectedtable(tableName);
    }
   }

   const kleuterData = [
    {time: '09:30-10:30', day: 'Zaterdag', who: 'Instappers & 1ste kleuterklas' , type: 'Class' },
    {time: '10:30-11:30', day: 'Zaterdag', who: '2de & 3de  kleuterklas' , type: 'Class' },
    {time: '14:00-15:00', day: 'Woensdag', who: '2de & 3de kleuterklas' , type: 'Class' },
   ]

   const modernData = [
    {time: '16:00-17:00', day: 'Woensdag', who: '1ste & 2de leerjaar' , type: 'Class' },
    {time: '17:30-18:30', day: 'Woensdag', who: '3de & 4de leerjaar' , type: 'Class' },
    {time: '18:30-19:45', day: 'Woensdag', who: '5de & 6de leerjaar' , type: 'Class' },
    {time: '19:15-20:30', day: 'Maandag', who: '+ 12 jaar' , type: 'Class' },
    {time: '20:15-21:30', day: 'Vrijdag', who: '+ 16 jaar' , type: 'Class' },
    {time: '19:00-20:15', day: 'Donderdag', who: '+ 21 jaar' , type: 'Class' },
   ]
   
   const hiphopData = [
    {time: '15:00-16:00', day: 'Woensdag', who: '1ste & 2de leerjaar' , type: 'Class' },
    {time: '17:15-18:15', day: 'Vrijdag', who: '3de & 4de leerjaar' , type: 'Class' },
    {time: '17:15-18:30', day: 'Dinsdag', who: '5de & 6de leerjaar' , type: 'Class' },
    {time: '18:30-19:45', day: 'Dinsdag', who: '+ 12 jaar' , type: 'Class' },
    {time: '19:45-21:00', day: 'Dinsdag', who: '+ 15 jaar' , type: 'Class' },
   ]
   
   const wedstrijdData = [
    {time: '18:15-20:15', day: 'Vrijdag', who: 'Refresh' , type: 'Class' }, 
   ]

   const highData = [
    {time: '18:00-19:15', day: 'Maandag', who: '+ 10 jaar modern' , type: 'Class' }, 
    {time: '20:15-21:30', day: 'Donderdag', who: '+ 17 jaar modern' , type: 'Class' }, 
    {time: '11:30-12:45', day: 'Zaterdag', who: '+ 14 jaar hiphop' , type: 'Class' }, 
   ]



    return(
        <>
           <section className="schedule position-relative" id="lessenrooster">
            <div className="padding-left-150 padding-right-150 padding-top-150 padding-bottom-100">
              <div className="border-1 text-center" />
                <div className="schedule-title position-relative">
                  <h3 className=" text-center padding-top-20 padding-bottom-20 bold font-size-3 text-color-2">
                    Lessenrooster
                  </h3>
               </div>
               <div className="schedule-header padding-top-20 d-flex">
                   <div className="dance-level">
                     <button onClick={() => toggleTable('kleuters')}>Kleuters</button>
                    </div>
                    <div className="dance-level">
                     <button onClick={() => toggleTable('modern')}>Modern</button>
                    </div>
                    <div className="dance-level">
                     <button  onClick={() => toggleTable('hiphop')}>Hip-Hop</button>
                    </div>
                    <div className="dance-level">
                     <button  onClick={() => toggleTable('wedstrijd')}>Wedstrijdgroepen</button>
                    </div>
                    <div className="dance-level">
                     <button  onClick={() => toggleTable('high')}>High Level</button>
                    </div>
                </div>
                <div className="table-container padding-top-20 padding-bottom-20">
                    {selectedTable === 'kleuters' && <Table tableData={kleuterData} />}
                    {selectedTable === 'modern' && <Table tableData={modernData} />}
                    {selectedTable === 'hiphop' && <Table tableData={hiphopData} />}
                    {selectedTable === 'wedstrijd' && <Table tableData={wedstrijdData} />}
                    {selectedTable === 'high' && <Table tableData={highData} />}
                
                </div>
            </div>
          </section>
      </>
    )
}