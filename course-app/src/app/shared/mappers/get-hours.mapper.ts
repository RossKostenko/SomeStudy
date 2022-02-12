import { getTwoLengthNumber } from ".";

export function getHours(duration: number): string {
  const hours = Math.floor(duration / 60);
  const minutes = getTwoLengthNumber(duration % 60);
  return `${hours}:${minutes}`;
}
