function launchVideo(srcVideo) {
	console.log(srcVideo);
	
	var winvideo = document.getElementById("videowin");
	winvideo.src = srcVideo;
}

window.addEventListener("load", function() {
	var nextSelect = "s01";
	var winvideo = document.getElementById("videowin");
	
	winvideo.addEventListener("click", function() {
		if(winvideo.paused) winvideo.play();
		else winvideo.pause();
	})
	
	document.querySelectorAll(".select>.select-option").forEach(function(item, i, arr) {
		item.addEventListener("click", function() {
			item.parentNode.style = "";
			launchVideo(document.getElementById(item.getAttribute("data-next")).getAttribute("data-video"));
			nextSelect = item.getAttribute("data-next");
		})
	})
	
	winvideo.addEventListener("ended", function() {
		var el = document.getElementById(nextSelect);
		el.style = "display: grid";
	})
})