import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-350199915517791',
  standalone: true,
  templateUrl: './app-350199915517791.component.html',
  styleUrl: './app-350199915517791.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App350199915517791Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
