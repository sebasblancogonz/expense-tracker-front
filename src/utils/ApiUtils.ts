import type { Expense } from '../types/ExpenseTrackerTypes'

export const apiUrl = () => {
	return import.meta.env.API_URL != null
		? import.meta.env.API_URL
		: 'https://expense-tracker-29rd.onrender.com/expense-tracker'
}

export const getExpenses = async () => {
	const response = await fetch(`${apiUrl()}/expenses`)
	const data = await response.json()
	return data
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

export const removeExpense = (rowData: string | null | undefined) => {
	fetch(`${apiUrl()}/expenses/${rowData}`, {
		method: 'DELETE'
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err))
}


export const getLoans = async () => {
	const response = await fetch(`${apiUrl()}/loans`)
	const data = await response.json()
    console.log(data)
    return data
}
