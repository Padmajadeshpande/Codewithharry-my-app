
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() 
{
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
//type means types of alert in bootstrap
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
      setAlert(null);
      //after 300ms alert will dismissed
      },3000)
  }
  
  const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor="#042743";
        showAlert("Dark mode has been enabled","success");
        document.title='textUtils-Dark Mode';
      }
      else{
      
          setMode('light');
          document.body.style.backgroundColor="white";
          showAlert("Light mode has been enabled","success");
          document.title='textUtils-Light Mode';
         
      }
  }
  return (

<>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  /> 
   <Alert alert={alert}/>
 
   <div className="container my-3">
<Routes>
  <Route  exact path="/about" element={<About mode={mode}/>}>
  {/* <About mode={mode}/>  */}
  </Route>
  <Route exact path="/" element={< TextForm  showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>}>
  {/* < TextForm  showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/> */}
  </Route>
</Routes>
 </div>
</Router>

{/* <Navbar title="TextUtils"  aboutText="About Us"/>   */}
 {/* avbove here we use PropType? */}
 {/* <Navbar/>    */}

 {/* abovehere they use default props if we do not set any props */}

  {/* my-3 is bootstrap class which gives margin on Y axis  */}
 
 
  
 


  </>
  );
}

export default App;
