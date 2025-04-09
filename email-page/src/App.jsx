import React from 'react'
import Contact from './components/Contact'
import {Bounce, Slide, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
    <Contact/>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>
    </>
  )
}

export default App
