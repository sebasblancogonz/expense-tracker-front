import { apiUrl } from "../../../utils/ApiUtils"

const RemoveButton = (props) => {
    const removeExpense = (e) => {
        e.preventDefault()
        console.log(props.id)
        
    }
    

    return (
        <button onClick={removeExpense} class="remove-row text-end font-medium dark:text-chestnut-100">{props.children}</button>
    )
}

export default RemoveButton;