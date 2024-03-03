import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1792657242438841',
  standalone: true,
  templateUrl: './app-1792657242438841.component.html',
  styleUrl: './app-1792657242438841.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1792657242438841Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
