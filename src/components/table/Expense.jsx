import React, { useState } from 'react'
import Row from './body/Row'
import DateColumn from './body/DateColumn'
import Column from './body/Column'
import RemoveButton from './body/RemoveButton'
import { getMonthDay, categoryEmoji, getMonthName } from '../../utils/Utilities'
import Trash from '../../icons/Trash'
import { ExpenseType } from '../../types/ExpenseTrackerTypes'

const ExpenseRow = (props) => {
	const [isTableVisible, setIsTableVisible] = useState(false)

	const toggleTableVisibility = () => {
		setIsTableVisible(!isTableVisible)
	}

	const { id, date, category, amount, description, participants } = props.expense

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
				<div className="flex w-full flex-row">
					<span className="pr-2">{categoryEmoji(category)}</span>
					<p className="truncate font-light text-chestnut-600 dark:text-chestnut-300">
						{description}
					</p>
				</div>
				{participants && participants.length > 0 ? (
					<>
						<div className="mt-2 flex w-full flex-row">
							<span className="flex pr-2">👥</span>
							<p className="truncate font-light text-chestnut-600 dark:text-chestnut-300">
								Shared with: &nbsp;
								{participants.map(
									(participant, idx) =>
										participant.name + (idx < participants.length - 1 ? ', ' : '')
								)}
							</p>
							<button onClick={toggleTableVisibility} className=" ml-auto text-blue-500">
								{isTableVisible ? 'Hide details' : 'Show details'}
							</button>
						</div>
						<div
							className={`mt-5 overflow-x-auto transition-all duration-500 scrollbar-hide ${
								isTableVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
							}`}
						>
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
										>
											Name
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
										>
											Amount
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
										>
											Paid
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{participants.map((participant) => (
										<tr key={participant.name}>
											<td className="whitespace-nowrap px-6 py-4">
												<p className="truncate text-center font-light text-chestnut-600 dark:text-chestnut-300">
													{participant.name}
												</p>
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												<p className="text-center font-light  text-chestnut-600 dark:text-chestnut-300">
													{participant.amount}€
												</p>
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												<div className="m-auto flex justify-center">
													{participant.paid ? (
														<svg
															className="h-5 w-5 text-green-600"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clipRule="evenodd"
															></path>
														</svg>
													) : (
														<svg
															className="h-5 w-5 text-red-600"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.293-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
																clipRule="evenodd"
															></path>
														</svg>
													)}
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</>
				) : (
					''
				)}
			</Column>
			<Column>
				<p className="text-end font-medium dark:text-chestnut-100">{amount}€</p>
			</Column>
			<Column>
				<RemoveButton id={id} expenseType={ExpenseType.EXPENSE}>
					<Trash />
				</RemoveButton>
			</Column>
		</Row>
	)
}

export default ExpenseRow
