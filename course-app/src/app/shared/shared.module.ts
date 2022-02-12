import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "./component/button/button.module";
import { IconModule } from "./component/icon/icon.module";
import { SearchModule } from "./component/search/search.module";
import { PipesModule } from "./pipes/pipes.module";
import { InfoModule } from "./component/info/info.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    IconModule,
    InfoModule,
    SearchModule,
    PipesModule,
  ],
  exports: [
    FontAwesomeModule,
    ButtonModule,
    IconModule,
    InfoModule,
    SearchModule,
  ],
})
export class SharedModule {}
