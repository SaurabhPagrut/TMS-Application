let AdloginStatus = localStorage.getItem("AdminLoggedIn");
let logoutFun = async () => {
    let uuid = prompt("Enter Session UUID");
    if (uuid.length > 0) {
        let response = await fetch(`http://localhost:8888/login/adminlogout?key=${uuid}`, {
            method: 'PATCH'
        }).catch(err => {
            console.log(err);
        })
        if (response.ok) {
            alert("Logged Out Successfully!");
            localStorage.setItem("AdminLoggedIn", false);
            window.location = "../index.html";
        } else {
            let res = await response.json();
            alert(res.message);
        }
    } else {
        alert("Please Enter UUID!");
    }
}
let adUpdate = document.querySelector("#updateForm");
let updateAdmin = async () => {
    event.preventDefault();
    if (AdloginStatus == "true") {
        let adUuid = document.getElementById("UUID").value;
        let adName = document.getElementById("adminName").value;
        let adEmail = document.getElementById("adminEmail").value;
        let adMobile = document.getElementById("adminMobile").value;
        let adPass = document.getElementById("adminPass").value;

        let body = {
            adminName: adName,
            email: adEmail,
            mobile: adMobile,
            password: adPass
        }

        let response = await fetch(
            `http://localhost:8888/admin/update?key=${adUuid}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (response.ok) {
            alert("Updated Successfully!");
            adUpdate.reset();
        } else {
            let res = await response.json();
            alert(res.message);
        }
    }
    else {
        alert("Please Login First!");
        window.location = "../index.html"
    }
}

adUpdate.addEventListener("submit", updateAdmin);
