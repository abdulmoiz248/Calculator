import { useState } from 'react'
import './App.css'
import Screen from './Components/Screen'
import ButtonContainer from './Components/ButtonContainer'


function App() {
   let [calval,setcalval]=useState("");

   
   let addNumbers=(val)=>{
     if(val==='C'){
       setcalval("");
      }else if(val==='='){
     try{
      let result=eval(calval);
      setcalval(result);
     }catch(e){
      alert("Error");
      setcalval("");
     }
     }else if(val==='<-'){
        let newval=calval.toString().slice(0,-1);
        setcalval(newval);
     }else{
      setcalval(calval+val);
     }
    
   }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#eca0ff]'>
     <div className='border-2 border-white flex items-center justify-center  pr-[1px] pl-12 py-6 rounded bg-[#84ffc9] '>
    <div> 
      <center>
      <h1 className='text-black font-bold text-2xl mr-10 pb-2'>Calculator</h1>
      </center>
      <Screen display={calval}/>
    <ButtonContainer addNumber={addNumbers}/></div>
     </div>
    </div>
  )
}

export default App
