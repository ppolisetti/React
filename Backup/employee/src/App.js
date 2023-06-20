
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Router from './Router';

function App() {
  return (
   
      <div className="container">
      <Header/>
     <Router/>
     {/* <EmployeeList/> */}
     <Footer/>
    </div>
    
  );
}

export default App;
