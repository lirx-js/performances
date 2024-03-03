import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6116438676254689',
  standalone: true,
  templateUrl: './app-6116438676254689.component.html',
  styleUrl: './app-6116438676254689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6116438676254689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
