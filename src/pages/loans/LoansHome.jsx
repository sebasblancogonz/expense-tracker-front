import { useEffect } from 'react'
import Table from '../../components/table/Table'
import { loans as loanStore, loadLoansFromApi } from '../../stores/loanStore'
import { useStore } from '@nanostores/react'
import LoanRow from '../../components/table/Loan'

function LoansHome() {
	const loans = useStore(loanStore)

	useEffect(() => {
		if (loans.length === 0) loadLoansFromApi()
	}, [])

	return (
		<main className="flex w-full flex-col [grid-area:main]">
			<Table isLoan={true}>
				{loans && loans.map((loan, index) => <LoanRow key={index} loan={loan} />)}
			</Table>
		</main>
	)
}

export default LoansHome
