import { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import { loans as loanStore, loadLoansFromApi } from '../../stores/loanStore'
import LoanRow from '../../components/table/Loan'

function LoansHome() {
	const [loans, setLoans] = useState([])

	useEffect(() => {
		if (loanStore.get().length === 0) {
			setLoans(loadLoansFromApi())
		} else {
			setLoans(loanStore.get())
		}
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			<h1 className="mb-5 mt-5 text-center text-2xl text-chestnut-700">Your loans 🏦</h1>
			<Table isLoan={true}>
				{loans && loans.map((loan, index) => <LoanRow key={index} loan={loan} />)}
			</Table>
		</main>
	)
}

export default LoansHome
