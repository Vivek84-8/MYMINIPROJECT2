import React, { Component } from 'react';
import TodoList from './components/TodoList';
// import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import BookSlot from './components/BookSlot';
import ListSlot from './components/ListSlot';
import { UserProvider } from './UserContext';
import {Toaster} from 'react-hot-toast';
import Signup from './components/Signup';
import Login from './components/Login';
import UserAuth from './components/UserAuth';
import './App.css';


function App() {
	return (
		<BrowserRouter>
		<Toaster position='top-right' />
			<UserProvider>
				<Provider store={store}>
					<div className="App">
						<Navbar />
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='/addslot' element={ <UserAuth> <BookSlot /> </UserAuth>} />
							{/* <Route path='/list' element={<TodoList />} /> */}
							<Route path='/list' element={ <UserAuth> <ListSlot /> </UserAuth> } />
							<Route path='/signup' element={<Signup />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
				</Provider>
			</UserProvider>
		</BrowserRouter>

	);
}

export default App;