
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let navLink1 = document.getElementById("nav-links");
let navLink2 = document.getElementById("nav-links-two");
let navLink3 = document.getElementById("nav-links-three");
let navLink4 = document.getElementById("nav-links-four");
let navLink5 = document.getElementById("nav-links-five");
let navLink6 = document.getElementById("nav-links-six");
let navLink7 = document.getElementById("nav-links-seven");

function increaseNavbarWidth() {
  navbar.style.width = "250px";
  logo.innerHTML = `ventry`;
  navLink1.innerHTML = ` <i class="ri-dashboard-line"></i>Dashboard`;
  navLink2.innerHTML = `<i class="ri-file-list-3-line"></i> Orders`;
  navLink3.innerHTML = `<i class="ri-price-tag-3-line"></i>Price`;
  navLink4.innerHTML = `<i class="ri-box-1-line"></i>Inventory`;
  navLink5.innerHTML = `<i class="ri-add-large-fill"></i>Purchase Order`;
  navLink6.innerHTML = `<i class="ri-wallet-line"></i>Finance`;
  navLink7.innerHTML = `<i class="ri-user-line"></i>Manage Account`;
}

function decreaseNavbarWidth() {
  navbar.style.width = "50px";
  logo.innerHTML = `<i class="ri-dashboard-line"></i>`;
  navLink1.innerHTML = ` <i class="ri-dashboard-line"></i>`;
  navLink2.innerHTML = `<i class="ri-file-list-3-line"></i>`;
  navLink3.innerHTML = `<i class="ri-price-tag-3-line"></i>`;
  navLink4.innerHTML = `<i class="ri-box-1-line"></i>`;
  navLink5.innerHTML = `<i class="ri-add-large-fill"></i>`;
  navLink6.innerHTML = `<i class="ri-wallet-line"></i>`;
  navLink7.innerHTML = `<i class="ri-user-line"></i>`;
}

//navlink hover effect
navLink1.addEventListener("mouseenter", increaseNavbarWidth);
navLink1.addEventListener("mouseleave", decreaseNavbarWidth);
navLink2.addEventListener("mouseenter", increaseNavbarWidth);
navLink2.addEventListener("mouseleave", decreaseNavbarWidth);
navLink3.addEventListener("mouseenter", increaseNavbarWidth);
navLink3.addEventListener("mouseleave", decreaseNavbarWidth);
navLink4.addEventListener("mouseenter", increaseNavbarWidth);
navLink4.addEventListener("mouseleave", decreaseNavbarWidth);
navLink5.addEventListener("mouseenter", increaseNavbarWidth);
navLink5.addEventListener("mouseleave", decreaseNavbarWidth);
navLink6.addEventListener("mouseenter", increaseNavbarWidth);
navLink6.addEventListener("mouseleave", decreaseNavbarWidth);
navLink7.addEventListener("mouseenter", increaseNavbarWidth);
navLink7.addEventListener("mouseleave", decreaseNavbarWidth);

const now = new Date();

const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
const daynum = now.getDate();
const monthName = now.toLocaleDateString("en-US", { month: "long" });
const year = now.getFullYear();

let dateDisplay = document.getElementById("dateDisplay");
todayDateText = `${dayName}, ${daynum} ${monthName} ${year}`;
dateDisplay.textContent = todayDateText;


// this javascript file contains the code for the navbar hover effect 
// ans also the date time code on the dashboard. 
