import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7770356141898029',
  standalone: true,
  templateUrl: './app-7770356141898029.component.html',
  styleUrl: './app-7770356141898029.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7770356141898029Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
