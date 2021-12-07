import DataTable from '../dataTable/DataTable';
import Overview from '../overview/Overview';
import Summary from '../summary/Summary';
import './main.css';

const Main = () => {
    return (
        <div className="m-main">
            <Summary />  
            <Overview />
            <DataTable />
        </div>
    )
}

export default Main;    