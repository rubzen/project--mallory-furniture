import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import AllProducts from "../../pages/AllProducts";
import Product from "../../pages/Product";
import Category from "../../pages/Category";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/terms" component={Terms} />
						<Route exact path="/all-products" component={AllProducts} />
						<Route exact path="/product" component={Product} />
						<Route exact path="/category" component={Category} />
						<Route exact path="/product/:productId" component={Product} />
						<Route exact path="/category/:categoryType" component={Category} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
