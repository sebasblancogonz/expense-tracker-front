import type { Expense } from '../types/ExpenseTrackerTypes'

export const apiUrl = () => {
	return import.meta.env.PUBLIC_API_URL != null
		? import.meta.env.PUBLIC_API_URL
		: 'https://expense-tracker-29rd.onrender.com/expense-tracker'
}

export const getExpenses = async () => {
	const response = await fetch(`${apiUrl()}/expenses`)
	const data = await response.json()
	return data
}

export const removeExpense = (id: string) => {
	fetch(`${apiUrl()}/expenses/${id}`, {
		method: 'DELETE'
	})
	.catch((err) => console.log(err))
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

export const getLoans = async () => {
	const response = await fetch(`${apiUrl()}/loans`)
	const data = await response.json()
	return data
}
