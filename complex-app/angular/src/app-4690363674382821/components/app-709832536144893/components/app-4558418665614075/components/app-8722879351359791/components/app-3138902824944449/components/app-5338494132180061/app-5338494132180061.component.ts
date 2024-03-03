import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5338494132180061',
  standalone: true,
  templateUrl: './app-5338494132180061.component.html',
  styleUrl: './app-5338494132180061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5338494132180061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
