export interface Installment {
	date: Date
	amount: number
	redeemed: number
	totalRedeemed: number
	remainingInstallments: number
	remainingAmount: number
}

export interface Loan {
	startDate: string
	finishDate: string
	description: string
	totalAmount: number
	interest: number
	bank?: string
	installments?: Installment[]
}

export interface Expense {
	id: string,
	date: string
	description: string
	amount: number
	category: string
}

export interface ChartData {
	type: string,
	data: Data,
	options: Option
}

interface Data {
	labels: string[],
	datasets: Dataset[],
}

interface Dataset {
	label: string,
	data: number[],
	backgroundColor: string[],
	hoverOfsset: number
}

interface Option {
	responsive: boolean
}