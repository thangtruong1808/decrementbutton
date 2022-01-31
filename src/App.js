import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import React, { Component } from "react";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
		],
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
		//console.log("Event handleIncrement Called", counter);
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
		//console.log("Event handleIncrement Called", counter);
	};
	handleDelete = (counterID) => {
		//console.log("Event Handler Called", counterID);
		const counters = this.state.counters.filter((c) => c.id !== counterID);
		this.setState({ counters });
	};
	handleResetAll = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleResetAll}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
