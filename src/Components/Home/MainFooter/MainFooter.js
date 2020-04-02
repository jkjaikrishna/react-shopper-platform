import React from 'react';

import './MainFooter.css';

const Footer = () => {
    return (
        <footer class="footer-area footer-white ml-70 mr-70">
            <div class="footer-top text-center bg-gray-2 pt-80  pb-60">
                <div class="container">
                    <div class="footer-logo">
                        <a href="/flone">
                            <img alt="" src="/flone/assets/img/logo/logo.png" />
                        </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <div class="footer-social">
                        <ul>
                            <li>
                                <a href="//www.facebook.com"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="//www.dribbble.com"><i class="fa fa-dribbble"></i></a>
                            </li>
                            <li>
                                <a href="//www.pinterest.com"><i class="fa fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href="//www.twitter.com"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="//www.linkedin.com"><i class="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <div class="container">
                    <div class="copyright-2 copyright-gray">
                        <p>© 2020 <a href="//www.hasthemes.com" rel="noopener noreferrer" target="_blank">Flone</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <button class="scroll-top show"><i class="fa fa-angle-double-up"></i></button>
        </footer>
    )
}

export default Footer;