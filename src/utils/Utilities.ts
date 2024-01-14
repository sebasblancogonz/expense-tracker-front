import type { Expense, ChartData } from '../types/ExpenseTrackerTypes'

export function getMonthName(date: Date) {
	return date.toLocaleDateString('default', { month: 'long' }).substring(0, 3).toUpperCase()
}

export function getYear(date: Date) {
	return date.getFullYear()
}

export function getMonthDay(date: Date) {
	return date.getDate()
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
		case 'OTHER':
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
