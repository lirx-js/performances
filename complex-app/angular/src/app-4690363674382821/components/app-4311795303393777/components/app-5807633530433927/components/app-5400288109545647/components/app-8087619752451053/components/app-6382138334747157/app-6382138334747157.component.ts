import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6382138334747157',
  standalone: true,
  templateUrl: './app-6382138334747157.component.html',
  styleUrl: './app-6382138334747157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6382138334747157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
