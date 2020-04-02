import React, { Fragment } from 'react';

import './ShoppingArea.css';
import './SideBar.css';
import './Product.css';

const ShoppingArea = () => {
    return (
        <div class="shop-area pt-95 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 order-2 order-lg-1">
                        <div class="sidebar-style mr-30">
                            <div class="sidebar-widget">
                                <h4 class="pro-sidebar-title">Search </h4>
                                <div class="pro-sidebar-search mb-50 mt-25">
                                    <form class="pro-sidebar-search-form" action="#">
                                        <input type="text" placeholder="Search here..." />
                                        <button><i class="pe-7s-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar-widget">
                                <h4 class="pro-sidebar-title">Categories </h4>
                                <div class="sidebar-widget-list mt-30">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span>
                                                     All Categories
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span>
                                                    fashion 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span>
                                                    men 
                                                </button>
                                            </div>
                                    </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    women 
                                                </button>
                                            </div>
                                    </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    electronics 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    furniture 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    plant 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    organic food 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    flower 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    book 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    cosmetics 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    accessories 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    handmade 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    kids 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    auto parts 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    cakes 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button> 
                                                    <span class="checkmark"></span> 
                                                    pet food 
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-50">
                                <h4 class="pro-sidebar-title">Color </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    All Colors 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    white 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    black 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    brown 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    blue 
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-40">
                                <h4 class="pro-sidebar-title">Size </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button>
                                                    <span class="checkmark"></span> 
                                                    All Sizes 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button class="text-uppercase"> 
                                                    <span class="checkmark"></span>
                                                    x 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button class="text-uppercase"> 
                                                    <span class="checkmark"></span>
                                                    m 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button class="text-uppercase"> 
                                                    <span class="checkmark"></span>
                                                    xl 
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <button class="text-uppercase"> 
                                                    <span class="checkmark"></span>
                                                    xxl 
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-50">
                                <h4 class="pro-sidebar-title">Tag </h4>
                                <div class="sidebar-widget-tag mt-25">
                                    <ul>
                                        <li>
                                            <button>fashion</button>
                                        </li>
                                        <li>
                                            <button>men</button>
                                        </li>
                                        <li>
                                            <button>jacket</button>
                                        </li>
                                        <li>
                                            <button>full sleeve</button>
                                        </li>
                                        <li>
                                            <button>women</button>
                                        </li>
                                        <li>
                                            <button>coat</button>
                                        </li>
                                        <li>
                                            <button>top</button>
                                        </li>
                                        <li>
                                            <button>sleeveless</button>
                                        </li>
                                        <li>
                                            <button>electronics</button>
                                        </li>
                                        <li>
                                            <button>furniture</button>
                                        </li>
                                        <li>
                                            <button>plant</button>
                                        </li>
                                        <li>
                                            <button>organic food</button>
                                        </li>
                                        <li>
                                            <button>flower</button>
                                        </li>
                                        <li>
                                            <button>book</button>
                                        </li>
                                        <li>
                                            <button>cosmetics</button>
                                        </li>
                                        <li>
                                            <button>accessories</button>
                                        </li>
                                        <li>
                                            <button>handmade</button>
                                        </li>
                                        <li>
                                            <button>kids</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 order-1 order-lg-2">
                        <div class="shop-top-bar mb-35">
                            <div class="select-shoing-wrap">
                                <div class="shop-select">
                                    <select>
                                        <option value="default">Default</option>
                                        <option value="priceHighToLow">Price - High to Low</option>
                                        <option value="priceLowToHigh">Price - Low to High</option>
                                    </select>
                                </div>
                                <p>Showing 15 of 123 result</p>
                            </div>
                            <div class="shop-tab">
                                <button>
                                    <i class="fa fa-th-large"></i>
                                </button>
                                <button>
                                    <i class="fa fa-th"></i>
                                </button>
                                <button>
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                        </div>
                        <div class="shop-bottom-area mt-35">
                            <div class="row grid three-column">
                                <div class="col-xl-4 col-sm-6 ">
                                    <div class="product-wrap mb-25">
                                        <div class="product-img">
                                            <a href="/flone/product/1">
                                                <img class="default-img" src="/assets/images/products/pro-1.jpg" alt="" />
                                                <img class="hover-img" src="/assets/images/products/pro-1-shadow.jpg" alt="" />
                                            </a>
                                            <div class="product-img-badges">
                                                <span class="pink">-10%</span>
                                            </div>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button title="Quick View">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3>
                                                <a href="/flone/product/1">Lorem ipsum jacket</a>
                                            </h3>
                                            <div class="product-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <div class="product-price">
                                                <span>$11.2</span>
                                                <span class="old">$12.45</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-5 col-sm-6">
                                                <div class="product-list-image-wrap">
                                                    <div class="product-img">
                                                        <a href="/flone/product/1">
                                                            <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                            <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        </a>
                                                        <div class="product-img-badges">
                                                            <span class="pink">-10%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-7 col-sm-6">
                                                <div class="shop-list-content">
                                                    <h3>
                                                        <a href="/flone/product/1">Lorem ipsum jacket</a>
                                                    </h3>
                                                    <div class="product-list-price">
                                                        <span>$11.2</span> 
                                                        <span class="old">$12.45</span>
                                                    </div>
                                                    <div class="rating-review">
                                                        <div class="product-list-rating">
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                    <div class="shop-list-actions d-flex align-items-center">
                                                        <div class="shop-list-btn btn-hover">
                                                            <a href="/flone/product/1">Select Option</a>
                                                        </div>
                                                        <div class="shop-list-wishlist ml-10">
                                                            <button class="" title="Add to wishlist">
                                                                <i class="pe-7s-like"></i>
                                                            </button>
                                                        </div>
                                                        <div class="shop-list-compare ml-10">
                                                            <button class="" title="Add to compare">
                                                                <i class="pe-7s-shuffle"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6 ">
                                    <div class="product-wrap mb-25">
                                        <div class="product-img">
                                            <a href="/flone/product/2">
                                                <img class="default-img" src="/assets/images/products/pro-2.jpg" alt="" />
                                                <img class="hover-img" src="/assets/images/products/pro-2-shadow.jpg" alt="" />
                                            </a>
                                            <div class="product-img-badges">
                                                <span class="pink">-15%</span>
                                            </div>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                    <button class="" title="Add to cart"> 
                                                        <i class="pe-7s-cart"></i> 
                                                        Add to cart
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button title="Quick View">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3>
                                                <a href="/flone/product/2">Lorem ipsum coat</a>
                                            </h3>
                                            <div class="product-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <div class="product-price">
                                                <span>$15.72</span> 
                                                <span class="old">$18.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-5 col-sm-6">
                                                <div class="product-list-image-wrap">
                                                    <div class="product-img">
                                                        <a href="/flone/product/2">
                                                            <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                            <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        </a>
                                                        <div class="product-img-badges">
                                                            <span class="pink">-15%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-7 col-sm-6">
                                                <div class="shop-list-content">
                                                    <h3>
                                                        <a href="/flone/product/2">Lorem ipsum coat</a>
                                                    </h3>
                                                    <div class="product-list-price">
                                                        <span>$15.72</span> 
                                                        <span class="old">$18.5</span>
                                                    </div>
                                                    <div class="rating-review">
                                                        <div class="product-list-rating">
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o"></i>
                                                            <i class="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                    <div class="shop-list-actions d-flex align-items-center">
                                                        <div class="shop-list-btn btn-hover">
                                                            <a href="/flone/product/2">Select Option</a>
                                                        </div>
                                                        <div class="shop-list-wishlist ml-10">
                                                            <button class="" title="Add to wishlist">
                                                                <i class="pe-7s-like"></i>
                                                            </button>
                                                        </div>
                                                        <div class="shop-list-compare ml-10">
                                                            <button class="" title="Add to compare">
                                                                <i class="pe-7s-shuffle"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6 ">
                                    <div class="product-wrap mb-25">
                                        <div class="product-img">
                                            <a href="/flone/product/3">
                                                <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                                <img class="hover-img" src="/assets/images/products/pro-3-shadow.jpg" alt="" />
                                            </a>
                                            <div class="product-img-badges">
                                                <span class="pink">-40%</span>
                                                <span class="purple">New</span>
                                            </div>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button title="Quick View">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3>
                                                <a href="/flone/product/3">Lorem ipsum jacket</a>
                                            </h3>
                                            <div class="product-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                            </div>
                                            <div class="product-price">
                                                <span>$10.47</span> 
                                                <span class="old">$17.45</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-5 col-sm-6">
                                                <div class="product-list-image-wrap">
                                                    <div class="product-img">
                                                        <a href="/flone/product/3">
                                                            <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                            <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        </a>
                                                        <div class="product-img-badges">
                                                            <span class="pink">-40%</span>
                                                            <span class="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-7 col-sm-6">
                                                <div class="shop-list-content">
                                                    <h3>
                                                        <a href="/flone/product/3">Lorem ipsum jacket</a>
                                                    </h3>
                                                    <div class="product-list-price">
                                                        <span>$10.47</span> 
                                                        <span class="old">$17.45</span>
                                                    </div>
                                                    <div class="rating-review">
                                                        <div class="product-list-rating">
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                        </div>
                                                    </div>
                                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                    <div class="shop-list-actions d-flex align-items-center">
                                                        <div class="shop-list-btn btn-hover">
                                                            <a href="/flone/product/3">Select Option</a>
                                                        </div>
                                                        <div class="shop-list-wishlist ml-10">
                                                            <button class="" title="Add to wishlist">
                                                                <i class="pe-7s-like"></i>
                                                            </button>
                                                        </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="col-xl-4 col-sm-6 ">
                                    <div class="product-wrap mb-25">
                                        <div class="product-img">
                                            <a href="/flone/product/4">
                                                <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                                <img class="hover-img" src="/assets/images/products/pro-3-shadow.jpg" alt="" />
                                            </a>
                                            <div class="product-img-badges">
                                                <span class="purple">New</span>
                                            </div>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                    <button class="" title="Add to cart"> 
                                                        <i class="pe-7s-cart"></i> 
                                                        Add to cart
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button title="Quick View">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/4">Lorem ipsum fashion coat</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                            <div class="product-price">
                                                <span>$15.5 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-5 col-sm-6">
                                                <div class="product-list-image-wrap">
                                                    <div class="product-img">
                                                        <a href="/flone/product/4">
                                                            <img class="default-img img-fluid" src="/assets/images/products/pro-2.jpg" alt="" />
                                                            <img class="hover-img img-fluid" src="/assets/images/products/pro-2-shadow.jpg" alt="" />
                                                        </a>
                                                        <div class="product-img-badges">
                                                            <span class="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-7 col-sm-6">
                                                <div class="shop-list-content">
                                                    <h3>
                                                        <a href="/flone/product/4">Lorem ipsum fashion coat</a>
                                                    </h3>
                                                    <div class="product-list-price">
                                                        <span>$15.5 </span>
                                                    </div>
                                                    <div class="rating-review">
                                                        <div class="product-list-rating">
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o yellow"></i>
                                                            <i class="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                    <div class="shop-list-actions d-flex align-items-center">
                                                        <div class="shop-list-btn btn-hover">
                                                            <a href="/flone/product/4">Select Option</a>
                                                        </div>
                                                        <div class="shop-list-wishlist ml-10">
                                                            <button class="" title="Add to wishlist">
                                                                <i class="pe-7s-like"></i>
                                                            </button>
                                                        </div>
                                                        <div class="shop-list-compare ml-10">
                                                            <button class="" title="Add to compare">
                                                                <i class="pe-7s-shuffle"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6 ">
                                    <div class="product-wrap mb-25">
                                        <div class="product-img">
                                            <a href="/flone/product/5">
                                                <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                                <img class="hover-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                            </a>
                                            <div class="product-img-badges">
                                                <span class="pink">-10%</span>
                                                <span class="purple">New</span>
                                            </div>
                                            <div class="product-action">
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                    <button class="" title="Add to cart"> 
                                                        <i class="pe-7s-cart"></i> 
                                                        Add to cart
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button title="Quick View">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3>
                                                <a href="/flone/product/5">Lorem ipsum female coat</a>
                                            </h3>
                                            <div class="product-rating">
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                            </div>
                                            <div class="product-price">
                                                <span>$22.95</span> 
                                                <span class="old">$25.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop-list-wrap mb-30">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-5 col-sm-6">
                                                <div class="product-list-image-wrap">
                                                    <div class="product-img">
                                                        <a href="/flone/product/5">
                                                            <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                            <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        </a>
                                                        <div class="product-img-badges">
                                                            <span class="pink">-10%</span>
                                                            <span class="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-7 col-sm-6">
                                                <div class="shop-list-content">
                                                    <h3>
                                                        <a href="/flone/product/5">Lorem ipsum female coat</a>
                                                    </h3>
                                                    <div class="product-list-price">
                                                        <span>$22.95</span> 
                                                        <span class="old">$25.5</span>
                                                    </div>
                                                    <div class="rating-review">
                                                        <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <a href="/flone/product/5">Select Option</a>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/6">
                                            <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="purple">New</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/6">Lorem ipsum jacket</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$19.85 </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/6">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="purple">New</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/6">Lorem ipsum jacket</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$19.85 </span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <a href="/flone/product/6">Select Option</a>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/7">
                                            <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="pink">-40%</span>
                                            <span class="purple">New</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/7">Lorem ipsum fashion female coat</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$33.3</span> 
                                            <span class="old">$55.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/7">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-40%</span>
                                                        <span class="purple">New</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/7">Lorem ipsum fashion female coat</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$33.3</span>
                                                    <span class="old">$55.5</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <a href="/flone/product/7">Select Option</a>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/8">
                                            <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="pink">-10%</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button disabled="" class="active">Out of Stock</button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/8">Lorem ipsum fashion jacket</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$26.87</span> 
                                            <span class="old">$29.85</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/8">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-10%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/8">Lorem ipsum fashion jacket</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$26.87</span> 
                                                    <span class="old">$29.85</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                </div>
                                            </div>
                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                            <div class="shop-list-actions d-flex align-items-center">
                                                <div class="shop-list-btn btn-hover">
                                                    <button disabled="" class="active">Out of Stock</button>
                                                </div>
                                                <div class="shop-list-wishlist ml-10">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="shop-list-compare ml-10">
                                                    <button class="" title="Add to compare">
                                                        <i class="pe-7s-shuffle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 ">
                            <div class="product-wrap mb-25">
                                <div class="product-img">
                                    <a href="/flone/product/9">
                                        <img class="default-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                        <img class="hover-img" src="/assets/images/products/pro-3.jpg" alt="" />
                                    </a>
                                    <div class="product-action">
                                        <div class="pro-same-action pro-wishlist">
                                            <button class="" title="Add to wishlist">
                                                <i class="pe-7s-like"></i>
                                            </button>
                                        </div>
                                        <div class="pro-same-action pro-cart">
                                            <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank"> Buy now </a>
                                        </div>
                                        <div class="pro-same-action pro-quickview">
                                            <button title="Quick View">
                                                <i class="pe-7s-look"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content text-center">
                                    <h3>
                                        <a href="/flone/product/9">Lorem ipsum fashion female top</a>
                                    </h3>
                                    <div class="product-rating">
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <div class="product-price">
                                        <span>$35.6 </span>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-list-wrap mb-30">
                                <div class="row">
                                    <div class="col-xl-4 col-md-5 col-sm-6">
                                        <div class="product-list-image-wrap">
                                            <div class="product-img">
                                                <a href="/flone/product/9">
                                                    <img class="default-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                    <img class="hover-img img-fluid" src="/assets/images/products/pro-3.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-md-7 col-sm-6">
                                        <div class="shop-list-content">
                                            <h3>
                                                <a href="/flone/product/9">Lorem ipsum fashion female top</a>
                                            </h3>
                                            <div class="product-list-price">
                                                <span>$35.6 </span>
                                            </div>
                                            <div class="rating-review">
                                                <div class="product-list-rating">
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                            <div class="shop-list-actions d-flex align-items-center">
                                                <div class="shop-list-btn btn-hover">
                                                    <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank"> Buy now </a>
                                                </div>
                                                <div class="shop-list-wishlist ml-10">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="shop-list-compare ml-10">
                                                    <button class="" title="Add to compare">
                                                        <i class="pe-7s-shuffle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 ">
                            <div class="product-wrap mb-25">
                                <div class="product-img">
                                    <a href="/flone/product/10">
                                        <img class="default-img" src="/assets/images/products/pro-4.jpg" alt="" />
                                        <img class="hover-img" src="/assets/images/products/pro-5.jpg" alt="" />
                                    </a>
                                    <div class="product-action">
                                        <div class="pro-same-action pro-wishlist">
                                            <button class="" title="Add to wishlist">
                                                <i class="pe-7s-like"></i>
                                            </button>
                                        </div>
                                        <div class="pro-same-action pro-cart">
                                            <button class="" title="Add to cart"> 
                                                <i class="pe-7s-cart"></i> 
                                                Add to cart
                                            </button>
                                        </div>
                                        <div class="pro-same-action pro-quickview">
                                            <button title="Quick View">
                                                <i class="pe-7s-look"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-content text-center">
                                    <h3>
                                        <a href="/flone/product/10">Lorem ipsum blender</a>
                                    </h3>
                                    <div class="product-rating">
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o yellow"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <div class="product-price">
                                        <span>$15.6 </span>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-list-wrap mb-30">
                                <div class="row">
                                    <div class="col-xl-4 col-md-5 col-sm-6">
                                        <div class="product-list-image-wrap">
                                            <div class="product-img">
                                                <a href="/flone/product/10">
                                                    <img class="default-img" src="/assets/images/products/pro-6.jpg" alt="" />
                                                    <img class="hover-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-md-7 col-sm-6">
                                        <div class="shop-list-content">
                                            <h3>
                                                <a href="/flone/product/10">Lorem ipsum blender</a>
                                            </h3>
                                            <div class="product-list-price">
                                                <span>$15.6 </span>
                                            </div>
                                            <div class="rating-review">
                                                <div class="product-list-rating">
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o yellow"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                            <div class="shop-list-actions d-flex align-items-center">
                                                <div class="shop-list-btn btn-hover">
                                                    <button class="" title="Add to cart"> 
                                                        <i class="pe-7s-cart"></i> 
                                                        Add to cart
                                                    </button>
                                                </div>
                                                <div class="shop-list-wishlist ml-10">
                                                    <button class="" title="Add to wishlist">
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="shop-list-compare ml-10">
                                                    <button class="" title="Add to compare">
                                                        <i class="pe-7s-shuffle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 ">
                            <div class="product-wrap mb-25">
                                <div class="product-img">
                                    <a href="/flone/product/11">
                                        <img class="default-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                        <img class="hover-img" src="/assets/images/products/pro-6.jpg" alt="" />
                                    </a>
                                    <div class="product-img-badges">
                                        <span class="pink">-10%</span>
                                        <span class="purple">New</span>
                                    </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/11">Lorem ipsum speaker</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$9.54</span>
                                            <span class="old">$10.6</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/11">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-1.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-2.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-10%</span>
                                                        <span class="purple">New</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/11">Lorem ipsum speaker</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$9.54</span>
                                                    <span class="old">$10.6</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/12">
                                            <img class="default-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="pink">-20%</span>
                                            <span class="purple">New</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/12">Lorem ipsum camera</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$10</span> 
                                            <span class="old">$12.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/12">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-20%</span>
                                                        <span class="purple">New</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/12">Lorem ipsum camera</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$10</span> 
                                                    <span class="old">$12.5</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/13">
                                            <img class="default-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="pink">-30%</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i>
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/13">Lorem ipsum monitor</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i
                                            ><i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$10.15</span>
                                            <span class="old">$14.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/13">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-30%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/13">Lorem ipsum monitor</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$10.15</span> 
                                                    <span class="old">$14.5</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/14">
                                            <img class="default-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                        </a>
                                        <div class="product-img-badges">
                                            <span class="pink">-10%</span>
                                            <span class="purple">New</span>
                                        </div>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/14">Lorem ipsum small speaker</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$2.25</span> 
                                            <span class="old">$2.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/14">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                    </a>
                                                    <div class="product-img-badges">
                                                        <span class="pink">-10%</span>
                                                        <span class="purple">New</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/14">Lorem ipsum small speaker</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$2.25</span> 
                                                    <span class="old">$2.5</span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 ">
                                <div class="product-wrap mb-25">
                                    <div class="product-img">
                                        <a href="/flone/product/15">
                                            <img class="default-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                            <img class="hover-img" src="/assets/images/products/pro-7.jpg" alt="" />
                                        </a>
                                        <div class="product-action">
                                            <div class="pro-same-action pro-wishlist">
                                                <button class="" title="Add to wishlist">
                                                    <i class="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-cart">
                                                <button class="" title="Add to cart"> 
                                                    <i class="pe-7s-cart"></i> 
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div class="pro-same-action pro-quickview">
                                                <button title="Quick View">
                                                    <i class="pe-7s-look"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content text-center">
                                        <h3>
                                            <a href="/flone/product/15">Lorem ipsum microphone</a>
                                        </h3>
                                        <div class="product-rating">
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o yellow"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <div class="product-price">
                                            <span>$12.5 </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-list-wrap mb-30">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-5 col-sm-6">
                                            <div class="product-list-image-wrap">
                                                <div class="product-img">
                                                    <a href="/flone/product/15">
                                                        <img class="default-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                        <img class="hover-img img-fluid" src="/assets/images/products/pro-7.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-8 col-md-7 col-sm-6">
                                            <div class="shop-list-content">
                                                <h3>
                                                    <a href="/flone/product/15">Lorem ipsum microphone</a>
                                                </h3>
                                                <div class="product-list-price">
                                                    <span>$12.5 </span>
                                                </div>
                                                <div class="rating-review">
                                                    <div class="product-list-rating">
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o yellow"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                <div class="shop-list-actions d-flex align-items-center">
                                                    <div class="shop-list-btn btn-hover">
                                                        <button class="" title="Add to cart"> 
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-wishlist ml-10">
                                                        <button class="" title="Add to wishlist">
                                                            <i class="pe-7s-like"></i>
                                                        </button>
                                                    </div>
                                                    <div class="shop-list-compare ml-10">
                                                        <button class="" title="Add to compare">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pro-pagination-style text-center mt-30">
                        <ul class="mb-0 mt-0">
                            <li class="page-item active">
                                <button class="page-link">1</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">2</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">3</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">4</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">5</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">6</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">7</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">8</button>
                            </li>
                            <li class="page-item null">
                                <button class="page-link">9</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShoppingArea;