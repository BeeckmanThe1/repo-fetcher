import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({handleInput}) => {
    const processInput = e => {
        const value = e?.target?.value;
        handleInput(value);
    };
    return <div className={'rep-search-bar-partial'}>
        <div className="input-group">
            <div className="form-outline">
                <input onChange={processInput} placeholder={'Search for commits...'} type="search"
                    className="form-control"/>
            </div>
            <button type="button" className="btn btn-primary">
                <i aria-hidden className="fas fa-search"></i>
            </button>
        </div>
    </div>;
};

SearchBar.propTypes = {
    /** Callback handling input from user*/
    handleInput: PropTypes.func.isRequired,
};
export default SearchBar;
