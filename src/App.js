import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {


  const[mode,setMode]=useState('light');

  const[alert ,setAlert]=useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);

  }

  const toggleMode=()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b2946';
      showAlert("dark mode enabled","success");
      document.title="TextUtils-DarkMode";
      }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode enabled","success");
      document.title="TextUtils-LightMode";


    }
  }

  return (
    <>   
<Navbar  title="TextUtils" aboutText="this is about textutils"  mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>


<div className="container my-3">
<TextForm  heading="enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
{/* <About/> */}

</div>



  
    </>

  );
}

export default App;
