import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {

    const [displayForm, setDisplayForm] = useState(false);

    const changeDisplayForm = (displayForm) => {

        setDisplayForm((displayForm) => !displayForm);

    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }


    return (<div className="new-expense">
        {displayForm &&
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                onChangeDisplayForm={changeDisplayForm} />
        }
        {!displayForm && <button onClick={changeDisplayForm} >
            Add New Expense</button>}
    </div>)




}
export default NewExpense;