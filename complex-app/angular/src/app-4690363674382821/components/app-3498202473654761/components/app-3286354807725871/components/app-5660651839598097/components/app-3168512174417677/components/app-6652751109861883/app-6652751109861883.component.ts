import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6652751109861883',
  standalone: true,
  templateUrl: './app-6652751109861883.component.html',
  styleUrl: './app-6652751109861883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6652751109861883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
