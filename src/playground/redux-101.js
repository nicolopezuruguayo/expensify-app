import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({setValue = 101}={}) => ({
    type: 'SET',
    setValue
});

const store = createStore((state = { count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return{
                count: action.setValue
            }
        default:
            return state;
    }
});


const unsubscribe = store.subscribe(() => {
    console.log('store ',store.getState());
});

store.dispatch(incrementCount({incrementBy: 10}));
store.dispatch(incrementCount({}));

store.dispatch(resetCount());

store.dispatch(incrementCount({incrementBy: 15}));

// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(setCount());