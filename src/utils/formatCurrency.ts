const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 0,
    signDisplay: 'auto'
})

export function formatCurrency(number: number) {
    // return CURRENCY_FORMATTER.format(number).replace(/\s+/, ' ')
    return CURRENCY_FORMATTER.format(number).replace(/\s+/, ' ')

}