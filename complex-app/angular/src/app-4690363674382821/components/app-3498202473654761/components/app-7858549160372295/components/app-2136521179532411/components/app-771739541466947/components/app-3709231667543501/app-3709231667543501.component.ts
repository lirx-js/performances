import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3709231667543501',
  standalone: true,
  templateUrl: './app-3709231667543501.component.html',
  styleUrl: './app-3709231667543501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3709231667543501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
