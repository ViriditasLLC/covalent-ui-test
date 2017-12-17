import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { AppComponent } from './app.component';
import { StepperEntryFormModule } from './stepper-entry-form/stepper-entry-form.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDynamicFormsModule,
    //
    StepperEntryFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
