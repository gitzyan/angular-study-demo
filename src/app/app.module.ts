import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { UseHostBingDirective } from './use-hostbing-directive/use-hostbing.directive';
import { FlyHerosComponent } from './pipe-study/fly-heros/fly-heros.component';
import { FlyHerosPipe } from './pipe-study/fly-heros/fly-heros.pipe';
import { FlyHerosImpurePipe } from './pipe-study/fly-heros/fly-heros-impure.pipe';
import { AsyncHeroMessageComponent } from './pipe-study/async-hero-message/async-hero-message.component';
import { FetchJsonComponent } from './pipe-study/fetch-json/fetch-json.component';
import { FetchPipe } from './pipe-study/fetch-json/fetch.pipe';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    UseHostBingDirective,
    FlyHerosComponent,
    FlyHerosPipe,
    FlyHerosImpurePipe,
    AsyncHeroMessageComponent,
    FetchJsonComponent,
    FetchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
