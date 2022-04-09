import React from "react";

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarRightAlignExample"
                        aria-controls="navbarRightAlignExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div>
                        <img src="/assets/images/logo_SGS.jpg" alt="logo" style={{width:55,height:45}} />
                    </div>

                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item nav-link">
                                Tel: +84 988 571 839
                            </li>
                            <li class="nav-item nav-link">
                                Mail: info@saigonsky.vn
                            </li>
                        </ul>
                    </div>

                    
                    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
                        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">Raizo R190</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Raizo R300</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Raizo R320</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Raizo Hotel Door Lock</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Digital Locker Lock</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solution
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">Hotel Solution</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Residential Solution</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Airbnb Solution</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Header;
