import { Directive, forwardRef } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

const ALPHA_NUMERIC_ONLY = /^([A-Za-z]|[0-9])+$/;
@Directive({
  selector: "[AlphaNumeric]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AlphaNumericValidator),
      multi: true,
    },
  ],
})
export class AlphaNumericValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } | null {
    const v = c.value;
    if (c.value && !c.value.match(ALPHA_NUMERIC_ONLY)) {
      return { alphaNumeric: true };
    }
    return null;
  }
}
