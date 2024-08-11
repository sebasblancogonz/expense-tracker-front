import { removeExpense } from '../../../stores/expenseStore'
import { removeLoan } from '../../../stores/loanStore'
import { ExpenseType } from '../../../types/ExpenseTrackerTypes'

type RemoveButtonProps = {
	id: string
	children: string
	expenseType: ExpenseType
}

const RemoveButton = (props: RemoveButtonProps) => {
	const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		switch (props.expenseType) {
			case ExpenseType.EXPENSE:
				removeExpense(props.id)
				break
			case ExpenseType.LOAN:
				removeLoan(props.id)
				break
			default:
				break
		}
		removeExpense(props.id)
	}

	return (
		<button
			onClick={handleRemove}
			className="remove-row text-end font-medium dark:text-chestnut-100"
		>
			{props.children}
		</button>
	)
}

export default RemoveButton
