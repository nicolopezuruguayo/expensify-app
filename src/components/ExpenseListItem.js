import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        {/*//FIXME The line below was working till class 120, I changed it to remove my experience */}
        {/* <Link to={`/edit/${id}`} params={{id:1234}}><button>EDIT</button></Link> */}
        <Link to={`/edit/${id}`}><button>EDIT</button></Link>
    </div>
);

export default ExpenseListItem;