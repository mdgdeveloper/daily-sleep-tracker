import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="app-main">
      <div className="app-wrapper">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="app-right">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
