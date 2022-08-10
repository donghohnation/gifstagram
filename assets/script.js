let APIKEY = "k97KrpZv1g8ZfdGW7o9ZVsQphqFCguwz";


document.addEventListener("DOMContentLoaded", init);


function init() {
	document.getElementById("btnSearch").addEventListener("click", ev => {
		ev.preventDefault(); //to stop the page reload
		let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=9&q=`;
		let str = document.getElementById("search").value.trim();
		url = url.concat(str);
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(content => {
				for (var i = 0; i < 10; i++) {
					console.log(content.data);
					console.log("META", content.meta);
					document.getElementById("gif" + (i + 1)).src = content.data[i].images.downsized.url;
					document.getElementById("gif" + (i + 1)).alt = content.data[i].title;
					document.getElementById("caption" + (i + 1)).innerHTML = content.data[i].title;
					document.querySelector("#search").value = str;
				};
			})
			.catch(err => {
				//   console.error(err);
			});
	});
}