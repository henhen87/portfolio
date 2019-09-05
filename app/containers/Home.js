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
								Dear Elena, <br/><br/>
								If you are reading this I guess you know how crazy I am about you... <br/>
								Elena... I have tried so hard to forget about you... and some days I feel like I
								have almost achieved that, but in the end, no matter how hard I try, you always win.
								I cannot simply forget about you. I don't know what else to do anymore... Either time 
								will go on and I will continue to dream about you or maybe fate will one day have us meet
								again somehow.

								Elena... I am so crazy about you. I do not know why... I have never felt this way before
								for anyone. There were others I liked in the past I wish I could have been with, but they 
								would simply just go away and be nothing more. Elena... you on the other hand are something else.
								I must simply just have you and that is all. I have no interest for anyone else. Elena... I LOVE YOU.

								I am sorry for getting all weird like this but I do not care at this point. Life is short.

								Elena... I want to share with you one of my wild fantasies I have about you and I am sorry for this.. but
								if you do not mind please read ahead. Elena I trust you... I only want you to read this if you are comfortable and
								okay with it.

								Elena... I hope one day if we meet again, it will be a very hot, humid and sticky day. I day dreamed today
								that if I saw you on such a sticky humid hot day, I would firmly grab you by the arm and push you against a wall. 
								I would not mind the nastiness... I would want every little bit of you. I want to firmly grasp both your hands and clasp 
								our fingers together...
							 	I would go on but I think I will stop here...

								I love you Elena and I want you to know no matter what happens, I will always be thinking of you. 
							</p>
						) : null
				}
			</section>
		);
	}
}

export default Home;
