import React from "react";
import './home.css';
import Carousel from "../carousel/carousel";
import Cart from "../cart/cart";
function Home() {
    return (
        <div>
            <Carousel />
            <div class="dung-text2">
                <h1>We show our <span>professionality</span> on the research and development of <span>smart locks</span></h1>
            </div>
            <div class="dung-text3">
                <h1>Our Products</h1>
                <p>We care about making life easier and safer. That’s why we’ve spent over the 20 years creating innovative, quality smart door lock that work.</p>
            </div>
            <div class="dung-text2">
                <h1>Why Choose <span>Raizo</span>?</h1>
            </div>
            <hr />
            <Cart />
        </div>
    );
}

export default Home;