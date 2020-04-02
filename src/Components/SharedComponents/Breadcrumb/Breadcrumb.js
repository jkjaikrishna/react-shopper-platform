import React from 'react';

import './Breadcrumb.css';

const Breadcrumb = () => {
    return (
        <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <span>
                        <span>
                            <a aria-current="page" class="active" href="/flone/">Home</a>
                            <span>/</span>
                        </span>
                        <span to="/flone/flone/shop-grid-standard">Shop</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;