import React, { Component } from 'react';
import TodoList from './components/TodoList';
// import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';
import TenTodos from './components/TenTodos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import BookSlot from './components/BookSlot';
import ListSlot from './components/ListSlot';

function App() {
	return (

		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<TenTodos />
					<Routes>
						<Route path='/' element={<TodoList />} />
						<Route path='/addslot' element={<BookSlot />} />
						<Route path='/list' element={<TodoList />} />
						<Route path='/list' element={<ListSlot />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>


	);
}

export default App;