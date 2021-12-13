import "./entryMain.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpIcon from "@mui/icons-material/Help";

const EntryMain = () => {
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

        <div className="em-new">
          <div className="em-text">
            <div className="em-new-text">New Sleep</div>
            <div className="em-new-subtext">Add new sleep</div>
          </div>
          <div className="em-icon">
            <DarkModeIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryMain;
