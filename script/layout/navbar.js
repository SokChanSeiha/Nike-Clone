const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    navbar.innerHTML = data;

    // side bar
    const minMenuDropdown = document.querySelector("#minMenuDropdown");
    // open and close sidebar
    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", () => {
      const menuIcon = document.getElementById("menuIcon");
      // Toggle the 'active' class on the menu button
      menuButton.classList.toggle("active");
      // Toggle between menu icon and close icon
      if (menuButton.classList.contains("active")) {
        menuIcon.innerHTML =
          '<img  src="../../images/layout/close.png" alt="Close">'; // Set close icon HTML
        minMenuDropdown.style.right = "0%";
      } else {
        menuIcon.innerHTML =
          '<img  src="../../images/layout/menu.png" alt="Menu">'; // Set menu icon HTML
        minMenuDropdown.style.right = "-100%";
      }
    });


    //
  })
  .catch((error) => console.error("Error fetching included file:", error));