import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8689281093591685',
  standalone: true,
  templateUrl: './app-8689281093591685.component.html',
  styleUrl: './app-8689281093591685.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8689281093591685Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
