import { useStore } from '@nanostores/react'
import { expenses } from '../stores/expenseStore'
import type { Expense } from '../types/ExpenseTrackerTypes'

const Home = () => {
	const expenseList = useStore(expenses)

	//create a map with the category as the key and the total as the value
	const categoryMap = new Map<string, number>()

	console.log('hello')
	expenseList.forEach((expense: Expense) => {
		if (categoryMap.has(expense.category)) {
			categoryMap.set(expense.category, categoryMap.get(expense.category)! + expense.amount)
		} else {
			categoryMap.set(expense.category, expense.amount)
		}
	})

	return (
		// display the category and total in a table
		<table className="w-full table-auto">
			<tbody>
				{Array.from(categoryMap).map(([category, total]) => (
					<tr key={category}>
						<td className="text-left">{category}</td>
						<td className="text-right">{total}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Home
