import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8355851253628959',
  standalone: true,
  templateUrl: './app-8355851253628959.component.html',
  styleUrl: './app-8355851253628959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8355851253628959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
