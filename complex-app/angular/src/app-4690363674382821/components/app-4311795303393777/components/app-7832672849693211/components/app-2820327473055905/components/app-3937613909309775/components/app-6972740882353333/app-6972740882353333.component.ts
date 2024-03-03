import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6972740882353333',
  standalone: true,
  templateUrl: './app-6972740882353333.component.html',
  styleUrl: './app-6972740882353333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6972740882353333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
