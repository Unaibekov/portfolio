var mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



window.onload = () => {
	let preloader = document.getElementById("preloader");
	preloader.style.display = "none";
};



var elem = document.querySelector(".m-p-g");

document.addEventListener("DOMContentLoaded", function () {
	var gallery = new MaterialPhotoGallery(elem);
});



var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
	el.addEventListener("click", openTabs);
});

function openTabs(el) {
	var btnTarget = el.currentTarget;
	var country = btnTarget.dataset.country;

	tabContent.forEach(function (el) {
		el.classList.remove("active");
	});

	tabLinks.forEach(function (el) {
		el.classList.remove("active");
	});

	document.querySelector("#" + country).classList.add("active");

	btnTarget.classList.add("active");
}