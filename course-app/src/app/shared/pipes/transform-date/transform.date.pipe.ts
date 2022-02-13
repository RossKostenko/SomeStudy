import { Pipe, PipeTransform } from "@angular/core";
import { getTwoLengthNumber } from "../../utils";

@Pipe({
  name: "transformDate",
})
export class TransformDatePipe implements PipeTransform {
  transform(date: string): string {
    return date
      .split("/")
      .map((stirngNumber) => getTwoLengthNumber(+stirngNumber))
      .join(".");
  }
}
