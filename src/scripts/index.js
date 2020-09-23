var carouselPages = document.querySelector(".carousel-pages");
var carouselButtons = document.querySelectorAll(".carousel-button");
var pageCount = document.querySelectorAll(".carousel-page").length;
var pageWidth = document.querySelector(".carousel-pages").clientWidth;
console.log(pageWidth);
var pageIndex = 1;
var translateX = 0;

// carouselButtons.forEach((button) => {
// 	button.addEventListener("click", (event) => {
// 		if (event.target.id === "prev") {
// 			if (pageIndex !== 1) {
// 				pageIndex--;
// 				translateX += pageWidth;
// 				console.log("forward");
// 			}
// 		} else {
// 			if (pageIndex !== pageCount) {
// 				pageIndex++;
// 				translateX -= pageWidth;
// 				console.log("backward");
// 			}
// 		}

// 		carouselPages.style.transform = `translateX(${translateX}px)`;
// 	});
// });
console.log(pageCount);
carouselButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		if (event.currentTarget.id === "prev") {
			if (pageIndex != 1) {
				pageIndex--;
				translateX += pageWidth;
			} else {
				pageIndex = pageCount;
				translateX -= pageWidth * pageCount - pageWidth;
			}
		}
		if (event.currentTarget.id === "next") {
			if (pageIndex != pageCount) {
				pageIndex++;
				translateX -= pageWidth;
			} else {
				pageIndex = 1;
				translateX += pageWidth * pageCount - pageWidth;
			}
		}

		carouselPages.style.transform = `translateX(${translateX}px)`;
	});
});
