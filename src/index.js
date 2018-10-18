import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

class AppWithRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
	}
}
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
registerServiceWorker();
