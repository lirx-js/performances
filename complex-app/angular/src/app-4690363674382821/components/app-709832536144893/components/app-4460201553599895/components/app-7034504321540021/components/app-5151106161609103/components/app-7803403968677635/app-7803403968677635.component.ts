import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7803403968677635',
  standalone: true,
  templateUrl: './app-7803403968677635.component.html',
  styleUrl: './app-7803403968677635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7803403968677635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
