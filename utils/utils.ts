export function isAscending(array: any[]) {
  return array.every(function (x, i) {
    return i === 0 || x >= array[i - 1]
  })
}

export function isDescending(array: any[]) {
  return array.every(function (x, i) {
    return i === 0 || x <= array[i - 1]
  })
}

export function convertPricesToNumbers(prices: string[]) {
  return prices.map((price) => Number(price.slice(1)))
}
