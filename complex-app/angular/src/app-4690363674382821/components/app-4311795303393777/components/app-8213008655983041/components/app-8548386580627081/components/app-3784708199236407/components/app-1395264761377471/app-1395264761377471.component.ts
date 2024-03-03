import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1395264761377471',
  standalone: true,
  templateUrl: './app-1395264761377471.component.html',
  styleUrl: './app-1395264761377471.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1395264761377471Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
