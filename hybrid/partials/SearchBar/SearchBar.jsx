import React from 'react';

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
                <i className="fas fa-search"></i>
            </button>
        </div>
    </div>;
};

export default SearchBar;
