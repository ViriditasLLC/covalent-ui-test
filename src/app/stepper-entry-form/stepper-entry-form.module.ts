import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
@NgModule({
  imports: [CommonModule, CovalentDynamicFormsModule],
  declarations: [StepperComponent, TextInputComponent],
  exports: [TextInputComponent]
})
export class StepperEntryFormModule {}
