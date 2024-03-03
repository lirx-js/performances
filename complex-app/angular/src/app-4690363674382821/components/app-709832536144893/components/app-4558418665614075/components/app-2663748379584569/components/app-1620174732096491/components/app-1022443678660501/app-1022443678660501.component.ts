import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1022443678660501',
  standalone: true,
  templateUrl: './app-1022443678660501.component.html',
  styleUrl: './app-1022443678660501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1022443678660501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
