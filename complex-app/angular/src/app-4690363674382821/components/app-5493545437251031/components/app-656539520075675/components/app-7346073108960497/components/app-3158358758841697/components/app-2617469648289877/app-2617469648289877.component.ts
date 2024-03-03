import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2617469648289877',
  standalone: true,
  templateUrl: './app-2617469648289877.component.html',
  styleUrl: './app-2617469648289877.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2617469648289877Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
