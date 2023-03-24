import React,{ useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {

  const [text, setText] = useState("Toggle Mode")

  const [alert, setAlert] = useState(null);

  const [color, setColor] = useState('white');

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null);
      }, 1000);
  }

  const ToggleMode = (message)=>{

    if(message === 'blue'){
      document.body.style.backgroundColor = '#04293A';
      setColor('#04293A');
      showAlert("! Blue Mode has been enabled","success");
      document.title = "Text-Utils-Blue Mode";
      setText('Blue Mode')
    }
    if(message === 'white'){
      document.body.style.backgroundColor = 'white';
      setColor('white');
      showAlert("! Light Mode has been enabled","success");
      document.title = "Text-Utils-Light Mode";
      setText('Light Mode')
    }
    if(message === 'black'){
      document.body.style.backgroundColor = '#03001C';
      setColor('#03001C');
      showAlert("! Dark Mode has been enabled","success");
      document.title = "Text-Utils-Dark Mode";
      setText('Dark Mode')
    }
    
  }

  return (
    <>
    <Navbar title = "TexT-Utils" ToggleMode = {ToggleMode} contact = 'Contact us' text={text}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter text below to Convert" showAlert={showAlert} color={color}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
