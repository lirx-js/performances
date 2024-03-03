import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5283417060280481',
  standalone: true,
  templateUrl: './app-5283417060280481.component.html',
  styleUrl: './app-5283417060280481.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5283417060280481Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
