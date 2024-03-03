import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4416433777916281',
  standalone: true,
  templateUrl: './app-4416433777916281.component.html',
  styleUrl: './app-4416433777916281.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4416433777916281Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
