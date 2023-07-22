//import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Colorimetria from './pages/Colorimetria';
import Style from './pages/style';
import Rostro from './pages/Rostro';
import {Switch, Route} from 'wouter';
//import Style from './pages/Style';




function App() {
  /* const [count, setCount] = useState(0)*/

  return (

    <><><div className='menu'>
      <Menu /> </div>
    </><Switch>
        <Route path="/style" component={Style} />
        <Route path="/colorimetria" component={Colorimetria}/>
        <Route path="/rostro" component={Rostro}/>
      </Switch></>

  
  )
}

export default App;
