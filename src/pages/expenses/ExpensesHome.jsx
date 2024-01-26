import { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import ExpenseRow from '../../components/table/Expense'
import PieChart from '../../components/PieChart'
import { fetchExpenses } from '../../utils/ApiUtils'
import { expenses } from '../../stores/expenseStore'
import { buildExpensesChartData } from '../../utils/Utilities'
import { useStore } from '@nanostores/react'

const ExpensesHome = () => {
	const [expenseList, setExpenseList] = useState([])

	useEffect(() => {
		fetchExpenses()
		const $expenses = useStore(expenses)
		setExpenseList($expenses)
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			<Table isLoan={false}>
				{expenseList && expenseList.map((expense) => <ExpenseRow expense={expense} />)}
			</Table>
		</main>
	)
}

export default ExpensesHome
