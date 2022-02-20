import { Pipe, PipeTransform } from "@angular/core";
import { tranfromDate } from "../../mappers";

@Pipe({
  name: "creationDate",
})
export class CreationDatePipe implements PipeTransform {
  transform(date: string): string {
    return tranfromDate(date);
  }
}
