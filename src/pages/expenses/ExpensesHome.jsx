import { useEffect } from 'react'
import Table from '../../components/table/Table'
import ExpenseRow from '../../components/table/Expense'
import PieChart from '../../components/PieChart'
import { expenses as expenseStore, loadExpensesFromApi } from '../../stores/expenseStore'
import { useStore } from '@nanostores/react'

function ExpensesHome() {
	const expenses = useStore(expenseStore)

	useEffect(() => {
		loadExpensesFromApi()
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			{expenses && <PieChart />}
			<Table isLoan={false}>
				{expenses && expenses.map((expense, index) => <ExpenseRow key={index} expense={expense} />)}
			</Table>
		</main>
	)
}

export default ExpensesHome
