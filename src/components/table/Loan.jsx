import Row from "./body/Row"
import DateColumn from "./body/DateColumn"
import Column from "./body/Column"
import { getMonthDay, getMonthName, getYear } from "../../utils/Utilities"

const LoanRow = (props) => {
	const { startDate, finishDate, description, totalAmount, interest, bank } = props.loan

	return (
		<Row>
			<DateColumn>
				<p className="w-10 text-2xl font-medium text-chestnut-800 dark:text-chestnut-500">
					{getMonthDay(startDate)}
				</p>
				<p className="leading-extra-tight text-chestnut-600 dark:text-chestnut-300">
					{getMonthName(startDate)}
				</p>
				<p className="text-xs leading-normal text-chestnut-600 dark:text-chestnut-300">
					{getYear(startDate)}
				</p>
			</DateColumn>
			<DateColumn>
				<p className="w-10 text-2xl font-medium text-chestnut-800 dark:text-chestnut-500">
					{getMonthDay(finishDate)}
				</p>
				<p className="leading-extra-tight text-chestnut-600 dark:text-chestnut-300">
					{getMonthName(finishDate)}
				</p>
				<p className="text-xs leading-normal text-chestnut-600 dark:text-chestnut-300">
					{getYear(finishDate)}
				</p>
			</DateColumn>
			<Column>
				<div className="flex flex-row">
					<p className="truncate font-light text-chestnut-600 dark:text-chestnut-300">{description}</p>
				</div>
			</Column>

			<Column>
				<p className="text-end font-medium dark:text-chestnut-100">{totalAmount}€</p>
			</Column>
			<Column>
				<p className="text-end font-medium dark:text-chestnut-100">{interest}%</p>
			</Column>
			<Column>
				<p className="text-end font-medium dark:text-chestnut-100">{bank}</p>
			</Column>
		</Row>
	)
}

export default LoanRow