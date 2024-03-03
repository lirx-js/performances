import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5267104503423807',
  standalone: true,
  templateUrl: './app-5267104503423807.component.html',
  styleUrl: './app-5267104503423807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5267104503423807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
