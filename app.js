// declaration part
let joke_text_container = document.querySelector(".joke_text");
let btn = document.querySelector(".joke_container button");

// function text :
function return_joke() {
	let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";
	fetch(url)
		.then((resolved) => {
			let data = resolved.json();
			return data;
		})
		.then((joke) => {
			let jokeText = joke.joke;
			joke_text_container.innerText = jokeText;
		});
}
// onload function
window.onload = return_joke();
// onclick function
btn.addEventListener("click", return_joke);
