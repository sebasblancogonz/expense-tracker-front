import { formatDateToAPI } from '../../utils/Utilities'
import { addLoan } from '../../stores/loanStore'

const AddLoan = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const data = e.target
		const request = {
			description: data.description.value,
			startDate: formatDateToAPI(data.startDate.value),
			finishDate: formatDateToAPI(data.finishDate.value),
			interest: data.interest.value,
			totalAmount: data.totalAmount.value,
			entity: data.entity.value
		}

		addLoan(request)
	}

	const renderForm = () => {
		return (
			<form className="mx-auto max-w-md" onSubmit={handleSubmit} autoComplete="off">
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="text"
						name="description"
						id="description"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="description"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Description
					</label>
				</div>
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="date"
						name="startDate"
						id="startDate"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="startDate"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
					></label>
				</div>
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="date"
						name="finishDate"
						id="finishDate"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="finishDate"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
					></label>
				</div>
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="number"
						step=".01"
						name="interest"
						id="interest"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="interest"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
					>
						Interest
					</label>
				</div>
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="number"
						step=".01"
						name="totalAmount"
						id="totalAmount"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="totalAmount"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
					>
						Total amount
					</label>
				</div>
				<div className="group relative z-0 mb-5 w-full">
					<input
						type="text"
						name="entity"
						id="entity"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
						placeholder=" "
						required
					/>
					<label
						htmlFor="entity"
						className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Entity
					</label>
				</div>
				<div className="group z-0 flex w-full flex-1 justify-between">
					<button
						type="submit"
						className="w-full rounded-lg bg-chestnut-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-chestnut-800 focus:outline-none focus:ring-4 focus:ring-chestnut-300 dark:bg-chestnut-600 dark:hover:bg-chestnut-700 dark:focus:ring-chestnut-800 sm:w-auto"
					>
						Submit
					</button>
				</div>
			</form>
		)
	}

	return (
		<main className="flex h-full w-full flex-col [grid-area:main]">
			<div className="h-full w-auto">
				<h1 className="mb-5 mt-20 text-center text-2xl text-chestnut-700">Add a new loan 🏦</h1>

				{renderForm()}
			</div>
		</main>
	)
}

export default AddLoan
