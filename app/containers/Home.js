import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch, Route, Link } from 'react-router-dom';
import Sections from 'components/Sections';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MusicPlayer from 'components/MusicPlayer';

const components = {
	about: Sections.About,
	skills: Sections.Skills
};

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			checked: null,
			sides: ['front', 'right', 'left', 'bottom', 'top', 'back'],
			pause: false,
			currentSide: '',
			split: false
		}

		this.state.sides.forEach(e => {
			this[e] = React.createRef();
		});
	}

	componentDidMount () {
		//ball
		let index = 0;
		let canvas = document.getElementById("myCanvas");
		let ctx = canvas.getContext("2d");
		let ballRadius = 10;
		let x = canvas.width / 2;
		let y = canvas.height - 30;
		let dx = 2;
		let dy = -2;

		function drawBall() {
		    ctx.beginPath();
		    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
		    ctx.fillStyle = "#000000";
		    ctx.fill();
		    ctx.closePath();
		}
		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawBall();

			if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		        dx = -dx;
		    }
		    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		        dy = -dy;
		    }
			x += dx;
			y += dy;
		}
		setInterval(draw, 10);

		setInterval(() => {
			if (this.state.pause === false) {
				this.setState({ 
					currentSide: this.state.sides[index]
				});
				index++;
			}
			if (index === 6) {
				index = 0;
			}
		}, 2000);
	}

	split = (e, i) => {
		if (i) {
			console.log('iiii', i)
			this.setState({ 
				currentSide: this.state.sides[i]
			});
		}

		this.setState({
			split: !this.state.split,
			pause: !this.state.pause,
			currentSection: e.target.getAttribute('data-value')
		});
		if (e.target.getAttribute('data-value') !== this.props.match.params.section && this.state.split === false) {
			this.props.history.push(e.target.getAttribute('data-value'));
		}

	}

	render () {
		let MySection = components[this.props.match.params.section];
		
		return (
			<section id="main">
				<Navbar split={this.split} />
				<MusicPlayer />
				<section className={`menu ${this.state.split ? 'split' : ''}`}>
					{/*<div className="scene">
											<div className={`cube show-${this.state.currentSide}`}>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="about" className="cube__face cube__face--front">About Me</div>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="skills" className="cube__face cube__face--back">Skills</div>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="resume" className="cube__face cube__face--right">Resume</div>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="music" className="cube__face cube__face--left">Music</div>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="projects" className="cube__face cube__face--top">Projects</div>
												<div onClick={e => {
													e.preventDefault();
													this.split(e);
												}} data-value="contact" className="cube__face cube__face--bottom">Contact Me</div>
											</div>
										</div>
										<canvas id="myCanvas" width="200" height="200"></canvas>*/}
				</section>
				<section className={`description ${this.state.split ? 'split' : ''}`}>
					<Route path='/best-website/:section' component={MySection} />
				</section>
				<Footer />
			</section>
		);
	}
}

export default Home;