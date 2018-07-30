import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	state = {
		showNav: false
	}

	showNav = () => {
		// let navbar = document.querySelector('#navb');
		// let arrowDown = document.querySelector('.arrowDown');

		// navbar.classList.add('showNav');
		// arrowDown.classList.add('hideArrowDown');

		this.setState({ showNav: !this.state.showNav });
	}

	render () {
		return [
			<div 
				className={`arrow ${this.state.showNav === false ? "arrowDown" : "arrowUp"}`} 
				onClick={this.showNav}
			>{this.state.showNav === false ? <span>&#x02913;</span> : <span>&#x02912;</span>}</div>,
			<div id="navb" className={`container-fluid ${this.state.showNav === true ? 'showNav' : ''}`}>
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
		];
	}
}

export default Navbar;