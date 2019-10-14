import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value', () => {

    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {

    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: moment(0).subtract(4, 'days'),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});

test('should filter by endDate', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should sort by date', () => {
    
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

