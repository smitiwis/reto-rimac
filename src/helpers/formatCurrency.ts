export const formatCurrency = (
  amount: number | string,
  currencySymbol: string = "$",
  decimals: number = 0
): string => {
  // CONVERTIR A STRING 
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) {
    return "Invalid amount";
  }

  // FORMATEAR LA CANTIDAD
  const formattedAmount = numAmount.toLocaleString("en-US", {
    style: 'decimal',
    minimumFractionDigits: decimals
  });

  return `${currencySymbol}${formattedAmount}`;
};
