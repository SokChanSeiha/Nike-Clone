const manShadowContent = document.querySelector(".man-shadow-content-layout");
fetch("../../components/man-shadow/content.html")
.then((res) => res.text())

.then((data) => {
    peopleContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));