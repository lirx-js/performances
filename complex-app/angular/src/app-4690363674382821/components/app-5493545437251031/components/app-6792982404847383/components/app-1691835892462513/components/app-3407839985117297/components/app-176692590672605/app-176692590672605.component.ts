import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-176692590672605',
  standalone: true,
  templateUrl: './app-176692590672605.component.html',
  styleUrl: './app-176692590672605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App176692590672605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
