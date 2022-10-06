import { navbar1 } from "../Components/navbar.js";

let nav1 = document.querySelector(".navbar");
nav1.innerHTML = navbar1();

let Loginf = document.getElementById("loginform");

const postLoginFetch = async () => {
    event.preventDefault();
    let Amobile = document.getElementById("mobile").value;
    let Apassword = document.getElementById("password").value;

    let response = await fetch(
        `http://localhost:8888/login/adminlogin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mobile: Amobile,
            password: Apassword
        })
    });
    if (response.ok) {
        Loginf.reset();
        let res = await response.json();
        alert("Login Successfully! Please Note This UUID "+res.uuid);
        window.location = "./HTML/adminHome.html";
    } else {
        let res = await response.json();
        alert(res.message);
    }
}

Loginf.addEventListener("submit", postLoginFetch);

