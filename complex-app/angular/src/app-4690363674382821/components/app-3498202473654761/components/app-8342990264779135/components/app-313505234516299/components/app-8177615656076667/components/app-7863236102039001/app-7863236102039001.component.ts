import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7863236102039001',
  standalone: true,
  templateUrl: './app-7863236102039001.component.html',
  styleUrl: './app-7863236102039001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7863236102039001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
