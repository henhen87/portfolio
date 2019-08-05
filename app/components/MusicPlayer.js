// import React, { Component } from 'react';

// const STOP = 'stop';
// const PLAY = 'play';
// const FORWARD = 'forward';
// const PREVIOUS = 'previous';

// class MusicPlayer extends Component {
// 	state = {
// 		pause: false,
// 		yids: ['vfc-73k9S-4', 'ztEPutvtkNk', '-dWr-P2rWHg'],
// 		lightTimestamp: '28:30',
// 		idIndex: 0,
// 	}

// 	radioFunctions = func => {
// 		switch(func) {
// 			case PLAY:
// 				return this.setState({ pause: !this.state.pause }, () => {
// 					if (this.state.pause === true) {
// 						player.pauseVideo()
// 					} else {
// 						player.playVideo();
// 					}
// 				});
// 			case STOP:
// 				return player.stopVideo();
// 			case FORWARD: 
// 				player.nextVideo();
// 				if (player.getPlaylistIndex() === 0) {
// 					this.seekVideo();
// 				}
// 				return;
// 			case PREVIOUS:
// 				player.previousVideo();
// 				if (player.getPlaylistIndex() === 2) {
// 					this.seekVideo();
// 				}
// 				return;
// 			default: return;
// 		}
// 	}

// 	seekVideo = () => {
// 		player.seekTo(1740);
// 	}

// 	render () {
// 		return (
// 			<div id="musicPlayer" className="mp3">
// 				<div className="control back" onClick={e => {
// 					// e.preventDefault();
// 					this.radioFunctions(PREVIOUS);
// 				}}>&#x025C2;&#x025C3;</div>
// 				<div className="control stop" onClick={e => {
// 					// e.preventDefault();
// 					this.radioFunctions(STOP);
// 				}}>&#x025AA;</div>
// 				<div className="control play" onClick={e => {
// 					// e.preventDefault();
// 					this.radioFunctions(PLAY);
// 				}}>
// 					{this.state.pause !== true
// 						? <span className="pause">=</span> 
// 						: <span>&#x025B8;</span>
// 					}
// 				</div>
// 				<div className="control forward" onClick={e => {
// 					// e.preventDefault();
// 					this.radioFunctions(FORWARD);
// 				}}>&#x025B9;&#x025B8;</div>
// 			</div>
// 		)
// 	}
// }

// export default MusicPlayer;
