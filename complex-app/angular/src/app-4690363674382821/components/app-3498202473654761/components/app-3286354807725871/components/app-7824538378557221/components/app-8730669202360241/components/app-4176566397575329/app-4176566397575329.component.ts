import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4176566397575329',
  standalone: true,
  templateUrl: './app-4176566397575329.component.html',
  styleUrl: './app-4176566397575329.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4176566397575329Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
