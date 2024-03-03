import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5311850535085727',
  standalone: true,
  templateUrl: './app-5311850535085727.component.html',
  styleUrl: './app-5311850535085727.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5311850535085727Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
