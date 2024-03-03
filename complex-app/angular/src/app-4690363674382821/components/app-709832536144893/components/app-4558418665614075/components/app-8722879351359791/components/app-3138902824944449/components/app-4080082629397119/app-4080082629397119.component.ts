import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4080082629397119',
  standalone: true,
  templateUrl: './app-4080082629397119.component.html',
  styleUrl: './app-4080082629397119.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4080082629397119Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
