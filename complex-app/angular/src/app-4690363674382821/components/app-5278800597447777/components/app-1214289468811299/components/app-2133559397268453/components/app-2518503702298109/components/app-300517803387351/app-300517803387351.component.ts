import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-300517803387351',
  standalone: true,
  templateUrl: './app-300517803387351.component.html',
  styleUrl: './app-300517803387351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App300517803387351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
