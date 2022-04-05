import React from 'react';
// import logo from './logo.svg';
import About from './components/About';
import Nav from './components/Nav';

import './App.css';




// lesson 1.5
// function App() {

//   return (
//     <div>
//       <main>
//         <About></About>    
//       </main>
//     </div>
//   );
// }

// lesson 1.6


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>     
       </main>
    </div>
  );
}

export default App;