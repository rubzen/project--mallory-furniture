import React, { Component } from 'react';

import './Layout.css';
import Footer from '../Footer';

export default class Layout extends Component {
	render() {
		return (
			<div className="Layout">
				<main className="container border border-dark">
					<div>{this.props.children}</div>
				<Footer />
				</main>
			</div>
		);
	}
}
