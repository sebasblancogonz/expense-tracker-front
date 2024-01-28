import { map } from 'nanostores'
import {
	fetchExpenses as getExpensesFromAPI,
	removeExpense as removeExpenseFromAPI,
	addExpense as addExpenseFromAPI
} from '../utils/ApiUtils'

export const expenses = map([])

export function addExpenses(expenseList) {
	expenses.set(expenseList)
}

export function removeExpense(expenseId) {
	expenses.set(expenses.get().filter((expense) => expense.id !== expenseId))
	removeExpenseFromAPI(expenseId)
}

export function addExpense(expense) {
	expenses.get().push(expense)
	addExpenseFromAPI(expense)
}

export const loadExpensesFromApi = () => {
	getExpensesFromAPI()
}
