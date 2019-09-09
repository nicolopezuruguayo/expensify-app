import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> &nbsp; 
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> &nbsp; 
            <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink> &nbsp; 
            <NavLink to="/help" activeClassName="is-active">Help</NavLink> &nbsp;
        </header>
        <p>&nbsp;</p>
    </div>
);

export default Header;