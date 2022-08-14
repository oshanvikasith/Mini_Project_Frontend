import './App.css';
import Menu from './components/SideMenu/Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Routing from './Routing';
import Category from './Pages/Category/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routing/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
