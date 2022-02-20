import { Pipe, PipeTransform } from "@angular/core";
import { joinWithComaStringArray } from "../../mappers";

@Pipe({
  name: "stringJoiner",
})
export class StringJoinerPipe implements PipeTransform {
  transform(array: string[]): string {
    return joinWithComaStringArray(array);
  }
}
