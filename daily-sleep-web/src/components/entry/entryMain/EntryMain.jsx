import "./entryMain.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from '@mui/icons-material/Event';

import { useState, useEffect } from 'react';
import { getLastPending, setNewEntry } from '../../../services/sleep';

const EntryMain = () => {
  // New Entry Manager
  const [entryCSS, setEntryCSS] = useState('');
  const [entry, setEntry] = useState(false);
  const [last, setLast] = useState([]);
  
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

    useEffect(async () => {
     const lastEntries = await getLastPending();
     if(lastEntries.data && lastEntries.data.length > 0){
       setEntryCSS('em-new-disabled')
        setEntry(true);
      }
     setLast(lastEntries);

    }, [])
    
    
    const obtenerFecha = () => {
      const meses = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
      if(last.data && last.data.length > 0){
        const fecha = new Date(last.data[0].startDate);
        const dia = fecha.getDay();
        const mes = meses[fecha.getMonth()]
        return mes+" - "+dia;
      }else{
        return null;
      }
    }

    
    const dia = obtenerFecha();


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
        {dia !== null && <div className="em-pending-list">
          <h2>Pending Sleep</h2>
          <div className="em-pending">
            {dia !== null && <div className="em-event"><EventIcon className="em-event-icon"/>{dia}</div>}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default EntryMain;
