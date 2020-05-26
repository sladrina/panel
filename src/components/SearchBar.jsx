import React from 'react';
import {ReactComponent as IconSearch} from "../images/svg/search.svg";

const SearchBar = ({ placeholder = '' }) => (
    <div className="search">
        <input className="search-input" type="text" placeholder={placeholder} />
            <button className="button search" type="submit">
                <IconSearch />
            </button>
    </div>
);

export default SearchBar;