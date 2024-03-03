import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1810659672194371',
  standalone: true,
  templateUrl: './app-1810659672194371.component.html',
  styleUrl: './app-1810659672194371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1810659672194371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
