import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { AlertComponent } from './alert.component';

import { MaterialModule } from "./material.module";

import { HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { MyerrorhandlerService } from './myerrorhandler.service';
import { GuessNumberComponent } from './guess-number/guess-number.component';

import { WorkoutRunnerModule } from './Workout/workout-runner.module';
import { AngularPipePipe } from './angular-pipe.pipe';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, AlertComponent, GuessNumberComponent, AngularPipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    MaterialModule, WorkoutRunnerModule
  ],
  providers: [
    // { provide: PathLocationStrategy, useClass: HashLocationStrategy },
    { provide: ErrorHandler, useClass: MyerrorhandlerService },
    { provide: UserService, useClass: UserService },
    {
      provide: "AppConfigurations", useValue: { name: 'app config'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
