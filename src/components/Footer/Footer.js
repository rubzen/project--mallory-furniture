import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';

const logofooter = require("../../images/mallory-furniture-logo.png");

export default class Footer extends Component {
	render() {
		return (
			<div className="blockquote text-center">
				<img src={logofooter} width="100" height="80" />
				<div className="container">
					<table className="table table-borderless">
						<thead>
							<tr>
								<th scope="col" className="text-danger">
									Company
								</th>
								<th scope="col" className="text-danger">
									Category
								</th>
								<th scope="col">&nbsp;</th>
								<th scope="col" className="text-danger">
									Social
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-left text-body">About</td>
								<td className="text-left text-body">Seating</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td className="text-left text-body">Press</td>
								<td className="text-left text-body">Tables</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td className="text-left text-body">Terms + Conditions</td>
								<td className="text-left text-body">Misc</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
