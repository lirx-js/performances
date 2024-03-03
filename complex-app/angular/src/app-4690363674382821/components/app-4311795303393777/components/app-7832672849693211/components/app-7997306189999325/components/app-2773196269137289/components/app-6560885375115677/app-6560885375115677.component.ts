import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6560885375115677',
  standalone: true,
  templateUrl: './app-6560885375115677.component.html',
  styleUrl: './app-6560885375115677.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6560885375115677Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
