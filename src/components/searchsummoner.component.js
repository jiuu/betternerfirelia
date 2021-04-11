import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/searchsummonerstyles.css';

const SearchSummoner = () => {
    return (
        <div className = "Search">
        <form>
            <label>
                <input type="text" name="getSummonerName" placeholder="Ex: From Iron"/>
            </label>
            <input type="submit" value="Search" />
        </form>
        </div>
    )
}
export default SearchSummoner;