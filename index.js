const change = document.getElementById("change");
const change2 = document.getElementById("change2");
const screen1 = document.querySelector(".screen");
const screen2 = document.querySelector(".screen2");
const bg = document.querySelector(".bg");
const menuImg = document.querySelectorAll("Img");

/* window.onload = function () {
	bg.style.backgroundImage = "url(./armand-khoury-4cBVro7SHLs-unsplash.jpg)";
};
 */
change.addEventListener("click", () => {
	screen1.classList.add("fade-out");
	screen2.style.display = "block";
	document.querySelector(".bg").style.backgroundImage = "none";
	console.log(document.querySelector(".bg").style);
});

change2.addEventListener("click", () => {
	screen2.style.display = "none";
	screen1.classList.remove("fade-out");
	bg.classList.remove("fade-out");
	bg.style.backgroundImage = "url(./armand-khoury-4cBVro7SHLs-unspla.jpg)";
});
const about = document.querySelector(".about-m");
const work = document.querySelector(".work-m");
const contact = document.querySelector(".contact-m");

about.style.color = "lawngreen";
work.style.color = "lawngreen";
contact.style.color = "lawngreen";

const arr = [about, work, contact];
const colorFade = "rgb(130, 130, 130)";

window.addEventListener("scroll", (e) => {
	const scrollHeight = window.innerHeight / 2;

	const height = window.scrollY / 2;

	if (
		/* height % scrollHeight < scrollHeight / 2 + 5 &&
		height % scrollHeight > scrollHeight / 2 - 5 */

		window.scrollY / scrollHeight >= 1 &&
		window.scrollY / scrollHeight < 2.5
	) {
		arr[0].style.color = colorFade;
		arr[1].style.color = "lawngreen";
		arr[2].style.color = "lawngreen";
		/* 	menuImg.forEach((img) => {
			img.style.filter = "brightness(0.4)";
		}); */
	} else if (
		window.scrollY / scrollHeight >= 2.5 &&
		window.scrollY / scrollHeight <= 4.5
	) {
		arr[0].style.color = "lawngreen";
		arr[1].style.color = colorFade;
		arr[2].style.color = "lawngreen";

		console.log("next");
	} else if (window.scrollY / scrollHeight > 4.5) {
		arr[0].style.color = "lawngreen";
		arr[1].style.color = "lawngreen";
		arr[2].style.color = colorFade;
	} else if (window.scrollY % scrollHeight < 1.5) {
		arr[0].style.color = "lawngreen";
		arr[1].style.color = "lawngreen";
		arr[2].style.color = "lawngreen";
		console.log(window.scrollY / scrollHeight);
		/* 	menuImg.forEach((img) => {
			img.style.filter = "none";
		}); */
	}
});

let track = document.createElement("audio");
let svg = document.querySelector(".play svg path");

var isPlaying = false;
track.src = "./assets/audio_fe4d3bcac9.mp3";

function playmusic() {
	isPlaying ? track.pause() : track.play();
}

track.onplaying = function () {
	isPlaying = true;
	svg.style.fill = "#2EDDE8";
};
track.onpause = function () {
	isPlaying = false;
	svg.style.fill = "#2EE88F";
};

//game
let isClicked = false;
document.querySelector(".start").addEventListener("click", () => {
	if (isClicked == false) {
		start();
	}
});

function start() {
	if (isPlaying == false) {
		track.play();
	}
	isClicked = true;
	counter = 0;
	document.querySelector(".score").innerHTML = 0;

	var char = document.getElementById("char");
	var bird = document.getElementById("bird");
	var bird2 = document.getElementById("bird2");
	var block = document.getElementById("block");
	var startMssg = document.querySelector(".message");

	document.querySelector(".score").style.display = "block";
	startMssg.style.display = "block";
	/* 
	document.querySelector("#char").style.backgoundImage =
		"url(./assets/herochar_idle_anim.gif)"; */

	document.querySelector("#char").classList.add("motion");
	console.log(char.style);
	block.classList.add("run");

	bird2.style.display = "block";
	let gameover = document.querySelector(".gameover");
	let scoreDisplay = document.querySelector(".scoreDisplay");
	gameover.innerText = "";
	scoreDisplay.innerText = "";
	if (char.classList == "jump") {
		return;
	}

	const jumpClick = document.body.addEventListener("click", addClass);
	window.addEventListener("keydown", keyPress);

	var checkDead = setInterval(() => {
		let characterTop = parseInt(
			window.getComputedStyle(char).getPropertyValue("top")
		);
		let blockLeft = parseInt(
			window.getComputedStyle(block).getPropertyValue("left")
		);
		if (blockLeft < 20 && blockLeft > -20 && characterTop >= 280) {
			char.classList.remove("jump");
			block.classList.remove("run");
			char.classList.remove("motion");
			bird.classList.remove("fly");
			bird2.classList.remove("fly2");
			/* 	alert("Game Over. score: " + Math.floor(counter / 100)); */

			gameover.innerText = "GAMEOVER.";
			scoreDisplay.innerText = "Score" + " " + Math.floor(counter / 100);
			startMssg.style.display = "none";
			document.body.removeEventListener("click", addClass);
			window.removeEventListener("keydown", keyPress);
			document.querySelector(".score").innerHTML = 0;
			window.clearInterval(checkDead);
			isClicked = false;
		} else {
			counter++;
			document.querySelector(".score").innerHTML = Math.floor(counter / 100);
			if (Math.floor(counter / 100) == 1) {
				bird.classList.add("fly");
				console.log("bird1", Math.floor(counter / 100));
			}
			if (Math.floor(counter / 100) == 5) {
				bird2.classList.add("fly2");
			}
		}
	}, 10);

	document.querySelector(".stop").addEventListener("click", () => {
		window.clearInterval(checkDead);
		char.classList.remove("jump");
		char.classList.remove("motion");
		block.classList.remove("run");
		bird.classList.remove("fly");
		bird2.classList.remove("fly2");
		char.style.backgoundImage = "url(./assets/herochar_idle_anim_strip_4.png)";
		startMssg.style.display = "none";
		document.querySelector(".score").innerHTML = 0;
		counter = 0;
		document.body.removeEventListener("click", addClass);
		window.removeEventListener("keydown", keyPress);
		track.pause();
		track.currentTime = 0;
		isClicked = false;
	});
}
//game jump
function addClass() {
	var char = document.getElementById("char");
	char.classList.add("jump");

	setTimeout(function () {
		char.classList.remove("jump");
	}, 500);
}
window.addEventListener("keydown", function (e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

function keyPress(e) {
	if (e.keyCode == 32) {
		e.preventDefault();
		var char = document.getElementById("char");
		char.classList.add("jump");

		setTimeout(function () {
			char.classList.remove("jump");
		}, 500);
	}
}
