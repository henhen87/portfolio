import React, { Component } from 'react';

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			checked: null,
			currentSide: ''
		}

		let refs = ['front', 'right', 'left', 'bottom', 'top', 'back'];

		refs.forEach(e => {
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
	}

	changeSide = e => {
		console.log('CLICK EVENT VAL', e.target.value);
		this.setState({ currentSide: e.target.value });
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
					<p className="radio-group">
						<label>
							<input
								type="radio" 
								ref={this.front}
								name="rotate-cube-side" 
								value="front" 
								onClick={this.changeSide} 
							/> front
						</label>
						<label>
							<input
								type="radio" 
								ref={this.right}
								name="rotate-cube-side" 
								value="right" 
								onClick={this.changeSide} 
							/> right
						</label>
						<label>
							<input
								type="radio" 
								ref={this.back}
								name="rotate-cube-side" 
								value="back" 
								onClick={this.changeSide} 
							/> back
						</label>
						<label>
							<input
								type="radio" 
								ref={this.left}
								name="rotate-cube-side" 
								value="left" 
								onClick={this.changeSide} 
							/> left
						</label>
						<label>
							<input
								type="radio" 
								ref={this.top}
								name="rotate-cube-side" 
								value="top" 
								onClick={this.changeSide} 
							/> top
						</label>
						<label>
							<input
								type="radio" 
								ref={this.bottom}
								name="rotate-cube-side" 
								value="bottom" 
								onClick={this.changeSide} 
							/> bottom
						</label>
					</p>
				</div>
			</section>
		);
	}
}

export default Home;