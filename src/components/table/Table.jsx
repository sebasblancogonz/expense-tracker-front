import TableHead from '../table/head/Head'

const Table = (props) => {
	return (
		<div className="scrollbar-hide flex max-h-[50vh] flex-col overflow-y-auto">
			<table className="mt-1 w-full table-fixed rounded-lg text-left text-sm">
				<TableHead isLoan={props.isLoan} />
				<tbody className="max-h-screen overflow-y-auto">{props.children}</tbody>
			</table>
		</div>
	)
}

export default Table
