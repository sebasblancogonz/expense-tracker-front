import { Chart as ChartJS, Legend, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { expenses as expensesStore } from '../stores/expenseStore'
import { useStore } from '@nanostores/react'
import { buildExpensesPie } from '../utils/Utilities'

ChartJS.register(Legend, ArcElement, Tooltip)

const PieChart = () => {
	const expenses = useStore(expensesStore)

	return (
		<div className="flex h-[400px] w-[400px] my-0 mx-auto">
			<Pie data={buildExpensesPie(expenses)} />
		</div>
	)
}

export default PieChart
