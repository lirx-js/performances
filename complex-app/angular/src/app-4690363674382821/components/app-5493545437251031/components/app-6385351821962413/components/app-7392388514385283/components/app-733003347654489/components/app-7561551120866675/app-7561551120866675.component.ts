import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7561551120866675',
  standalone: true,
  templateUrl: './app-7561551120866675.component.html',
  styleUrl: './app-7561551120866675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7561551120866675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
