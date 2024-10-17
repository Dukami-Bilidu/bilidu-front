import React from "react";
import EditPage from "../pages/Edit";
import AddPage from "../components/common/AddEquipment";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<EditPage/>}/>
        <Route path="/add" element={<AddPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router;