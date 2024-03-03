import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-849926809881321',
  standalone: true,
  templateUrl: './app-849926809881321.component.html',
  styleUrl: './app-849926809881321.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App849926809881321Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
