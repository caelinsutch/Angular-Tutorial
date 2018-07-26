import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BootstrapPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
