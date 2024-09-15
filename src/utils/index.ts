export const getAmountDays = (amountDays: number) => {
  const arr = []
  for (let i = 1; i <= amountDays; i++) {
    arr.push(i)
  }
  return arr
};
