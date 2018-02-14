import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// to make usage of ng-Model
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  //here declare the HeroesComponent so it could be used in app-component
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
