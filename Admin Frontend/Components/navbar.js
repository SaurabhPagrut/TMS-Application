let navbar1 = () => {
    return `
    <div class="logo">
            <a href="./index.html">
                <h2>TMS</h2>
            </a>
            </div>
        
            <div class="nav-items">
                <a href="./index.html">HOME</a>
                <a href="./HTML/About/about.html">ABOUT</a>
                <a href="./HTML/Members/members.html">MEMBERS</a>
            </div>
    `;
}

let navbar2 = () => {
    return `
    <div class="logo">
    <a href="/Admin Frontend/index.html">
        <h2>TMS</h2>
    </a>
    </div>

    <div class="nav-items">
        <a href="/Admin Frontend/index.html">HOME</a>
        <a href="../About/about.html">ABOUT</a>
        <a href="../Members/members.html">MEMBERS</a>
    </div>
    `;
}

let navbar21 = () => {
    return `
    <div class="logo">
    <a href="/Admin Frontend/HTML/adminHome.html">
        <h2>TMS</h2>
    </a>
    </div>

    <div class="nav-items">
        <a href="/Admin Frontend/HTML/adminHome.html">HOME</a>
        <a href="../About/about.html">ABOUT</a>
        <a href="../Members/members.html">MEMBERS</a>
    </div>
    `;
}

let navbar3 = () => {
    return `
    <div class="logo">
            <a href="/Admin Frontend/HTML/adminHome.html">
                <h2>TMS</h2>
            </a>
        </div>

        <div class="nav-items">
        <a onclick="logoutFun()" id="logout">LOGOUT</a>
            <a href="./About/about.html">ABOUT</a>
            <a href="./Members/members.html">MEMBERS</a>
        </div>`;
}

let navbar4 = () => {
    return `
    <div class="logo">
        <a href="../index.html">
            <h2>TMS</h2>
        </a>
    </div>

    <div class="nav-items">
        <a href="../index.html">HOME</a>
        <a href="../HTML/About/about.html">ABOUT</a>
        <a href="../HTML/Members/members.html">MEMBERS</a>
    </div>
    `;
}

export { navbar1, navbar2, navbar21, navbar3, navbar4 };