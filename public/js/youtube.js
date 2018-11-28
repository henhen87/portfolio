;(function() {
	console.log('???Elena????')
	var counter = 0;
	const counterDown = setInterval(() => {
		counter++;
		console.log('Inside ingterval', counter);
		if (counter === 20) {
			const player = document.querySelector('#player');
			player.classList.add('hide')
		}
	}, 1000)

	if (counter === 20) {
		clearInterval(counterDown);
	}

	const tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	console.log('TAGGG', tag)
	const firstScriptTag = document.getElementsByTagName('script')[0];
	console.log('FIRST TAG SCRUIPT', firstScriptTag)
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() {
		console.log(1111111111)
		player = new YT.Player('player', {
			height: '100%',
			width: '100%',
			events: {
	        'onReady': onPlayerReady
	      }
		});
	}

	function onPlayerReady() {
		console.log(22222222)
		player.loadPlaylist([
			'_6HMD9_Wj88'
		]);
		player.unMute();
	}
})();
