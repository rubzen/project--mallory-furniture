import React, { Component } from 'react';

import Header from '../../components/Header';

export default class Home extends Component {
	render() {
		return (
			<div>
				<main>
					<Header />
					<h2 className="titlefont">Featured Products</h2>
					<small className="text-muted">Check out some of our favorite listing</small>
				</main>
			</div>
		);
	}
}
