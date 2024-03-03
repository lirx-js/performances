import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5767690413262171',
  standalone: true,
  templateUrl: './app-5767690413262171.component.html',
  styleUrl: './app-5767690413262171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5767690413262171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
