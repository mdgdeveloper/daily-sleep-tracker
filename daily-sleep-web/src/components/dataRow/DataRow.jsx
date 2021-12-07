import "./dataRow.css";

const DataRow = ({ entry }) => {
  // To remove
  console.log(`entry`, entry);

  // Refector in new version to have it in a function.
  const endDate = new Date(entry.endDate);
  const endDateString =
    endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear();

  const startDate = new Date(entry.startDate);
  const startHour = startDate.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endHour = endDate.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });


  const getHours = (start, end) => {
    const total = end.getTime() - start.getTime();
    const hours = Math.trunc(total/1000/3600);
    const minutes = Math.trunc((total/1000/3600 - Math.trunc(total/1000/3600))*60);

    return ({ hours, minutes });

  };

  const totalHours = getHours(startDate, endDate);

  return (
    <div className="dt-row">
      <div className="dt-col">{endDateString}</div>
      <div className="dt-col">{startHour}</div>
      <div className="dt-col">{endHour}</div>
      <div className="dt-col">{totalHours.hours}H {totalHours.minutes}m</div>
      <div className="dt-col">{entry.sleepRating}</div>
      <div className="dt-col">{entry.dayRating}</div>
    </div>
  );
};

export default DataRow;
