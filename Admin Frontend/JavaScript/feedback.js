import { navbar2, navbar21 } from "../Components/navbar.js";

let AdloginStatus = localStorage.getItem("AdminLoggedIn");
let aboutnav = document.querySelector(".navbar");
if (AdloginStatus == "true") {
    aboutnav.innerHTML = navbar21();
} else {
    aboutnav.innerHTML = navbar2();
}

// GET Request FOR Feedback By ID

const getFeedbackById = async () => {
    let response = await fetch('http://localhost:8888/admin/feedback/$[id]');
    console.log(response);
}


// GET Request FOR Feedback By Customer ID

const getFeedbackByCustId = async () => {
    let response = await fetch('http://localhost:8888/admin/feedbacks/$[id]');
    console.log(response);
}


// GET Request FOR All Feedbacks

const getAllFeedbacks = async () => {
    let response = await fetch('http://localhost:8888/admin/feedbacks');
    console.log(response);
}