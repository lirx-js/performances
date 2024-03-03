import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3927929416186817',
  standalone: true,
  templateUrl: './app-3927929416186817.component.html',
  styleUrl: './app-3927929416186817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3927929416186817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
