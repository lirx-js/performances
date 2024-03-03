import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3879089276784561',
  standalone: true,
  templateUrl: './app-3879089276784561.component.html',
  styleUrl: './app-3879089276784561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3879089276784561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
