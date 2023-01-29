// Optional to import
// import React from 'react'

import React from 'react'
import Resturant from './component/basics/Resturant';
// import UseState from './component/Hooks/UseState';
// import UseEffect from './component/Hooks/UseEffect';
// import UseReducer from './component/Hooks/UseReducer';
// import Todo from './component/To do/todo';


const App = () => {
  return (
    <>
      <div><Resturant></Resturant></div>
      {/* <div><UseState></UseState></div> */}
      {/* <div><UseEffect></UseEffect></div> */}
      {/* <div><UseReducer></UseReducer></div> */}
      {/* <div><Todo></Todo></div> */}
    </>
    
  )
}

// const App = () => {
//   return (
//     // ONLY ONE ELEMENT CAN BE RETURNED(<> </>  OR  <div> </div> )
//     // Use Camelcase for attribute
//     <>
//       <div>
//       <MyName></MyName>
      
//       <h1 className="myclassname">I am Tushar { 3+3 }</h1>
//       <img src="" alt=""></img>
//       <br></br>
//       <MyName></MyName>
//       </div>
//     </>
//   )
// }


// const MyName=()=>{
//   return (
//     <h1>AWESOME TRICKS</h1>
//   )
// }

// WITHOUT FAT ARROW FUNCTION

// function App(){
//   return (
//     <div> <h1>Hello world</h1> </div>
//   )
// }



// HOW REACT ACTUALLY WORKS

// const App=()=>{
//   return React.createElement("div",{},
//   React.createElement("h1",{},"Starter"));
// }



export default App