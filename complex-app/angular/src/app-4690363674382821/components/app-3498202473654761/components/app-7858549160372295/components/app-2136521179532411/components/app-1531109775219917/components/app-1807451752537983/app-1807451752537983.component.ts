import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1807451752537983',
  standalone: true,
  templateUrl: './app-1807451752537983.component.html',
  styleUrl: './app-1807451752537983.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1807451752537983Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
