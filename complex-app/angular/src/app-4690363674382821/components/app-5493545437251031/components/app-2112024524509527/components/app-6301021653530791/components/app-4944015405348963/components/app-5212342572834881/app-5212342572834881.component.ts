import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5212342572834881',
  standalone: true,
  templateUrl: './app-5212342572834881.component.html',
  styleUrl: './app-5212342572834881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5212342572834881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
