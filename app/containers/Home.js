import React, { Component } from 'react';

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			checked: null,
			sides: ['front', 'right', 'left', 'bottom', 'top', 'back'],
			pause: false,
			currentSide: ''
		}

		this.state.sides.forEach(e => {
			this[e] = React.createRef();
		});
	}

	componentDidMount () {
		// let cube = document.querySelector('.cube');
		// let radioGroup = document.querySelector('.radio-group');
		// let currentClass = '';

		// function changeSide() {
		// 	var checkedRadio = radioGroup.querySelector(':checked');
		// 	var showClass = 'show-' + checkedRadio.value;
		// 	if ( currentClass ) {
		// 		cube.classList.remove( currentClass );
		// 	}
		// 	cube.classList.add( showClass );
		// 	currentClass = showClass;
		// }
		// // set initial side
		// changeSide();

		// radioGroup.addEventListener( 'change', changeSide );
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
		console.log('CLICK EVENT VAL', e.target.value);
		this.setState({ 
			currentSide: e.target.value,
			pause: true 
		}, () => {
			console.log('SGTAE PUIAGE', this.state.pause)
			setTimeout(() => {
				this.setState({ pause: false });
			}, 1500)
		});
	}

	handleRadio = (e) => {
		console.log('REFFF', this.right.current)
		console.log('EEEE', e.target.value)
		this.setState({ checked: this[e.target.value].current });
	}

	render () {
		return (
			<section id="main">
				<div className="container">
					<div className="title">
						<h1>Core Skills</h1>
					</div>
					<div className="scene">
						<div className={`cube show-${this.state.currentSide}`}>
							<div className="cube__face cube__face--front">C++</div>
							<div className="cube__face cube__face--back">React</div>
							<div className="cube__face cube__face--right">NodeJS</div>
							<div className="cube__face cube__face--left">JavaScript</div>
							<div className="cube__face cube__face--top">HTML/CSS</div>
							<div className="cube__face cube__face--bottom">MySQL/MongoDB</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;