// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formss from './components/Formss';
import About from './components/About';
import Alert from './components/Alert';
import react,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(() =>{
      setalert(null);
    }, 1000);
}

  const togglemode = ()=>{
    if(mode=== 'light'){
      setmode('dark');
      document.body.style.background='#042743'
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = 'ABz Dark';
      setTimeout(() =>{
        document.title = 'ABz App';
      }, 1000);
      
    }
    else{
      setmode('light');
      document.body.style.background='white'
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = 'ABz Light';
      setInterval(() =>{
        document.title = 'ABz App';
      }, 1000);    }
  }
 
  return (
    <>
<div className="container my-3" >
<Navbar title="AGBMENU" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<Routes>
          <Route path="/" element={<Formss showAlert={showAlert} heading="ENTER TEXT TO ANALYZE" mode={mode} />}></Route>
          <Route path="/about" element={<About  />}> </Route>

        </Routes>
</div>

    </>
);
}




export default App;
 