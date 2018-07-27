import React, { Component } from 'react';


const Sections = {
	Skills: class Skills extends Component {
		render () {
			return (
				<div>
					<h1>Core Skills</h1>
					<ul>
						<li>C++</li>
						<li>Node JS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>CSS/HTML/LESS</li>
						<li>MySQL/MongoDB</li>
					</ul>
				</div>
			);
		}
	},
	About: class About extends Component {
		render () {
			return (
				<div id="aboutMe">
					<h1>About Me</h1>
					<div className="img-frame">
						<img className="img-responsive" src="/img/p4.jpg" alt="Loading..."/>
					</div>
					<p>Hello,<br/><br/> My name is Henry Lee. My goal in life is to become a game programmer and make awesome video
					games millions of people will enjoy. That being said, as a programmer, I do not limit myself to just topics
					related to game development. I am also a full stack web developer and take pleasure in building web applications
					as well. 
					</p>
					<p>I suppose in video game terms, my main weapons would be C++, JavaScript, NodeJS, React, MongoDB and MySQL.
					As of now, this may be all but my skill set will soon increase even more. I am currently teaching myself
					linear algebra and CPU optimization by going in depth with Assembly.
					</p>
					<p>Currently I make a living as a full stack developer but I eventually plan to transition
					into the video game industry; preferably to any triple AAA game studio such as Santa Monica Studios,
					Naughty Dog, CD Projekt Red, Square Enix, Platinum Games, Atlus and so many more I dream of working at.
					</p>
					<p>Other than my love for programming, I certainly enjoy listening to music. To me music is something
					I cherish very much. It is very precious to me. The reason being, music has so much power behind it. It can
					empower us, take us through the most difficult of times, make us happy, sad, and so much more. I believe
					without music, I would not be the person I am today. Listening to music always paints a nice scene in my 
					imagination and I enjoy exploring and listening to music on my leisure. I love all genres of music but my
					favorite have to be be heavy metal rock, psychedilic rock, techno, pop, and of course classical.
					</p>
					<p>I generally love to stay positive and energetic no matter what life throws at me. I believe this is 
					very important and having the ability to be optimistic, makes a person stronger by breaking down boundraries
					that would seem otherwise impossible to conquer without a positive energy.
					</p>
				</div>
			)
		}
	}
}

export default Sections;