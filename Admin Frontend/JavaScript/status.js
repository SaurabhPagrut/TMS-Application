const AdloginStatus = localStorage.getItem("AdminLoggedIn");
if (AdloginStatus == "false") {
    alert("Login First!");
    window.location = "/Admin Frontend/index.html";
}