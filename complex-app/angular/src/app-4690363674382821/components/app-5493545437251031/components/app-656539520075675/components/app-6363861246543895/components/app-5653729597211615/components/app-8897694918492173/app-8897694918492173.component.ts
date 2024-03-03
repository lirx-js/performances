import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8897694918492173',
  standalone: true,
  templateUrl: './app-8897694918492173.component.html',
  styleUrl: './app-8897694918492173.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8897694918492173Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
