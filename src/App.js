import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
            <Route path ="/graphing-gui" element= {<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
