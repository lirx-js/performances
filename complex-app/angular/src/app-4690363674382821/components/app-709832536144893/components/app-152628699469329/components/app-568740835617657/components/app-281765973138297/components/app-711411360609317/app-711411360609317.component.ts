import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-711411360609317',
  standalone: true,
  templateUrl: './app-711411360609317.component.html',
  styleUrl: './app-711411360609317.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App711411360609317Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
