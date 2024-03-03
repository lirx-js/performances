import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7835545320344323',
  standalone: true,
  templateUrl: './app-7835545320344323.component.html',
  styleUrl: './app-7835545320344323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7835545320344323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
