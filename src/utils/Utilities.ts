import type { Expense, ChartData } from '../types/ExpenseTrackerTypes'

export const apiUrl = () => {
	return import.meta.env.API_URL != null
		? import.meta.env.API_URL
		: 'https://expense-tracker-29rd.onrender.com/expense-tracker'
}

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
	let dateType: Date = new Date(date)
	let month: number = dateType.getMonth() + 1
	let day: number = dateType.getDate()
	let year: number = dateType.getFullYear()
	return (month < 10 ? '0' + month : month) + '/' + day + '/' + year
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

export function buildExpensesChartData(expenses: Expense[]): ChartData {
	var data: Map<string, number> = new Map()
	expenses.map((expense) => {
		let category = expense.category
		if (!data.has(category)) {
			data.set(expense.category, expense.amount)
		} else {
			let mapAmount = data.get(category)
			data.set(expense.category, mapAmount != undefined ? +expense.amount : expense.amount)
		}
	})

	return {
		type: 'pie',
		data: {
			labels: [...data.keys()],
			datasets: [
				{
					label: 'Expenses chart',
					data: [...data.values()],
					hoverOfsset: 5,
					backgroundColor: ['rgb(239,183,178)']
				}
			]
		},
		options: {
			responsive: false
		}
	}
}
