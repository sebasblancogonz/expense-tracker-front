import { map } from "nanostores";
import { fetchExpenses } from "../utils/ApiUtils";

export const expenses = map([])

export function addExpenses(expenseList) {
    expenses.set(expenseList)
}

export function removeExpense(expenseId) {
    expenses.set(expenses.get().splice(expenses.get().findIndex(expense => expense.id === expenseId), 1))
}

export function addExpense(expense) {
    expenses.get().push(expense)
}

export const loadExpensesFromApi = () => {
    fetchExpenses()
}