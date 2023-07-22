//import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Style from './pages/style';
import {Switch, Route} from 'wouter';
//import Style from './pages/Style';




function App() {
  /* const [count, setCount] = useState(0)*/

  return (

    <><><div className='menu'>
      <Menu /> </div>
    </><Switch>
        <Route path="/style" component={Style} />
      </Switch></>

  
  )
}

export default App;
