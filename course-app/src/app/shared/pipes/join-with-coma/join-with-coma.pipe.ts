import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "joinWithComa",
})
export class JoinWithComaPipe implements PipeTransform {
  transform(array: string[]): string {
    return array.join(", ");
  }
}
