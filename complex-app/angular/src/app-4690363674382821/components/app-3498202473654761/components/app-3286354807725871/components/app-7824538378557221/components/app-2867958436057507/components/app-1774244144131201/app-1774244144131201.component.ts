import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1774244144131201',
  standalone: true,
  templateUrl: './app-1774244144131201.component.html',
  styleUrl: './app-1774244144131201.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1774244144131201Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
