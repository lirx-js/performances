import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1018255640155087',
  standalone: true,
  templateUrl: './app-1018255640155087.component.html',
  styleUrl: './app-1018255640155087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1018255640155087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
