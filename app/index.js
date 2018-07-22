import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';

render(
	<Router>
		<Switch>
		    <Route exact path='/best-website/:section' component={Home} />
	    </Switch>
	</Router>,
	document.getElementById('root')
);