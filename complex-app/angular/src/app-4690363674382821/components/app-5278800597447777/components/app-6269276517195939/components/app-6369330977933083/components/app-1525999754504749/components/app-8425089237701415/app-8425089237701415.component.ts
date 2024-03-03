import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8425089237701415',
  standalone: true,
  templateUrl: './app-8425089237701415.component.html',
  styleUrl: './app-8425089237701415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8425089237701415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
