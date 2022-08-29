document.addEventListener("DOMContentLoaded", function () {
	let body = document.body;
	const theme = localStorage.getItem("theme", "dark");
	const lightModeToggle = document.getElementById("toggle");

	if (theme === "dark") {
		body.classList.remove("dark");
		body.classList.add("lightmode");
		theme === "light";
	} else {
		body.classList.remove("lightmode");
	}

	lightModeToggle.addEventListener("click", function () {
		body.classList.toggle("lightmode");

		if (body.classList.contains("dark")) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.setItem("theme", "light");
		}
	});
});



let APIKEY = "k97KrpZv1g8ZfdGW7o9ZVsQphqFCguwz";


document.addEventListener("DOMContentLoaded", init);


const cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
	cards[i].style.visibility = "hidden";
}


function init() {
	document.getElementById("btnSearch").addEventListener("click", ev => {
		ev.preventDefault(); //to stop the page reload

		if (document.querySelector("#search").value !== "") {
			for (var i = 0; i < cards.length; i++) {
				cards[i].style.visibility = "visible";
			}
		}
		let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
		let str = document.getElementById("search").value.trim();
		url = url.concat(str);
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(content => {
				for (var i = 0; i < 13; i++) {
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

