import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Welcome from "./Welcome";
import Well from "./Welcome1";
import Sample from "./Samplestate";
import HookCounter from "./HookCounter";
import data from "./data/data.json";
import  male from "./mouni.jpg"
import  female from "./mouni1.jpg"
//import Resume from './components/Resume.js'
import Features from './components/Features.js'
import {BrowserRouter,Route,Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
     {/* <h1>Web develop</h1>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  
  {/*<Welcome name="Jesus"></Welcome>
  <Welcome name="Mounika"></Welcome>
  <Welcome name="Vassu"></Welcome>
  <Welcome name="Prami"/>
  <Well data="dama"></Well>
  <Well data="swapna"></Well>
  <Sample></Sample>
  <HookCounter></HookCounter>*/}
  <BrowserRouter>
  <Route exact path="/" component={CardView}/>
  <Route exact path="/features" component={Features}/>
  </BrowserRouter>
  
    </div>
  );
}
 let CardView=()=>{
   let profileData=data.details;
   console.log(profileData);
   //let images=[male,female];
   return(
     // <h1 className="text-primary">Hello Apssdc</h1>
     <div className="row justify-content-center">
        {profileData.map((cardsData,index)=>(
          <div className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
            <div className="card">
              <div className="card-body bg-light">
              
               <h1 className="text-warning">{cardsData.profile.name}</h1>
               <h2 className="text-warning">{cardsData.profile.price}</h2>
        <h2 className="text-warning">{cardsData.profile.Ram}</h2>
              
                <Link to={{pathname:'/features',data1:{id:index}}}className="btn btn-primary">view Details</Link>
        
              </div>
            </div>
          </div>
        ))}
     </div>
   );
 }
export default App;
