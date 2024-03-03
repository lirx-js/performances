import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2946833260716255',
  standalone: true,
  templateUrl: './app-2946833260716255.component.html',
  styleUrl: './app-2946833260716255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2946833260716255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
