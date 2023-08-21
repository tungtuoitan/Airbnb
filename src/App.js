import './styles/App.css';
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/homepage';
import RoomPage from './pages/roomspage';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/rooms' element={<RoomPage/>}/> */}

      </Routes>
      
    </div>
  );
}

export default App;
