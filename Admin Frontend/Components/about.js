let aboutc = () => {
    return `
    <h1 id="tms-application">TMS-Application</h1>
    <h1 id="rest-api-for-an-online-trip-management-system">REST API for an Online Trip Management System</h1>
    <ul>
        <li>We have developed this Frontend Application for calling a REST API for an Online Trip Management System.
            This API performs all the fundamental CRUD operations of any Trip Management Application platform with
            user validation at every step.</li>
        <li>This project is developed by team of 5 Back-End Developers during project week in Masai School.</li>
    </ul>
    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li>Java</li>
        <li>Spring Framework</li>
        <li>Spring Boot</li>
        <li>Spring Data JPA</li>
        <li>Hibernate</li>
        <li>MySQL</li>
        <li>PostMan</li>
        <li>Swagger</li>
        <li>Lombok</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    <h2 id="modules">Modules</h2>
    <ul>
        <li>Login, Logout Module</li>
        <li>User Module</li>
        <li>Admin Module</li>
        <li>Booking Management Module</li>
        <li>Feedback Module</li>
        <li>Report Module</li>
        <li>Trip Package Management Module</li>
        <li>Route Mangement Module</li>
    </ul>
    <h2 id="features">Features</h2>
    <ul>
        <li>User and Admin authentication &amp; validation with session uuid having.</li>
        <li>Admin Features:<ul>
                <li>Administrator Role of the entire application</li>
                <li>Only registered admins with valid session token can add/update/delete Package,Hotel,Route or
                    customer from main database.</li>
                <li>Admin can access the details of different Routes, Bus, Packages,
                    TicketDetails,Feedback,Customer,Reports,etc.</li>
            </ul>
        </li>
        <li>User Features:<ul>
                <li>A user can register himself or herself on the platform.</li>
                <li>He/She can check the Packages and Hotels availabilty.</li>
                <li>If Trip Package is available, can book the trip package by providing payment details.</li>
                <li>After booking, he will get booking details for the whole Package inside this there will be all
                    details regarding the ticket details ,total cost, etc.</li>
                <li>If the customer want can cancel the booking.</li>
            </ul>
        </li>
    </ul>
    <h2 id="contributors">Contributors</h2>
    <ul>
        <li><a href="https://github.com/TridipRong">@Tridip Rong</a></li>
        <li><a href="https://github.com/mrFarooque">@MD Farooque Ansari</a></li>
        <li><a href="https://github.com/pushpam-386">@Pushpam Kumar</a></li>
        <li><a href="https://github.com/SaurabhPagrut">@Saurabh Pragrut</a></li>
        <li><a href="https://github.com/efat56">@Efat Husneara</a></li>
    </ul>
    <h2 id="installation-run">Installation &amp; Run</h2>
    <ul>
        <li>Before running the API server, you should update the database config inside the <a
                href="https://github.com/mrFarooque/rightful-order-9279/blob/main/TripManagementSystem/src/main/resources/application.properties">application.properties</a>
            file.</li>
        <li>Update the port number, username and password as per your local database config.</li>
    </ul>
    <pre>
        <code>    server.port=<span class="hljs-number">8888</span>
            spring<span class="hljs-selector-class">.datasource</span><span class="hljs-selector-class">.url</span>=jdbc:mysql:<span class="hljs-comment">//localhost:3306/tmsdb;</span>
            spring<span class="hljs-selector-class">.datasource</span><span class="hljs-selector-class">.driver-class-name</span>=com<span class="hljs-selector-class">.mysql</span><span class="hljs-selector-class">.cj</span><span class="hljs-selector-class">.jdbc</span><span class="hljs-selector-class">.Driver</span>
            spring<span class="hljs-selector-class">.datasource</span><span class="hljs-selector-class">.username</span>=root
            spring<span class="hljs-selector-class">.datasource</span><span class="hljs-selector-class">.password</span>=root
        </code>
    </pre>
    `;
}

export default aboutc;