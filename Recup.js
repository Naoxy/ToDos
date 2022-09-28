// import React from 'react'
// import {  useReducer } from 'react'
// import { Button } from 'react-bootstrap'


// const initialState = {
//   count: 0
// }


// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <>
//       count: {state.count}
//       <br />
//       <Button onClick={() => dispatch({type: 'increment'})}>
//         Increment
//       </Button>

//       <Button variant="secondary" onClick={() => dispatch({type: 'decrement'})}>
//         Decrement
//       </Button>

//       <Button variant="success" onClick={() => dispatch({type: 'reset'})}>
//         Reset
//       </Button>
//     </>

//   )
// }
// // reducer will take some state, and based on action, it will figure out // what to do with our state.
// function reducer(state, action) {
//   switch(action.type) {  //switch will look at our type case
//     case "increment":
//       return {count: state.count + 1}
//     case "decrement":
//       return {count: state.count - 1}
//     case "reset":
//       return initialState
//     default:
//       return initialState
//   }
// }


// export default App
