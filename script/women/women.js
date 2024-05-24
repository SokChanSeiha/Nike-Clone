const womenContent = document.querySelector(".women-content-layout");
fetch("../../components/women/women.html")
.then((res) => res.text())

.then((data) => {
    womenContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));