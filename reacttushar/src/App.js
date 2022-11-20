// Optional to import
// import React from 'react'

import React from 'react'
import Resturant from './component/basics/Resturant';

const App = () => {
  return (
    <>
    <div><Resturant></Resturant></div>
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