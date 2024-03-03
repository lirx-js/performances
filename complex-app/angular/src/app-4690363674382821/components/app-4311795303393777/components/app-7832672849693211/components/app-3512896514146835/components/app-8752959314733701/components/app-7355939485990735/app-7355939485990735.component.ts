import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7355939485990735',
  standalone: true,
  templateUrl: './app-7355939485990735.component.html',
  styleUrl: './app-7355939485990735.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7355939485990735Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
