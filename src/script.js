// let sideNav = document.getElementById("sideNav");
// let menu = document.getElementById("menu");

// menu.addEventListener("click", (event) => {
//   event.stopPropagation(); // Prevents the body click event from triggering immediately
//   if (sideNav.classList.contains("-translate-x-full")) {
//     // SideNav is currently closed, so open it
//     sideNav.classList.remove("-translate-x-full");
//     sideNav.classList.add("-translate-x-0");
//   } else {
//     // SideNav is currently open, so close it
//     sideNav.classList.remove("-translate-x-0");
//     sideNav.classList.add("-translate-x-full");
//   }
// });

// // let logo = document.getElementById("logo");
// document.body.addEventListener("click", (event) => {
//   // Check if the click occurred outside the sideNav and menu
//   if (!sideNav.contains(event.target) && event.target !== menu) {
//     sideNav.classList.remove("-translate-x-0");
//     sideNav.classList.add("-translate-x-full");
//   }
// });


// let userDropdown = document.getElementById("user-d");
// let userButton = document.getElementById("user");

// userButton.addEventListener("click", (event) => {
//   event.stopPropagation();
//   if (userDropdown.classList.contains("hidden")) {
//     userDropdown.classList.remove("hidden");
//   } else {
//     userDropdown.classList.add("hidden");
//   }
// });

// document.body.addEventListener("click", (event) => {
//   if (!userDropdown.contains(event.target) && event.target !== userButton) {
//     userDropdown.classList.add("hidden");
//   }
// });





document.addEventListener("alpine:init", () => {
    Alpine.data("select", () => ({
      open: false,
      type: "",

      toggle() {
        this.open = !this.open;
      },

      setType(val) {
        this.type = val;
        this.open = false;
      },
    }));
  });

