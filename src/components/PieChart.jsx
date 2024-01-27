import { useState } from 'react'
import { Chart as ChartJS, Legend, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { expenses as expensesStore } from '../stores/expenseStore'
import { useStore } from '@nanostores/react'
import { buildExpensesPie } from '../utils/Utilities'

ChartJS.register(Legend, ArcElement, Tooltip)

const PieChart = (props) => {
	const expenses = useStore(expensesStore)

	return <Pie height={'200px'} width={'200px'} data={buildExpensesPie(expenses)} />
}

export default PieChart
