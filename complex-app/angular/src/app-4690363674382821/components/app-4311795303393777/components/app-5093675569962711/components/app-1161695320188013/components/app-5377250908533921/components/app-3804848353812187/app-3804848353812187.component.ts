import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3804848353812187',
  standalone: true,
  templateUrl: './app-3804848353812187.component.html',
  styleUrl: './app-3804848353812187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3804848353812187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
