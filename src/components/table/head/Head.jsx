const TableHead = (props) => {
	const { isLoan } = props
	return (
		<thead className="sticky top-0 border-collapse border-b-[1px] border-t-[1px] border-zinc-200 bg-zinc-100 uppercase tracking-wider dark:border-neutral-600">
			<tr>
				<th className="w-1/6 border-r-[1px] pb-2 pl-2 pt-2 text-xs font-normal text-zinc-700">
					{isLoan ? 'Start Date' : 'Date'}
				</th>
				{isLoan && (
					<th className="w-1/6 border-r-[1px] pb-2 pl-2 pt-2 text-xs font-normal text-zinc-700">
						Finish Date
					</th>
				)}
				<th className="w-2/4 border-r-[1px] pb-2 pl-2 pt-2 text-xs font-normal text-zinc-700">
					Description
				</th>
				<th className="w-1/6 border-r-[1px] pb-2 pl-1 pt-2 text-xs font-normal text-zinc-700">
					Amount
				</th>
				{isLoan && (
					<>
						<th className="w-1/6 border-r-[1px] pb-2 pl-1 pt-2 text-xs font-normal text-zinc-700">
							Interest
						</th>
						<th className=" w-1/6 border-r-[1px] pb-2 pl-2 pt-2 text-xs font-normal text-zinc-700">
							Entity
						</th>
					</>
				)}
				<th
					className={`${
						isLoan && 'border-r-[1px]'
					} w-1/6 pb-2 pl-2 pt-2 text-xs font-normal text-zinc-700`}
				>
					Actions
				</th>
			</tr>
		</thead>
	)
}

export default TableHead
