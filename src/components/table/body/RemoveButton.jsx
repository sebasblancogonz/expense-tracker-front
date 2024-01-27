import { removeExpense } from "../../../stores/expenseStore"

const RemoveButton = (props) => {
    const handleRemove = (e) => {
        e.preventDefault()
        removeExpense(props.id)
        e.target.closest("tr").remove()
    }
    

    return (
        <button onClick={handleRemove} className="remove-row text-end font-medium dark:text-chestnut-100">{props.children}</button>
    )
}

export default RemoveButton;