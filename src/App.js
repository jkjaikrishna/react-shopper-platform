import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import './Components/CSS/display.css';
import './Components/CSS/common.css';

import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path= "/" component= { Home }></Route>
					<Route exact path= "/products" component= { Products }></Route>
				</Switch>
			</Router>
    	</div>
  );
}

export default App;
