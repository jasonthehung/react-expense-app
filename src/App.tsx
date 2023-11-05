import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Buy a car", amount: 10, category: "Car" },
        {
            id: 2,
            description: "Buy a house",
            amount: 100,
            category: "A",
        },
        {
            id: 3,
            description: "Buy a boat",
            amount: 1000,
            category: "B",
        },
        {
            id: 4,
            description: "Buy a plane",
            amount: 10000,
            category: "C",
        },
    ])

    const visibleExpenses = selectedCategory
        ? expenses.filter((expense) => expense.category === selectedCategory)
        : expenses

    return (
        <>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(newExpense) =>
                        setExpenses([
                            ...expenses,
                            {
                                ...newExpense,
                                id: expenses.length + 1,
                                description: newExpense.description,
                                amount: newExpense.amount,
                                category: newExpense.category,
                            },
                        ])
                    }
                />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) => {
                        setSelectedCategory(category)
                    }}
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => {
                    setExpenses(
                        expenses.filter((expense) => expense.id !== +id)
                    )
                }}
            />
        </>
    )
}

export default App
