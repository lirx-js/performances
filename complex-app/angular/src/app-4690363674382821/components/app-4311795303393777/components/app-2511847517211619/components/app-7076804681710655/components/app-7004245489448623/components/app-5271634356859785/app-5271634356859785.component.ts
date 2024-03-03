import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5271634356859785',
  standalone: true,
  templateUrl: './app-5271634356859785.component.html',
  styleUrl: './app-5271634356859785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5271634356859785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
