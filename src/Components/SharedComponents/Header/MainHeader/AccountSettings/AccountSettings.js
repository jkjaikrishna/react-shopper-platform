import React from 'react';


const AccountSettings = () => {
    return (
        <div className="same-style account-setting d-none d-lg-block">
            <button className="account-setting-active"><i className="pe-7s-user-female"></i></button>
            <div className="account-dropdown">
                <ul>
                    <li><a href="/flone/login-register">Login</a></li>
                    <li><a href="/flone/login-register">Register</a></li>
                    <li><a href="/flone/my-account">my account</a></li>
                </ul>
            </div>
        </div>
    );
}

export default AccountSettings;