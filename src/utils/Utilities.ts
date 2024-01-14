import type { Expense } from '../types/ExpenseTrackerTypes'

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

export function buildExpensesChartData(expenses: Expense[]) {
	var data: Map<string, number>;
	expenses.map((expense) => {
		if (!data.has(expense.category)) {
			data.set(expense.category, expense.amount)
		} else {
			data.set(expense.category, data.get(expense.category) + expense.amount)
		}
	})
}
