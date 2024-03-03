import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2012547013359805',
  standalone: true,
  templateUrl: './app-2012547013359805.component.html',
  styleUrl: './app-2012547013359805.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2012547013359805Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
