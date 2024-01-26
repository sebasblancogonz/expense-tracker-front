import {useEffect} from 'react'
import {Chart } from 'chart.js'

const PieChart = (props) => {

    useEffect(() => {
        var chrt = document.getElementById('chartId').getContext('2d') 
        new Chart(chrt, props.data)
    })    

	return (
		<>
			<div className="mx-auto my-10">
				<canvas id="chartId" aria-label="chart"></canvas>
			</div>
		</>
	)
}


export default PieChart