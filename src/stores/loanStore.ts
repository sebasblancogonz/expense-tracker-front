import { persistentAtom } from '@nanostores/persistent'
import {
	addLoan as addLoanToAPI,
	fetchLoans as getLoansFromAPI,
	removeLoan as removeLoanFromAPI
} from '../utils/ApiUtils'
import type { Loan } from '../types/ExpenseTrackerTypes'
import { formatDate } from '../utils/Utilities'

export const loans = persistentAtom<Loan[]>('loans', [], {
	encode: JSON.stringify,
	decode: JSON.parse
})

export function addLoans(loanList: Loan[]) {
	loans.set(loanList)
}

export function removeLoan(loanId: string) {
	removeLoanFromAPI(loanId)
		.then((response) => {
			if (response.ok) {
				loans.set(loans.get().filter((loan) => loan.id !== loanId))
			}
		})
		.catch((err) => console.log(err))
}

export function addLoan(loan: Loan) {
	addLoanToAPI(loan)
		.then((response) => {
			if (response.ok) {
				loans.set([...loans.get(), loan])
			}
		})
		.catch((err) => console.log(err))
}

export const loadLoansFromApi = () => {
	getLoansFromAPI()
		.then((response) => {
			if (response.ok) {
				response.json().then((data: Loan[]) => {
					data.map((loan) => {
						console.log(loan.startDate)
						console.log(loan.finishDate)
						loan.startDate = formatDate(loan.startDate)
						loan.finishDate = formatDate(loan.finishDate)
					})
					addLoans(data)
				})
			}
		})
		.catch((err) => console.log(err))
}
