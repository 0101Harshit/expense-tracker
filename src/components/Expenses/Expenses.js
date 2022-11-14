import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import './Expenses.css'
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpenseChart from "./ExpenseChart"

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2020");

    const changeFilterYearHandler = (selectedFilterYear) => {
        setFilterYear(selectedFilterYear);
    }

    const filteredExpenses = props.items.filter(expense => ((expense.date.getFullYear().toString()) === filterYear))



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilterYear={changeFilterYearHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                {/* {expensesContent} */}
                {/* {
                    filteredExpenses.length === 0
                        ? <p>No Expenses Found</p>
                        : (filteredExpenses.map(
                            expense => <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date} />))
                }
                 */}
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>
                }
                {
                    filteredExpenses.length > 0 && (filteredExpenses.map(
                        expense => <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />))
                } */}




            </Card>
        </div>
    )
}
