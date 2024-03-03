import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5792932754595445',
  standalone: true,
  templateUrl: './app-5792932754595445.component.html',
  styleUrl: './app-5792932754595445.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5792932754595445Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
