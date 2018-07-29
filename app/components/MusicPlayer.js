import React, { Component } from 'react';

class MusicPlayer extends Component {
	state = {
		pause: false,
		stop: false
	}
	render () {
		return (
			<div id="musicPlayer" className="mp3">
				<div className="back" onClick={e => {
					e.preventDefault();
					player.previousVideo();
				}}>&#x025C2;&#x025C3;</div>
				<div className="stop" onClick={e => {
					e.preventDefault();
					this.setState({ pause: false });
					player.stopVideo();
				}}>&#x025AA;</div>
				<div className="play" onClick={e => {
					e.preventDefault();
					console.log('EEEE')
					this.setState({ pause: !this.state.pause }, () => {
						if (this.state.pause === true) {
							player.pauseVideo()
						} else {
							player.playVideo();
						}
					});
					player.playVideo();
				}}>{this.state.pause === true ? <span>&#x025B8;</span> : <span className="pause">=</span>}</div>
				<div className="forward" onClick={e => {
					e.preventDefault();
					player.nextVideo();
				}}>&#x025B9;&#x025B8;</div>
			</div>
		)
	}
}

export default MusicPlayer;