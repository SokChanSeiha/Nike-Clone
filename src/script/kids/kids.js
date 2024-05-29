const kidsContent = document.querySelector(".kids-content-layout");
fetch("../../components/kids/kids.html")
.then((res) => res.text())

.then((data) => {
    kidsContent.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));



