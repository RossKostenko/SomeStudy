import { getTwoLengthNumber } from ".";

export function tranfromDate(string: string): string {
  return string
    .split("/")
    .map((stirngNumber) => getTwoLengthNumber(+stirngNumber))
    .join(".");
}
