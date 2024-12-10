export type Account = { name: string }
export type Transaction = { date: Date, description: string, amount: number, account: Account, logo_url: string | null }
