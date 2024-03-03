import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5578971944232561',
  standalone: true,
  templateUrl: './app-5578971944232561.component.html',
  styleUrl: './app-5578971944232561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5578971944232561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
