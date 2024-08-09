import type { Expense, Loan } from '../types/ExpenseTrackerTypes'
import { addExpenses } from '../stores/expenseStore'
import { addLoan, addLoans } from '../stores/loanStore'
import { formatDate } from './Utilities'

export const apiUrl = () => {
	return import.meta.env.PUBLIC_API_URL != null
		? import.meta.env.PUBLIC_API_URL
		: 'https://expense-tracker-29rd.onrender.com/expense-tracker'
}

export const fetchExpenses = async () => {
	const response = await fetch(`${apiUrl()}/expenses`)
	const data: Expense[] = await response.json()
	data.map((expense) => {
		expense.date = formatDate(expense.date).toString()
	})
	console.log(data)
	addExpenses(data)
}

export const getLoans = async () => {
	const response = await fetch(`${apiUrl()}/loans`)
	const data: Loan[] = await response.json()
	data.map((loan) => {
		loan.startDate = formatDate(loan.startDate).toString()
		loan.finishDate = formatDate(loan.finishDate).toString()
	})
	addLoans(data)
}

export const removeExpense = (id: string) => {
	fetch(`${apiUrl()}/expenses/${id}`, {
		method: 'DELETE'
	}).catch((err) => console.log(err))
}

export const addExpense = (request: Expense) => {
	fetch(`${apiUrl()}/expenses`, {
		method: 'POST',
		body: JSON.stringify(request),
		headers: { 'Content-Type': 'application/json' }
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err))
}

export const removeLoan = (id: string) => {
	fetch(`${apiUrl()}/loans/${id}`, {
		method: 'DELETE'
	}).catch((err) => console.log(err))
}
