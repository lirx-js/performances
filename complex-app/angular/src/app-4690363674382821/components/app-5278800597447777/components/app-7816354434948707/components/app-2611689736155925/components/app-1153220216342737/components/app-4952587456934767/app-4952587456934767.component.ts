import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4952587456934767',
  standalone: true,
  templateUrl: './app-4952587456934767.component.html',
  styleUrl: './app-4952587456934767.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4952587456934767Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
