const Row = (props) => {
	return (
		<tr
			id={props.id}
			className="border-b-[1px] dark:border-chestnut-300 dark:hover:bg-chestnut-900"
		>
			{props.children}
		</tr>
	)
}

export default Row
