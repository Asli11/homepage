const projBtn = document.querySelector(".projects-opt");
const generalBtn = document.querySelector(".general-opt");
const servicesBtn = document.querySelector(".services-opt");

const general = document.querySelector("#about");
const projects = document.querySelector("#projects");
const services = document.querySelector("#services");

const section = document.querySelector(".sect");
const main = document.querySelector(".main");
const nameHead = document.querySelector(".name");
const header = document.querySelector(".header");
const contact = document.querySelector(".contact");

const footer = document.querySelector(".footer");

const moreProj = document.querySelector(".project-link");
const moreServ = document.querySelector(".services-link");

const hireBtn = document.querySelectorAll(".contact-btn");
/* const hireBtn2 = document.querySelector(".contact-btn-2"); */

const aboutService = document.querySelector(".about4");

const progress = document.querySelectorAll(".progress");

// window.addEventListener("load", () => {

general.style.top = "0";
general.style.position = "relative";
general.style.opacity = "1";
general.style.zIndex = "0";
general.style.transition = ".7s ease";

services.style.pointerEvents = "none";
projects.style.pointerEvents = "none";
contact.style.pointerEvents = "none";

general.style.pointerEvents = "unset";

if (window.innerWidth > 1024) {
	//1.2s "
	window.setTimeout(() => {
		header.style.transition = ".8s ease ";

		header.style.transform = "translateY(-41vh)";
		header.style.height = "80vh";

		section.style.transition = "1s";
		section.style.position = "relative";
		section.style.transform = "translateY(41vh)";
	}, 1800);
	window.setTimeout(() => {
		nameHead.style.marginTop = "3.8rem";
	}, 1900);
}

window.addEventListener("resize", () => {
	section.style.position = "relative";
	/* 	console.log(window.innerWidth); */
	if (window.innerWidth > 1024) {
		header.style.transform = "translateY(-41vh)";
		header.style.height = "80vh";
		header.style.transition = ".8s";
		nameHead.style.marginTop = "3.8rem";

		section.style.transform = "translateY(41vh)";
	}
	if (window.innerWidth <= 1024) {
		console.table(header.style.transform, header.style.height);
		if (header.style.transform == "translateY(-41vh)") {
			header.style.transform = "translateY(0px)";
		}
		header.style.transition = "none";
		header.style.transform = "-50%";
		header.style.height = "70vh";

		section.style.transform = "none";

		section.style.top = "0";
		section.style.transform = "translatey(0)";
		nameHead.style.marginTop = "1rem";
	}
});

window.addEventListener("scroll", () => {
	progress.forEach((e) => {
		let diff = window.innerHeight - window.pageYOffset;
		let calc = window.innerHeight - diff + 260;
		let calc2 = window.innerHeight - diff - 450; /*  260 */

		if (e.offsetTop <= calc && window.innerWidth < 1024) {
			e.style.width = e.previousSibling.previousSibling.children[1].innerText;
			e.style.transition = ".9s";
		}
		if (e.offsetTop <= calc2 && window.innerWidth >= 1024) {
			e.style.width = e.previousSibling.previousSibling.children[1].innerText;
			e.style.transition = ".9s";
		}
	});
});

