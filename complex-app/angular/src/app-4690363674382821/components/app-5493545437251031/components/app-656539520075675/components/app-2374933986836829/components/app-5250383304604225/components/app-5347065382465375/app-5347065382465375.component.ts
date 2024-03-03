import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5347065382465375',
  standalone: true,
  templateUrl: './app-5347065382465375.component.html',
  styleUrl: './app-5347065382465375.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5347065382465375Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
