export const formatCurrency = (
  amount: number | string,
  currencySymbol: string = "$"
): string => {
  // CONVERTIR A STRING 
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) {
    return "Invalid amount";
  }

  // FORMATEAR LA CANTIDAD
  const formattedAmount = numAmount.toLocaleString("en-US", {
    style: 'decimal',
    maximumFractionDigits: 0,
  });

  return `${currencySymbol}${formattedAmount}`;
};
