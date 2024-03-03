import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-305688341090923',
  standalone: true,
  templateUrl: './app-305688341090923.component.html',
  styleUrl: './app-305688341090923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App305688341090923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
