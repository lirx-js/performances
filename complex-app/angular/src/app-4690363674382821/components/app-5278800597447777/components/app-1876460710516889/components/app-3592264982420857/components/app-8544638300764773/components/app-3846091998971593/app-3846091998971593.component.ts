import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3846091998971593',
  standalone: true,
  templateUrl: './app-3846091998971593.component.html',
  styleUrl: './app-3846091998971593.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3846091998971593Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
