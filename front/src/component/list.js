import React, {Component} from "react";
import Follower from "./Follower.js";
import PropTypes from "prop-types";

class FollowerList extends Component {
	renderFollowers() {
	 	return this.props.followers.map((f,i) => {
	 		return (<Follower follower={f} key={i}/>);
	 	});
    }

	render() {
		return (
			<div className="followersList row">
				{this.renderFollowers()}
			</div>
		);
	}
}

FollowerList.propTypes = {
	followers: PropTypes.array.isRequired
};

export default FollowerList;