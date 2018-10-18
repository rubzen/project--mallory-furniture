import React, { Component } from "react";

export default class AllProducts extends Component {
	state = {
		loading: true,
		error: null,
		product: null
	};

	constructor() {
		super();
		console.log('AllProducts constructor');
	}

	componentDidMount() {
		this.loadProduct();
		console.log('AllProducts did Mount');
	}

	componentDidUpdate(prevProps) {
		console.log('AllProducts did update');
		if (this.props.match.params.productId != prevProps.match.params.productId) {
			this.loadProduct();
		}
	}

	componentWillUnmount() {
		console.log('AllProducts will unmount');
	}

	loadProduct = () => {
		console.log('loading product');
		this.setState({
			loading: true,
			error: null
		});

		fetch(`https://mallory-furniture-admin.now.sh/api/v1/products/${this.props.match.params.productId}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					product: data
				});
			})
			.catch((error) => {
				this.setState({
					loading: false,
					error: error
				});
			});
	};
	render() {
		console.log('Product render');

		const { loading, product, error } = this.state;
		return (
			<div>
				{loading && <p>Loading product...</p>}
				{!loading &&
				product && (
					<React.Fragment>
						<h1>{product.item} {" "}
                            <small>
                                <em>({product.item})</em>
                            </small></h1>
					</React.Fragment>
				)}
				{error && <p>{error.message}</p>}
			</div>
		);
	}
}
