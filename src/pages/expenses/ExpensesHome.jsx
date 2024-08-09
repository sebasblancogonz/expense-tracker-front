'use client'
import { useEffect } from 'react'
import Table from '../../components/table/Table'
import ExpenseRow from '../../components/table/Expense'
import PieChart from '../../components/PieChart'
import AddExpense from './AddExpense'
import { expenses, loadExpensesFromApi } from '../../stores/expenseStore'
import { useStore } from '@nanostores/react'
import { useState } from 'react'

function ExpensesHome() {
	const [showChart, setShowChart] = useState(false)

	useEffect(() => {
		console.log(expenses.value)
		if (expenses.get().length === 0) loadExpensesFromApi()
	}, [])

	const handleShowChart = (e) => {
		e.preventDefault()
		setShowChart(!showChart)
	}

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			{expenses.get().length === 0 ? (
				<>
					<h1 className="mb-5 mt-5 text-center text-2xl text-chestnut-700">
						You don't have any expense!
					</h1>
					<AddExpense />
				</>
			) : (
				<>
					<h1 className="mb-5 mt-5 text-center text-2xl text-chestnut-700 dark:text-chestnut-300">
						Your expenses 💸
					</h1>

					{showChart && <PieChart />}
					<div
						className="mx-auto p-4 text-chestnut-700 dark:text-chestnut-300"
						onClick={handleShowChart}
					>
						<button>{showChart ? 'Hide chart' : 'Show chart'}</button>
					</div>

					<Table isLoan={false}></Table>
				</>
			)}
		</main>
	)
}

export default ExpensesHome
