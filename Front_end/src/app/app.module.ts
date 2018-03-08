import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpModule } from '@angular/http';
import { ContainerComponent } from './container/container.component';
import { ParticlesModule } from 'angular-particle';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	ParticlesModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
