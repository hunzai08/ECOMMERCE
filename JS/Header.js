document.getElementById('headercode').innerHTML +=`
     <nav class="navbar navbar-expand-sm navbar-dark sticky-top custom-navbar">
        <div class="container">
            <a class="navbar-brand" href="Home.html">
                <img src="RES/logo.png" alt="" width="80">
            </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="Home.html" aria-current="page">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Services.html">Services</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="Shose.html">Shose</a>
                            <a class="dropdown-item" href="Cloth.html">Cloth</a>
                            <a class="dropdown-item" href="Electronic.html">Electronic</a>
                            <a class="dropdown-item" href="Watch.html">Watch</a>
                            <a class="dropdown-item" href="Perfume.html">Perfume</a>
                            <a class="dropdown-item" href="Mobile.html">Mobile</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="About.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;