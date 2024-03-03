import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8881133886532859',
  standalone: true,
  templateUrl: './app-8881133886532859.component.html',
  styleUrl: './app-8881133886532859.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8881133886532859Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
