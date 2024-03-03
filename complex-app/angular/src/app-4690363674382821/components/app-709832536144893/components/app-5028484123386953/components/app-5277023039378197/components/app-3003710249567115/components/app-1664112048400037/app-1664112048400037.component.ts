import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1664112048400037',
  standalone: true,
  templateUrl: './app-1664112048400037.component.html',
  styleUrl: './app-1664112048400037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1664112048400037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
