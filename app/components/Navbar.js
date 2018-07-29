import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-2">
						<Link to="">About Me</Link>
					</div>
					<div className="col-sm-2">
						<Link to="">Resume</Link>
					</div>
					<div className="col-sm-2">
						<Link to="">Music</Link>
					</div>
					<div className="col-sm-2">
						<Link to="">Contact Me</Link>
					</div>
					<div className="col-sm-2">
						<Link to="">Projects</Link>
					</div>
					<div className="col-sm-2">
						<Link to="">Skills</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;