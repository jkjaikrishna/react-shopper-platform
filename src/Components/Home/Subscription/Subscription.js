import React from 'react';

import './Subscription.css';

const Subscription = () => {
    return (
        <div class="subscribe-area-3  pb-100 ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
                        <div class="subscribe-style-3 text-center">
                            <h2>Subscribe </h2>
                            <p>Subscribe to our newsletter to receive news on update</p>
                            <div>
                                <div class="subscribe-form-3 mt-35">
                                    <div class="mc-form">
                                        <div>
                                            <input class="email" type="email" placeholder="Youe Email Addres" required="" />
                                        </div>
                                        <div class="clear-3 ">
                                            <button class="button">SUBSCRIBE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription;