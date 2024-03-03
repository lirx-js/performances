import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5980353751696257',
  standalone: true,
  templateUrl: './app-5980353751696257.component.html',
  styleUrl: './app-5980353751696257.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5980353751696257Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
