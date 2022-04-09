import React from "react";
import './carousel.css';


function Carousel() {
    return (
        <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
            <div class="row">
                <div class="col-6 col-lg-4">
                <img src="/assets/images/raizo-smart-lock-singapore.png" class="abc" alt="logo" />
                </div>
                <div class="col-sm-6 col-lg-8">
                    <div class="dung-text">
                    <h1 >Singapore's Fastest Growing<br />Smart Lock Brand</h1>
                    <p >Raizo smart lock has been recognized and won the praises of the users, distributors,<br />suppliers and dealers everywhere around the world</p>
                </div>
                </div>
            </div>
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCrossfade"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-mdb-interval="2000">
                    <img src="/assets/images/bia1.png" class="d-block h-100" alt="Wild Landscape" />
                </div>
                <div class="carousel-item" data-mdb-interval="2000">
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block h-100" alt="Camera" />
                </div>
                <div class="carousel-item" data-mdb-interval="2000">
                    <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block h-100" alt="Exotic Fruits" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;