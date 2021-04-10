import React,{useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey='7795c96f05b97375ebbd1ddf22a4cb202e956eca572e1d8b807a3e2338fdd0dc/stage';
 const App=()=> {

  useEffect(()=>{
    alanBtn({
      key:alanKey,
    })
  },[])
  return (
    <div>
      <h1>hello world </h1>
    </div>
  );
}

export default App;
