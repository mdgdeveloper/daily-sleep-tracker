import "./dataTable.css";
import { useState, useEffect } from "react";
import { getLastWeekEntries } from "../../services/sleep";
import DataRow from '../dataRow/DataRow';


const DataTable = () => {
  const [entries, setEntries] = useState();
  // We will obtain the information of the entries in that point.
  // Future refactor breackpoint.

  useEffect(async () => {
    const entriesList = await getLastWeekEntries();
    setEntries(entriesList);
  }, []);

  return (
    <div className="dt-main">
      <h2 className="dt-title">Detailed information</h2>
      <h3 className="dt-subtitle">
        Additional tracking information for each sleep.
      </h3>
      <div className="dt-wrapper">
        <div className="dt-table">
          <div className="dt-row main">
            <div className="dt-col main">Date</div>
            <div className="dt-col main">Start</div>
            <div className="dt-col main">End</div>
            <div className="dt-col main">Total</div>
            <div className="dt-col main">Sleep Rate</div>
            <div className="dt-col main">Day Rate</div>
          </div>
        { entries && entries.map( entry => <DataRow entry={entry}/>) }
        </div>
      </div>
    </div>
  );
};

export default DataTable;
