import { navbar2, navbar21 } from "../Components/navbar.js";

let AdloginStatus = localStorage.getItem("AdminLoggedIn");
let aboutnav = document.querySelector(".navbar");
if (AdloginStatus == "true") {
    aboutnav.innerHTML = navbar21();
} else {
    aboutnav.innerHTML = navbar2();
}
