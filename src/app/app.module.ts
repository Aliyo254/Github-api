import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DateCountPipe } from './date-count.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DateCountPipe,
    NavbarComponent,
    GitFormComponent,
    RepositoriesComponent,

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
