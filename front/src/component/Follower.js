import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Follower.css";

class Follower extends Component {
	render() {
		return (
			<div className="follower">
			<h3> Stalk your victim</h3>
				<div className="user"><a href={this.props.follower.url} target="_blank">{this.props.follower.login}</a></div>				
				<img src = "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt = "bla"/>
			</div>
		);
	}
}

Follower.propTypes = {
	follower: PropTypes.object.isRequired
};

export default Follower;