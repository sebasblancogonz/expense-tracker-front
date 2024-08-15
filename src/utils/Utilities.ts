import type { Expense, Data } from '../types/ExpenseTrackerTypes'
import { DateTime } from 'luxon'

export function getMonthName(date: string) {
	return new Date(date)
		.toLocaleDateString('default', { month: 'long' })
		.substring(0, 3)
		.toUpperCase()
}

export function getYear(date: string) {
	return new Date(date).getFullYear()
}

export function getMonthDay(date: string) {
	return new Date(date).getDate()
}

export function formatDateToAPI(date: string) {
	console.log(DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy').toString())
	return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy').toString()
}

export function categoryEmoji(category: string) {
	switch (category) {
		case 'ENTERTAINMENT':
			return '🍿'
		case 'TRANSPORTATION':
			return '🚊'
		case 'HEALTH':
			return '🏥'
		case 'FOOD':
			return '🥙'
		case 'EDUCATION':
			return '🎓'
		default:
			return '🤷‍♂️'
	}
}

export function buildExpensesPie(expenses: Expense[]): Data {
	var data: Map<string, number> = new Map()
	expenses.map((expense) => {
		let category = expense.category
		if (!data.has(category)) {
			data.set(expense.category, expense.amount)
		} else {
			let mapAmount = data.get(category)
			data.set(
				expense.category,
				mapAmount != undefined ? mapAmount + expense.amount : expense.amount
			)
		}
	})
	const config = {
		labels: [...data.keys()],
		datasets: [
			{
				label: 'Expenses chart',
				data: [...data.values()],
				hoverOfsset: 5,
				backgroundColor: [
					'rgb(239,183,178)',
					'rgb(146,202,206)',
					'rgb(110,231,183)',
					'rgb(216,180,254)',
					'rgb(190,242,100)',
					'rgb(216,180,254)',
					'rgb(253,186,116)'
				]
			}
		]
	}

	return config
}

export function formatDate(date: string) {
	console.log(date)
	return DateTime.fromFormat(date, 'dd/MM/yyyy').toString()
}
