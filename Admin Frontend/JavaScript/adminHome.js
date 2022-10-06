// let logoutdiv = document.querySelector("#logout");
// console.log(logoutdiv);

let logoutFun = async () => {
    let uuid = prompt("Enter Session UUID");
    if (uuid != "") {
        let response = await fetch(`http://localhost:8888/login/adminlogout?key=${uuid}`, {
            method: 'PATCH'
        }).catch(err => {
            console.log(err);
        })
        if (response.ok) {
            alert("Logged Out Successfully!");
            window.location = "../index.html"
        } else {
            let res = await response.json();
            alert(res.message);
        }
    } else {
        alert("Please Enter UUID!");
    }
}


