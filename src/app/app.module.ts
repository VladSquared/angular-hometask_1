import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserListMainComponent } from './user/user-list-main/user-list-main.component';
import { UseListViewComponent } from './user/use-list-view/use-list-view.component';
import { UserCardComponent } from './user/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListMainComponent,
    UseListViewComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
