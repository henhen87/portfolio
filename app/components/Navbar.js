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
				key={0}
				className={`arrow ${this.state.showNav === false ? "arrowDown" : "arrowUp"}`} 
				onClick={this.showNav}
			>{this.state.showNav === false ? <span>&#x02913;</span> : <span>&#x02912;</span>}</div>,
			<div key={1} id="navb" className={`container-fluid ${this.state.showNav === true ? 'showNav' : ''}`}>
				<div className="row">
					<div className="col-sm-2">
						<div data-value="about" onClick={e => {
							e.preventDefault();
							this.props.split(e, '0');
						}}>About Me</div>
					</div>
					<div className="col-sm-2">
						<div data-value="resume" onClick={e => {
							e.preventDefault();
							this.props.split(e, '1');
						}}>Resume</div>
					</div>
					<div className="col-sm-2">
						<div data-value="music" onClick={e => {
							e.preventDefault();
							this.props.split(e, 2);
						}}>Music</div>
					</div>
					<div className="col-sm-2">
						<div data-value="contact" onClick={e => {
							e.preventDefault();
							this.props.split(e, 3);
						}}>Contact Me</div>
					</div>
					<div className="col-sm-2">
						<div data-value="projects" onClick={e => {
							e.preventDefault();
							this.props.split(e, 4);
						}}>Projects</div>
					</div>
					<div className="col-sm-2">
						<div data-value="skills" onClick={e => {
							e.preventDefault();
							this.props.split(e, 5);
						}}>Skills</div>
					</div>
				</div>
			</div>
		];
	}
}

export default Navbar;