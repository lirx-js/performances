import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1090011324427433',
  standalone: true,
  templateUrl: './app-1090011324427433.component.html',
  styleUrl: './app-1090011324427433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1090011324427433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
