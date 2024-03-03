import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1327153639295279',
  standalone: true,
  templateUrl: './app-1327153639295279.component.html',
  styleUrl: './app-1327153639295279.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1327153639295279Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
