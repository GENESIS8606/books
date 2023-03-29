import './App.css';
import Navebar from './component/Navebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
      
      <Navebar/>
      <Routes>
          <Route path='/View' element={<View/>}/>
          <Route path='/Add' element={<Add data={{id:'',name:'',grade:''}} method="post"/>}/>
      </Routes>
    
    </div>
    
  );
}

export default App;
