import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7060546702832935',
  standalone: true,
  templateUrl: './app-7060546702832935.component.html',
  styleUrl: './app-7060546702832935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7060546702832935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
