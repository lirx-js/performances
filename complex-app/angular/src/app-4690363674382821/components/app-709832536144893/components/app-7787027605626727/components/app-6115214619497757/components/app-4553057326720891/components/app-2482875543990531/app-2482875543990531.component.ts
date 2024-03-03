import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2482875543990531',
  standalone: true,
  templateUrl: './app-2482875543990531.component.html',
  styleUrl: './app-2482875543990531.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2482875543990531Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
