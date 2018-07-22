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

	split = (e) => {
		console.log('SPLIT')
		this.setState({
			split: !this.state.split
		});

		this.props.history.push('about');
	}

	render () {
		console.log('PARAMS', this.props.match.params);
		// let MySection = components[this.state.section];
		let MySection = components[this.props.match.params.section];
		
		return (
			<section id="main">
				<section className={`menu ${this.state.split ? 'split' : ''}`}>
					<div className="scene">
						<div className={`cube show-${this.state.currentSide}`}>
							<div onClick={this.split} value="about" className="cube__face cube__face--front">About Me</div>
							<div className="cube__face cube__face--back">Skills</div>
							<div className="cube__face cube__face--right">Resume</div>
							<div className="cube__face cube__face--left">Experience</div>
							<div className="cube__face cube__face--top">Projects</div>
							<div className="cube__face cube__face--bottom">Contact Me</div>
						</div>
					</div>
					<canvas id="myCanvas" width="200" height="200"></canvas>
				</section>
				<section className={`description ${this.state.split ? 'split' : ''}`}>
					{/*
						this.state.split && <MySection />
					*/}
					<Route path='/best-website/:section' component={MySection} />
				</section>
				<iframe 
					id="bach"
					width="1" 
					height="1" 
					src="https://www.youtube.com/embed/Lp39Z_76_n0?playlist=Lp39Z_76_n0&loop=1&autoplay=1" 
					frameBorder="0" 
					allow="autoplay; encrypted-media; loop" 
				></iframe>
			</section>
		);
	}
}

export default Home;