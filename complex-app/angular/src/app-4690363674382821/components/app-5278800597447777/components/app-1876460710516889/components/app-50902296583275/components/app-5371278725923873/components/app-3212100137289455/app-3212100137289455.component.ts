import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3212100137289455',
  standalone: true,
  templateUrl: './app-3212100137289455.component.html',
  styleUrl: './app-3212100137289455.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3212100137289455Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
