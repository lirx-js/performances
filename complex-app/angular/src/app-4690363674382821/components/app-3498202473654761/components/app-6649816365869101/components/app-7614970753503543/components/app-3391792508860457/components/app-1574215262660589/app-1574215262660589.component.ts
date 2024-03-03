import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1574215262660589',
  standalone: true,
  templateUrl: './app-1574215262660589.component.html',
  styleUrl: './app-1574215262660589.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1574215262660589Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
