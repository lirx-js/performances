import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1248180585502863',
  standalone: true,
  templateUrl: './app-1248180585502863.component.html',
  styleUrl: './app-1248180585502863.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1248180585502863Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
