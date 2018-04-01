import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '/features/App';
import Signup from '/features/Signup';

export default () => (
	<BrowserRouter>
		<App>
			<Route exact path="/" component={ Signup } />
		</App>
	</BrowserRouter>
);
