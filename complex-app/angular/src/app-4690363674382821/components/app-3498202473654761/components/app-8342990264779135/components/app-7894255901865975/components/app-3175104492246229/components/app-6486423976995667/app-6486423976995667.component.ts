import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6486423976995667',
  standalone: true,
  templateUrl: './app-6486423976995667.component.html',
  styleUrl: './app-6486423976995667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6486423976995667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
