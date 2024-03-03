import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8280581892320573',
  standalone: true,
  templateUrl: './app-8280581892320573.component.html',
  styleUrl: './app-8280581892320573.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8280581892320573Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
