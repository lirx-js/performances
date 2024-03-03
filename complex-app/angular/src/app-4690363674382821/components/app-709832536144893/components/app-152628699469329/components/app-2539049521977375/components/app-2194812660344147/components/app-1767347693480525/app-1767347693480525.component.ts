import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1767347693480525',
  standalone: true,
  templateUrl: './app-1767347693480525.component.html',
  styleUrl: './app-1767347693480525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1767347693480525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
