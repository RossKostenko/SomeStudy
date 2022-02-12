import { Pipe, PipeTransform } from "@angular/core";
import { getHours } from "../../mappers";

@Pipe({
  name: "hours",
})
export class HoursPipe implements PipeTransform {
  transform(duration: number): string {
    return getHours(duration);
  }
}
