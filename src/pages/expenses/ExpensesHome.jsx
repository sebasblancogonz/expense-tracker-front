import { useEffect } from 'react'
import Table from '../../components/table/Table'
import ExpenseRow from '../../components/table/Expense'
import PieChart from '../../components/PieChart'
import { expenses as expenseStore, loadExpensesFromApi } from '../../stores/expenseStore'
import { useStore } from '@nanostores/react'

function ExpensesHome() {
	const expenses = useStore(expenseStore)

	useEffect(() => {
		if (expenses.length === 0) loadExpensesFromApi()
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			{expenses.length === 0 ? (
				<h1 className="mb-5 mt-5 text-center text-2xl text-chestnut-700">
					You don't have any expense!
				</h1>
			) : (
				<>
					<h1 className="mb-5 mt-5 text-center text-2xl text-chestnut-700">Your expenses 💸</h1>
					<PieChart />
					<Table isLoan={false}>
						{expenses &&
							expenses.map((expense, index) => <ExpenseRow key={index} expense={expense} />)}
					</Table>
				</>
			)}
		</main>
	)
}

export default ExpensesHome
