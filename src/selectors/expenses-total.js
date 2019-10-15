export default (expenses) => {

        // The ways below works as well

        // my way 1
        // let amountArray = [];
        // expenses.map((expense) => amountArray.push(expense.amount));
        // return amountArray.reduce((acc,cur) => acc + cur);

        // my way 2
        // let amountArray = [];
        // return amountArray = expenses.reduce((acc,cur) => acc + cur.amount,0);

        // Andrew way
        return expenses
            .map(expense => expense.amount)
            .reduce((sum,value) => sum + value, 0)
}