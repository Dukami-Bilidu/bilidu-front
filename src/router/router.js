import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Apply from '../components/Apply';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/Signup" element={<Signup />}></Route>
                    <Route path='/Apply' element={<Apply />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;