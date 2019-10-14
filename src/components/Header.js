import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    // FIXME if the code breaks look here for fix
    // <div>
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> &nbsp; 
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> &nbsp; 
            {/* <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink> &nbsp;  */}
        </header>
        // <p>&nbsp;</p>
    // </div>
);

export default Header;