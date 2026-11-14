// <<<<<<< HEAD
// =======

// >>>>>>> 3f558d515020005bd0bca898717feb1fe6f95b38
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
// navLink1.addEventListener("mouseenter", increaseNavbarWidth);
// navLink1.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink2.addEventListener("mouseenter", increaseNavbarWidth);
// navLink2.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink3.addEventListener("mouseenter", increaseNavbarWidth);
// navLink3.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink4.addEventListener("mouseenter", increaseNavbarWidth);
// navLink4.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink5.addEventListener("mouseenter", increaseNavbarWidth);
// navLink5.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink6.addEventListener("mouseenter", increaseNavbarWidth);
// navLink6.addEventListener("mouseleave", decreaseNavbarWidth);
// navLink7.addEventListener("mouseenter", increaseNavbarWidth);
// navLink7.addEventListener("mouseleave", decreaseNavbarWidth);

increaseNavbarWidth();
navbar.addEventListener("mouseenter", increaseNavbarWidth);
navbar.addEventListener("mouseleave", decreaseNavbarWidth);

const now = new Date();

const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
const daynum = now.getDate();
const monthName = now.toLocaleDateString("en-US", { month: "long" });
const year = now.getFullYear();

let dateDisplay = document.getElementById("dateDisplay");
todayDateText = `${dayName}, ${daynum} ${monthName} ${year}`;
dateDisplay.textContent = todayDateText;

// this javascript file contains the code for the navbar hover effect
// that makes it increase the width by 250px from 50px.
//
// and also the date time code on the dashboard.
//

// Switching the main content
// from dashboard to orders and so on like that
function switchMainContent(link, container) {
  let navLinks = document.querySelectorAll(".nav-link");
  let containers = document.querySelectorAll(".content-container");
  let currentLink = document.getElementsByClassName(link);
  let containerToBeOpened = document.getElementById(container);
  navLinks.forEach((nav) => {
    nav.className = "";
  });
  containers.forEach((con) => {
    con.style.display = "none";
  });

  currentLink.className = ".nav-link-active";
  containerToBeOpened.style.display = "grid";
}

// Manage account area
// it'll ask for passwords, so that anyone cannot just go there and look at sensitive information, like finance, customers, and orders.
const manageAccountForm = document.getElementById("signInForm");
const manageAccountFormInnerHtml = manageAccountForm.innerHTML;
let isLoggedin = false;
UserData = {
  name: "Emmanuel",
  pasword: "a",
};

console.log(isLoggedin);

manageAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameEntry = document.getElementById("SignInInputName").value;
  const passwordEntry = document.getElementById("SignInInputPassword").value;
  const message = document.getElementById("signInMessage");
  if (nameEntry == UserData.name && passwordEntry == UserData.pasword) {
    message.textContent = `Signed in Successfully as ${nameEntry}`;
    message.style.color = "green";
    manageAccountForm.reset();
    setTimeout(() => {
      manageAccountForm.innerHTML = ``;
      manageAccountForm.innerHTML = `Signed In as ${nameEntry}`;
    }, 500);
    document.getElementById("logOutBtn").style.display = "inline-block";
    isLoggedin = true;
    UsernamendRole();
  } else {
    message.textContent = "Name or Password incorrect, try again!!";
    message.style.color = "red";
    manageAccountForm.reset();
  }

  console.log(isLoggedin);
});

function logOut() {
  isLoggedin = false;
  UsernamendRole();
  manageAccountForm.innerHTML = manageAccountFormInnerHtml;
  document.getElementById("logOutBtn").style.display = "none";
}

const usernametext = document.getElementById("usrnm");
const usernameRole = document.getElementById("usrle");
const purCnt = document.getElementById("purchase-orders-content");
const finCnt = document.getElementById("finance-content");
const purCntInnerHtml = purCnt.innerHTML;
const finCntInnerHtml = finCnt.innerHTML;
function UsernamendRole() {
  if (isLoggedin) {
    usernametext.textContent = UserData.name;
    usernameRole.textContent = "Admin";
    purCnt.innerHTML = purCntInnerHtml;
    finCnt.innerHTML = finCntInnerHtml;
  } else {
    usernametext.textContent = "Guest";
    usernameRole.textContent = "guest";
    finCnt.innerHTML = `<h2>Login to view this page</h2>`;
    purCnt.innerHTML = `<h2>Login to view this page</h2>`;
  }
}

UsernamendRole();
// =======
// this javascript file contains the code for the navbar hover effect 
// ans also the date time code on the dashboard. 
// >>>>>>> 3f558d515020005bd0bca898717feb1fe6f95b38
