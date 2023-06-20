import React from 'react'
import './App.css';
import ComponentA from './ContextComponents/ComponentA';
import Router from "./Router";
import Reducer from './Reducer';


export const UserContext=React.createContext()
// export const ChannelContext=React.createContext()
function App() {
  return(
    <div className='APP'>
      <Router/>
      <Reducer/>
      <UserContext.Provider value={'prasanna'}>
        {/* <ChannelContext value={'polisetti'}> */}
        <ComponentA />
        {/* </ChannelContext> */}
       </UserContext.Provider>
    
      {/* <HookCounter /> */}
      {/* <HookCounterTwo/> */}
    </div>
     )
}

export default App;
