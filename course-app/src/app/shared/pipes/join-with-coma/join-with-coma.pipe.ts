import { Pipe, PipeTransform } from "@angular/core";
import { joinWithComaStringArray } from "../../mappers";

@Pipe({
  name: "joinWithComa",
})
export class JoinWithComaPipe implements PipeTransform {
  transform(array: string[]): string {
    return joinWithComaStringArray(array);
  }
}
