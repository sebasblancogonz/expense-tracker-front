import { removeExpense } from "../../../stores/expenseStore"

const EditButton = (props) => {
    const handleRemove = (e) => {
        e.preventDefault()
        removeExpense(props.id)
    }
    

    return (
        <button onClick={handleRemove} className="remove-row text-end font-medium dark:text-chestnut-100">{props.children}</button>
    )
}

export default EditButton;