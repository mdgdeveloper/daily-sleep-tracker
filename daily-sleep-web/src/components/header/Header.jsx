import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = () => {
    return (
        <div className="h-main">
            <div className="h-menu">
                <div className="h-search">
                    <div className="h-search-icon"><SearchIcon fontSize="" /></div>
                    <input type="text" className="h-input" placeholder='Buscar...'/>
                </div>
                <div className="h-icon"><NotificationsNoneOutlinedIcon fontSize="small"/></div>
                <div className="h-icon"></div>
                <div className="h-icon"></div>
                <div className="h-icon"><SettingsOutlinedIcon fontSize="small" /></div>
            </div>
        </div>
    )
}

export default Header
