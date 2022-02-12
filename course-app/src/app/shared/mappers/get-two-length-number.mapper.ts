export function getTwoLengthNumber(number: number): string {
  return number >= 10 ? `${number}` : `0${number}`;
}
