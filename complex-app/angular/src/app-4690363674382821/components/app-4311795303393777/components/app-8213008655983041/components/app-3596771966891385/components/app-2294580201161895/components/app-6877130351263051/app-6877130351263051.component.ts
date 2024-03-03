import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6877130351263051',
  standalone: true,
  templateUrl: './app-6877130351263051.component.html',
  styleUrl: './app-6877130351263051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6877130351263051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
