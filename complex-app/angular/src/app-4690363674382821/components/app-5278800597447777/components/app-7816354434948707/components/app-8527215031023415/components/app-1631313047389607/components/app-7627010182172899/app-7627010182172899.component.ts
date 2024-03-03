import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7627010182172899',
  standalone: true,
  templateUrl: './app-7627010182172899.component.html',
  styleUrl: './app-7627010182172899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7627010182172899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
