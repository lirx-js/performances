import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7314421694558061',
  standalone: true,
  templateUrl: './app-7314421694558061.component.html',
  styleUrl: './app-7314421694558061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7314421694558061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
