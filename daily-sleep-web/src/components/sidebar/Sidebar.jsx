import './sidebar.css';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import Logo from '../../images/Logo.png';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Sidebar = () => {
    return (
        <div className="s-main">
            <div className="s-wrapper">
                <div className="s-logo"><img src={Logo} alt="" className="s-logo-image" /></div>
                <div className="s-menu">
                    <div className="s-menu-item">
                        <div className="s-menu-icon"><SpeedOutlinedIcon  /></div>
                        <div className="s-menu-link">Dashboard</div>
                    </div>
                    <div className="s-menu-item">
                        <div className="s-menu-icon"><TimerOutlinedIcon  /></div>
                        <div className="s-menu-link">Pending</div>
                    </div>
                    <div className="s-menu-item">
                        <div className="s-menu-icon"><CheckCircleOutlineOutlinedIcon  /></div>
                        <div className="s-menu-link">Completed</div>
                    </div>
                    <div className="s-menu-item">
                        <div className="s-menu-icon"><SettingsOutlinedIcon fontSize="small" /></div>
                        <div className="s-menu-link">Settings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
