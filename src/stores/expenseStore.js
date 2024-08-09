import { persistentMap } from '@nanostores/persistent'
import {
	fetchExpenses as getExpensesFromAPI,
	removeExpense as removeExpenseFromAPI,
	addExpense as addExpenseFromAPI
} from '../utils/ApiUtils'

export const expenses = persistentMap('expenses', [], {
	encode: JSON.stringify,
	decode: JSON.parse
})

export function addExpenses(expenseList) {
	expenses.set(expenseList)
	console.log('expenses from store', expenses.get())
}

export function removeExpense(expenseId) {
	expenses.set(expenses.get().filter((expense) => expense.id !== expenseId))
	removeExpenseFromAPI(expenseId)
}

export function addExpense(expense) {
	expenses.set([...expenses.get(), expense])
	addExpenseFromAPI(expense)
}

export const loadExpensesFromApi = () => {
	if (expenses.get().length === 0) {
		getExpensesFromAPI()
	} else {
		console.log('Expenses already loaded')
	}
}
