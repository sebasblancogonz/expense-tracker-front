import { map } from "nanostores";
import { getLoans as getLoansFromAPI,
removeLoan as removeLoanFromAPI } from "../utils/ApiUtils";

export const loans = map([])

export function addLoans(loanList) {
    loans.set(loanList)
}

export function removeLoan(loanId) {
    loans.set(loans.get().filter((loan) => loan.id !== loanId))
    removeLoanFromAPI(loanId)
}

export function addLoan(loan) {
    loans.get().push(loan)
}

export const loadLoansFromApi = () => {
    getLoansFromAPI()
}