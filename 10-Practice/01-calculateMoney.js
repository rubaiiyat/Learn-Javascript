function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  } else {
    totalSale = ticketSale * 120;
    totalCost = 500 + 50 * 8;
    totalSave = totalSale - totalCost;

    return totalSave;
  }
}

console.log(calculateMoney(1055));
