import { useState } from 'react'
import { formatDateToAPI } from '../../utils/Utilities'
import { addExpense } from '../../stores/expenseStore'

const AddExpense = () => {
	const [sharedExpense, setSharedExpense] = useState(false)
	const [participants, setParticipants] = useState(0)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = e.target
		const request = {
			description: data.description.value,
			amount: data.amount.value,
			date: formatDateToAPI(data.date.value),
			category: data.category.value
		}
		addExpense(request)
	}

	const handleChange = () => {
		setSharedExpense(!sharedExpense)
		if(sharedExpense) {
			setParticipants(1)
		} {
			setParticipants(0)
		}
	}

	const addParticipant = (e) => {
		e.preventDefault()
		setParticipants(participants+1)
	}

	const removeParticipant = (e) => {
		e.preventDefault()
		setParticipants(participants-1)
	}

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			<div className="h-full w-full shadow-lg">
				<h1 className="mb-5 mt-20 text-center text-2xl text-chestnut-700">Add a new expense 💸</h1>
				<form className="mx-auto max-w-md" onSubmit={handleSubmit}>
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
							type="number"
							step=".01"
							name="amount"
							id="amount"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
							placeholder=" "
							required
						/>
						<label
							htmlFor="amount"
							className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
						>
							Amount
						</label>
					</div>
					<div className="group relative z-0 mb-5 w-full">
						<input
							type="date"
							name="date"
							id="date"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
							placeholder=" "
							required
						/>
						<label
							htmlFor="date"
							className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:translate-x-1/4"
						></label>
					</div>
					<div className="group relative z-0 mb-5 w-full">
						<label
							htmlFor="category"
							className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>
							Select a category
						</label>
						<select
							id="category"
							name="category"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-chestnut-500 focus:ring-chestnut-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-chestnut-500 dark:focus:ring-chestnut-500"
						>
							<option value="OTHERS">Others</option>
							<option value="ENTERTAINMENT">Entertainment</option>
							<option value="FOOD">Food</option>
							<option value="TRANSPORTATION">Transportation</option>
							<option value="HEALTH">Health</option>
							<option value="EDUCATION">Education</option>
						</select>
					</div>
					<div className="group relative z-0 mb-5 w-full">
						<input
							type="checkbox"
							name="shar3ed"
							onChange={handleChange}
							id="shared"
							className="mb-5 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-chestnut-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-chestnut-500"
							placeholder=" "
						/>
						<label className="ml-2 text-chestnut-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-chestnut-600 dark:text-gray-400 peer-focus:dark:text-chestnut-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
							Is it a shared expense?
						</label>
						{sharedExpense &&
							[...Array(participants).keys()].map((idx) => (
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
										Participant {idx+1}
									</label>
								</div>
							))}
					</div>
					<div className="group z-0 flex w-full flex-1 justify-between">
						<button
							type="submit"
							className="w-full rounded-lg bg-chestnut-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-chestnut-800 focus:outline-none focus:ring-4 focus:ring-chestnut-300 dark:bg-chestnut-600 dark:hover:bg-chestnut-700 dark:focus:ring-chestnut-800 sm:w-auto"
						>
							Submit
						</button>
						<div>
							{sharedExpense && participants > 0 && (
								<button
									onClick={removeParticipant}
									className=" w-full rounded-lg bg-chestnut-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-chestnut-800 focus:outline-none focus:ring-4 focus:ring-chestnut-300 dark:bg-chestnut-600 dark:hover:bg-chestnut-700 dark:focus:ring-chestnut-800 sm:w-auto"
								>
									Remove participant
								</button>
							)}
							{sharedExpense && (
								<button
									onClick={addParticipant}
									className=" w-full rounded-lg bg-chestnut-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-chestnut-800 focus:outline-none focus:ring-4 focus:ring-chestnut-300 dark:bg-chestnut-600 dark:hover:bg-chestnut-700 dark:focus:ring-chestnut-800 sm:w-auto"
								>
									Add participant
								</button>
							)}
						</div>
					</div>
				</form>
			</div>
		</main>
	)
}

export default AddExpense
