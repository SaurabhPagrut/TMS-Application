import { navbar2 } from "../Components/navbar.js";
import aboutc from "../Components/about.js";

let aboutnav = document.querySelector(".navbar");
aboutnav.innerHTML = navbar2();

let aboutcon = document.querySelector(".container");
aboutcon.innerHTML = aboutc();