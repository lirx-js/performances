import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6637005959062359',
  standalone: true,
  templateUrl: './app-6637005959062359.component.html',
  styleUrl: './app-6637005959062359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6637005959062359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
