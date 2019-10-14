import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt:500}));
store.dispatch(addExpense({description: 'Gas bill', amount: 3000, createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt:2000}));
// store.dispatch(setTextFilter('Water'));

// setTimeout(() =>{
//     store.dispatch(setTextFilter('Gas'));
// }, 2000);

// setTimeout(() =>{
//     store.dispatch(setTextFilter('Cable TV'));
// }, 4000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));