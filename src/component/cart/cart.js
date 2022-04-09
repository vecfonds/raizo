import React from "react";
import './cart.css';

function Cart() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
            <div class="col text-center">
                <div class="card h-100 ">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-singapore-quality.png" class="card-img-top" alt="Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Quality assured</h5>
                        <p class="card-text">
                            All of our products after production will be manual inspected and test the cycles, durability, finish, cylinders etc.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="card h-100">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-singapore-order.png" class="card-img-top" alt="Los Angeles Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Small order acceptable</h5>
                        <p class="card-text">Treat every customer who looking for us and even small quantity is acceptable.</p>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="card h-100">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-team-singapore.png" class="card-img-top" alt="Los Angeles Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Experienced team</h5>
                        <p class="card-text">
                            Proactive, quick response and well-trained smart lock consultant.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col text-center">
                <div class="card h-100">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-model-singapore.png" class="card-img-top" alt="Los Angeles Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Stylish design</h5>
                        <p class="card-text">
                            Unique design and finishing of lock to make your business outstanding.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="card h-100">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-marketing-singapore.png" class="card-img-top" alt="Los Angeles Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Understanding of market</h5>
                        <p class="card-text">Identify customers’ expectations and types to enhance the production of product line.</p>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="card h-100">
                    <div class="text-center">
                        <img src="/assets/images/raizo-smart-lock-time-singapore.png" class="card-img-top" alt="Los Angeles Skyscrapers" style={{ width: 150, height: 150 }} />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Fast delivery</h5>
                        <p class="card-text">
                            Fast arrangement and delivery after collect the advance payment in order to help you receive the items as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Cart;