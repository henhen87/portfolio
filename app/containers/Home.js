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
	state = {
		pw: null,
		pwExtra: null
	}

	fantasy = (e) => {
		e.preventDefault();

		this.setState({
			pw: e.target.value
		});
	}

	readFantasy = () => {
		if (Number(this.state.pw) === 2016) {
			this.setState({
				pwExtra: 2016
			})
		}
	}

	render () {


		return (
			<section id="main" style={{padding: '20px'}}>
				<input type="text"  style={{width: '200px'}} placeholder="secret pw = year we first met" onChange={this.fantasy}/>
				<br/>
				<br/>
				<button type="button" onClick={this.readFantasy}>Read Message</button>

				{
					this.state.pwExtra === 2016
						? (
							<p>
								Unlikely but possible. Not meant to have seen... gitignore fail...
							</p>
						) : null
				}
			</section>
		);
	}
}

export default Home;
