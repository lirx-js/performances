import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1408175920476619',
  standalone: true,
  templateUrl: './app-1408175920476619.component.html',
  styleUrl: './app-1408175920476619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1408175920476619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
