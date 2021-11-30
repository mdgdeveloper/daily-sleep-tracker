import Chart from '../chart/Chart';
import ChartBar from '../chartBar/ChartBar';
import './overview.css';
import { getLastWeekChart, getLastWeekRatings } from '../../services/sleep';
import { useState } from 'react';
import { useEffect } from 'react';

const Overview = () => {
    const [lastWeek, setLastWeek] = useState();
    const [weekEntries, setWeekEntries] = useState();

    useEffect(async () => {
        const lastWeekResult = await getLastWeekChart();
        const weekResult = await getLastWeekRatings();
        setLastWeek(lastWeekResult);
        setWeekEntries(weekResult);
    }, []);

    return (
        <div className="o-main">
            <h2 className="o-title">Sleep Trend Analysis</h2>
            <h3 className="o-subtitle">Evaluation of sleep</h3>
            <div className="o-chart-section">
                <div className="o-big-chart"><Chart data={lastWeek}/></div>
                <div className="o-small-chart"><ChartBar data={weekEntries}/></div>
            </div>
        </div>
    )
}

export default Overview
