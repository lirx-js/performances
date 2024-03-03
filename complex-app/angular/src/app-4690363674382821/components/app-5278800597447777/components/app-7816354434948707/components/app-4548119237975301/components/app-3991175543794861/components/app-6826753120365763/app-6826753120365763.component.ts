import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6826753120365763',
  standalone: true,
  templateUrl: './app-6826753120365763.component.html',
  styleUrl: './app-6826753120365763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6826753120365763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
