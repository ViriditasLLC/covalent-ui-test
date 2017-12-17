import { Component, OnInit } from '@angular/core';
import {
  TdDynamicTextareaComponent,
  ITdDynamicElementConfig,
  TdDynamicElement,
  TdDynamicType
} from '@covalent/dynamic-forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  elements: ITdDynamicElementConfig[] = [
    {
      name: 'input',
      type: TdDynamicElement.Input,
      required: true
    },
    {
      name: 'textLength',
      label: 'Text Length',
      type: TdDynamicElement.Input,
      minLength: 4,
      maxLength: 12
    },
    {
      name: 'number',
      type: TdDynamicType.Number,
      min: 10,
      max: 80
    },
    {
      name: 'slider',
      label: 'Label',
      type: TdDynamicElement.Slider,
      required: true
    },
    {
      name: 'boolean',
      type: TdDynamicType.Boolean,
      default: false
    },
    {
      name: 'select',
      type: TdDynamicElement.Select,
      required: true,
      selections: ['A', 'B', 'C'],
      default: 'A'
    },
    {
      name: 'file-input',
      label: 'Label',
      type: TdDynamicElement.FileInput
    }
  ];
}
