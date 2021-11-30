import "./dataBox.css";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

const DataBox = ({ period, value }) => {


    const styleColor = {
        "today": "red",
        "last week": "blue",
        "last month": "green"
    }


  return (
    <div className={`box-main ${styleColor[period]}`}>
      <div className="box-header">
        <div className="box-header-icon">
          <LocalFireDepartmentOutlinedIcon fontSize="small" />
        </div>
        <div className="box-hader-info"></div>
      </div>
      <div className="box-content">
        <div className="box-title">{period}</div>
        <div className="box-info">
          <div className="box-info-data">{value}</div>
          <div className="box-info-units">hrs</div>
        </div>
      </div>
    </div>
  );
};

export default DataBox;
