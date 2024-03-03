import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3436856328174693',
  standalone: true,
  templateUrl: './app-3436856328174693.component.html',
  styleUrl: './app-3436856328174693.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3436856328174693Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
