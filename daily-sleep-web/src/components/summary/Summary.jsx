import DataBox from '../dataBox/DataBox'
import './summary.css'
import { useState, useEffect } from 'react';
import { getLast, getLastWeek } from '../../services/sleep';


const Summary = () => {
    const [last, setLast] = useState(0);
    const [lastWeek, setLastWeek] = useState(0);

    useEffect(async () => {
        const lastResult = await getLast();
        const lastWeekResult = await getLastWeek();
        setLast(lastResult);
        setLastWeek(lastWeekResult);
    }, [])


    return (
        <div className="summary-main">
            
            <h2 className="summary-title">Dashboard</h2>
            <div className="summary-box-list">
                <DataBox period="today" value={last}/>
                <DataBox period="last week" value={lastWeek}/>
                <DataBox period="last month"/>
            </div>
        </div>
    )
}

export default Summary
