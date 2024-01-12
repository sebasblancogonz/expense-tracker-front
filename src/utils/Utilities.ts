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