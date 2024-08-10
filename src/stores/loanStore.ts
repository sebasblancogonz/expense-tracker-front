import { persistentAtom } from '@nanostores/persistent'
import { getLoans as getLoansFromAPI, removeLoan as removeLoanFromAPI } from '../utils/ApiUtils'
import type { Loan } from '../types/ExpenseTrackerTypes'

export const loans = persistentAtom<Loan[]>('loans', [], {
	encode: JSON.stringify,
	decode: JSON.parse
})

export function addLoans(loanList: Loan[]) {
	loans.set(loanList)
}

export function removeLoan(loanId: string) {
	loans.set(loans.get().filter((loan) => loan.id !== loanId))
	removeLoanFromAPI(loanId)
}

export function addLoan(loan: Loan) {
	loans.set([...loans.get(), loan])
}

export const loadLoansFromApi = () => {
	console.log('Loading loans from API')
	getLoansFromAPI()
}
