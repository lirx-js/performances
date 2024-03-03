import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5341785487128715',
  standalone: true,
  templateUrl: './app-5341785487128715.component.html',
  styleUrl: './app-5341785487128715.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5341785487128715Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
