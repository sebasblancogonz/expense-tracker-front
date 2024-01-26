import { atom } from "nanostores";

export const expenses = atom([])

export function addExpenses(expenseList) {
    expenses.set([...expenses.get(), expenseList])
}

export function removeExpense(expenseId) {
    expenses.set(expenses.get().splice(expenses.get().findIndex(expense => expense.id === expenseId), 1))
}

export function addExpense(expense) {
    expenses.get().push(expense)
}