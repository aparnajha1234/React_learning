
import React, {useState, useEffect} from 'react';
import './App.css';

const App =()=>{
  const [hour,setHour] = useState(0);
  const [min,setMin] = useState(0);
  const [second,setSecond] =useState(0);
  const [mSecond,setMSecond] =useState(0);
  const [stop, setStop] = useState(true);

  const onStart = () =>
  {
    setStop(false);
    //setMSecond(mSecond + 1);
  }
  const onStop = ()=>
  {
    setStop(true);
  }
  const onReset =()=>
  {

  }

  useEffect(()=>{
    let interval = null;
    if(!stop)
    {
      interval = setInterval(()=>
      {
        if(min>59)
        {
          setHour(hour+1);
          setMin(0);
          clearInterval(interval);
        }
        if(second > 59)
        {
          setMin(min+1);
          setSecond(0);
          clearInterval(interval);
        }
        if(mSecond > 999)
        {
          setSecond(hour+1);
          setMSecond(0);
          clearInterval(interval);
        }
        if(mSecond<= 999)
        {
          setMSecond(mSecond+1);
        }
      },10)
    }
    else
    {
      clearInterval(interval)
    }
    return ()=>{
      clearInterval(interval)
    }
  })
  return (
    <div style={{textAlign:'centre',marginTop:'100px'}}>
      <h1>{hour}:{min}:{second}:{mSecond}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
      

    </div>
  )
}

export default App;
