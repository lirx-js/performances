import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1532906045037657',
  standalone: true,
  templateUrl: './app-1532906045037657.component.html',
  styleUrl: './app-1532906045037657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1532906045037657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
