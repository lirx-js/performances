import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5597410653511333',
  standalone: true,
  templateUrl: './app-5597410653511333.component.html',
  styleUrl: './app-5597410653511333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5597410653511333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
