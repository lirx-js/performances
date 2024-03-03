import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1648280853501327',
  standalone: true,
  templateUrl: './app-1648280853501327.component.html',
  styleUrl: './app-1648280853501327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1648280853501327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
