import { useState } from 'react'
import Row from './body/Row.astro'
import DateColumn from './body/DateColumn.astro'
import Column from './body/Column.astro'
import RemoveButton from './body/RemoveButton'
import { getMonthDay, categoryEmoji, getMonthName } from '../../utils/Utilities'
import Trash from '../../icons/Trash.astro'

const ExpenseRow = (props) => {
	const { id, date, category, amount, description } = props

	return (
		<Row id={id}>
			<DateColumn>
				<p className="w-10 text-2xl font-medium text-chestnut-800 dark:text-chestnut-600">
					{getMonthDay(date)}
				</p>
				<p className="leading-extra-tight text-chestnut-600 dark:text-chestnut-300">
					{getMonthName(date)}
				</p>
			</DateColumn>
			<Column>
				<div className="flex flex-row">
					<span className="pr-2">{categoryEmoji(category)}</span>
					<p className="truncate font-light text-chestnut-600 dark:text-chestnut-300">
						{description}
					</p>
				</div>
			</Column>
			<Column>
				<p className="text-end font-medium dark:text-chestnut-100">{amount}€</p>
			</Column>
			<Column>
				<RemoveButton id={id}>
					<Trash />
				</RemoveButton>
			</Column>
		</Row>
	)
}

export default ExpenseRow