generalBtn.addEventListener("click", () => {
	services.style.pointerEvents = "none";
	projects.style.pointerEvents = "none";
	contact.style.pointerEvents = "none";

	header.style.transform = "translateY(0)";

	general.style.transform = "none";

	general.style.top = "0";
	general.style.position = "relative";
	general.style.opacity = "1";
	general.style.zIndex = "0";
	general.style.transition = ".5s";
	general.style.pointerEvents = "unset";

	projects.style.opacity = "0";
	projects.style.zIndex = "-1";
	projects.style.transition = "none";
	projects.style.position = "absolute";
	projects.style.top = "-100%";

	services.style.opacity = "0";
	services.style.zIndex = "-1";
	services.style.transition = "none";
	services.style.position = "absolute";
	services.style.top = "-100%";

	/* projects.style.display = "none";
	services.style.display = "none";
	general.style.display = "block"; */
	generalBtn.classList.add("active");
	projBtn.classList.remove("active");
	servicesBtn.classList.remove("active");

	aboutService.style.display = "block";

	if (window.innerWidth >= 1024) {
		section.style.position = "relative";
		header.style.transition = ".6s ease .9s";
		header.style.transform = "translateY(-41vh)";
		section.style.transform = "translateY(41vh)";
	} else {
		section.style.transform = "translateY(0)";
	}
	contact.style.position = "absolute";
	contact.style.opacity = "0";
	contact.style.transform = "translateY(-100%)";
});
projBtn.addEventListener("click", () => {
	header.style.transform = "translateY(0)";

	projects.style.transform = "none";

	/* get projects */
	projects.style.top = "0";
	projects.style.position = "relative";
	projects.style.opacity = "1";
	projects.style.zIndex = "0";
	projects.style.transition = ".6s";
	projects.style.pointerEvents = "unset";

	/* hide rest */
	general.style.opacity = "0";
	general.style.zIndex = "-1";
	general.style.position = "absolute";
	general.style.transition = "none";
	general.style.pointerEvents = "none";
	general.style.top = "-100%";

	services.style.opacity = "0";
	services.style.zIndex = "-1";
	services.style.transition = "none";
	services.style.position = "absolute";
	services.style.top = "-100%";
	services.style.pointerEvents = "none";
	/* menu active */
	projBtn.classList.add("active");
	generalBtn.classList.remove("active");
	servicesBtn.classList.remove("active");
	/* reset width */
	progress.forEach((e) => {
		e.style.width = "0";
	});
	if (window.innerWidth >= 1024) {
		section.style.position = "relative";
		header.style.transition = ".6s ease .9s";
		header.style.transform = "translateY(-41vh)";
		section.style.transform = "translateY(41vh)";
	} else {
		section.style.transform = "translateY(0)";
	}
	contact.style.position = "absolute";
	contact.style.opacity = "0";
	contact.style.transform = "translateY(-100%)";
	contact.style.pointerEvents = "none";
});

servicesBtn.addEventListener("click", () => {
	services.style.pointerEvents = "unset";
	header.style.transform = "translateY(0)";

	services.style.transform = "none";

	services.style.top = "0";

	services.style.position = "relative";
	services.style.opacity = "1";
	services.style.zIndex = "0";
	services.style.transition = ".5s";

	general.style.opacity = "0";
	general.style.zIndex = "-1";
	general.style.position = "absolute";
	general.style.transition = "none";
	general.style.pointerEvents = "none";
	general.style.top = "-100%";
	projects.style.opacity = "0";
	projects.style.zIndex = "-1";
	projects.style.transition = "none";
	projects.style.pointerEvents = "none";
	projects.style.position = "absolute";
	projects.style.top = "-100%";

	/* 	general.style.display = "none";
	projects.style.display = "none";
	services.style.display = "block"; */
	servicesBtn.classList.add("active");
	generalBtn.classList.remove("active");
	projBtn.classList.remove("active");

	aboutService.style.display = "none";

	/* reset progress */
	progress.forEach((e) => {
		e.style.width = "0";
	});

	if (window.innerWidth >= 1024) {
		section.style.position = "relative";
		header.style.transition = ".6s ease .9s";
		header.style.transform = "translateY(-41vh)";
		section.style.transform = "translateY(41vh)";
	} else {
		section.style.transform = "translateY(0)";
	}
	contact.style.position = "absolute";
	contact.style.pointerEvents = "none";
	contact.style.opacity = "0";
	contact.style.transform = "translateY(-100%)";
});

moreProj.addEventListener("click", () => {
	header.style.transform = "translateY(0)";
	projects.style.transform = "none";
	projects.style.pointerEvents = "unset";

	/* get projects */
	projects.style.top = "0";
	projects.style.position = "relative";
	projects.style.opacity = "1";
	projects.style.zIndex = "0";
	projects.style.transition = ".6s";

	/* hide rest */
	general.style.opacity = "0";
	general.style.zIndex = "-1";
	general.style.position = "absolute";
	general.style.transition = "none";
	general.style.top = "-100%";

	services.style.opacity = "0";
	services.style.zIndex = "-1";
	services.style.transition = "none";
	services.style.position = "absolute";
	services.style.top = "-100%";
	/* menu active */
	projBtn.classList.add("active");
	generalBtn.classList.remove("active");
	servicesBtn.classList.remove("active");
	/* reset width */
	progress.forEach((e) => {
		e.style.width = "0";
	});
	if (window.innerWidth >= 1024) {
		/* 	progress.forEach((e) => {
		e.style.transformDelay = "2s";
		e.style.transition = ".8s ease";
		e.style.width = e.previousSibling.previousSibling.children[1].innerText;
	}); */
		header.style.transition = ".6s ease 1.2s";
		header.style.transform = "translateY(-41vh)";

		section.style.position = "relative";
		/* 	section.style.transform = "translateY(40%)"; */
	}
	window.scrollTo({ top: 0 });
});

