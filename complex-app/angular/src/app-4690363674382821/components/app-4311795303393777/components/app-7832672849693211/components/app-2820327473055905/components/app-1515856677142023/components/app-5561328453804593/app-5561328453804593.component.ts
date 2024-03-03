import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5561328453804593',
  standalone: true,
  templateUrl: './app-5561328453804593.component.html',
  styleUrl: './app-5561328453804593.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5561328453804593Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
