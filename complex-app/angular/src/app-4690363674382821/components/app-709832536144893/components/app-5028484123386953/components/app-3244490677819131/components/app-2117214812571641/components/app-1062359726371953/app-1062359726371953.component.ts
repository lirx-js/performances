import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1062359726371953',
  standalone: true,
  templateUrl: './app-1062359726371953.component.html',
  styleUrl: './app-1062359726371953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1062359726371953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
