import './entryFooter.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const EntryFooter = () => {
    return (
        <div className='ef-main'>
            <div className="ef-wrapper">
                <div className="ef-icon"><HomeOutlinedIcon fontSize="large"/></div>
                <div className="ef-icon"><InfoOutlinedIcon fontSize="large"/></div>
                <div className="ef-icon"><InboxRoundedIcon fontSize="large" /></div>
                <div className="ef-icon"><AccountCircleOutlinedIcon fontSize="large" /></div>
            </div>
        </div>
    )
}

export default EntryFooter
