import { navbar4 } from "../Components/navbar.js";

let nav2 = document.querySelector(".navbar");
nav2.innerHTML = navbar4();

let signupf = document.getElementById("signupform");

const postSignupFetch = async () => {
    event.preventDefault();
    let Aname = document.getElementById("name").value;
    let Amobile = document.getElementById("mobile").value;
    let Aemail = document.getElementById("email").value;
    let Apassword = document.getElementById("password").value;

    let response = await fetch(
        `http://localhost:8888/admin/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            adminName: Aname,
            email: Aemail,
            mobile: Amobile,
            password: Apassword
        })
    });
    if (response.ok) {
        signupf.reset();
        alert("Admin Saved Successfully!");
        window.location = "../index.html";
    } else {
        let res = await response.JSON();
        alert(res.message);
    }
}

signupf.addEventListener("submit", postSignupFetch);