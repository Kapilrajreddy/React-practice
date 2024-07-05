
// import React from "react";
// import { ThemeProvider } from "./components/ThemsContext";
// import Counter from "./components/Counter";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components

// import './App.css'
// import Navbar from "./components/Navbar";
// import ChangeText from "./components/ChangeText";
// import Checkbox from "./components/Checkbox";
// import Time from "./components/Time";
// import Calculator from "./components/Calculator";
// import TicTacToe from "./components/Tictac";
// const App = () => {
//   return (
//     <ThemeProvider>
//       <Router>
//         <div>
//           <Navbar />
//           <Routes>
//             <Route path="/counter" element={<Counter />} />
//             <Route path="/text-change" element={<ChangeText />} />
//             <Route path="/checkbox" element={<Checkbox />} />
//             <Route path="/time" element={<Time />} />
//             <Route path="/calculator" element={<Calculator />} />
//             <Route path="/tic-tac" element={<TicTacToe />} />
//           </Routes>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;


// import React from "react";
// function App() {
//   const items = [
//     { id: 1, text: "Item 1" },
//     { id: 2, text: "Item 2" },
//   ];
//   const listItems = items.map((item, index) => {
//    if(item.text==="Item 2"&& item.id===2){
//     return <li key={index}>Item 3</li>
//    }
//    else{
//     return <li key={index}>{item.text}</li>
//    }
    
//   }
    
    
//   )
//   return <ul>{listItems}</ul>;
// }
// export default App;

 createSlice({
  initialState,
  reducer:{
    increaseCount:(state,action)=>{
      state.count = state.count+action.payload
    }
  }
 })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer 

export default configureStore({
  reduces:{
    count:countReducer,
  }
})

useSelector(state.count)

useDispatch()

dispatch({
  type:count,
  payload:countvalue
})


 