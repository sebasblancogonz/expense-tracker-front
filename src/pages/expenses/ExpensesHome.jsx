import { useEffect } from 'react'
import Table from '../../components/table/Table'
import ExpenseRow from '../../components/table/Expense'
import PieChart from '../../components/PieChart'
import { expenses as expenseStore, loadExpensesFromApi } from '../../stores/expenseStore'
import { buildExpensesChartData } from '../../utils/Utilities'
import { useStore } from '@nanostores/react'

function ExpensesHome() {
	const expenses = useStore(expenseStore)
	console.log(expenseStore)
	console.log(expenses)

	useEffect(() => {
		loadExpensesFromApi()
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			<Table isLoan={false}>
				{expenses && expenses.map((expense) => <ExpenseRow expense={expense} />)}
			</Table>
		</main>
	)
}

export default ExpensesHome
