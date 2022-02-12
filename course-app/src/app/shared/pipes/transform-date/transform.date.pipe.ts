import { Pipe, PipeTransform } from "@angular/core";
import { tranfromDate } from "../../mappers";

@Pipe({
  name: "transformDate",
})
export class TransformDatePipe implements PipeTransform {
  transform(date: string): string {
    return tranfromDate(date);
  }
}
