import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8466926655112997',
  standalone: true,
  templateUrl: './app-8466926655112997.component.html',
  styleUrl: './app-8466926655112997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8466926655112997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
