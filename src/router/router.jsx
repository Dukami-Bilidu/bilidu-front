import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Apply from '../components/Apply';
import Apply_g from '../components/Apply-g';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
                <Route path='/apply' element={<Apply />}></Route>
				<Route path='/apply-g' element={<Apply_g />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;