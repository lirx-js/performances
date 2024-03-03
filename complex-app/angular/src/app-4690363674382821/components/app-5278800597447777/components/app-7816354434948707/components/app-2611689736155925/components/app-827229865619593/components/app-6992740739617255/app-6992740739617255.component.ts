import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6992740739617255',
  standalone: true,
  templateUrl: './app-6992740739617255.component.html',
  styleUrl: './app-6992740739617255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6992740739617255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
