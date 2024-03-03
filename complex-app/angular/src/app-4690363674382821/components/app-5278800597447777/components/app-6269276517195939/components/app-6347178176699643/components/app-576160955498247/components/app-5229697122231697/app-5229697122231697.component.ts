import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5229697122231697',
  standalone: true,
  templateUrl: './app-5229697122231697.component.html',
  styleUrl: './app-5229697122231697.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5229697122231697Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
