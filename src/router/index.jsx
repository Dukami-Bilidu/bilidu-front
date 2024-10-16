import React from "react";
import Main from "../pages/main";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router;