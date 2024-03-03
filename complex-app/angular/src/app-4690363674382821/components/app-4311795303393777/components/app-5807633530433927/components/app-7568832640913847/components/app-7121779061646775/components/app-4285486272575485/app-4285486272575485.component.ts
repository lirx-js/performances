import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4285486272575485',
  standalone: true,
  templateUrl: './app-4285486272575485.component.html',
  styleUrl: './app-4285486272575485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4285486272575485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
