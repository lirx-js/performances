import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3380081223965061',
  standalone: true,
  templateUrl: './app-3380081223965061.component.html',
  styleUrl: './app-3380081223965061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3380081223965061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
