import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Product />
		</div>
	);
}

export default App;
출처: https://goddaehee.tistory.com/305 [갓대희의 작은공간:티스토리]
