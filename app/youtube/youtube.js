;(() => {
	console.log('???Elena????')
	let counter = 0;
	setInterval(() => {
		counter++;
	}, 1000)
	const tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	let player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '100%',
			width: '100%',
			events: {
	        'onReady': onPlayerReady
	      }
		});
	}

	function onPlayerReady() {
		player.loadPlaylist([
			// '_6HMD9_Wj88',
			'kcRuVwgOXI4'
		]);
		player.unMute();
	}
})();
