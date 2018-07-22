import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch, Route, Link } from 'react-router-dom';
import Sections from 'components/About';

const components = {
	about: Sections.About
};

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			checked: null,
			sides: ['front', 'right', 'left', 'bottom', 'top', 'back'],
			pause: false,
			currentSide: '',
			split: false,
			section: ''
		}

		this.state.sides.forEach(e => {
			this[e] = React.createRef();
		});
	}

	componentDidMount () {
		let index = 0;

		setInterval(() => {
			if (this.state.pause === false) {
				this.setState({ currentSide: this.state.sides[index] });
				console.log('STATE PAUSE DID MOUNT', this.state.pause)
				index++;
			}
			if (index === 5) {
				index = 0;
			}
		}, 1500);
	}

	changeSide = e => {
		this.setState({ 
			currentSide: e.target.value,
			pause: true 
		}, () => {
			setTimeout(() => {
				this.setState({ pause: false });
			}, 1500)
		});
	}

	render () {
		console.log('PARAMS', this.props.match.params);
		// let MySection = components[this.state.section];
		let MySection = components[this.props.match.params.section];
		
		return (
			<section id="main">
				<section className={`menu ${this.state.split ? 'split' : ''}`}>
					<div className="title">
						<h1>Core Skills</h1>
					</div>
					<div className="scene">
						<div className={`cube show-${this.state.currentSide}`}>
							<div onClick={e => {
								e.preventDefault();
								this.props.history.push('/best-website/about');
								// this.setState({ section: 'about', split: true });
							}} className="cube__face cube__face--front">About Me</div>
							<div className="cube__face cube__face--back">Skills</div>
							<div className="cube__face cube__face--right">Resume</div>
							<div className="cube__face cube__face--left">Experience</div>
							<div className="cube__face cube__face--top">Projects</div>
							<div className="cube__face cube__face--bottom">Contact Me</div>
						</div>
					</div>
				</section>
				<section className={`description ${this.state.split ? 'split' : ''}`}>
					{/*
						this.state.split && <MySection />
					*/}
					<Route path='/best-website/:section' component={MySection} />
				</section>
			</section>
		);
	}
}

export default Home;