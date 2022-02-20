import { Pipe, PipeTransform } from "@angular/core";
import { getHours } from "../../mappers";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    return getHours(duration);
  }
}
