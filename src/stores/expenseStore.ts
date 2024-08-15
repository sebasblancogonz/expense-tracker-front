import { persistentAtom } from '@nanostores/persistent'
import {
	fetchExpenses as getExpensesFromAPI,
	removeExpense as removeExpenseFromAPI,
	addExpense as addExpenseFromAPI
} from '../utils/ApiUtils'
import type { Expense } from '../types/ExpenseTrackerTypes'
import { formatDate } from '../utils/Utilities'

export const expenses = persistentAtom<Expense[]>('expenses', [], {
	encode: JSON.stringify,
	decode: JSON.parse
})

export function addExpenses(expenseList: Expense[]) {
	expenses.set(expenseList)
}

export function removeExpense(expenseId: string) {
	expenses.set(expenses.get().filter((expense) => expense.id !== expenseId))
	removeExpenseFromAPI(expenseId)
		.then((response) => {
			if (response.ok) {
				expenses.set(expenses.get().filter((expense) => expense.id !== expenseId))
			}
		})
		.catch((err) => console.log(err))
}

export function addExpense(expense: Expense) {
	addExpenseFromAPI(expense)
		.then((response) => {
			if (response.ok) {
				expenses.set([...expenses.get(), expense])
			}
		})
		.catch((err) => console.log(err))
}

export const loadExpensesFromApi = () => {
	getExpensesFromAPI().then((response) => {
		if (response.ok) {
			response.json().then((data: Expense[]) => {
				data.map((expense) => {
					expense.date = formatDate(expense.date)
				})
				addExpenses(data)
			})
		}
	})
}
