import EntryHeader from '../components/entry/entryHeader/EntryHeader';
import EntryFooter from '../components/entry/entryFooter/EntryFooter';
import EntryMain from '../components/entry/entryMain/EntryMain';
import './entry.css';

const Entry = () => {
    // Entry System V1 
    // TODO: Design the basics: 3 top buttons + 1 big buttonm + List Buttons
    
    return (
        <div className='e-main'>
            <EntryHeader />
            <EntryMain />
      <EntryFooter />
        </div>
    )
}

export default Entry
