const formatCurrency = (currency: any) => {
  if(!currency || (currency === 0)) return;
  const formattedCurrency =new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(currency);

return formattedCurrency;
}

export default formatCurrency;