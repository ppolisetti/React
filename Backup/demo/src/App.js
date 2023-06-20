import React,{Component} from 'react';
import './App.css'
//  import Stylesheets from './Stylesheets';
//  import Inline from './Inline';
//  import './appstyles.css'
// import Styles from './appstyles.module.css' 
//  import Form from './Form';
import Lifecycle from './Lifecycle';
import { InputText } from 'primereact/inputtext';
  
class App extends Component{
 render(){
  return(
    
    <div className="primary">
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
   {/* <Form/> */}
   <Lifecycle/>
    {/* //   <h1 className='failure'> Fail</h1>
    //   <h1 className={Styles.success}>Success</h1>
    //    {/* <Stylesheets primary={false}/> */}
    {/* //    <Inline/> */} 
    </div>
  );}
} 

export default App;
