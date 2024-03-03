import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6909535539469079',
  standalone: true,
  templateUrl: './app-6909535539469079.component.html',
  styleUrl: './app-6909535539469079.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6909535539469079Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
