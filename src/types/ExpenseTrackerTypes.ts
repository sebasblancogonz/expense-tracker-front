export interface Installment {
	date: Date
	amount: number
	redeemed: number
	totalRedeemed: number
	remainingInstallments: number
	remainingAmount: number
}

export interface Loan {
    startDate: Date
	finishDate: Date
	description: string
	amount: number
	interest: number
	bank?: string
	installments?: Installment[]
}