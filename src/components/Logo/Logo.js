import React, { Component } from 'react';

const logo = require('../images/mf-logo-white.svg');

export default class Logo extends Component {
	render() {
		return (
			<div className="navbar navbar-dark bg-dark">
				<section className="navbar-brand" href="#">
					<img src={logo} />
				</section>
			</div>
		);
	}
}
