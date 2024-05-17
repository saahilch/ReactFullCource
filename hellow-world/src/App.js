import React,{Component} from "react";
import './App.css'
//import Greet from "./Components/Greet";
//import ClassCompo from "./Components/ClassCompo";
import Hellow from "./Components/Hellow";
import Greet from "./Components/Greet";
class App extends Component{
  render(){
    return(
      <div className="Ap">
        <Greet name="Sunny" heroName="Badsha"><p>
        These Is Sunnys para It Shows How He Strong
        </p></Greet>
        <Greet name="SAHIl" heroName="Bobby">
          <button>Action</button></Greet>
        <Greet name="Omakr" heroName="?"/>
        <Greet name="   "/>

        <Hellow/>
     
            </div>
    );
  }
}
export default App;