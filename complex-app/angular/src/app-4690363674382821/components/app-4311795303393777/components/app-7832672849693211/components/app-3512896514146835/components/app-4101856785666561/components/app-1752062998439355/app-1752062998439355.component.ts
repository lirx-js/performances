import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1752062998439355',
  standalone: true,
  templateUrl: './app-1752062998439355.component.html',
  styleUrl: './app-1752062998439355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1752062998439355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
