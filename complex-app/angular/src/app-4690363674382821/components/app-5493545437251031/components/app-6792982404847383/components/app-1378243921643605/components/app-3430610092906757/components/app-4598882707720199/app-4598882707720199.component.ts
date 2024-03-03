import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4598882707720199',
  standalone: true,
  templateUrl: './app-4598882707720199.component.html',
  styleUrl: './app-4598882707720199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4598882707720199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
