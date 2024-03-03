import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6459740711535795',
  standalone: true,
  templateUrl: './app-6459740711535795.component.html',
  styleUrl: './app-6459740711535795.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6459740711535795Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
