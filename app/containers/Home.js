import React, { Component } from 'react';

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			checked: null
		}

		this.right = React.createRef();
		this.front = React.createRef();
	}
	componentDidMount () {
		var cube = document.querySelector('.cube');
		var radioGroup = document.querySelector('.radio-group');
		var currentClass = '';

		function changeSide() {
			var checkedRadio = radioGroup.querySelector(':checked');
			var showClass = 'show-' + checkedRadio.value;
			if ( currentClass ) {
				cube.classList.remove( currentClass );
			}
			cube.classList.add( showClass );
			currentClass = showClass;
		}
		// set initial side
		changeSide();

		radioGroup.addEventListener( 'change', changeSide );
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
					<div className="scene">
						<div className="cube">
							<div className="cube__face cube__face--front">front</div>
							<div className="cube__face cube__face--back">back</div>
							<div className="cube__face cube__face--right">right</div>
							<div className="cube__face cube__face--left">left</div>
							<div className="cube__face cube__face--top">top</div>
							<div className="cube__face cube__face--bottom">bottom</div>
						</div>
					</div>
					<p className="radio-group">
						<label>
						<input type="radio" ref={this.front} name="rotate-cube-side" value="front" onClick={this.handleRadio} checked={this.state.checked === this.front.current} /> front
						</label>
						<label>
						<input type="radio" ref={this.rightRadio} name="rotate-cube-side" value="right" onClick={this.handleRadio} checked={this.state.checked === this.right.current} /> right
						</label>
						<label>
						<input type="radio" name="rotate-cube-side" value="back" onClick={this.handleRadio} /> back
						</label>
						<label>
						<input type="radio" name="rotate-cube-side" value="left" onClick={this.handleRadio} /> left
						</label>
						<label>
						<input type="radio" name="rotate-cube-side" value="top" onClick={this.handleRadio} /> top
						</label>
						<label>
						<input type="radio" name="rotate-cube-side" value="bottom" onClick={this.handleRadio} /> bottom
						</label>
					</p>
				</div>
			</section>
		);
	}
}

export default Home;