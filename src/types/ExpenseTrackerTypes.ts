export interface Installment {
	date: string
	amount: number
	redeemed: number
	totalRedeemed: number
	remainingInstallments: number
	remainingAmount: number
}

export interface Loan {
	id?: string
	startDate: string
	finishDate: string
	description: string
	totalAmount: number
	interest: number
	entity: string
	installments?: Installment[]
}

export interface Expense {
	id?: string
	date: string
	description: string
	amount: number
	category: string
	parcipants?: Participant[]
}

export interface Participant {
	name: string
	amount: number
	hasPaid: boolean
}

export interface ChartData {
	type: string
	data: Data
	options: Option
}

export enum ExpenseType {
	EXPENSE = 'EXPENSE',
	LOAN = 'LOAN'
}

export interface Data {
	labels: string[]
	datasets: Dataset[]
}

interface Dataset {
	label: string
	data: number[]
	backgroundColor: string[]
	hoverOfsset: number
}

interface Option {
	responsive: boolean
}
