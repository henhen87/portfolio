import React, { Component } from 'react';

// const AboutMe = props => {
// 	return (
// 		<ul>
// 			<li>aaaaaaaaaaa</li>
// 			<li>bbbbbbbbbbb</li>
// 			<li>ccccccccccc</li>
// 			<li>ddddddddddd</li>
// 			<li>eeeeeeeeeee</li>
// 			<li>fffffffffff</li>
// 			<li>ggggggggggg</li>
// 		</ul>
// 	)
// }


const Sections = {
	About: class About extends Component {
		render () {
			console.log('INSIDE CLASS')
			return (
				<div>IT WORKS!!!</div>
			)
		}
	}
}

export default Sections;