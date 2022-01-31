import React, { Component } from "react";

class counter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasess()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						className="btn btn-secondary m-2"
						onClick={() => this.props.onIncrement(this.props.counter)}
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className="btn btn-secondary m-2"
						disabled={this.props.counter.value === 0 ? "disable" : ""}
					>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger"
					>
						X
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasess() {
		let classes = "badge m-2 bg-";
		classes +=
			this.props.counter.value === 0 ? "warning text-dark" : "info text-dark";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default counter;
