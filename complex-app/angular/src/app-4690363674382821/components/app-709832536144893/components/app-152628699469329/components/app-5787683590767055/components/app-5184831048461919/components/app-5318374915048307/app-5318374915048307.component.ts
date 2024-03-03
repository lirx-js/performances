import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5318374915048307',
  standalone: true,
  templateUrl: './app-5318374915048307.component.html',
  styleUrl: './app-5318374915048307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5318374915048307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
