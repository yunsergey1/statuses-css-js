

const allStatuses = [
	{
		smImageUrl: "/img/status-1-sm.jpg",
		xxlImageUrl: "/img/status-1-xxl.jpg",
		title: "Сторис номер 1",
	},
	{
		smImageUrl: "/img/status-2-sm.jpg",
		xxlImageUrl: "/img/status-2-xxl.jpg",
		title: "Сторис номер 2",
	},
	{
		smImageUrl: "/img/status-3-sm.jpg",
		xxlImageUrl: "/img/status-3-xxl.jpg",
		title: "Сторис номер 3",
	},
	{
		smImageUrl: "/img/status-4-sm.jpg",
		xxlImageUrl: "/img/status-4-xxl.jpg",
		title: "Сторис номер 4",
	},
	{
		smImageUrl: "/img/status-1-sm.jpg",
		xxlImageUrl: "/img/status-1-xxl.jpg",
		title: "Сторис номер 5",
	},
	{
		smImageUrl: "/img/status-2-sm.jpg",
		xxlImageUrl: "/img/status-2-xxl.jpg",
		title: "Сторис номер 6",
	},
	{
		smImageUrl: "/img/status-3-sm.jpg",
		xxlImageUrl: "/img/status-3-xxl.jpg",
		title: "Сторис номер 7",
	},
	{
		smImageUrl: "/img/status-4-sm.jpg",
		xxlImageUrl: "/img/status-4-xxl.jpg",
		title: "Сторис номер 8",
	},
];

const statusSm = document.querySelector(".status-sm");
const statusXxl = document.querySelector(".status-xxl");
const statusXxlImage = document.querySelector(".status-xxl__content img");
const statusXxlTitle = document.querySelector(".status-xxl .status-xxl__title");
const statusXxlClose = document.querySelector(".status-xxl__close");
const statusXxlLeft = document.querySelector(".status-xxl__left");
const statusXxlRight = document.querySelector(".status-xxl__right");

let currentIndex = 0;
let timer;

allStatuses.forEach((story, index) => {
	const statusSmItem = document.createElement("div");
	statusSmItem.classList.add("status-sm__item");

	const statusSmImg = document.createElement("img");
	statusSmImg.setAttribute("src", story.smImageUrl);

	statusSm.appendChild(statusSmItem);
	statusSmItem.appendChild(statusSmImg);

	statusSmItem.addEventListener("click", () => {
		currentIndex = index;

		statusXxl.classList.add("active");
		statusXxlImage.setAttribute("src", story.xxlImageUrl);

		document.body.classList.add("status-open");

		if (!story.title) {
			statusXxlTitle.style.display = "none";
		} else {
			statusXxlTitle.style.display = "block";
			statusXxlTitle.innerHTML = story.title;
		}
		clearInterval(timer);
		timer = setInterval(nextStatus, 5000);
	})
});

statusXxlClose.addEventListener("click", () => {
	statusXxl.classList.remove("active");
	document.body.classList.remove("status-open");
});

statusXxlLeft.addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex -= 1;

		statusXxlImage.setAttribute("src", allStatuses[currentIndex].xxlImageUrl);

		if (!allStatuses[currentIndex].title) {
			statusXxlTitle.style.display = "none";
		} else {
			statusXxlTitle.style.display = "block";
			statusXxlTitle.innerHTML = allStatuses[currentIndex].title;
		}

		clearInterval(timer);
		timer = setInterval(nextStatus, 5000);
	}
});

const nextStatus = () => {
	if (currentIndex < allStatuses.length - 1) {
		currentIndex += 1;

		statusXxlImage.setAttribute("src", allStatuses[currentIndex].xxlImageUrl);

		if (!allStatuses[currentIndex].title) {
			statusXxlTitle.style.display = "none";
		} else {
			statusXxlTitle.style.display = "block";
			statusXxlTitle.innerHTML = allStatuses[currentIndex].title;
		}

		clearInterval(timer);
		timer = setInterval(nextStatus, 5000);
	} else {
		statusXxl.classList.remove("active");
		document.body.classList.remove("status-open");
	}
}

statusXxlRight.addEventListener("click", () => {
	nextStatus();
});
