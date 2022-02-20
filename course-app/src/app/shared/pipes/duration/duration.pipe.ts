import { Pipe, PipeTransform } from "@angular/core";
import { getTwoLengthNumber } from "../../utils";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = getTwoLengthNumber(duration % 60);
    return `${hours}:${minutes}`;
  }
}
