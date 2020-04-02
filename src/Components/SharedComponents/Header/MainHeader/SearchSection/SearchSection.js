import React from 'react';

const SearchSection = () => {
    return (
        <div className="same-style header-search d-none d-lg-block">
            <button className="search-active"><i className="pe-7s-search"></i></button>
            <div className="search-content">
                <form action="#">
                    <input type="text" placeholder="Search" />
                    <button className="button-search"><i className="pe-7s-search"></i></button>
                </form>
            </div>
        </div>
    );
}

export default SearchSection;