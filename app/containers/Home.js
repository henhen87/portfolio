import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch, Route, Link } from 'react-router-dom';
// import Sections from 'components/Sections';
// import Navbar from 'components/Navbar';
// import Footer from 'components/Footer';
import MusicPlayer from 'components/MusicPlayer';

// const components = {
// 	about: Sections.About,
// 	skills: Sections.Skills
// };

class Home extends Component {
	// constructor (props) {
	// 	super(props);

	// 	this.state = {
	// 		checked: null,
	// 		sides: ['front', 'right', 'left', 'bottom', 'top', 'back'],
	// 		pause: false,
	// 		currentSide: '',
	// 		split: false
	// 	}
	state = {
		max: 0,
		// mute: 0,
		bgIndex: 1
	}
	// maxInterval

	// setMax = () => {
	// 	this.setState({
	// 		max: this.state.max <= 35 ? this.state.max + 1 : 0,
	// 	});
	// }

	// interval = () => {
	// 	console.log('INSIDE SET INTERVAL')
	// 	this.setState({
	// 		switchSlides: !this.state.switchSlides,
	// 	});
	// 	// this.state.switchSlides ? this.setState({mute: 1}) : null
	// }

	componentDidMount = () => {
		// console.log('PLAYER', player.getPlaylistIndex())
		// console.log('INSIDE DID MOUNTTT')
		// this.maxInterval = setInterval(this.setMax, 1000);
		// console.log('MAX', this.maxInterval)
		// setInterval(this.setMax, 1000);

		setInterval(() => {
			this.setState({
				bgIndex: this.state.bgIndex === 7 ? 1 : this.state.bgIndex + 1
			})
		}, 20000)
	}

	// 	this.state.sides.forEach(e => {
	// 		this[e] = React.createRef();
	// 	});
	// }

	// componentDidMount () {
	// 	//ball
	// 	let index = 0;
	// 	let canvas = document.getElementById("myCanvas");
	// 	let ctx = canvas.getContext("2d");
	// 	let ballRadius = 10;
	// 	let x = canvas.width / 2;
	// 	let y = canvas.height - 30;
	// 	let dx = 2;
	// 	let dy = -2;

	// 	function drawBall() {
	// 	    ctx.beginPath();
	// 	    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	// 	    ctx.fillStyle = "#000000";
	// 	    ctx.fill();
	// 	    ctx.closePath();
	// 	}
	// 	function draw() {
	// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 		drawBall();

	// 		if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
	// 	        dx = -dx;
	// 	    }
	// 	    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
	// 	        dy = -dy;
	// 	    }
	// 		x += dx;
	// 		y += dy;
	// 	}
	// 	setInterval(draw, 10);

	// 	setInterval(() => {
	// 		if (this.state.pause === false) {
	// 			this.setState({ 
	// 				currentSide: this.state.sides[index]
	// 			});
	// 			index++;
	// 		}
	// 		if (index === 6) {
	// 			index = 0;
	// 		}
	// 	}, 2000);
	// }

	// split = (e, i) => {
	// 	if (i) {
	// 		console.log('iiii', i)
	// 		this.setState({ 
	// 			currentSide: this.state.sides[i]
	// 		});
	// 	}

	// 	this.setState({
	// 		split: !this.state.split,
	// 		pause: !this.state.pause,
	// 		currentSection: e.target.getAttribute('data-value')
	// 	});
	// 	if (e.target.getAttribute('data-value') !== this.props.match.params.section && this.state.split === false) {
	// 		this.props.history.push(e.target.getAttribute('data-value'));
	// 	}

	// }

	render () {
		const background = {
			background: `url(../img/heart.jpg)`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'contain'
		}

		return (
			<section id="main" style={background}>
				<MusicPlayer />
			</section>
		);
	}
}

export default Home;

