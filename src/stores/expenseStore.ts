import { persistentAtom } from '@nanostores/persistent'
import {
	fetchExpenses as getExpensesFromAPI,
	removeExpense as removeExpenseFromAPI,
	addExpense as addExpenseFromAPI
} from '../utils/ApiUtils'
import type { Expense } from '../types/ExpenseTrackerTypes'

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
}

export function addExpense(expense: Expense) {
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
