const DateColumn = (props) => {
	return (
		<td className="pb-14 pl-2 pt-2">
			<div className="w-100 flex flex-col">
				{props.children}
			</div>
		</td>
	)
}

export default DateColumn