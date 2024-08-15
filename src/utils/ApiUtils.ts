import type { Expense, Loan } from '../types/ExpenseTrackerTypes'

export const apiUrl = () => {
	return import.meta.env.PUBLIC_API_URL != null
		? import.meta.env.PUBLIC_API_URL
		: 'https://expense-tracker-29rd.onrender.com/expense-tracker'
}

export const fetchExpenses = async () => {
	return fetch(`${apiUrl()}/expenses`)
}

export const fetchLoans = () => {
	return fetch(`${apiUrl()}/loans`)
}

export const removeExpense = (id: string) => {
	return fetch(`${apiUrl()}/expenses/${id}`, {
		method: 'DELETE'
	})
}

export const addExpense = (request: Expense) => {
	return fetch(`${apiUrl()}/expenses`, {
		method: 'POST',
		body: JSON.stringify(request),
		headers: { 'Content-Type': 'application/json' }
	})
}

export const removeLoan = (id: string) => {
	return fetch(`${apiUrl()}/loans/${id}`, {
		method: 'DELETE'
	})
}

export const addLoan = (request: Loan) => {
	return fetch(`${apiUrl()}/loans`, {
		method: 'POST',
		body: JSON.stringify(request),
		headers: { 'Content-Type': 'application/json' }
	})
}
