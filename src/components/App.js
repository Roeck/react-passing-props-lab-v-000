import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentFilter: null,
			filters: [],
			fruit: []
		};
	}

	componentWillMount() {
		this.fetchFilters();
		this.fetchFruit();
	}

	fetchFilters = () => {
		fetch('/api/fruit_types')
			.then(response => response.json())
			.then(filters => this.setState({ filters }));
	}

	fetchFruit = () => {
		fetch('/api/fruit')
			.then(response => response.json())
			.then(fruit => this.setState({ fruit }));
	}

	updateFilter = event => {
		this.setState({ currentFilter: event.targer.value });
	}

	render() {
		return (
			<FruitBasket
				fruit={this.state.fruit}
				filters={this.state.filters}
				currentFilter={this.state.currentFilter}
				onUpdateFilter={this.updateFilter}
			/>
		);
	}
}

export default App;
