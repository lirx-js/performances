import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1732639512720947',
  standalone: true,
  templateUrl: './app-1732639512720947.component.html',
  styleUrl: './app-1732639512720947.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1732639512720947Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
