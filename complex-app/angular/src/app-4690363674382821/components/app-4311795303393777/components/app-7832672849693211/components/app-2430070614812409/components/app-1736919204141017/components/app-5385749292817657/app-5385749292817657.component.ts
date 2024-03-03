import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5385749292817657',
  standalone: true,
  templateUrl: './app-5385749292817657.component.html',
  styleUrl: './app-5385749292817657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5385749292817657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
