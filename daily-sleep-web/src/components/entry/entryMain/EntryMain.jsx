import "./entryMain.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from '@mui/icons-material/Event';

import { useState, useEffect } from 'react';
import { getLastPending, setNewEntry, updateEntry } from '../../../services/sleep';
import entryRating from "../entryRating/EntryRating";
import EntryRating from "../entryRating/EntryRating";

const EntryMain = () => {
  // New Entry Manager
  const [entryCSS, setEntryCSS] = useState('');
  const [entry, setEntry] = useState(false);
  const [last, setLast] = useState([]);
  const [entryRating, setEntryRating] = useState(false);

  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  
  const handleEntry = async () =>{
    setEntryCSS('em-new-disabled')
    setEntry(true);
    if(!entry){
      const myDate = new Date(Date.now());
      const newEntry = await setNewEntry(myDate);
      console.log(`newEntry`, newEntry)
      const newLastEntry = {
        data: [newEntry.data]
      }
      setLast(newLastEntry)
    }
  }

  const handleCloseEntry = async () => {
    setEntryCSS('');
    setEntry(false);
    const entry = {...last.data[0]};
    entry.sleepRating = rating;
    entry.endDate = new Date(Date.now());
    entry.completed = true;
    const updatedEntry = await updateEntry(entry);
    setLast([]);
  }

    useEffect(async () => {
     const lastEntries = await getLastPending();
     if(lastEntries.data && lastEntries.data.length > 0){
       setEntryCSS('em-new-disabled')
        setEntry(true);
      }
     setLast(lastEntries);

    }, [])
    
    
    const obtenerFecha = () => {
      const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      if(last.data && last.data.length > 0){
        const fecha = new Date(last.data[0].startDate);
        const dia = days[fecha.getDay()-1]
        const diaNum = fecha.getDate();
        const mes = meses[fecha.getMonth()]
        return {mes, dia, diaNum}
      }else{
        return null;
      }
    }

    
    const fecha = obtenerFecha();

    const handleEntryRating = () => {
        setEntryRating(true);
    }


  return (
    <div className="em-main">
      <div className="em-wrapper">
        <div className="em-list">
          <div className="em-item em-item-green">
            <div className="em-item-icon">
              <AccessTimeIcon fontSize="large" />
            </div>
            <div className="em-item-text">close</div>
          </div>
          <div className="em-item em-item-red">
            <div className="em-item-icon">
              <CancelIcon fontSize="large" />
            </div>
            <div className="em-item-text">cancel</div>
          </div><div className="em-item em-item-blue">
            <div className="em-item-icon">
              <HelpIcon fontSize="large" />
            </div>
            <div className="em-item-text">help</div>
          </div>
        </div>

        <div className={`em-new ${entryCSS}`} onClick={handleEntry}>
          <div className="em-text">
            <div className="em-new-text">New Sleep</div>
            <div className="em-new-subtext">Add new sleep</div>
          </div>
          <div className="em-icon">
            <DarkModeIcon fontSize="large" />
          </div>
        </div>
        {fecha !== null && <div className="em-pending-list">
          <h2>Pending Sleep</h2>
          <div className="em-pending" onClick={handleEntryRating}>
            {fecha !== null && 
            <div className="em-event">
                <div className="em-day">{fecha.diaNum}</div>
                <div className="em-date-info">
                    <div className="em-date-info-day">{fecha.dia}</div>
                    <div className="em-date-info-month">{fecha.mes}</div>
                </div>
                <div className="em-button">
                    <input type="button" value="Close" className="em-button-style" />
                </div>
                
                
            </div>
                }
          </div>
         { entryRating && <div className="em-entry-rating">
                <EntryRating setRated={setRated} setRating={setRating}/>
         </div>}

         { rated && <div className="em-entry-close-rating">
         <div className="em-button">
                    <input onClick={handleCloseEntry} type="button" value="Send Rating" className="em-button-send-style" />
                </div>
           </div>}

        </div>}
      </div>
    </div>
  );
};

export default EntryMain;