moreServ.addEventListener("click", () => {
	header.style.transform = "translateY(0)";

	services.style.transform = "none";
	services.style.pointerEvents = "unset";

	services.style.top = "0";

	services.style.position = "relative";

	services.style.opacity = "1";

	services.style.zIndex = "0";

	services.style.transition = ".5s";

	general.style.opacity = "0";

	general.style.zIndex = "-1";

	general.style.position = "absolute";

	general.style.transition = "none";

	general.style.top = "-100%";

	projects.style.opacity = "0";

	projects.style.zIndex = "-1";

	projects.style.transition = "none";

	projects.style.position = "absolute";

	projects.style.top = "-100%";

	/* 	general.style.display = "none";

	projects.style.display = "none";

	services.style.display = "block"; */

	servicesBtn.classList.add("active");

	generalBtn.classList.remove("active");

	projBtn.classList.remove("active");

	aboutService.style.display = "none";

	/* reset progress */

	progress.forEach((e) => {
		e.style.width = "0";
	});

	if (window.innerWidth >= 1024) {
		/* 	progress.forEach((e) => {

			e.style.width = e.previousSibling.previousSibling.children[1].innerText;

			e.style.transition = ".8s";

		}); */

		header.style.transition = ".6s ease .9s";

		header.style.transform = "translateY(-41vh)";

		section.style.position = "relative";

		/* 	section.style.transform = "translateY(40%)"; */
	}

	window.scrollTo({ top: 0 });
});

hireBtn.forEach((e) =>
	e.addEventListener("click", () => {
		general.style.opacity = "0";
		services.style.opacity = "0";
		projects.style.opacity = "0";
		general.style.pointerEvents = "none";
		projects.style.pointerEvents = "none";
		services.style.pointerEvents = "none";
		contact.style.pointerEvents = "unset";

		general.style.transform = "translateY(-100%)";
		services.style.transform = "translateY(-100%)";
		projects.style.transform = "translateY(-100%)";

		general.style.transition = "none";
		services.style.transition = "none";
		projects.style.transition = "none";

		projects.style.position = "absolute";
		general.style.position = "absolute";
		services.style.position = "absolute";

		servicesBtn.classList.remove("active");
		generalBtn.classList.remove("active");
		projBtn.classList.remove("active");

		if (window.innerWidth < 1024) {
			section.style.position = "relative";
			section.style.opacity = "1";
			contact.style.opacity = "1";
			contact.style.position = "relative";
			contact.style.transform = "translateY(0)";
		} else {
			section.style.transform = "translateY(41vh)";
			contact.style.position = "relative";
			contact.style.opacity = "1";
			contact.style.transform = "translateY(0)";
		}
		window.scrollTo({ top: 0 });
	})
);

fetch("https://api.github.com/repos/asli-web/blog/contents/src/pages/blog")
	.then((res) => res.json())
	.then((data) => {
		/* console.log(data[0]); */

		data.forEach((element, index) => {
			/* 			console.log(element.name.slice(0, -3)); */

			const ulTime = document.querySelector(".timeline ul");

			let list = document.createElement("LI");

			ulTime.appendChild(list);

			let pDescr = document.createElement("P");
			let pTitle = document.createElement("P");

			if (data.length == index + 1) {
				pTitle.classList.add("first-entry");
			}

			pDescr.classList.add("timeline-descr");
			pDescr.innerHTML =
				'update <a href= "https://asli-dev-blog.netlify.app/" target="_blank"><b>Blog</b></a>';
			pTitle.classList.add("timeline-title");
			pTitle.innerText = element.name.slice(0, -3);
			/* 	const blogLink= document.querySelector(".timeline-descr a")
			blogLink. */

			list.appendChild(pDescr);
			list.appendChild(pTitle);
		});
	})
	.catch((error) => console.log(error));
