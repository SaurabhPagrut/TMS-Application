import { navbar2 } from "../Components/navbar.js";
import members from "../Components/members.js";

let membernav = document.querySelector(".navbar");
membernav.innerHTML = navbar2();

let membersdiv = document.querySelector(".container");
membersdiv.innerHTML = members();